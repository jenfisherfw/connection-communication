import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-13',
  week: 13,
  focus: 'change',
  minutes: 4,
  title: 'The emotional curve of change, from shock to commitment',
  subtitle: 'Meet people where they are, not where the plan says they should be.',
  slides: [
    {
      kind: 'cover',
      title: 'Your timeline is not theirs',
      body: 'You have known about the change for weeks and already made peace with it. Your team heard about it this morning. If you expect them to be where you are, you will mistake normal reactions for resistance.',
    },
    {
      kind: 'idea',
      title: 'Change has an emotional arc',
      body: 'Most people move through a similar pattern when a big change hits, though not in a straight line and not at the same speed. Knowing the pattern helps you respond to what people actually need right now.',
      bullets: [
        'Shock and denial: "This can’t be right."',
        'Frustration and worry: "Why is this happening to us?"',
        'Exploring: "Okay, how might this work?"',
        'Commitment: "Here’s how we make it work."',
      ],
    },
    {
      kind: 'idea',
      title: 'Each stage needs something different',
      body: 'In shock, people need clear facts and time to absorb them. In frustration, they need to be heard without being argued with. When they start exploring, they need room to try things and ask questions. In commitment, they need recognition and a role in shaping what comes next.',
    },
    {
      kind: 'idea',
      title: 'Dips are normal, not failure',
      body: 'People often slide back when a new problem appears or when the change gets real in their daily work. A team that seemed on board can dip again in month two. Treat that as part of the process. Keep checking in, and avoid labeling people as negative for having a normal reaction.',
    },
    {
      kind: 'example',
      title: 'Responding to frustration',
      instead: '"I need everyone to stay positive about this."',
      tryThis: '"It makes sense this is frustrating. What part worries you most?"',
      why: 'Asking for positivity tells people their feelings are a problem. Acknowledging the frustration and asking about it helps people move through it, and often surfaces real issues you can fix.',
    },
    {
      kind: 'check',
      question: 'Two weeks after a reorganization, Dana, usually upbeat, has gone quiet and stopped speaking up in meetings. What is the best first step?',
      options: [
        'Check in privately, name what you have noticed, and ask how the change is landing for her.',
        '"Hey, cheer up! This change is going to be great for all of us, you’ll see."',
        'Give her space. People adjust at their own pace, so it is kinder not to bring it up.',
        'In your next team meeting, restate why the change was needed and what the goals are, to rebuild energy.',
      ],
      answer: 0,
      explain: 'A private, curious check in meets Dana where she is and helps you learn what she needs. Giving space sounds respectful, but silence can leave her feeling unseen. Cheering her up dismisses her reaction, and repeating the case for change to the group does not reach her concern.',
    },
    {
      kind: 'action',
      title: 'Map your team',
      body: 'Write the names of your direct reports. Next to each, note where you think they are on the curve right now and one thing that might help them. Pick one person and have a short, open check in with them this week.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'People move through shock, frustration, exploring, and commitment at their own pace.',
        'Each stage needs something different from you.',
        'Dips are normal, so keep listening instead of labeling.',
      ],
    },
  ],
  es: {
    title: 'La curva emocional del cambio, del impacto al compromiso',
    subtitle: 'Acompaña a las personas donde están, no donde el plan dice que deberían estar.',
    slides: [
      {
        kind: 'cover',
        title: 'Tu ritmo no es el suyo',
        body: 'Sabes del cambio desde hace semanas y ya lo aceptaste. Tu equipo se enteró esta mañana. Si esperas que estén donde tú estás, confundirás reacciones normales con resistencia.',
      },
      {
        kind: 'idea',
        title: 'El cambio tiene un arco emocional',
        body: 'La mayoría de las personas recorre un patrón parecido cuando llega un gran cambio, aunque no en línea recta ni a la misma velocidad. Conocer el patrón te ayuda a responder a lo que la gente de verdad necesita ahora.',
        bullets: [
          'Impacto y negación: “Esto no puede ser.”',
          'Frustración y preocupación: “¿Por qué nos pasa esto?”',
          'Exploración: “Bueno, ¿cómo podría funcionar?”',
          'Compromiso: “Así es como lo haremos funcionar.”',
        ],
      },
      {
        kind: 'idea',
        title: 'Cada etapa necesita algo distinto',
        body: 'En el impacto, la gente necesita hechos claros y tiempo para asimilarlos. En la frustración, necesita ser escuchada sin que le discutan. Cuando empieza a explorar, necesita espacio para probar y preguntar. En el compromiso, necesita reconocimiento y un papel en lo que viene.',
      },
      {
        kind: 'idea',
        title: 'Los retrocesos son normales, no un fracaso',
        body: 'Es común retroceder cuando aparece un nuevo problema o cuando el cambio se vuelve real en el día a día. Un equipo que parecía convencido puede caer de nuevo en el segundo mes. Tómalo como parte del proceso. Sigue conversando y evita etiquetar a alguien como negativo por tener una reacción normal.',
      },
      {
        kind: 'example',
        title: 'Responder a la frustración',
        instead: '“Necesito que todos se mantengan positivos con esto.”',
        tryThis: '“Tiene sentido que esto frustre. ¿Qué parte te preocupa más?”',
        why: 'Pedir positividad le dice a la gente que sus emociones son un problema. Reconocer la frustración y preguntar por ella ayuda a atravesarla, y a menudo revela problemas reales que puedes resolver.',
      },
      {
        kind: 'check',
        question: 'Dos semanas después de una reorganización, Dana, que suele ser entusiasta, está callada y ya no participa en las reuniones. ¿Cuál es el mejor primer paso?',
        options: [
          'Hablar con ella en privado, mencionar lo que notaste y preguntarle cómo está viviendo el cambio.',
          '“¡Ánimo! Este cambio va a ser genial para todos, ya verás.”',
          'Darle espacio. Cada quien se adapta a su ritmo, así que es más amable no mencionarlo.',
          'En la próxima reunión de equipo, repetir por qué era necesario el cambio y cuáles son las metas, para recuperar la energía.',
        ],
        answer: 0,
        explain: 'Una conversación privada y curiosa acompaña a Dana donde está y te ayuda a saber qué necesita. Darle espacio suena respetuoso, pero el silencio puede hacerla sentir invisible. Animarla minimiza su reacción, y repetir los argumentos del cambio al grupo no toca su preocupación.',
      },
      {
        kind: 'action',
        title: 'Ubica a tu equipo',
        body: 'Escribe los nombres de tus colaboradores directos. Junto a cada uno, anota en qué punto de la curva crees que está y una cosa que podría ayudarle. Elige a una persona y ten con ella una conversación breve y abierta esta semana.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Las personas pasan por impacto, frustración, exploración y compromiso a su propio ritmo.',
          'Cada etapa necesita algo distinto de ti.',
          'Los retrocesos son normales: sigue escuchando en lugar de etiquetar.',
        ],
      },
    ],
  },
  fr: {
    title: 'La courbe émotionnelle du changement, du choc à l’engagement',
    subtitle: 'Rejoignez les gens là où ils sont, pas là où le plan voudrait qu’ils soient.',
    slides: [
      {
        kind: 'cover',
        title: 'Votre rythme n’est pas le leur',
        body: 'Vous connaissez ce changement depuis des semaines et vous l’avez déjà accepté. Votre équipe l’a appris ce matin. Si vous attendez qu’elle en soit au même point que vous, vous prendrez des réactions normales pour de la résistance.',
      },
      {
        kind: 'idea',
        title: 'Le changement suit un arc émotionnel',
        body: 'Face à un grand changement, la plupart des gens traversent un schéma semblable, mais pas en ligne droite ni à la même vitesse. Connaître ce schéma vous aide à répondre à ce dont les gens ont vraiment besoin maintenant.',
        bullets: [
          'Choc et déni : « Ce n’est pas possible. »',
          'Frustration et inquiétude : « Pourquoi cela nous arrive-t-il ? »',
          'Exploration : « Bon, comment cela pourrait-il marcher ? »',
          'Engagement : « Voici comment nous allons le faire marcher. »',
        ],
      },
      {
        kind: 'idea',
        title: 'Chaque étape demande autre chose',
        body: 'Pendant le choc, les gens ont besoin de faits clairs et de temps pour les absorber. Dans la frustration, ils ont besoin d’être écoutés sans être contredits. Quand ils commencent à explorer, il leur faut de la place pour essayer et poser des questions. Dans l’engagement, ils ont besoin de reconnaissance et d’un rôle dans la suite.',
      },
      {
        kind: 'idea',
        title: 'Les rechutes sont normales, pas un échec',
        body: 'Il est fréquent de reculer quand un nouveau problème surgit ou quand le changement devient concret au quotidien. Une équipe qui semblait convaincue peut replonger au deuxième mois. Voyez-y une étape du processus. Continuez à prendre des nouvelles et évitez de qualifier quelqu’un de négatif pour une réaction normale.',
      },
      {
        kind: 'example',
        title: 'Répondre à la frustration',
        instead: '« J’ai besoin que tout le monde reste positif à ce sujet. »',
        tryThis: '« C’est compréhensible que ce soit frustrant. Qu’est-ce qui vous inquiète le plus ? »',
        why: 'Demander de la positivité dit aux gens que leurs émotions posent problème. Reconnaître la frustration et s’y intéresser aide à la traverser, et révèle souvent de vrais problèmes que vous pouvez régler.',
      },
      {
        kind: 'check',
        question: 'Deux semaines après une réorganisation, Dana, d’habitude enthousiaste, est devenue silencieuse et ne prend plus la parole en réunion. Quelle est la meilleure première démarche ?',
        options: [
          'Lui parler en privé, nommer ce que vous avez remarqué et lui demander comment elle vit le changement.',
          '« Allez, courage ! Ce changement va être formidable pour nous tous, vous verrez. »',
          'Lui laisser de l’espace. Chacun s’adapte à son rythme, il est donc plus délicat de ne pas en parler.',
          'À la prochaine réunion d’équipe, rappeler pourquoi le changement était nécessaire et quels sont les objectifs, pour relancer l’énergie.',
        ],
        answer: 0,
        explain: 'Un échange privé et curieux rejoint Dana là où elle est et vous aide à savoir ce dont elle a besoin. Lui laisser de l’espace semble respectueux, mais le silence peut la faire se sentir invisible. L’encourager à se réjouir minimise sa réaction, et répéter les raisons du changement au groupe ne touche pas son inquiétude.',
      },
      {
        kind: 'action',
        title: 'Situez votre équipe',
        body: 'Écrivez les noms de vos collaborateurs directs. À côté de chacun, notez où vous pensez qu’il se trouve sur la courbe et une chose qui pourrait l’aider. Choisissez une personne et prenez de ses nouvelles cette semaine, dans un échange court et ouvert.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Les gens traversent le choc, la frustration, l’exploration et l’engagement à leur propre rythme.',
          'Chaque étape attend quelque chose de différent de vous.',
          'Les rechutes sont normales : continuez d’écouter au lieu d’étiqueter.',
        ],
      },
    ],
  },
};

export default lesson;
