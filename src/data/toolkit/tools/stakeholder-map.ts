import type { Tool } from '../types';

const tool: Tool = {
  id: 'stakeholder-map',
  category: 'change',
  icon: 'map',
  minutes: 20,
  title: 'Stakeholder Map',
  summary: 'See who a change touches, what each person cares about, and which conversation to have with them and when.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use this at the start of any change or project that reaches beyond your own team. Mapping people early helps you avoid surprises, find support, and talk to the right people in the right order.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'List everyone affected, including people who will only feel it indirectly.',
        'Rate influence and impact as high, medium, or low for each person or group.',
        'Write what they care about in their words, not yours.',
        'Talk first with people who are high on both influence and impact.',
        'Update the map after each conversation; concerns change.',
      ],
    },
    {
      heading: 'Stakeholder map',
      template: `STAKEHOLDER MAP
Change: [name of the change]
Updated: [date]

1. Person or group: [name]
• Influence: [high, medium, low]
• Impact on them: [high, medium, low]
• What they care about: [goals, workload, customers]
• Likely concerns: [what they may worry about]
• Conversation: [inform, ask for input, partner]
• When and how: [date, 1:1, meeting, email]
• Owner: [who talks with them]

2. Person or group: [name]
• Influence: [high, medium, low]
• Impact on them: [high, medium, low]
• What they care about: [ ]
• Likely concerns: [ ]
• Conversation: [ ]
• When and how: [ ]
• Owner: [ ]

(Copy the block for each person or group.)`,
    },
    {
      heading: 'Choosing the conversation',
      bullets: [
        'High influence, high impact: partner early and shape the plan together.',
        'High influence, low impact: keep them informed and ask for support.',
        'Low influence, high impact: listen closely and check in often.',
        'Low influence, low impact: share clear updates at key moments.',
      ],
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Mapping only senior people and missing the front line.',
        'Assuming you know someone’s concerns without asking.',
        'Filling in the map once and never looking at it again.',
      ],
    },
  ],
  es: {
    title: 'Mapa de partes interesadas',
    summary: 'Identifica a quién afecta un cambio, qué le importa a cada persona y qué conversación tener con ella y cuándo.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo al inicio de cualquier cambio o proyecto que vaya más allá de tu propio equipo. Hacer el mapa temprano te ayuda a evitar sorpresas, encontrar apoyo y hablar con las personas adecuadas en el orden adecuado.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Anota a todas las personas afectadas, incluso a quienes lo sentirán de forma indirecta.',
          'Califica la influencia y el impacto como alto, medio o bajo para cada persona o grupo.',
          'Escribe lo que les importa con sus palabras, no con las tuyas.',
          'Habla primero con quienes tienen alta influencia y alto impacto.',
          'Actualiza el mapa después de cada conversación; las inquietudes cambian.',
        ],
      },
      {
        heading: 'Mapa de partes interesadas',
        template: `MAPA DE PARTES INTERESADAS
Cambio: [nombre del cambio]
Actualizado: [fecha]

1. Persona o grupo: [nombre]
• Influencia: [alta, media, baja]
• Impacto en ellos: [alto, medio, bajo]
• Lo que les importa: [metas, carga de trabajo, clientes]
• Inquietudes probables: [qué les puede preocupar]
• Conversación: [informar, pedir opinión, colaborar]
• Cuándo y cómo: [fecha, 1:1, reunión, correo]
• Responsable: [quién habla con ellos]

2. Persona o grupo: [nombre]
• Influencia: [alta, media, baja]
• Impacto en ellos: [alto, medio, bajo]
• Lo que les importa: [ ]
• Inquietudes probables: [ ]
• Conversación: [ ]
• Cuándo y cómo: [ ]
• Responsable: [ ]

(Copia el bloque para cada persona o grupo.)`,
      },
      {
        heading: 'Cómo elegir la conversación',
        bullets: [
          'Alta influencia, alto impacto: colabora desde el principio y diseñen el plan juntos.',
          'Alta influencia, bajo impacto: mantenlos informados y pide su apoyo.',
          'Baja influencia, alto impacto: escucha con atención y conversa con frecuencia.',
          'Baja influencia, bajo impacto: comparte novedades claras en los momentos clave.',
        ],
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Incluir solo a los altos cargos y olvidar a la primera línea.',
          'Suponer que conoces las inquietudes de alguien sin preguntar.',
          'Llenar el mapa una vez y no volver a mirarlo.',
        ],
      },
    ],
  },
  fr: {
    title: 'Cartographie des parties prenantes',
    summary: 'Voyez qui un changement concerne, ce qui compte pour chacun, et quelle conversation avoir avec eux et à quel moment.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-la au début de tout changement ou projet qui dépasse votre propre équipe. Cartographier les personnes tôt vous aide à éviter les surprises, à trouver des appuis et à parler aux bonnes personnes dans le bon ordre.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Listez toutes les personnes concernées, y compris celles touchées de façon indirecte.',
          'Notez l’influence et l’impact (élevé, moyen, faible) pour chaque personne ou groupe.',
          'Écrivez ce qui compte pour eux avec leurs mots, pas les vôtres.',
          'Parlez d’abord à ceux dont l’influence et l’impact sont élevés.',
          'Mettez la carte à jour après chaque échange ; les préoccupations évoluent.',
        ],
      },
      {
        heading: 'Cartographie des parties prenantes',
        template: `CARTOGRAPHIE DES PARTIES PRENANTES
Changement : [nom du changement]
Mise à jour : [date]

1. Personne ou groupe : [nom]
• Influence : [élevée, moyenne, faible]
• Impact sur eux : [élevé, moyen, faible]
• Ce qui compte pour eux : [objectifs, charge de travail, clients]
• Préoccupations probables : [ce qui peut les inquiéter]
• Conversation : [informer, consulter, collaborer]
• Quand et comment : [date, entretien individuel, réunion, courriel]
• Responsable : [qui leur parle]

2. Personne ou groupe : [nom]
• Influence : [élevée, moyenne, faible]
• Impact sur eux : [élevé, moyen, faible]
• Ce qui compte pour eux : [ ]
• Préoccupations probables : [ ]
• Conversation : [ ]
• Quand et comment : [ ]
• Responsable : [ ]

(Copiez le bloc pour chaque personne ou groupe.)`,
      },
      {
        heading: 'Choisir la conversation',
        bullets: [
          'Influence élevée, impact élevé : associez-les tôt et construisez le plan ensemble.',
          'Influence élevée, impact faible : tenez-les informés et demandez leur soutien.',
          'Influence faible, impact élevé : écoutez attentivement et faites le point souvent.',
          'Influence faible, impact faible : partagez des nouvelles claires aux moments clés.',
        ],
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Ne cartographier que les dirigeants et oublier le terrain.',
          'Supposer connaître les préoccupations de quelqu’un sans le lui demander.',
          'Remplir la carte une fois et ne plus jamais la consulter.',
        ],
      },
    ],
  },
};

export default tool;
