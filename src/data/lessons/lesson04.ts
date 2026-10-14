import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-04',
  week: 4,
  focus: 'communication',
  minutes: 3,
  title: 'Purpose, decision, owner',
  subtitle: 'What every meeting needs to be worth the time',
  slides: [
    {
      kind: 'cover',
      title: 'Purpose, decision, owner',
      body: 'Your calendar is full of meetings that end with "great discussion" and no clear next step. A week later, the same people meet to have the same talk again.',
    },
    {
      kind: 'idea',
      title: 'Purpose: why are we here?',
      body: 'Write one sentence in the invite that says what the meeting is for. If you can’t write it, you may not need the meeting. A clear purpose also tells people what to prepare and who really needs to attend.',
      bullets: ['"Choose a vendor for the Q3 rollout."', '"Agree on the top three hiring priorities."', 'Not just "Sync" or "Catch up"'],
    },
    {
      kind: 'idea',
      title: 'Decision: what will be different?',
      body: 'Most meetings exist to decide something, even a small thing. Name the decision at the start, and say how it will be made: will you decide after hearing input, or will the group agree together? Then say it out loud before you close.',
      bullets: ['State it at the start and the end', 'Say who makes the final call', 'If nothing needs deciding, try an update by email'],
    },
    {
      kind: 'idea',
      title: 'Owner: who does what by when?',
      body: 'A decision without an owner is a wish. Every action leaves the room with one name and one date, not a team or "we." Send a short recap within a day so nobody remembers it differently.',
      bullets: ['One name per action', 'A real date, not "soon"', 'A recap of three lines is enough'],
    },
    {
      kind: 'example',
      title: 'Closing the meeting',
      instead: '"Great discussion, everyone. Let’s keep thinking about it and circle back."',
      tryThis: '"So we’re going with Vendor B. Lena owns the contract by the 15th, and Sam tells the support team by Friday. Did I miss anything?"',
      why: 'Saying the decision and owners out loud catches confusion while everyone is still in the room.',
    },
    {
      kind: 'check',
      question: 'You are setting up a meeting about a messy handoff between two teams. Which invite will most likely lead to a useful meeting?',
      options: [
        '"Handoff sync. Let’s get everyone together and talk it all through openly."',
        '"Goal: agree on one handoff checklist. I’ll decide if we can’t agree. 30 min."',
        '"Team connection time! Bring ideas, snacks, and good energy about handoffs."',
        '"Discuss the handoff problems so far. All of both teams are invited, please."',
      ],
      answer: 1,
      explain: 'It names the purpose, the decision, and how it will be made. The "openly" option sounds inclusive, but without a goal it often becomes a long venting session.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Pick one recurring meeting you lead. Add a one line purpose to the invite. In the last five minutes, read back each decision, its owner, and its date, then send the recap the same day.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Write the purpose in one sentence.',
        'Name the decision and who makes it.',
        'Every action leaves with one owner and one date.',
      ],
    },
  ],
  es: {
    title: 'Propósito, decisión y responsable',
    subtitle: 'Lo que toda reunión necesita para valer la pena',
    slides: [
      {
        kind: 'cover',
        title: 'Propósito, decisión y responsable',
        body: 'Tu agenda está llena de reuniones que terminan con “buena conversación” y sin un siguiente paso claro. Una semana después, las mismas personas se reúnen para tener la misma charla.',
      },
      {
        kind: 'idea',
        title: 'Propósito: ¿para qué estamos aquí?',
        body: 'Escribe en la invitación una frase que diga para qué es la reunión. Si no puedes escribirla, quizá no necesitas la reunión. Un propósito claro también indica qué preparar y quién debe asistir de verdad.',
        bullets: ['“Elegir proveedor para el lanzamiento del tercer trimestre.”', '“Acordar las tres prioridades de contratación.”', 'No solo “Sincronización” o “Ponernos al día”'],
      },
      {
        kind: 'idea',
        title: 'Decisión: ¿qué cambiará?',
        body: 'La mayoría de las reuniones existen para decidir algo, aunque sea pequeño. Nombra la decisión al inicio y di cómo se tomará: ¿decidirás tú después de escuchar opiniones o el grupo llegará a un acuerdo? Luego dila en voz alta antes de cerrar.',
        bullets: ['Dila al inicio y al final', 'Aclara quién tiene la última palabra', 'Si no hay nada que decidir, prueba con un correo'],
      },
      {
        kind: 'idea',
        title: 'Responsable: ¿quién hace qué y cuándo?',
        body: 'Una decisión sin responsable es un deseo. Cada acción sale de la sala con un nombre y una fecha, no con “el equipo” o “nosotros”. Envía un resumen breve en menos de un día para que nadie lo recuerde distinto.',
        bullets: ['Un nombre por acción', 'Una fecha real, no “pronto”', 'Un resumen de tres líneas es suficiente'],
      },
      {
        kind: 'example',
        title: 'Cerrar la reunión',
        instead: '“Muy buena conversación, equipo. Sigamos pensándolo y lo retomamos.”',
        tryThis: '“Entonces vamos con el Proveedor B. Lena se encarga del contrato antes del 15 y Sam avisa al equipo de soporte el viernes. ¿Se me escapó algo?”',
        why: 'Decir en voz alta la decisión y los responsables detecta la confusión mientras todos siguen presentes.',
      },
      {
        kind: 'check',
        question: 'Estás organizando una reunión sobre una entrega desordenada entre dos equipos. ¿Qué invitación tiene más probabilidades de llevar a una reunión útil?',
        options: [
          '“Sincronización de entregas. Reunámonos todos y hablemos de todo abiertamente.”',
          '“Meta: acordar una lista de control de entregas. Si no hay acuerdo, decido yo. 30 min.”',
          '“¡Tiempo de conexión de equipo! Traigan ideas, snacks y buena energía sobre entregas.”',
          '“Comentar los problemas de entrega hasta ahora. Invitados todos los de ambos equipos.”',
        ],
        answer: 1,
        explain: 'Nombra el propósito, la decisión y cómo se tomará. La opción de hablar “abiertamente” suena inclusiva, pero sin una meta suele convertirse en una larga sesión de desahogo.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Elige una reunión recurrente que lideres. Agrega a la invitación un propósito de una línea. En los últimos cinco minutos, repasa cada decisión, su responsable y su fecha, y envía el resumen ese mismo día.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Escribe el propósito en una frase.',
          'Nombra la decisión y quién la toma.',
          'Cada acción sale con un responsable y una fecha.',
        ],
      },
    ],
  },
  fr: {
    title: 'Objectif, décision, responsable',
    subtitle: 'Ce dont chaque réunion a besoin pour valoir le temps',
    slides: [
      {
        kind: 'cover',
        title: 'Objectif, décision, responsable',
        body: 'Votre agenda est rempli de réunions qui se terminent par « belle discussion » et sans prochaine étape claire. Une semaine plus tard, les mêmes personnes se retrouvent pour la même conversation.',
      },
      {
        kind: 'idea',
        title: 'Objectif : pourquoi sommes‑nous là ?',
        body: 'Écrivez dans l’invitation une phrase qui dit à quoi sert la réunion. Si vous n’y arrivez pas, la réunion n’est peut‑être pas nécessaire. Un objectif clair indique aussi quoi préparer et qui doit vraiment venir.',
        bullets: ['« Choisir un prestataire pour le déploiement du T3. »', '« S’accorder sur les trois priorités de recrutement. »', 'Pas seulement « Point » ou « Synchro »'],
      },
      {
        kind: 'idea',
        title: 'Décision : qu’est‑ce qui va changer ?',
        body: 'La plupart des réunions servent à décider quelque chose, même de modeste. Nommez la décision au début et dites comment elle sera prise : déciderez‑vous après avoir recueilli les avis, ou le groupe se mettra‑t‑il d’accord ? Puis énoncez‑la à voix haute avant de conclure.',
        bullets: ['Énoncez‑la au début et à la fin', 'Précisez qui tranche', 'S’il n’y a rien à décider, essayez un e‑mail'],
      },
      {
        kind: 'idea',
        title: 'Responsable : qui fait quoi, pour quand ?',
        body: 'Une décision sans responsable reste un souhait. Chaque action quitte la salle avec un nom et une date, pas « l’équipe » ni « on ». Envoyez un bref compte rendu dans la journée pour que personne ne s’en souvienne autrement.',
        bullets: ['Un nom par action', 'Une vraie date, pas « bientôt »', 'Un compte rendu de trois lignes suffit'],
      },
      {
        kind: 'example',
        title: 'Conclure la réunion',
        instead: '« Belle discussion, tout le monde. Continuons d’y réfléchir et on en reparle. »',
        tryThis: '« Nous retenons donc le prestataire B. Lena s’occupe du contrat d’ici le 15, et Sam prévient l’équipe support vendredi. Ai‑je oublié quelque chose ? »',
        why: 'Énoncer à voix haute la décision et les responsables fait apparaître les malentendus pendant que tout le monde est encore là.',
      },
      {
        kind: 'check',
        question: 'Vous organisez une réunion sur un passage de relais confus entre deux équipes. Quelle invitation a le plus de chances de mener à une réunion utile ?',
        options: [
          '« Point passation. Réunissons‑nous tous et parlons de tout, ouvertement. »',
          '« Objectif : adopter une liste de passation unique. Sans accord, je tranche. 30 min. »',
          '« Moment d’équipe ! Venez avec des idées, des en‑cas et de l’énergie sur la passation. »',
          '« Discuter des problèmes de passation jusqu’ici. Les deux équipes au complet sont invitées. »',
        ],
        answer: 1,
        explain: 'Elle nomme l’objectif, la décision et la façon de la prendre. L’option « ouvertement » paraît inclusive, mais sans but elle tourne souvent en longue séance de défoulement.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Choisissez une réunion récurrente que vous animez. Ajoutez un objectif d’une ligne à l’invitation. Dans les cinq dernières minutes, relisez chaque décision, son responsable et sa date, puis envoyez le compte rendu le jour même.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Écrivez l’objectif en une phrase.',
          'Nommez la décision et qui la prend.',
          'Chaque action part avec un responsable et une date.',
        ],
      },
    ],
  },
};

export default lesson;
