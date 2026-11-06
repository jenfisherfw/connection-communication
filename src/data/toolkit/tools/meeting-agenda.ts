import type { Tool } from '../types';

const tool: Tool = {
  id: 'meeting-agenda',
  category: 'meetings',
  icon: 'clipboard',
  minutes: 10,
  title: 'Meeting Agenda Template',
  summary: 'Build an agenda that states the purpose, frames each item as an outcome with an owner and a time box, and ends with clear next steps.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it for any meeting you call, from a weekly team meeting to a one time working session. Send it at least a day ahead so people can prepare, or decide they are not needed. If you cannot write the purpose in one sentence, the meeting may not be ready to happen.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Write the purpose as the result you want: “Agree on the Q3 hiring plan,” not “Discuss hiring.”',
        'Frame each item as a decision, an input you need, or an update, and name who leads it.',
        'Put the items that need decisions first, while energy is high.',
        'Give each item a time box and keep to it. Park anything that runs over.',
        'Attach any pre read and ask people to read it before, not during, the meeting.',
        'Always save the last 5 minutes to confirm who does what by when.',
      ],
    },
    {
      heading: 'Agenda',
      template: `[MEETING NAME]
[Date], [start and end time], [place or link]
Attendees: [names]

PURPOSE
By the end of this meeting we will [result].

PRE READ (please review before)
• [document or link]

AGENDA
1. [Item] ([minutes] min)
   Lead: [name]
   Goal: ☐ Decide ☐ Get input ☐ Share update
   Outcome we want: [what done looks like]
2. [Item] ([minutes] min)
   Lead: [name]
   Goal: ☐ Decide ☐ Get input ☐ Share update
   Outcome we want: [what done looks like]
3. [Item] ([minutes] min)
   Lead: [name]
   Goal: ☐ Decide ☐ Get input ☐ Share update
   Outcome we want: [what done looks like]

PARKING LOT
• [topics to handle later]

LAST 5 MINUTES: WHO DOES WHAT BY WHEN
• [Action], [owner], [date]
• [Action], [owner], [date]
• Decisions made: [list]
• Who will send the recap: [name]`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Agenda items that are just topics, like “Budget,” so nobody knows what is expected.',
        'Inviting people “just in case” instead of sharing the notes with them.',
        'Running out of time before the action items, so nothing moves.',
        'Letting the loudest voice set the pace. Invite quieter people in by name.',
      ],
    },
  ],
  es: {
    title: 'Plantilla de agenda de reunión',
    summary: 'Arma una agenda que diga el propósito, plantee cada punto como un resultado con responsable y tiempo asignado, y cierre con próximos pasos claros.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo en cualquier reunión que convoques, desde una reunión semanal de equipo hasta una sesión de trabajo puntual. Envíala al menos un día antes para que la gente se prepare, o decida que no hace falta que asista. Si no puedes escribir el propósito en una oración, quizás la reunión aún no esté lista.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Escribe el propósito como el resultado que buscas: “Acordar el plan de contratación del T3”, no “Hablar de contratación”.',
          'Plantea cada punto como una decisión, un aporte que necesitas o una actualización, y nombra quién lo dirige.',
          'Pon primero los puntos que requieren decisión, cuando hay más energía.',
          'Asigna un tiempo a cada punto y respétalo. Deja para después lo que se extienda.',
          'Adjunta la lectura previa y pide que la lean antes, no durante, la reunión.',
          'Reserva siempre los últimos 5 minutos para confirmar quién hace qué y para cuándo.',
        ],
      },
      {
        heading: 'Agenda',
        template: `[NOMBRE DE LA REUNIÓN]
[Fecha], [hora de inicio y fin], [lugar o enlace]
Participantes: [nombres]

PROPÓSITO
Al final de esta reunión habremos [resultado].

LECTURA PREVIA (por favor, revisar antes)
• [documento o enlace]

AGENDA
1. [Punto] ([minutos] min)
   Dirige: [nombre]
   Meta: ☐ Decidir ☐ Recibir aportes ☐ Informar
   Resultado esperado: [cómo se ve terminado]
2. [Punto] ([minutos] min)
   Dirige: [nombre]
   Meta: ☐ Decidir ☐ Recibir aportes ☐ Informar
   Resultado esperado: [cómo se ve terminado]
3. [Punto] ([minutos] min)
   Dirige: [nombre]
   Meta: ☐ Decidir ☐ Recibir aportes ☐ Informar
   Resultado esperado: [cómo se ve terminado]

PENDIENTES PARA DESPUÉS
• [temas a tratar más adelante]

ÚLTIMOS 5 MINUTOS: QUIÉN HACE QUÉ Y PARA CUÁNDO
• [Acción], [responsable], [fecha]
• [Acción], [responsable], [fecha]
• Decisiones tomadas: [lista]
• Quién enviará el resumen: [nombre]`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Puntos de agenda que son solo temas, como “Presupuesto”, así que nadie sabe qué se espera.',
          'Invitar gente “por si acaso” en lugar de compartirle las notas.',
          'Quedarse sin tiempo antes de las acciones, así que nada avanza.',
          'Dejar que la voz más fuerte marque el ritmo. Invita por su nombre a quienes hablan menos.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle d’ordre du jour',
    summary: 'Construisez un ordre du jour qui énonce l’objectif, formule chaque point comme un résultat avec un responsable et une durée, et se termine par des prochaines étapes claires.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le pour toute réunion que vous organisez, de la réunion d’équipe hebdomadaire à la séance de travail ponctuelle. Envoyez-le au moins un jour avant pour que chacun puisse se préparer, ou décider que sa présence n’est pas nécessaire. Si vous ne pouvez pas écrire l’objectif en une phrase, la réunion n’est peut-être pas encore prête.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Écrivez l’objectif comme le résultat visé : « Valider le plan de recrutement du T3 », et non « Parler du recrutement ».',
          'Formulez chaque point comme une décision, un avis dont vous avez besoin ou une information, et nommez qui le mène.',
          'Placez en premier les points qui demandent une décision, quand l’énergie est haute.',
          'Donnez une durée à chaque point et respectez-la. Mettez de côté ce qui déborde.',
          'Joignez le document préparatoire et demandez de le lire avant la réunion, pas pendant.',
          'Gardez toujours les 5 dernières minutes pour confirmer qui fait quoi et pour quand.',
        ],
      },
      {
        heading: 'Ordre du jour',
        template: `[NOM DE LA RÉUNION]
[Date], [heure de début et de fin], [lieu ou lien]
Participants : [noms]

OBJECTIF
À la fin de cette réunion, nous aurons [résultat].

À LIRE AVANT
• [document ou lien]

ORDRE DU JOUR
1. [Point] ([minutes] min)
   Mené par : [nom]
   But : ☐ Décider ☐ Recueillir des avis ☐ Informer
   Résultat attendu : [à quoi ressemble « terminé »]
2. [Point] ([minutes] min)
   Mené par : [nom]
   But : ☐ Décider ☐ Recueillir des avis ☐ Informer
   Résultat attendu : [à quoi ressemble « terminé »]
3. [Point] ([minutes] min)
   Mené par : [nom]
   But : ☐ Décider ☐ Recueillir des avis ☐ Informer
   Résultat attendu : [à quoi ressemble « terminé »]

SUJETS EN ATTENTE
• [sujets à traiter plus tard]

5 DERNIÈRES MINUTES : QUI FAIT QUOI ET POUR QUAND
• [Action], [responsable], [date]
• [Action], [responsable], [date]
• Décisions prises : [liste]
• Qui enverra le compte rendu : [nom]`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Des points qui ne sont que des thèmes, comme « Budget », si bien que personne ne sait ce qui est attendu.',
          'Inviter des personnes « au cas où » au lieu de leur partager le compte rendu.',
          'Manquer de temps avant les actions, et rien n’avance.',
          'Laisser la voix la plus forte donner le rythme. Invitez nommément les personnes plus discrètes à s’exprimer.',
        ],
      },
    ],
  },
};

export default tool;
