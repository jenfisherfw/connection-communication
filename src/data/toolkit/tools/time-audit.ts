import type { Tool } from '../types';

const tool: Tool = {
  id: 'time-audit',
  category: 'time',
  icon: 'calendar',
  minutes: 30,
  title: 'Calendar and Time Audit',
  summary: 'Review a week of your calendar to decide what to keep, shorten, delegate, or drop, and protect time for focus and for your people.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it when your days feel full but your important work is not moving, when you are doing most of your real work after hours, or once a quarter as a reset. Pull up last week’s calendar, or the coming week’s, and give yourself 30 uninterrupted minutes.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'List every recurring meeting and any block over 30 minutes.',
        'For each, ask: does this need me, does it need this long, and does it need to happen this often?',
        'Mark each one Keep, Shorten, Delegate, or Drop. Be honest; most calendars have at least three to change.',
        'Count your hours in meetings, in focus work, and with your people. Compare that to what your role needs.',
        'Change one or two things this week, tell the people affected, and recheck in a month.',
      ],
    },
    {
      heading: 'Audit worksheet',
      template: `CALENDAR AUDIT
Week reviewed: [dates]

HOW MY HOURS WENT
• Meetings: [hours]
• Focus work: [hours]
• 1:1s and coaching: [hours]
• Email and chat: [hours]
• What I wish it looked like: [notes]

MEETING REVIEW
1. [Meeting name], [length], [how often]
   Needs me? [yes / no]
   Decision: [Keep / Shorten / Delegate / Drop]
   Next step: [what I’ll do, by when]
2. [Meeting name], [length], [how often]
   Needs me? [yes / no]
   Decision: [Keep / Shorten / Delegate / Drop]
   Next step: [what I’ll do, by when]
3. [Meeting name], [length], [how often]
   Needs me? [yes / no]
   Decision: [Keep / Shorten / Delegate / Drop]
   Next step: [what I’ll do, by when]

PROTECT GOING FORWARD
☐ Focus block: [days, times]
☐ Regular 1:1s with each direct report
☐ Open time for my team: [day, time]
☐ A buffer between back to back meetings
☐ No meeting window: [day or time]

CHECK AGAIN ON: [date]`,
    },
    {
      heading: 'Message to step back from a meeting',
      template: `“Hi [name], I’m reviewing my calendar so I can focus on [priority]. For [meeting], I think [name] could represent our team, or I could catch up from the notes. Would that work for you? Happy to rejoin when [topic] is on the agenda.”`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Auditing only other people’s meetings and not the ones you run.',
        'Dropping 1:1s first. Time with your people is usually the best use of a leader’s hour.',
        'Leaving meetings without telling anyone, which can read as disengagement.',
        'Freeing up time and letting it fill again without a plan for it.',
      ],
    },
  ],
  es: {
    title: 'Auditoría de calendario y tiempo',
    summary: 'Revisa una semana de tu calendario para decidir qué mantener, acortar, delegar o eliminar, y protege tiempo para concentrarte y para tu gente.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo cuando tus días se sienten llenos pero tu trabajo importante no avanza, cuando haces la mayor parte de tu trabajo real fuera de horario, o una vez por trimestre para reiniciar. Abre el calendario de la semana pasada, o el de la próxima, y date 30 minutos sin interrupciones.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Haz una lista de cada reunión recurrente y de todo bloque de más de 30 minutos.',
          'Para cada una, pregúntate: ¿me necesita a mí?, ¿necesita durar tanto?, ¿necesita ser tan frecuente?',
          'Marca cada una como Mantener, Acortar, Delegar o Eliminar. Con honestidad: casi todos los calendarios tienen al menos tres cosas que cambiar.',
          'Suma tus horas en reuniones, en trabajo de concentración y con tu gente. Compáralo con lo que tu rol necesita.',
          'Cambia una o dos cosas esta semana, avisa a las personas afectadas y revisa de nuevo en un mes.',
        ],
      },
      {
        heading: 'Hoja de auditoría',
        template: `AUDITORÍA DE CALENDARIO
Semana revisada: [fechas]

CÓMO USÉ MIS HORAS
• Reuniones: [horas]
• Trabajo de concentración: [horas]
• 1:1 y coaching: [horas]
• Correo y chat: [horas]
• Cómo me gustaría que fuera: [notas]

REVISIÓN DE REUNIONES
1. [Nombre de la reunión], [duración], [frecuencia]
   ¿Me necesita? [sí / no]
   Decisión: [Mantener / Acortar / Delegar / Eliminar]
   Próximo paso: [qué haré, para cuándo]
2. [Nombre de la reunión], [duración], [frecuencia]
   ¿Me necesita? [sí / no]
   Decisión: [Mantener / Acortar / Delegar / Eliminar]
   Próximo paso: [qué haré, para cuándo]
3. [Nombre de la reunión], [duración], [frecuencia]
   ¿Me necesita? [sí / no]
   Decisión: [Mantener / Acortar / Delegar / Eliminar]
   Próximo paso: [qué haré, para cuándo]

PROTEGER DE AQUÍ EN ADELANTE
☐ Bloque de concentración: [días, horas]
☐ 1:1 regulares con cada colaborador directo
☐ Tiempo abierto para mi equipo: [día, hora]
☐ Un margen entre reuniones seguidas
☐ Franja sin reuniones: [día u hora]

VOLVER A REVISAR EL: [fecha]`,
      },
      {
        heading: 'Mensaje para dejar una reunión',
        template: `“Hola, [nombre]. Estoy revisando mi calendario para enfocarme en [prioridad]. Para [reunión], creo que [nombre] podría representar a nuestro equipo, o yo podría ponerme al día con las notas. ¿Te parece bien? Con gusto vuelvo cuando [tema] esté en la agenda.”`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Auditar solo las reuniones de otros y no las que tú diriges.',
          'Eliminar primero los 1:1. El tiempo con tu gente suele ser el mejor uso de la hora de un líder.',
          'Dejar reuniones sin avisar, lo que puede verse como desinterés.',
          'Liberar tiempo y dejar que se vuelva a llenar sin un plan.',
        ],
      },
    ],
  },
  fr: {
    title: 'Audit de l’agenda et du temps',
    summary: 'Passez en revue une semaine de votre agenda pour décider quoi garder, raccourcir, déléguer ou supprimer, et protégez du temps pour vous concentrer et pour votre équipe.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le quand vos journées semblent pleines mais que votre travail important n’avance pas, quand vous faites l’essentiel de votre vrai travail en dehors des heures, ou une fois par trimestre pour faire le point. Ouvrez l’agenda de la semaine dernière, ou celui de la semaine à venir, et accordez-vous 30 minutes sans interruption.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Listez chaque réunion récurrente et chaque plage de plus de 30 minutes.',
          'Pour chacune, demandez-vous : a-t-elle besoin de moi, doit-elle durer aussi longtemps, doit-elle être aussi fréquente ?',
          'Classez chacune : Garder, Raccourcir, Déléguer ou Supprimer. Soyez honnête ; la plupart des agendas ont au moins trois éléments à changer.',
          'Comptez vos heures en réunion, en travail de concentration et avec votre équipe. Comparez avec ce que votre rôle exige.',
          'Changez une ou deux choses cette semaine, prévenez les personnes concernées et refaites le point dans un mois.',
        ],
      },
      {
        heading: 'Fiche d’audit',
        template: `AUDIT DE L’AGENDA
Semaine analysée : [dates]

COMMENT J’AI UTILISÉ MES HEURES
• Réunions : [heures]
• Travail de concentration : [heures]
• Entretiens individuels et coaching : [heures]
• Courriels et messagerie : [heures]
• Ce que j’aimerais voir : [notes]

REVUE DES RÉUNIONS
1. [Nom de la réunion], [durée], [fréquence]
   A besoin de moi ? [oui / non]
   Décision : [Garder / Raccourcir / Déléguer / Supprimer]
   Prochaine étape : [ce que je ferai, pour quand]
2. [Nom de la réunion], [durée], [fréquence]
   A besoin de moi ? [oui / non]
   Décision : [Garder / Raccourcir / Déléguer / Supprimer]
   Prochaine étape : [ce que je ferai, pour quand]
3. [Nom de la réunion], [durée], [fréquence]
   A besoin de moi ? [oui / non]
   Décision : [Garder / Raccourcir / Déléguer / Supprimer]
   Prochaine étape : [ce que je ferai, pour quand]

À PROTÉGER DÉSORMAIS
☐ Plage de concentration : [jours, heures]
☐ Entretiens individuels réguliers avec chaque collaborateur direct
☐ Temps ouvert pour mon équipe : [jour, heure]
☐ Une pause entre deux réunions consécutives
☐ Créneau sans réunion : [jour ou heure]

À REVOIR LE : [date]`,
      },
      {
        heading: 'Message pour se retirer d’une réunion',
        template: `« Bonjour [nom], je revois mon agenda pour me concentrer sur [priorité]. Pour [réunion], je pense que [nom] pourrait représenter notre équipe, ou je pourrais lire le compte rendu. Est-ce que cela vous convient ? Je reviendrai volontiers quand [sujet] sera à l’ordre du jour. »`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'N’auditer que les réunions des autres, et pas celles que vous animez.',
          'Supprimer d’abord les entretiens individuels. Le temps passé avec votre équipe est souvent le meilleur usage de l’heure d’un manager.',
          'Quitter des réunions sans prévenir, ce qui peut passer pour du désengagement.',
          'Libérer du temps et le laisser se remplir à nouveau sans plan.',
        ],
      },
    ],
  },
};

export default tool;
