import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-07',
  week: 7,
  focus: 'change',
  minutes: 4,
  title: 'Lead with why',
  subtitle: 'Telling the change story people can repeat',
  slides: [
    {
      kind: 'cover',
      title: 'Lead with why',
      body: 'You know every detail of the change: the timeline, the tools, the new org chart. Your team hears the details first and spends the meeting wondering why any of it is happening.',
    },
    {
      kind: 'idea',
      title: 'Why comes before what and how',
      body: 'When people understand the reason, they can fill gaps and make good choices you never planned for. When they only get the what, every detail feels arbitrary. Start with the problem the change solves, in plain words.',
      bullets: ['Why: the problem or opportunity', 'What: the change itself', 'How: what happens next and when'],
    },
    {
      kind: 'idea',
      title: 'A simple change story',
      body: 'A good change story has three parts that fit in under a minute. Where we are today and why that is not working. Where we are going and what it will make possible. What the first steps are, including the hard parts.',
      bullets: ['From: "Customers wait four days for answers."', 'To: "We want them helped in one day."', 'First steps: "New routing starts in March. The first weeks will be bumpy."'],
    },
    {
      kind: 'idea',
      title: 'Make it theirs',
      body: 'A story told only from the top sounds like a press release. Connect the why to your team’s daily work and to things they already care about. Then invite questions, and admit what is still unknown.',
      bullets: ['Use a real customer or team moment', 'Say what it means for this team', 'Avoid buzzwords and slogans'],
    },
    {
      kind: 'example',
      title: 'Opening the change conversation',
      instead: '"Starting next month we’re moving to a new CRM. Training is mandatory, and here’s the schedule."',
      tryThis: '"Last month, we lost two clients because their history was split across three systems. The new CRM puts it in one place. Training starts next month, and I’ll tell you what I know about the rough spots."',
      why: 'The real problem makes the change make sense. People are more willing to sit through hard training when they know what it fixes.',
    },
    {
      kind: 'check',
      question: 'You must announce that your team will move to a shared service model. Which opening is the strongest?',
      options: [
        '"I’m so excited to share this! It’s a bold new chapter, and I know we’ll crush it together."',
        '"Here’s the new structure, the reporting lines, and the timeline. Questions at the end."',
        '"Leadership decided on a shared model. I wasn’t part of it, but we have to make it work."',
        '"Clients get different answers from each region. A shared model fixes that. Here’s what changes."',
      ],
      answer: 3,
      explain: 'It starts with a real problem, links the change to it, then moves to details. The excited option sounds positive, but hype without a reason makes people more skeptical, not less.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Pick a change your team is living through. Write a three sentence story: where we are, where we are going, and the first step. Say it aloud in under a minute, then share it with one person and ask what is unclear.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Start with the problem the change solves.',
        'Tell it as from, to, and first steps.',
        'Connect it to your team and admit what is unknown.',
      ],
    },
  ],
  es: {
    title: 'Empieza por el porqué',
    subtitle: 'Cuenta una historia del cambio que las personas puedan repetir',
    slides: [
      {
        kind: 'cover',
        title: 'Empieza por el porqué',
        body: 'Conoces cada detalle del cambio: el calendario, las herramientas, el nuevo organigrama. Tu equipo escucha primero los detalles y pasa la reunión preguntándose por qué está pasando todo esto.',
      },
      {
        kind: 'idea',
        title: 'El porqué va antes del qué y el cómo',
        body: 'Cuando las personas entienden la razón, pueden llenar vacíos y tomar buenas decisiones que nunca planeaste. Cuando solo reciben el qué, cada detalle parece arbitrario. Empieza por el problema que el cambio resuelve, con palabras sencillas.',
        bullets: ['Porqué: el problema o la oportunidad', 'Qué: el cambio en sí', 'Cómo: lo que sigue y cuándo'],
      },
      {
        kind: 'idea',
        title: 'Una historia del cambio sencilla',
        body: 'Una buena historia del cambio tiene tres partes y cabe en menos de un minuto. Dónde estamos hoy y por qué no funciona. Hacia dónde vamos y qué hará posible. Cuáles son los primeros pasos, incluidas las partes difíciles.',
        bullets: ['Desde: “Los clientes esperan cuatro días por una respuesta.”', 'Hacia: “Queremos atenderlos en un día.”', 'Primeros pasos: “El nuevo sistema de asignación empieza en marzo. Las primeras semanas serán difíciles.”'],
      },
      {
        kind: 'idea',
        title: 'Hazla propia del equipo',
        body: 'Una historia contada solo desde arriba suena a comunicado de prensa. Conecta el porqué con el trabajo diario de tu equipo y con lo que ya le importa. Luego invita preguntas y admite lo que aún no se sabe.',
        bullets: ['Usa un momento real de un cliente o del equipo', 'Di qué significa para este equipo', 'Evita palabras de moda y eslóganes'],
      },
      {
        kind: 'example',
        title: 'Abrir la conversación sobre el cambio',
        instead: '“A partir del próximo mes pasamos a un nuevo CRM. La capacitación es obligatoria y este es el calendario.”',
        tryThis: '“El mes pasado perdimos dos clientes porque su historial estaba repartido en tres sistemas. El nuevo CRM lo reúne en un solo lugar. La capacitación empieza el próximo mes y les contaré lo que sé sobre las partes difíciles.”',
        why: 'El problema real le da sentido al cambio. Las personas están más dispuestas a pasar por una capacitación difícil cuando saben qué resuelve.',
      },
      {
        kind: 'check',
        question: 'Debes anunciar que tu equipo pasará a un modelo de servicios compartidos. ¿Qué inicio es el más sólido?',
        options: [
          '“¡Qué emoción compartir esto! Es un nuevo capítulo audaz y sé que lo vamos a lograr juntos.”',
          '“Esta es la nueva estructura, las líneas de reporte y el calendario. Preguntas al final.”',
          '“La dirección decidió un modelo compartido. No participé, pero tenemos que hacerlo funcionar.”',
          '“Los clientes reciben respuestas distintas en cada región. Un modelo compartido lo resuelve. Esto cambia.”',
        ],
        answer: 3,
        explain: 'Empieza con un problema real, conecta el cambio con él y luego pasa a los detalles. La opción entusiasta suena positiva, pero el entusiasmo sin razones vuelve a las personas más escépticas, no menos.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Elige un cambio que tu equipo esté viviendo. Escribe una historia de tres frases: dónde estamos, hacia dónde vamos y el primer paso. Dila en voz alta en menos de un minuto, compártela con una persona y pregúntale qué no queda claro.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Empieza por el problema que el cambio resuelve.',
          'Cuéntala como desde, hacia y primeros pasos.',
          'Conéctala con tu equipo y admite lo que no se sabe.',
        ],
      },
    ],
  },
  fr: {
    title: 'Commencez par le pourquoi',
    subtitle: 'Raconter le changement pour qu’on puisse le redire',
    slides: [
      {
        kind: 'cover',
        title: 'Commencez par le pourquoi',
        body: 'Vous connaissez chaque détail du changement : le calendrier, les outils, le nouvel organigramme. Votre équipe entend d’abord les détails et passe la réunion à se demander pourquoi tout cela arrive.',
      },
      {
        kind: 'idea',
        title: 'Le pourquoi avant le quoi et le comment',
        body: 'Quand les personnes comprennent la raison, elles peuvent combler les vides et faire de bons choix que vous n’aviez pas prévus. Quand elles ne reçoivent que le quoi, chaque détail paraît arbitraire. Commencez par le problème que le changement résout, en mots simples.',
        bullets: ['Pourquoi : le problème ou l’opportunité', 'Quoi : le changement lui‑même', 'Comment : la suite et le calendrier'],
      },
      {
        kind: 'idea',
        title: 'Un récit du changement simple',
        body: 'Un bon récit du changement tient en trois parties et en moins d’une minute. Où nous en sommes aujourd’hui et pourquoi cela ne fonctionne pas. Où nous allons et ce que cela rendra possible. Quelles sont les premières étapes, y compris les plus difficiles.',
        bullets: ['D’où : « Les clients attendent quatre jours une réponse. »', 'Vers où : « Nous voulons les aider en un jour. »', 'Premières étapes : « Le nouveau routage démarre en mars. Les premières semaines seront chahutées. »'],
      },
      {
        kind: 'idea',
        title: 'Rendez‑le concret pour l’équipe',
        body: 'Un récit raconté seulement d’en haut sonne comme un communiqué de presse. Reliez le pourquoi au travail quotidien de votre équipe et à ce qui lui tient déjà à cœur. Puis invitez les questions et reconnaissez ce qui reste inconnu.',
        bullets: ['Partez d’un moment réel, client ou équipe', 'Dites ce que cela signifie pour cette équipe', 'Évitez le jargon et les slogans'],
      },
      {
        kind: 'example',
        title: 'Ouvrir la conversation sur le changement',
        instead: '« Dès le mois prochain, nous passons à un nouveau CRM. La formation est obligatoire, voici le planning. »',
        tryThis: '« Le mois dernier, nous avons perdu deux clients parce que leur historique était éparpillé dans trois systèmes. Le nouveau CRM le réunit en un seul endroit. La formation commence le mois prochain, et je vous dirai ce que je sais des passages difficiles. »',
        why: 'Le vrai problème donne du sens au changement. On accepte plus volontiers une formation exigeante quand on sait ce qu’elle règle.',
      },
      {
        kind: 'check',
        question: 'Vous devez annoncer que votre équipe passe à un modèle de services partagés. Quelle entrée en matière est la plus solide ?',
        options: [
          '« Je suis ravi de vous l’annoncer ! C’est un nouveau chapitre audacieux, et ensemble nous allons tout réussir. »',
          '« Voici la nouvelle structure, les rattachements et le calendrier. Questions à la fin. »',
          '« La direction a choisi un modèle partagé. Je n’y ai pas participé, mais il faut que ça marche. »',
          '« Les clients reçoivent des réponses différentes selon la région. Un modèle partagé règle cela. Voici ce qui change. »',
        ],
        answer: 3,
        explain: 'Elle part d’un vrai problème, y relie le changement, puis passe aux détails. L’option enthousiaste paraît positive, mais l’emphase sans raison rend les gens plus sceptiques, pas moins.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Choisissez un changement que vit votre équipe. Écrivez un récit en trois phrases : où nous en sommes, où nous allons, la première étape. Dites‑le à voix haute en moins d’une minute, puis partagez‑le avec une personne et demandez‑lui ce qui reste flou.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Commencez par le problème que le changement résout.',
          'Racontez‑le en trois temps : d’où, vers où, premières étapes.',
          'Reliez‑le à votre équipe et reconnaissez l’inconnu.',
        ],
      },
    ],
  },
};

export default lesson;
