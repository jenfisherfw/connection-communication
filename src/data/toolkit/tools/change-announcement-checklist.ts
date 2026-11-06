import type { Tool } from '../types';

const tool: Tool = {
  id: 'change-announcement-checklist',
  category: 'change',
  icon: 'check-square',
  minutes: 20,
  title: 'Change Announcement Checklist',
  summary: 'Plan what to say before, during, and after you announce a change so people hear it clearly, early, and more than once.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use this whenever a change will affect how your team works: a new process, a reorg, a new tool, a shift in priorities, or a leadership change. Work through it a few days before the announcement and keep it open until the last follow up is done.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Write the why in two sentences before you write anything else.',
        'Be honest about what you do not know yet, and say when you will know.',
        'Tell managers first so they can answer questions from their teams.',
        'Plan to repeat the message at least three times, in more than one channel.',
        'Put follow up dates on your calendar now, not later.',
      ],
    },
    {
      heading: 'Checklist',
      template: `CHANGE ANNOUNCEMENT CHECKLIST
Change: [name of the change]
Announcement date: [date]

BEFORE
☐ Why we are doing this: [two sentences]
☐ What changes: [list]
☐ What stays the same: [list]
☐ What we do not know yet: [list, and when we will know]
☐ Who hears first: [managers, key partners]
☐ Manager briefing set for: [date]
☐ Talking points shared with managers
☐ Likely questions and answers drafted
☐ Anything about jobs, pay, or roles reviewed with HR

DURING
☐ Main channel: [meeting, call, email]
☐ Open with the why, then the what
☐ Name what stays the same
☐ Say what is still unknown
☐ Invite questions: [how and where]
☐ Share next steps and dates

AFTER
☐ Written summary sent: [date]
☐ Repeat in: [team meeting, chat, 1:1s]
☐ Questions log kept: [where]
☐ Follow up check in 1: [date]
☐ Follow up check in 2: [date]
☐ Answers to open questions shared: [date]`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Leading with the what and skipping the why.',
        'Letting teams hear it before their managers do.',
        'Announcing once and assuming everyone got it.',
        'Guessing at answers instead of saying “I don’t know yet.”',
      ],
    },
    {
      heading: 'A note on people decisions',
      body: 'If the change involves layoffs, role eliminations, pay, or other employment details, work with HR before you say anything. HR owns the plan, timing, and wording for those conversations. Your role is to communicate with care and point people to the right support.',
    },
  ],
  es: {
    title: 'Lista para anunciar un cambio',
    summary: 'Planifica qué decir antes, durante y después de anunciar un cambio para que las personas lo escuchen con claridad, a tiempo y más de una vez.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala cada vez que un cambio vaya a afectar la forma de trabajar de tu equipo: un proceso nuevo, una reorganización, una herramienta nueva, un cambio de prioridades o de liderazgo. Complétala unos días antes del anuncio y tenla a mano hasta terminar el último seguimiento.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Escribe el porqué en dos frases antes que cualquier otra cosa.',
          'Sé honesto sobre lo que aún no sabes y di cuándo lo sabrás.',
          'Informa primero a los gerentes para que puedan responder a sus equipos.',
          'Planifica repetir el mensaje al menos tres veces, en más de un canal.',
          'Agenda ahora las fechas de seguimiento, no después.',
        ],
      },
      {
        heading: 'Lista',
        template: `LISTA PARA ANUNCIAR UN CAMBIO
Cambio: [nombre del cambio]
Fecha del anuncio: [fecha]

ANTES
☐ Por qué lo hacemos: [dos frases]
☐ Qué cambia: [lista]
☐ Qué se mantiene igual: [lista]
☐ Qué aún no sabemos: [lista, y cuándo lo sabremos]
☐ Quién se entera primero: [gerentes, socios clave]
☐ Reunión con gerentes: [fecha]
☐ Mensajes clave compartidos con gerentes
☐ Preguntas probables y respuestas preparadas
☐ Todo lo relativo a empleos, salario o roles revisado con RR. HH.

DURANTE
☐ Canal principal: [reunión, llamada, correo]
☐ Empieza con el porqué, luego el qué
☐ Menciona lo que se mantiene igual
☐ Di lo que aún no se sabe
☐ Invita a preguntar: [cómo y dónde]
☐ Comparte los próximos pasos y fechas

DESPUÉS
☐ Resumen escrito enviado: [fecha]
☐ Repetir en: [reunión de equipo, chat, reuniones 1:1]
☐ Registro de preguntas: [dónde]
☐ Seguimiento 1: [fecha]
☐ Seguimiento 2: [fecha]
☐ Respuestas a preguntas abiertas compartidas: [fecha]`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Empezar por el qué y saltarse el porqué.',
          'Dejar que los equipos se enteren antes que sus gerentes.',
          'Anunciarlo una sola vez y suponer que todos lo entendieron.',
          'Adivinar respuestas en lugar de decir “todavía no lo sé”.',
        ],
      },
      {
        heading: 'Una nota sobre decisiones de personal',
        body: 'Si el cambio implica despidos, eliminación de puestos, salario u otros temas de empleo, trabaja con RR. HH. antes de decir nada. RR. HH. define el plan, el momento y las palabras para esas conversaciones. Tu papel es comunicar con cuidado y orientar a las personas hacia el apoyo adecuado.',
      },
    ],
  },
  fr: {
    title: 'Liste pour annoncer un changement',
    summary: 'Préparez ce que vous direz avant, pendant et après l’annonce d’un changement pour que chacun l’entende clairement, tôt et plus d’une fois.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-la chaque fois qu’un changement touche la façon de travailler de votre équipe : nouveau processus, réorganisation, nouvel outil, changement de priorités ou de direction. Remplissez-la quelques jours avant l’annonce et gardez-la sous la main jusqu’au dernier suivi.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Écrivez le pourquoi en deux phrases avant tout le reste.',
          'Dites franchement ce que vous ne savez pas encore, et quand vous le saurez.',
          'Informez d’abord les managers pour qu’ils puissent répondre à leurs équipes.',
          'Prévoyez de répéter le message au moins trois fois, sur plus d’un canal.',
          'Bloquez les dates de suivi dans votre agenda dès maintenant.',
        ],
      },
      {
        heading: 'Liste',
        template: `LISTE POUR ANNONCER UN CHANGEMENT
Changement : [nom du changement]
Date de l’annonce : [date]

AVANT
☐ Pourquoi nous le faisons : [deux phrases]
☐ Ce qui change : [liste]
☐ Ce qui ne change pas : [liste]
☐ Ce que nous ne savons pas encore : [liste, et quand nous le saurons]
☐ Qui est informé en premier : [managers, partenaires clés]
☐ Réunion avec les managers : [date]
☐ Messages clés partagés avec les managers
☐ Questions probables et réponses préparées
☐ Tout ce qui touche aux postes, à la rémunération ou aux rôles revu avec les RH

PENDANT
☐ Canal principal : [réunion, appel, courriel]
☐ Commencer par le pourquoi, puis le quoi
☐ Nommer ce qui ne change pas
☐ Dire ce qui reste inconnu
☐ Inviter les questions : [comment et où]
☐ Partager les prochaines étapes et les dates

APRÈS
☐ Résumé écrit envoyé : [date]
☐ Répéter dans : [réunion d’équipe, messagerie, entretiens individuels]
☐ Registre des questions : [où]
☐ Suivi 1 : [date]
☐ Suivi 2 : [date]
☐ Réponses aux questions ouvertes partagées : [date]`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Commencer par le quoi et oublier le pourquoi.',
          'Laisser les équipes l’apprendre avant leurs managers.',
          'Annoncer une seule fois et supposer que tout le monde a compris.',
          'Improviser des réponses au lieu de dire « je ne sais pas encore ».',
        ],
      },
      {
        heading: 'Une remarque sur les décisions concernant les personnes',
        body: 'Si le changement implique des licenciements, des suppressions de postes, la rémunération ou d’autres questions d’emploi, travaillez avec les RH avant de dire quoi que ce soit. Les RH définissent le plan, le calendrier et la formulation de ces échanges. Votre rôle est de communiquer avec bienveillance et d’orienter chacun vers le bon soutien.',
      },
    ],
  },
};

export default tool;
