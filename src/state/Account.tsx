import type { Session } from '@supabase/supabase-js';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { supabase } from '../services/supabase';
import { Progress, freshProgress, useAppState } from './AppState';

interface AccountCtx {
  /** True when Supabase is configured, so accounts are available at all. */
  enabled: boolean;
  session: Session | null;
  /** True for a real account; guests hold an anonymous session so the coach can verify them. */
  signedIn: boolean;
  email: string | null;
  syncing: boolean;
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (email: string, password: string) => Promise<{ error: string | null; needsConfirmation: boolean }>;
  signOut: () => Promise<void>;
  /** Permanently deletes the account (or guest session) and everything saved for it. */
  deleteAccount: () => Promise<string | null>;
}

const Ctx = createContext<AccountCtx | null>(null);

const TABLE = 'user_progress';

/**
 * Signs people in with Supabase and keeps their progress backed up to the cloud.
 * Progress always lives on the device first, so the app works offline and in guest mode.
 */
export function AccountProvider({ children }: { children: React.ReactNode }) {
  const { progress, ready, replaceProgress } = useAppState();
  const [session, setSession] = useState<Session | null>(null);
  const [syncing, setSyncing] = useState(false);
  const pulledFor = useRef<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) ensureGuestSession();
    });
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  // On sign in, reconcile once: keep whichever copy has more progress.
  useEffect(() => {
    const userId = session?.user.id;
    if (!supabase || !userId || !ready || pulledFor.current === userId) return;
    pulledFor.current = userId;
    setSyncing(true);
    supabase
      .from(TABLE)
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data }) => {
        const remote = data?.data as Progress | undefined;
        if (remote && remote.xp > progress.xp) replaceProgress({ ...remote, onboarded: true });
      })
      .then(() => setSyncing(false), () => setSyncing(false));
    // progress is read once at sign in on purpose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.id, ready]);

  // Back up local changes, debounced.
  useEffect(() => {
    const userId = session?.user.id;
    if (!supabase || !userId || syncing || pulledFor.current !== userId) return;
    const t = setTimeout(() => {
      supabase!.from(TABLE).upsert({ user_id: userId, data: progress, updated_at: new Date().toISOString() }).then(() => {});
    }, 1500);
    return () => clearTimeout(t);
  }, [progress, session?.user.id, syncing]);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Accounts are not set up yet.';
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    return error ? error.message : null;
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return { error: 'Accounts are not set up yet.', needsConfirmation: false };
    const { data, error } = await supabase.auth.signUp({ email: email.trim(), password });
    return { error: error?.message ?? null, needsConfirmation: !error && !data.session };
  }, []);

  const signOut = useCallback(async () => {
    pulledFor.current = null;
    await supabase?.auth.signOut();
    await ensureGuestSession();
  }, []);

  const deleteAccount = useCallback(async () => {
    if (supabase && session) {
      const { data, error } = await supabase.functions.invoke('coach', { body: { mode: 'delete_account' } });
      if (error || !data?.ok) return 'We could not delete your account right now. Please check your connection and try again.';
      pulledFor.current = null;
      await supabase.auth.signOut().catch(() => {});
    }
    // Wipe everything on this device too, including the profile, so the app starts fresh.
    replaceProgress(freshProgress());
    await ensureGuestSession();
    return null;
  }, [session, replaceProgress]);

  const signedIn = !!session && !session.user.is_anonymous;

  return (
    <Ctx.Provider value={{ enabled: !!supabase, session, signedIn, email: signedIn ? (session?.user.email ?? null) : null, syncing, signIn, signUp, signOut, deleteAccount }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAccount must be used inside AccountProvider');
  return ctx;
}

/**
 * Gives guests an anonymous Supabase session, so every request to the coach carries a real
 * user token and the coach stays closed to the open internet. Requires "Allow anonymous
 * sign-ins" in Supabase; without it, guests simply use the coach in demo mode.
 */
async function ensureGuestSession() {
  if (!supabase) return;
  const { data } = await supabase.auth.getSession();
  if (!data.session) await supabase.auth.signInAnonymously().catch(() => {});
}

/** Access token for calling our own server functions (a real or anonymous session). */
export async function currentAccessToken(): Promise<string | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? null;
}
