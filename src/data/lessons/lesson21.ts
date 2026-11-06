import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-21',
  week: 21,
  focus: 'change',
  minutes: 4,
  title: 'Equip your managers to cascade a change',
  subtitle: 'The message is won or lost one level down',
  slides: [
    {
      kind: 'cover',
      title: 'Help your managers carry the change',
      body: 'You announce a change at an all hands, and a week later each team has heard a different version. Most people hear about change from their direct manager, so that is where the message is won or lost.',
    },
    {
      kind: 'idea',
      title: 'Managers first, then everyone',
      body: 'Brief your managers before the wider announcement, even by a day. They need time to understand the change, form their own questions, and work through their own reactions. A manager who hears the news at the same time as their team cannot lead them through it.',
    },
    {
      kind: 'idea',
      title: 'Give them a kit, not a script',
      body: 'Managers need consistency and room to sound like themselves. A short kit helps them say the core message accurately in their own voice.',
      bullets: [
        'The why, in two or three sentences',
        'What changes, what stays, and what is not known yet',
        'Likely questions, with honest answers',
        'Where to send questions they cannot answer',
      ],
    },
    {
      kind: 'idea',
      title: 'Build a path back up',
      body: 'Cascading is not one way. Ask managers to share what they hear: questions, worries, rumors. Meet briefly after the first team conversations, then answer the common questions for everyone. This catches confusion early and shows managers they are partners in the change.',
    },
    {
      kind: 'example',
      title: 'Briefing your managers',
      instead: '"Here’s the announcement deck. Please share it with your teams this week."',
      tryThis: '"Here’s the core message and the questions we expect. Practice it with each other today, put it in your own words, and on Thursday tell me what your team asked."',
      why: 'Managers get to rehearse, make the message their own, and know their feedback matters, so the story stays consistent and real.',
    },
    {
      kind: 'check',
      question: 'One of your managers, Daniel, says he disagrees with the change and does not want to present it to his team. What is the best response?',
      options: [
        'Hear out his concerns, pass on what is useful, and agree on what he can honestly say to his team.',
        'Tell him warmly that you understand, and offer to present it to his team yourself to spare him.',
        'Remind him that managers support decisions, and ask him to deliver the message exactly as written.',
        'Ask him to keep his concerns to himself until the change is fully rolled out and settled in.',
      ],
      answer: 0,
      explain: 'Listening gives his concerns a path upward, and agreeing on honest words lets him lead without pretending. Taking over sounds kind but undercuts him with his own team. Insisting on the script or asking for silence tends to produce a flat message people see through.',
    },
    {
      kind: 'action',
      title: 'Build a one page kit',
      body: 'For a change you are leading now, write one page for your managers: the why, what changes and what stays, three likely questions with answers, and where to send the rest. Share it, and ask one manager to try it out loud with you.',
    },
    {
      kind: 'takeaway',
      title: 'Managers carry the message',
      bullets: [
        'Brief managers before their teams',
        'Give them a kit they can say in their own voice',
        'Listen to what comes back up, and respond',
      ],
    },
  ],
  es: {
    title: 'Prepara a tus gerentes para transmitir un cambio',
    subtitle: 'El mensaje se gana o se pierde un nivel más abajo',
    slides: [
      {
        kind: 'cover',
        title: 'Ayuda a tus gerentes a llevar el cambio',
        body: 'Anuncias un cambio en una reunión general y, una semana después, cada equipo escuchó una versión distinta. La mayoría de las personas se entera de los cambios por su jefe directo, así que ahí es donde el mensaje se gana o se pierde.',
      },
      {
        kind: 'idea',
        title: 'Primero los gerentes, después todos',
        body: 'Informa a tus gerentes antes del anuncio general, aunque sea con un día de anticipación. Necesitan tiempo para entender el cambio, formular sus propias preguntas y procesar sus propias reacciones. Un gerente que se entera al mismo tiempo que su equipo no puede guiarlo.',
      },
      {
        kind: 'idea',
        title: 'Dales un kit, no un guion',
        body: 'Los gerentes necesitan coherencia y espacio para sonar como ellos mismos. Un kit breve los ayuda a transmitir el mensaje central con precisión y con su propia voz.',
        bullets: [
          'El porqué, en dos o tres frases',
          'Qué cambia, qué se mantiene y qué todavía no sabemos',
          'Preguntas probables, con respuestas honestas',
          'A dónde enviar las preguntas que no puedan responder',
        ],
      },
      {
        kind: 'idea',
        title: 'Construye un camino de regreso',
        body: 'Transmitir un cambio no va en una sola dirección. Pide a los gerentes que compartan lo que escuchan: preguntas, preocupaciones, rumores. Reúnete brevemente después de las primeras conversaciones con los equipos y responde a todos las preguntas comunes. Así detectas la confusión a tiempo y les muestras que son aliados en el cambio.',
      },
      {
        kind: 'example',
        title: 'Al preparar a tus gerentes',
        instead: '“Aquí está la presentación del anuncio. Por favor, compártanla con sus equipos esta semana.”',
        tryThis: '“Aquí está el mensaje central y las preguntas que esperamos. Practíquenlo entre ustedes hoy, díganlo con sus propias palabras y el jueves cuéntenme qué preguntó su equipo.”',
        why: 'Los gerentes pueden ensayar, hacer suyo el mensaje y saber que su retroalimentación importa, así la historia se mantiene coherente y auténtica.',
      },
      {
        kind: 'check',
        question: 'Daniel, uno de tus gerentes, dice que no está de acuerdo con el cambio y que no quiere presentarlo a su equipo. ¿Cuál es la mejor respuesta?',
        options: [
          'Escuchar sus inquietudes, transmitir lo útil y acordar qué puede decirle con honestidad a su equipo.',
          'Decirle con calidez que lo entiendes y ofrecerte a presentarlo tú a su equipo para ahorrárselo.',
          'Recordarle que los gerentes apoyan las decisiones y pedirle que entregue el mensaje tal como está escrito.',
          'Pedirle que se guarde sus inquietudes hasta que el cambio esté totalmente implementado y asentado.',
        ],
        answer: 0,
        explain: 'Escucharlo da a sus inquietudes un camino hacia arriba, y acordar palabras honestas le permite liderar sin fingir. Hacerlo tú suena amable, pero le resta autoridad frente a su propio equipo. Insistir en el guion o pedirle silencio suele producir un mensaje plano que la gente detecta.',
      },
      {
        kind: 'action',
        title: 'Arma un kit de una página',
        body: 'Para un cambio que lideras ahora, escribe una página para tus gerentes: el porqué, qué cambia y qué se mantiene, tres preguntas probables con respuestas y a dónde enviar el resto. Compártela y pide a un gerente que la practique en voz alta contigo.',
      },
      {
        kind: 'takeaway',
        title: 'Los gerentes llevan el mensaje',
        bullets: [
          'Informa a los gerentes antes que a sus equipos',
          'Dales un kit que puedan decir con su propia voz',
          'Escucha lo que vuelve hacia arriba y responde',
        ],
      },
    ],
  },
  fr: {
    title: 'Outiller vos managers pour relayer un changement',
    subtitle: 'Le message se gagne ou se perd un niveau plus bas',
    slides: [
      {
        kind: 'cover',
        title: 'Aidez vos managers à porter le changement',
        body: 'Vous annoncez un changement en réunion générale et, une semaine plus tard, chaque équipe en a entendu une version différente. La plupart des gens apprennent un changement par leur manager direct : c’est là que le message se gagne ou se perd.',
      },
      {
        kind: 'idea',
        title: 'Les managers d’abord, puis tout le monde',
        body: 'Informez vos managers avant l’annonce générale, même un jour avant. Ils ont besoin de temps pour comprendre le changement, formuler leurs propres questions et digérer leurs propres réactions. Un manager qui apprend la nouvelle en même temps que son équipe ne peut pas la guider.',
      },
      {
        kind: 'idea',
        title: 'Donnez-leur un kit, pas un script',
        body: 'Les managers ont besoin de cohérence et de liberté pour parler avec leurs propres mots. Un kit court les aide à transmettre le message central avec justesse, à leur façon.',
        bullets: [
          'Le pourquoi, en deux ou trois phrases',
          'Ce qui change, ce qui reste et ce qu’on ne sait pas encore',
          'Les questions probables, avec des réponses honnêtes',
          'À qui adresser les questions sans réponse',
        ],
      },
      {
        kind: 'idea',
        title: 'Créez un chemin de retour',
        body: 'Relayer un changement ne va pas dans un seul sens. Demandez aux managers de partager ce qu’ils entendent : questions, inquiétudes, rumeurs. Faites un point rapide après les premiers échanges en équipe, puis répondez à tous aux questions fréquentes. Vous repérez ainsi la confusion tôt et montrez aux managers qu’ils sont partenaires du changement.',
      },
      {
        kind: 'example',
        title: 'Préparer vos managers',
        instead: '« Voici la présentation de l’annonce. Merci de la partager avec vos équipes cette semaine. »',
        tryThis: '« Voici le message central et les questions attendues. Entraînez-vous entre vous aujourd’hui, dites-le avec vos mots, et jeudi, racontez-moi ce que votre équipe a demandé. »',
        why: 'Les managers peuvent répéter, s’approprier le message et savoir que leur retour compte, ce qui garde l’histoire cohérente et sincère.',
      },
      {
        kind: 'check',
        question: 'Daniel, l’un de vos managers, dit qu’il n’est pas d’accord avec le changement et ne veut pas le présenter à son équipe. Quelle est la meilleure réponse ?',
        options: [
          'Écouter ses réserves, faire remonter ce qui est utile et convenir de ce qu’il peut dire honnêtement à son équipe.',
          'Lui dire chaleureusement que vous comprenez et proposer de le présenter vous-même à son équipe pour l’en dispenser.',
          'Lui rappeler que les managers soutiennent les décisions et lui demander de livrer le message tel qu’il est écrit.',
          'Lui demander de garder ses réserves pour lui jusqu’à ce que le changement soit entièrement déployé et installé.',
        ],
        answer: 0,
        explain: 'L’écouter donne à ses réserves un chemin vers le haut, et convenir de mots honnêtes lui permet de mener son équipe sans faire semblant. Prendre sa place semble aimable mais l’affaiblit devant sa propre équipe. Imposer le script ou exiger le silence produit souvent un message sans vie que les gens perçoivent.',
      },
      {
        kind: 'action',
        title: 'Rédigez un kit d’une page',
        body: 'Pour un changement que vous menez, écrivez une page pour vos managers : le pourquoi, ce qui change et ce qui reste, trois questions probables avec leurs réponses et à qui adresser le reste. Partagez-la et demandez à un manager de l’essayer à voix haute avec vous.',
      },
      {
        kind: 'takeaway',
        title: 'Les managers portent le message',
        bullets: [
          'Informez les managers avant leurs équipes',
          'Donnez-leur un kit qu’ils peuvent dire avec leur propre voix',
          'Écoutez ce qui remonte, et répondez',
        ],
      },
    ],
  },
};

export default lesson;
