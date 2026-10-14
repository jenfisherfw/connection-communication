# Put Rapport on your phone without a cable or Wi-Fi tricks

This publishes the app to Expo's servers (EAS Update). Your phone downloads it from there through Expo Go, on any network. The same link works for beta testers who have Expo Go.

## One time setup (about 10 minutes)

1. Create a free account at https://expo.dev/signup.
2. Sign in to Expo Go on your phone with that same account (Profile tab inside Expo Go).
3. In GitHub Desktop, click **Fetch origin**, then **Pull origin**, to get the latest code.
4. **Repository > Open in Command Prompt**, then run each line below and press Enter after each one. Wait for each to finish.
   ```
   npm install
   npx eas-cli@latest login
   npx eas-cli@latest init
   npx eas-cli@latest update:configure
   ```
   * `login` asks for your Expo email and password.
   * `init` asks to create a project called **rapport**. Answer **Y**.
   * `update:configure` may ask which platforms. Choose **All**.
5. Save those settings: in GitHub Desktop you'll see changed files (`app.json`, maybe `eas.json`). Type `Connect Expo project` in the Summary box at the bottom left, click **Commit**, then **Push origin**.

## Publish (every time you want the latest version on your phone)

In the Command Prompt, run:
```
npx eas-cli@latest update --branch preview --message "Preview"
```
If it asks which environment to use, choose **preview**. It takes a few minutes and ends with a link to the update on expo.dev.

## Open it on your phone

1. On your computer, open the link it printed, or go to https://expo.dev, open the **rapport** project, then **Updates**, then the newest update.
2. Click **Preview** to show a QR code.
3. iPhone: scan it with the regular Camera app and tap the banner. Android: scan it from inside Expo Go.
4. Expo Go downloads Rapport and opens it. Next time it appears under **Projects** in Expo Go, so you don't need the QR code again.

## If something goes wrong
* **"running scripts is disabled on this system":** use Command Prompt (from GitHub Desktop) rather than PowerShell, or put `.cmd` after npx, for example `npx.cmd eas-cli@latest login`.
* **Anything red in the window:** take a photo and send it over.
