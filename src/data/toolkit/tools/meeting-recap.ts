import type { Tool } from '../types';

const tool: Tool = {
  id: 'meeting-recap',
  category: 'meetings',
  icon: 'send',
  minutes: 10,
  title: 'Meeting Recap Email Template',
  summary: 'Send a short recap within the hour so everyone leaves with the same decisions, owners, and dates.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it after any meeting where something was decided, assigned, or left open. A recap turns a good conversation into shared commitments, gives people who missed the meeting a clear picture, and saves you from the “I thought we agreed…” conversation two weeks later.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Send it within the hour, while memories are fresh and people can still correct you.',
        'Lead with decisions. Most readers only need to know what changed.',
        'Give every action item one owner and a real date, not “ASAP” or “next week.”',
        'List open questions with the person who will find the answer.',
        'Keep it short enough to read on a phone in under a minute.',
        'Ask people to reply by a set time if anything is wrong or missing.',
      ],
    },
    {
      heading: 'Recap email template',
      template: `Subject: Recap: [meeting name], [date]

Hi all,

Thanks for your time today. Here is what we agreed.

Decisions
• [Decision 1]
• [Decision 2]

Action items
1. [Task]: [owner], by [date]
2. [Task]: [owner], by [date]
3. [Task]: [owner], by [date]

Open questions
• [Question]: [who will find out], by [date]

Next meeting
[Date and time], [location or link]
Focus: [main topic]

If I missed or misstated anything, please reply by [time] so we can fix it.

Thanks,
[Your name]`,
    },
    {
      heading: 'Example',
      body: 'Decisions: we will launch the new onboarding checklist on March 3. Action items: 1. Update the checklist with IT steps: Priya, by Feb 21. 2. Brief team leads: Marcus, by Feb 26. Open questions: does payroll need a new form? Dana will confirm by Feb 20. Next meeting: Feb 27, 10:00, Room B.',
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Writing minutes of who said what instead of what was decided.',
        'Assigning tasks to “the team,” which means no one owns them.',
        'Waiting until the next day, when details have already faded.',
        'Burying the decisions under a long summary paragraph.',
      ],
    },
  ],
  es: {
    title: 'Plantilla de correo de resumen de reunión',
    summary: 'Envía un resumen breve en menos de una hora para que todos salgan con las mismas decisiones, responsables y fechas.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala después de cualquier reunión en la que se haya decidido, asignado o dejado algo pendiente. Un resumen convierte una buena conversación en compromisos compartidos, da una visión clara a quienes no asistieron y te ahorra la conversación de “Yo pensaba que habíamos acordado…” dos semanas después.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Envíalo en menos de una hora, mientras todo está fresco y la gente aún puede corregirte.',
          'Empieza por las decisiones. La mayoría solo necesita saber qué cambió.',
          'Da a cada acción una sola persona responsable y una fecha real, no “cuanto antes” ni “la próxima semana”.',
          'Anota las preguntas abiertas con la persona que buscará la respuesta.',
          'Que sea lo bastante breve para leerlo en el teléfono en menos de un minuto.',
          'Pide que respondan antes de una hora concreta si algo está mal o falta.',
        ],
      },
      {
        heading: 'Plantilla de correo de resumen',
        template: `Asunto: Resumen: [nombre de la reunión], [fecha]

Hola a todos:

Gracias por su tiempo hoy. Esto es lo que acordamos.

Decisiones
• [Decisión 1]
• [Decisión 2]

Acciones
1. [Tarea]: [responsable], antes del [fecha]
2. [Tarea]: [responsable], antes del [fecha]
3. [Tarea]: [responsable], antes del [fecha]

Preguntas abiertas
• [Pregunta]: [quién lo averiguará], antes del [fecha]

Próxima reunión
[Fecha y hora], [lugar o enlace]
Enfoque: [tema principal]

Si omití o expresé mal algo, respondan antes de las [hora] para corregirlo.

Gracias,
[Tu nombre]`,
      },
      {
        heading: 'Ejemplo',
        body: 'Decisiones: lanzaremos la nueva lista de bienvenida el 3 de marzo. Acciones: 1. Añadir los pasos de TI a la lista: Priya, antes del 21 de febrero. 2. Informar a los líderes de equipo: Marcus, antes del 26 de febrero. Preguntas abiertas: ¿nómina necesita un formulario nuevo? Dana lo confirmará antes del 20 de febrero. Próxima reunión: 27 de febrero, 10:00, sala B.',
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Escribir un acta de quién dijo qué en lugar de lo que se decidió.',
          'Asignar tareas a “el equipo”, lo que significa que nadie las asume.',
          'Esperar al día siguiente, cuando los detalles ya se han olvidado.',
          'Esconder las decisiones bajo un largo párrafo de resumen.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle d’e-mail de compte rendu de réunion',
    summary: 'Envoyez un compte rendu bref dans l’heure pour que chacun reparte avec les mêmes décisions, responsables et dates.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le après toute réunion où quelque chose a été décidé, attribué ou laissé en suspens. Un compte rendu transforme une bonne discussion en engagements partagés, donne une vision claire aux absents et vous évite la conversation « Je pensais qu’on avait convenu… » deux semaines plus tard.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Envoyez-le dans l’heure, quand tout est encore frais et que chacun peut vous corriger.',
          'Commencez par les décisions. La plupart des lecteurs veulent seulement savoir ce qui change.',
          'Donnez à chaque action un seul responsable et une vraie date, pas « dès que possible » ni « la semaine prochaine ».',
          'Listez les questions ouvertes avec la personne qui trouvera la réponse.',
          'Restez assez bref pour être lu sur un téléphone en moins d’une minute.',
          'Demandez une réponse avant une heure précise si quelque chose est faux ou manquant.',
        ],
      },
      {
        heading: 'Modèle d’e-mail de compte rendu',
        template: `Objet : Compte rendu : [nom de la réunion], [date]

Bonjour à tous,

Merci pour votre temps aujourd’hui. Voici ce que nous avons convenu.

Décisions
• [Décision 1]
• [Décision 2]

Actions
1. [Tâche] : [responsable], pour le [date]
2. [Tâche] : [responsable], pour le [date]
3. [Tâche] : [responsable], pour le [date]

Questions ouvertes
• [Question] : [qui se renseigne], pour le [date]

Prochaine réunion
[Date et heure], [lieu ou lien]
Sujet principal : [thème]

Si j’ai oublié ou mal formulé quelque chose, merci de répondre avant [heure] pour que nous corrigions.

Merci,
[Votre nom]`,
      },
      {
        heading: 'Exemple',
        body: 'Décisions : nous lancerons la nouvelle check-list d’intégration le 3 mars. Actions : 1. Ajouter les étapes informatiques à la check-list : Priya, pour le 21 février. 2. Informer les responsables d’équipe : Marcus, pour le 26 février. Questions ouvertes : la paie a-t-elle besoin d’un nouveau formulaire ? Dana confirmera d’ici le 20 février. Prochaine réunion : 27 février, 10 h, salle B.',
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Rédiger un procès-verbal de qui a dit quoi au lieu de ce qui a été décidé.',
          'Confier des tâches à « l’équipe », ce qui veut dire que personne ne s’en charge.',
          'Attendre le lendemain, quand les détails se sont déjà estompés.',
          'Noyer les décisions sous un long paragraphe de synthèse.',
        ],
      },
    ],
  },
};

export default tool;
