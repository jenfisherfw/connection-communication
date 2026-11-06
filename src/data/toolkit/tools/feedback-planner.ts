import type { Tool } from '../types';

const tool: Tool = {
  id: 'feedback-planner',
  category: 'conversations',
  icon: 'message-square',
  minutes: 10,
  title: 'Feedback Conversation Planner',
  summary: 'Plan specific, fair feedback in ten minutes so the conversation stays on what happened and what comes next.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it before giving feedback that matters, whether it is praise you want to land well or a change you need to ask for. Planning helps you stay specific, calm, and curious instead of vague or rushed. If the issue is ongoing performance or conduct, talk with HR before the conversation and follow your company’s process.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Pick one moment. One clear example beats a list of complaints.',
        'Describe what you saw or heard, not your guess about their motives.',
        'Explain the impact on the work, the team, or customers.',
        'Open with a question and listen before you suggest a fix.',
        'Agree on what good looks like from here, and set a date to check in.',
        'Give it soon, in private, when you both have time to talk.',
      ],
    },
    {
      heading: 'Feedback planner',
      template: `Feedback for: [name]
Date to talk: [date]

1. The moment
When: [date, meeting, or task]

2. What I observed
[Facts only: what they said or did]

3. The impact
[Effect on the work, team, or customers]

4. Opening question
“[How did you feel that went?]”

5. Expectation going forward
[What good looks like next time]

6. Follow up
Check in on: [date]
☐ Noted what we agreed
☐ Recognized the change when I saw it

HR check
☐ Is this part of an ongoing performance or conduct issue? If yes, talk with HR first.`,
    },
    {
      heading: 'Example',
      body: 'Moment: Tuesday’s client call. Observed: you interrupted the client three times while they were explaining their concern. Impact: they stopped sharing details, and we left without knowing what they need. Opening question: “How do you think the call went?” Going forward: let clients finish, then summarize what you heard before responding. Follow up: after Friday’s call.',
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Using words like “always” and “never,” which invite a debate.',
        'Hiding the real message between two compliments.',
        'Waiting weeks, until the moment is hard to remember.',
        'Skipping the follow up, so nothing changes.',
      ],
    },
  ],
  es: {
    title: 'Planificador de conversaciones de retroalimentación',
    summary: 'Planifica una retroalimentación específica y justa en diez minutos para que la conversación se centre en lo que pasó y en lo que sigue.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala antes de dar una retroalimentación importante, ya sea un reconocimiento que quieres que llegue bien o un cambio que necesitas pedir. Planificar te ayuda a ser específico, mantener la calma y la curiosidad en lugar de ser vago o apresurado. Si el tema es un problema continuo de desempeño o de conducta, habla con RR. HH. antes de la conversación y sigue el proceso de tu empresa.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Elige un momento. Un ejemplo claro vale más que una lista de quejas.',
          'Describe lo que viste u oíste, no tu suposición sobre sus motivos.',
          'Explica el impacto en el trabajo, el equipo o los clientes.',
          'Empieza con una pregunta y escucha antes de proponer una solución.',
          'Acuerden cómo se ve un buen resultado a partir de ahora y fija una fecha de seguimiento.',
          'Hazlo pronto, en privado y cuando ambos tengan tiempo para hablar.',
        ],
      },
      {
        heading: 'Planificador de retroalimentación',
        template: `Retroalimentación para: [nombre]
Fecha para hablar: [fecha]

1. El momento
Cuándo: [fecha, reunión o tarea]

2. Lo que observé
[Solo hechos: lo que dijo o hizo]

3. El impacto
[Efecto en el trabajo, el equipo o los clientes]

4. Pregunta inicial
“[¿Cómo sentiste que salió?]”

5. Expectativa a partir de ahora
[Cómo se ve un buen resultado la próxima vez]

6. Seguimiento
Revisar el: [fecha]
☐ Anoté lo que acordamos
☐ Reconocí el cambio cuando lo vi

Consulta con RR. HH.
☐ ¿Es parte de un problema continuo de desempeño o conducta? Si es así, habla primero con RR. HH.`,
      },
      {
        heading: 'Ejemplo',
        body: 'Momento: la llamada con el cliente del martes. Observación: interrumpiste al cliente tres veces mientras explicaba su preocupación. Impacto: dejó de dar detalles y terminamos sin saber qué necesita. Pregunta inicial: “¿Cómo crees que fue la llamada?” A partir de ahora: deja que el cliente termine y resume lo que oíste antes de responder. Seguimiento: después de la llamada del viernes.',
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Usar palabras como “siempre” y “nunca”, que invitan a discutir.',
          'Esconder el mensaje real entre dos elogios.',
          'Esperar semanas, hasta que el momento es difícil de recordar.',
          'Saltarte el seguimiento, así que nada cambia.',
        ],
      },
    ],
  },
  fr: {
    title: 'Préparer une conversation de feedback',
    summary: 'Préparez en dix minutes un feedback précis et juste pour que l’échange reste centré sur ce qui s’est passé et sur la suite.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le avant un feedback important, qu’il s’agisse d’une reconnaissance que vous voulez bien transmettre ou d’un changement que vous devez demander. La préparation vous aide à rester précis, calme et curieux plutôt que vague ou pressé. S’il s’agit d’un problème persistant de performance ou de comportement, parlez aux RH avant l’échange et suivez la procédure de votre entreprise.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Choisissez un moment. Un exemple clair vaut mieux qu’une liste de reproches.',
          'Décrivez ce que vous avez vu ou entendu, pas vos hypothèses sur ses intentions.',
          'Expliquez l’impact sur le travail, l’équipe ou les clients.',
          'Ouvrez par une question et écoutez avant de proposer une solution.',
          'Convenez de ce qui est attendu désormais et fixez une date de suivi.',
          'Faites-le vite, en privé, quand vous avez tous deux le temps d’échanger.',
        ],
      },
      {
        heading: 'Fiche de préparation du feedback',
        template: `Feedback pour : [nom]
Date de l’échange : [date]

1. Le moment
Quand : [date, réunion ou tâche]

2. Ce que j’ai observé
[Uniquement des faits : ce qu’il ou elle a dit ou fait]

3. L’impact
[Effet sur le travail, l’équipe ou les clients]

4. Question d’ouverture
« [Comment avez-vous vécu ce moment ?] »

5. Attente pour la suite
[Ce qui est attendu la prochaine fois]

6. Suivi
Point le : [date]
☐ J’ai noté ce que nous avons convenu
☐ J’ai reconnu le changement quand je l’ai vu

Vérification RH
☐ Est-ce lié à un problème persistant de performance ou de comportement ? Si oui, parlez d’abord aux RH.`,
      },
      {
        heading: 'Exemple',
        body: 'Moment : l’appel client de mardi. Observation : vous avez interrompu le client trois fois pendant qu’il expliquait son problème. Impact : il a cessé de donner des détails et nous sommes repartis sans savoir ce dont il a besoin. Question d’ouverture : « Comment trouvez-vous que l’appel s’est passé ? » Pour la suite : laissez le client finir, puis résumez ce que vous avez entendu avant de répondre. Suivi : après l’appel de vendredi.',
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Employer « toujours » et « jamais », qui ouvrent un débat.',
          'Cacher le vrai message entre deux compliments.',
          'Attendre des semaines, jusqu’à ce que le moment soit difficile à se rappeler.',
          'Oublier le suivi, si bien que rien ne change.',
        ],
      },
    ],
  },
};

export default tool;
