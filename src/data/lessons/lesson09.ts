import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-09',
  week: 9,
  focus: 'communication',
  minutes: 4,
  title: 'Separate the person from the problem in conflict',
  subtitle: 'Be firm on the issue and kind to the people.',
  slides: [
    {
      kind: 'cover',
      title: 'When conflict gets personal',
      body: 'Two people disagree about a deadline, and within minutes they are questioning each other’s competence. Once conflict turns personal, the real problem gets much harder to solve.',
    },
    {
      kind: 'idea',
      title: 'Name the problem, not the person',
      body: 'Labels like "careless" or "difficult" put people on the defensive and shut the conversation down. Describe the issue as something outside both of you, something you can look at together. "The handoff keeps breaking" invites problem solving. "You keep dropping the ball" invites a defense.',
    },
    {
      kind: 'idea',
      title: 'Sit on the same side of the table',
      body: 'Picture the problem on a whiteboard with both of you facing it. That small shift moves your language from blame to shared work.',
      bullets: [
        'Say "we" and "the issue" more often than "you".',
        'Agree on the facts before you debate causes.',
        'Ask what each person needs from a fix.',
        'Assume the other person wants a good outcome too.',
      ],
    },
    {
      kind: 'idea',
      title: 'Acknowledge feelings, then return to the issue',
      body: 'Separating the person from the problem does not mean ignoring emotion. Frustration is real information. Name it briefly, show you heard it, and bring the talk back to what you can change. If a conflict involves harassment, discrimination, or safety, pause and bring in HR under your company policy.',
    },
    {
      kind: 'example',
      title: 'Reframing a heated moment',
      instead: '"Your team always misses our deadlines."',
      tryThis: '"Our last three handoffs slipped. Let’s find where the process breaks."',
      why: 'The first line accuses a whole group and invites a defense. The second names a pattern both sides can see and turns it into a shared problem to solve.',
    },
    {
      kind: 'check',
      question: 'In a team meeting, Lee says, "Marco never reads the specs." Marco looks upset. As their leader, what is the best response?',
      options: [
        '"Let’s pause. What happened with the latest spec, and where did it get missed?"',
        '"Lee, that isn’t fair to Marco. Let’s keep this respectful, please."',
        '"I can see you’re both frustrated. Let’s take this offline, and each of you can tell me your side."',
        '"Marco, can you just confirm whether you read the spec this time?"',
      ],
      answer: 0,
      explain: 'Turning to the specific spec moves everyone from blame to a shared fact they can fix. Defending Marco sounds kind but keeps the focus on people. Hearing each side privately feels caring, yet it frames the issue as a contest between two people.',
    },
    {
      kind: 'action',
      title: 'Rewrite one sentence',
      body: 'Think of a current disagreement on your team. Write down how you would naturally describe it, then rewrite that sentence so it names the problem and not a person. Use the new version the next time the topic comes up.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Describe the issue as something you both face.',
        'Agree on the facts before you debate causes.',
        'Acknowledge feelings, then return to what you can change.',
      ],
    },
  ],
  es: {
    title: 'Separa a la persona del problema en un conflicto',
    subtitle: 'Sé firme con el tema y amable con las personas.',
    slides: [
      {
        kind: 'cover',
        title: 'Cuando el conflicto se vuelve personal',
        body: 'Dos personas discrepan sobre un plazo y en pocos minutos están cuestionando la capacidad de la otra. Cuando el conflicto se vuelve personal, el problema real se vuelve mucho más difícil de resolver.',
      },
      {
        kind: 'idea',
        title: 'Nombra el problema, no a la persona',
        body: 'Etiquetas como “descuidado” o “difícil” ponen a la gente a la defensiva y cierran la conversación. Describe el tema como algo externo a ambos, algo que pueden mirar juntos. “La entrega entre equipos sigue fallando” invita a resolver. “Siempre se te escapan las cosas” invita a defenderse.',
      },
      {
        kind: 'idea',
        title: 'Siéntense del mismo lado de la mesa',
        body: 'Imagina el problema en una pizarra y a ambos mirándolo de frente. Ese pequeño cambio lleva tu lenguaje de la culpa al trabajo compartido.',
        bullets: [
          'Di “nosotros” y “el tema” más que “tú”.',
          'Pónganse de acuerdo en los hechos antes de debatir las causas.',
          'Pregunta qué necesita cada persona de una solución.',
          'Supón que la otra persona también quiere un buen resultado.',
        ],
      },
      {
        kind: 'idea',
        title: 'Reconoce las emociones y vuelve al tema',
        body: 'Separar a la persona del problema no significa ignorar las emociones. La frustración es información real. Nómbrala brevemente, muestra que la escuchaste y lleva la conversación de vuelta a lo que pueden cambiar. Si el conflicto involucra acoso, discriminación o seguridad, haz una pausa y acude a RR. HH. según la política de tu empresa.',
      },
      {
        kind: 'example',
        title: 'Replantear un momento tenso',
        instead: '“Tu equipo siempre incumple nuestros plazos.”',
        tryThis: '“Nuestras últimas tres entregas se retrasaron. Busquemos dónde falla el proceso.”',
        why: 'La primera frase acusa a todo un grupo e invita a defenderse. La segunda nombra un patrón que ambas partes pueden ver y lo convierte en un problema compartido.',
      },
      {
        kind: 'check',
        question: 'En una reunión de equipo, Lee dice: “Marco nunca lee las especificaciones.” Marco se ve molesto. Como su líder, ¿cuál es la mejor respuesta?',
        options: [
          '“Hagamos una pausa. ¿Qué pasó con la última especificación y en qué punto se perdió?”',
          '“Lee, eso no es justo con Marco. Mantengamos el respeto, por favor.”',
          '“Veo que ambos están frustrados. Hablemos por separado y cada uno me cuenta su versión.”',
          '“Marco, ¿puedes confirmar si esta vez leíste la especificación?”',
        ],
        answer: 0,
        explain: 'Ir a la especificación concreta lleva a todos de la culpa a un hecho compartido que pueden corregir. Defender a Marco suena amable, pero mantiene el foco en las personas. Escuchar a cada uno por separado parece considerado, pero plantea el tema como una competencia entre dos personas.',
      },
      {
        kind: 'action',
        title: 'Reescribe una frase',
        body: 'Piensa en un desacuerdo actual en tu equipo. Escribe cómo lo describirías de forma natural y luego reescribe esa frase para que nombre el problema y no a una persona. Usa la nueva versión la próxima vez que surja el tema.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Describe el tema como algo que ambos enfrentan.',
          'Acuerden los hechos antes de debatir las causas.',
          'Reconoce las emociones y vuelve a lo que pueden cambiar.',
        ],
      },
    ],
  },
  fr: {
    title: 'Séparer la personne du problème dans un conflit',
    subtitle: 'Soyez ferme sur le sujet et bienveillant avec les personnes.',
    slides: [
      {
        kind: 'cover',
        title: 'Quand le conflit devient personnel',
        body: 'Deux personnes sont en désaccord sur une échéance et, en quelques minutes, elles remettent en cause la compétence de l’autre. Dès que le conflit devient personnel, le vrai problème devient bien plus difficile à résoudre.',
      },
      {
        kind: 'idea',
        title: 'Nommez le problème, pas la personne',
        body: 'Des étiquettes comme « négligent » ou « difficile » mettent les gens sur la défensive et ferment la conversation. Décrivez le sujet comme quelque chose d’extérieur à vous deux, que vous pouvez examiner ensemble. « Le passage de relais continue de bloquer » invite à résoudre. « Vous laissez toujours filer les choses » invite à se défendre.',
      },
      {
        kind: 'idea',
        title: 'Asseyez-vous du même côté de la table',
        body: 'Imaginez le problème sur un tableau blanc, avec vous deux face à lui. Ce petit déplacement fait passer votre langage du reproche au travail commun.',
        bullets: [
          'Dites « nous » et « le sujet » plus souvent que « vous ».',
          'Mettez-vous d’accord sur les faits avant de débattre des causes.',
          'Demandez ce dont chacun a besoin dans une solution.',
          'Partez du principe que l’autre veut aussi un bon résultat.',
        ],
      },
      {
        kind: 'idea',
        title: 'Reconnaître les émotions, puis revenir au sujet',
        body: 'Séparer la personne du problème ne veut pas dire ignorer les émotions. La frustration est une vraie information. Nommez-la brièvement, montrez que vous l’avez entendue, puis ramenez l’échange vers ce qui peut changer. Si le conflit touche au harcèlement, à la discrimination ou à la sécurité, faites une pause et impliquez les RH selon la politique de votre entreprise.',
      },
      {
        kind: 'example',
        title: 'Recadrer un moment tendu',
        instead: '« Votre équipe rate toujours nos échéances. »',
        tryThis: '« Nos trois dernières livraisons ont glissé. Cherchons où le processus coince. »',
        why: 'La première phrase accuse tout un groupe et appelle une défense. La seconde nomme un schéma que les deux parties peuvent voir et en fait un problème commun à résoudre.',
      },
      {
        kind: 'check',
        question: 'En réunion d’équipe, Lee dit : « Marco ne lit jamais les spécifications. » Marco semble contrarié. En tant que manager, quelle est la meilleure réponse ?',
        options: [
          '« Faisons une pause. Que s’est-il passé avec la dernière spécification, et où l’information s’est-elle perdue ? »',
          '« Lee, ce n’est pas juste envers Marco. Restons respectueux, s’il vous plaît. »',
          '« Je vois que vous êtes tous les deux frustrés. Parlons-en à part, et chacun me donnera sa version. »',
          '« Marco, pouvez-vous simplement confirmer si vous avez lu la spécification cette fois ? »',
        ],
        answer: 0,
        explain: 'Revenir à la spécification concrète fait passer tout le monde du reproche à un fait commun que l’on peut corriger. Défendre Marco semble bienveillant mais garde l’attention sur les personnes. Écouter chacun à part paraît attentionné, mais présente le sujet comme un duel entre deux personnes.',
      },
      {
        kind: 'action',
        title: 'Réécrivez une phrase',
        body: 'Pensez à un désaccord en cours dans votre équipe. Notez la façon dont vous le décririez spontanément, puis réécrivez cette phrase pour qu’elle nomme le problème et non une personne. Utilisez la nouvelle version la prochaine fois que le sujet revient.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Décrivez le sujet comme quelque chose que vous affrontez ensemble.',
          'Accordez-vous sur les faits avant de débattre des causes.',
          'Reconnaissez les émotions, puis revenez à ce qui peut changer.',
        ],
      },
    ],
  },
};

export default lesson;
