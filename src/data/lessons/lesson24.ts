import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-24',
  week: 24,
  focus: 'communication',
  minutes: 4,
  title: 'From positions to interests in conflict',
  subtitle: 'Ask what people need, not just what they demand',
  slides: [
    {
      kind: 'cover',
      title: 'From positions to interests in conflict',
      body: 'Two people are dug in: one wants the deadline moved, the other refuses. As long as the talk stays on those positions, someone has to lose.',
    },
    {
      kind: 'idea',
      title: 'Positions and interests',
      body: 'A position is what someone says they want. An interest is why they want it: the need, worry, or goal underneath. Positions often clash. Interests often overlap, and that overlap is where solutions live.',
      bullets: [
        'Position: "I need the report by Friday."',
        'Interest: "My director presents on Monday and needs time to review it."',
      ],
    },
    {
      kind: 'idea',
      title: 'Questions that get underneath',
      body: 'Your job is to move the conversation from what to why. Ask each person, with real curiosity, what matters to them about their position. Then reflect back what you heard before anyone proposes a fix.',
      bullets: [
        'What’s important to you about that?',
        'What are you worried will happen if it slips?',
        'What would a good outcome look like for you?',
        'What do you think matters most to them?',
      ],
    },
    {
      kind: 'idea',
      title: 'Build options together',
      body: 'Once interests are on the table, invite both people to suggest options that serve both. Keep inventing separate from deciding: list several ideas first, then choose. If the conflict involves harassment, discrimination, or threats, it is not a matter for mediation, so bring in HR right away.',
    },
    {
      kind: 'example',
      title: 'Before you split the difference',
      instead: '"You two need to compromise. Split the difference and meet on Wednesday."',
      tryThis: '"Before we pick a date, help me understand what each of you needs this deadline to protect."',
      why: 'Splitting the difference often leaves both people unhappy. Naming interests first can reveal a solution neither had seen, like a draft on Friday and a final version on Tuesday.',
    },
    {
      kind: 'check',
      question: 'Sales wants a feature shipped this month. Engineering says that is impossible. In your meeting with both leads, what is the strongest opening move?',
      options: [
        'Ask engineering to find a way, since revenue is on the line this quarter.',
        'Let each lead restate their position fully so everyone feels heard today.',
        'Pick a middle date between the two asks so both leads give a little.',
        'Ask what each side needs to achieve this month and what it must avoid.',
      ],
      answer: 3,
      explain: 'Asking about needs moves both leads from positions to interests. Sales may need one customer use case, and engineering may need to protect quality, which opens options like a limited release. Restating positions keeps everyone dug in, and a middle date rarely serves either interest.',
    },
    {
      kind: 'action',
      title: 'Ask one question underneath',
      body: 'This week, when someone pushes hard for a specific outcome, ask: "What’s important to you about that?" Listen fully, then reflect it back in one sentence before you respond.',
    },
    {
      kind: 'takeaway',
      title: 'Look underneath',
      bullets: [
        'Positions are what people ask for; interests are why they ask.',
        'Curious questions move the conversation from what to why.',
        'Build options together before deciding, and route serious conduct issues to HR.',
      ],
    },
  ],
  es: {
    title: 'De las posiciones a los intereses en un conflicto',
    subtitle: 'Pregunta qué necesitan las personas, no solo qué exigen',
    slides: [
      {
        kind: 'cover',
        title: 'De las posiciones a los intereses en un conflicto',
        body: 'Dos personas están atrincheradas: una quiere mover la fecha de entrega y la otra se niega. Mientras la conversación se quede en esas posiciones, alguien tendrá que perder.',
      },
      {
        kind: 'idea',
        title: 'Posiciones e intereses',
        body: 'Una posición es lo que alguien dice que quiere. Un interés es por qué lo quiere: la necesidad, la preocupación o el objetivo de fondo. Las posiciones suelen chocar. Los intereses suelen coincidir en parte, y en esa coincidencia están las soluciones.',
        bullets: [
          'Posición: “Necesito el informe para el viernes.”',
          'Interés: “Mi director presenta el lunes y necesita tiempo para revisarlo.”',
        ],
      },
      {
        kind: 'idea',
        title: 'Preguntas que van al fondo',
        body: 'Tu tarea es llevar la conversación del qué al por qué. Pregunta a cada persona, con verdadera curiosidad, qué es lo que le importa de su posición. Luego repite lo que escuchaste antes de que alguien proponga una solución.',
        bullets: [
          '¿Qué es lo importante para ti de eso?',
          '¿Qué te preocupa que pase si se retrasa?',
          '¿Cómo sería un buen resultado para ti?',
          '¿Qué crees que es lo más importante para la otra parte?',
        ],
      },
      {
        kind: 'idea',
        title: 'Construyan opciones juntos',
        body: 'Cuando los intereses estén sobre la mesa, invita a ambas personas a proponer opciones que sirvan a las dos. Separa el momento de idear del momento de decidir: primero hagan una lista de ideas y después elijan. Si el conflicto incluye acoso, discriminación o amenazas, no es un tema para mediar: involucra a Recursos Humanos de inmediato.',
      },
      {
        kind: 'example',
        title: 'Antes de partir la diferencia',
        instead: '“Ustedes dos tienen que ceder. Partan la diferencia y quedemos en el miércoles.”',
        tryThis: '“Antes de elegir una fecha, ayúdenme a entender qué necesita proteger cada uno con esta entrega.”',
        why: 'Partir la diferencia suele dejar a ambos insatisfechos. Nombrar primero los intereses puede revelar una solución que nadie había visto, como un borrador el viernes y la versión final el martes.',
      },
      {
        kind: 'check',
        question: 'Ventas quiere lanzar una función este mes. Ingeniería dice que es imposible. En tu reunión con ambos responsables, ¿cuál es el mejor primer paso?',
        options: [
          'Pedirle a ingeniería que encuentre la manera, porque los ingresos del trimestre están en juego.',
          'Dejar que cada responsable explique su posición completa para que todos se sientan escuchados.',
          'Elegir una fecha intermedia entre ambas peticiones para que los dos cedan un poco.',
          'Preguntar qué necesita lograr cada parte este mes y qué debe evitar.',
        ],
        answer: 3,
        explain: 'Preguntar por las necesidades lleva a ambos responsables de las posiciones a los intereses. Ventas quizá necesite un solo caso de uso para un cliente, e ingeniería quizá necesite proteger la calidad, lo que abre opciones como un lanzamiento limitado. Repetir posiciones mantiene a todos atrincherados, y una fecha intermedia rara vez sirve a alguno de los intereses.',
      },
      {
        kind: 'action',
        title: 'Haz una pregunta que vaya al fondo',
        body: 'Esta semana, cuando alguien insista mucho en un resultado concreto, pregúntale: “¿Qué es lo importante para ti de eso?” Escucha con atención y luego resume lo que entendiste en una frase antes de responder.',
      },
      {
        kind: 'takeaway',
        title: 'Mira lo que hay debajo',
        bullets: [
          'Las posiciones son lo que la gente pide; los intereses son el porqué.',
          'Las preguntas curiosas llevan la conversación del qué al por qué.',
          'Construyan opciones antes de decidir y deriva los problemas graves de conducta a Recursos Humanos.',
        ],
      },
    ],
  },
  fr: {
    title: 'Des positions aux intérêts dans un conflit',
    subtitle: 'Demandez ce dont les gens ont besoin, pas seulement ce qu’ils exigent',
    slides: [
      {
        kind: 'cover',
        title: 'Des positions aux intérêts dans un conflit',
        body: 'Deux personnes campent sur leurs positions : l’une veut repousser l’échéance, l’autre refuse. Tant que la discussion reste sur ces positions, quelqu’un devra perdre.',
      },
      {
        kind: 'idea',
        title: 'Positions et intérêts',
        body: 'Une position, c’est ce que quelqu’un dit vouloir. Un intérêt, c’est la raison pour laquelle il le veut : le besoin, l’inquiétude ou l’objectif sous-jacent. Les positions s’opposent souvent. Les intérêts se recoupent souvent, et c’est dans ce recoupement que se trouvent les solutions.',
        bullets: [
          'Position : « J’ai besoin du rapport pour vendredi. »',
          'Intérêt : « Mon directeur présente lundi et doit avoir le temps de le relire. »',
        ],
      },
      {
        kind: 'idea',
        title: 'Des questions qui vont au fond',
        body: 'Votre rôle est de faire passer la conversation du quoi au pourquoi. Demandez à chaque personne, avec une réelle curiosité, ce qui compte pour elle dans sa position. Puis reformulez ce que vous avez entendu avant que quiconque propose une solution.',
        bullets: [
          'Qu’est-ce qui est important pour vous là-dedans ?',
          'Que craignez-vous s’il y a du retard ?',
          'À quoi ressemblerait un bon résultat pour vous ?',
          'Selon vous, qu’est-ce qui compte le plus pour l’autre partie ?',
        ],
      },
      {
        kind: 'idea',
        title: 'Construire des options ensemble',
        body: 'Une fois les intérêts exprimés, invitez les deux personnes à proposer des options qui servent les deux. Séparez le temps de l’invention de celui de la décision : listez d’abord plusieurs idées, puis choisissez. Si le conflit implique du harcèlement, de la discrimination ou des menaces, ce n’est pas un sujet de médiation : faites appel aux RH sans attendre.',
      },
      {
        kind: 'example',
        title: 'Avant de couper la poire en deux',
        instead: '« Vous devez faire un compromis. Coupez la poire en deux et retenons mercredi. »',
        tryThis: '« Avant de choisir une date, aidez-moi à comprendre ce que chacun de vous a besoin de protéger avec cette échéance. »',
        why: 'Couper la poire en deux laisse souvent les deux parties insatisfaites. Nommer d’abord les intérêts peut révéler une solution que personne n’avait vue, comme une ébauche vendredi et la version finale mardi.',
      },
      {
        kind: 'check',
        question: 'Les ventes veulent qu’une fonctionnalité sorte ce mois-ci. L’ingénierie dit que c’est impossible. Lors de votre réunion avec les deux responsables, quelle est la meilleure entrée en matière ?',
        options: [
          'Demander à l’ingénierie de trouver une solution, puisque le chiffre d’affaires du trimestre est en jeu.',
          'Laisser chaque responsable exposer toute sa position pour que chacun se sente entendu.',
          'Choisir une date intermédiaire entre les deux demandes pour que chacun fasse un effort.',
          'Demander ce que chaque partie doit accomplir ce mois-ci et ce qu’elle doit éviter.',
        ],
        answer: 3,
        explain: 'S’intéresser aux besoins fait passer les deux responsables des positions aux intérêts. Les ventes ont peut-être besoin d’un seul cas d’usage client, et l’ingénierie de protéger la qualité, ce qui ouvre des options comme une sortie limitée. Réexposer les positions fige chacun dans son camp, et une date intermédiaire sert rarement l’un ou l’autre intérêt.',
      },
      {
        kind: 'action',
        title: 'Posez une question qui va au fond',
        body: 'Cette semaine, quand quelqu’un insiste fortement pour obtenir un résultat précis, demandez : « Qu’est-ce qui est important pour vous là-dedans ? » Écoutez jusqu’au bout, puis reformulez en une phrase avant de répondre.',
      },
      {
        kind: 'takeaway',
        title: 'Regardez en dessous',
        bullets: [
          'Les positions sont ce que les gens demandent ; les intérêts, la raison de leur demande.',
          'Les questions curieuses font passer la conversation du quoi au pourquoi.',
          'Construisez des options ensemble avant de décider, et orientez les problèmes de conduite graves vers les RH.',
        ],
      },
    ],
  },
};

export default lesson;
