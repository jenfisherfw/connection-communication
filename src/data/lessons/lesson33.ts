import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-33',
  week: 33,
  focus: 'communication',
  minutes: 4,
  title: 'Trust across teams and silos',
  subtitle: 'Build working relationships before you need them',
  slides: [
    {
      kind: 'cover',
      title: 'Trust across teams and silos',
      body: 'Your team can trust you completely and still clash with the team next door. Most cross team friction is not bad intent. It is missing context and missing relationships.',
    },
    {
      kind: 'idea',
      title: 'Silos form around stories',
      body: 'When teams rarely talk, each one builds a story about the other: "they are slow," "they never listen," "they only care about their numbers." Those stories shape how people read every email. The fix starts with more contact and better information, not more rules.',
    },
    {
      kind: 'idea',
      title: 'Invest before the crunch',
      body: 'The worst time to meet a partner team is in the middle of a problem. Build the relationship while stakes are low, so you have goodwill to draw on when something goes wrong.',
      bullets: [
        'Meet your peer leader for 20 minutes to learn their goals and pressures',
        'Invite someone from that team to one of your meetings',
        'Share early drafts that affect them, not just final plans',
      ],
    },
    {
      kind: 'idea',
      title: 'Model the tone you want your team to use',
      body: 'Your team notices how you talk about other groups. If you joke about "those people in finance," your team will too. Speak about other teams with curiosity and fairness, and correct the story gently when you hear blame.',
      bullets: [
        'Assume a reason before you assume a motive',
        'Credit other teams by name when they help',
        'Raise problems directly with the other leader, not around them',
      ],
    },
    {
      kind: 'example',
      title: 'When another team misses a handoff',
      instead: '"Typical. Operations dropped the ball again."',
      tryThis: '"Operations missed the handoff. Before we decide what that means, I’ll ask their lead what got in the way and how we can make it easier."',
      why: 'Blame hardens the silo and teaches your team to do the same. Curiosity opens a channel and often reveals a fixable process gap.',
    },
    {
      kind: 'check',
      question: 'Your team keeps complaining that the product team changes priorities without warning. What should you do first?',
      options: [
        'Tell your team you hear them and will keep shielding them from the chaos',
        'Send the product lead a written list of every change that caused rework',
        'Ask the product lead for a short call to understand their planning pressures',
        'Ask your team to log every change so you have evidence for leadership',
      ],
      answer: 2,
      explain: 'A direct, curious conversation builds the relationship and context you need to solve the pattern together. Shielding your team sounds caring, but it deepens the us and them story.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Choose one team you depend on. Send their leader a short note asking for 20 minutes to learn what they are working toward and what makes their job harder. Bring one question and listen more than you talk.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Silos run on missing context and untested stories.',
        'Build relationships with partner teams before you need them.',
        'How you talk about other teams sets the tone for yours.',
      ],
    },
  ],
  es: {
    title: 'Confianza entre equipos y áreas',
    subtitle: 'Construye relaciones de trabajo antes de necesitarlas',
    slides: [
      {
        kind: 'cover',
        title: 'Confianza entre equipos y áreas',
        body: 'Tu equipo puede confiar plenamente en ti y aun así chocar con el equipo de al lado. La mayor parte de la fricción entre equipos no es mala intención. Es falta de contexto y falta de relación.',
      },
      {
        kind: 'idea',
        title: 'Los silos se forman alrededor de historias',
        body: 'Cuando los equipos casi no hablan, cada uno construye una historia sobre el otro: “son lentos”, “nunca escuchan”, “solo les importan sus números”. Esas historias determinan cómo se lee cada correo. La solución empieza con más contacto y mejor información, no con más reglas.',
      },
      {
        kind: 'idea',
        title: 'Invierte antes del momento crítico',
        body: 'El peor momento para conocer a un equipo aliado es en medio de un problema. Construye la relación cuando hay poco en juego, para tener buena voluntad a la que recurrir cuando algo salga mal.',
        bullets: [
          'Reúnete 20 minutos con tu par para conocer sus metas y presiones',
          'Invita a alguien de ese equipo a una de tus reuniones',
          'Comparte borradores tempranos que les afecten, no solo planes finales',
        ],
      },
      {
        kind: 'idea',
        title: 'Modela el tono que quieres en tu equipo',
        body: 'Tu equipo nota cómo hablas de otros grupos. Si bromeas sobre “esos de finanzas”, tu equipo hará lo mismo. Habla de otros equipos con curiosidad y justicia, y corrige la historia con suavidad cuando escuches culpas.',
        bullets: [
          'Supón una razón antes de suponer un motivo',
          'Reconoce por su nombre a otros equipos cuando ayudan',
          'Plantea los problemas directamente con el otro líder, sin rodeos',
        ],
      },
      {
        kind: 'example',
        title: 'Cuando otro equipo falla en una entrega',
        instead: '“Lo de siempre. Operaciones volvió a fallar.”',
        tryThis: '“Operaciones no hizo la entrega. Antes de decidir qué significa, le preguntaré a su líder qué se lo impidió y cómo podemos facilitarlo.”',
        why: 'Culpar endurece el silo y enseña a tu equipo a hacer lo mismo. La curiosidad abre un canal y a menudo revela una falla de proceso que se puede corregir.',
      },
      {
        kind: 'check',
        question: 'Tu equipo se queja una y otra vez de que el equipo de producto cambia las prioridades sin avisar. ¿Qué deberías hacer primero?',
        options: [
          'Decirle a tu equipo que lo escuchas y que lo seguirás protegiendo del caos',
          'Enviar a la líder de producto una lista escrita de cada cambio que causó retrabajo',
          'Pedir a la líder de producto una llamada breve para entender sus presiones de planificación',
          'Pedir a tu equipo que registre cada cambio para tener pruebas ante la dirección',
        ],
        answer: 2,
        explain: 'Una conversación directa y curiosa construye la relación y el contexto que necesitas para resolver el patrón juntos. Proteger a tu equipo suena considerado, pero refuerza la historia de “nosotros contra ellos”.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Elige un equipo del que dependas. Envía a su líder una nota breve pidiendo 20 minutos para conocer hacia dónde trabajan y qué les complica el trabajo. Lleva una pregunta y escucha más de lo que hablas.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Los silos se alimentan de falta de contexto e historias sin verificar.',
          'Construye relaciones con equipos aliados antes de necesitarlas.',
          'Cómo hablas de otros equipos marca el tono del tuyo.',
        ],
      },
    ],
  },
  fr: {
    title: 'La confiance entre équipes et entre silos',
    subtitle: 'Construire des relations de travail avant d’en avoir besoin',
    slides: [
      {
        kind: 'cover',
        title: 'La confiance entre équipes et entre silos',
        body: 'Votre équipe peut vous faire entièrement confiance et pourtant se heurter à l’équipe voisine. La plupart des frictions entre équipes ne viennent pas de mauvaises intentions. Elles viennent d’un manque de contexte et de relations.',
      },
      {
        kind: 'idea',
        title: 'Les silos se construisent autour d’histoires',
        body: 'Quand les équipes se parlent peu, chacune se raconte une histoire sur l’autre : « ils sont lents », « ils n’écoutent jamais », « seuls leurs chiffres comptent ». Ces histoires orientent la lecture de chaque e-mail. La solution commence par plus de contact et une meilleure information, pas par plus de règles.',
      },
      {
        kind: 'idea',
        title: 'Investissez avant le coup de feu',
        body: 'Le pire moment pour rencontrer une équipe partenaire, c’est au milieu d’un problème. Construisez la relation quand les enjeux sont faibles, pour disposer d’un capital de bonne volonté quand quelque chose tourne mal.',
        bullets: [
          'Rencontrez votre homologue 20 minutes pour connaître ses objectifs et ses contraintes',
          'Invitez une personne de cette équipe à l’une de vos réunions',
          'Partagez les premières versions qui les concernent, pas seulement les plans finaux',
        ],
      },
      {
        kind: 'idea',
        title: 'Incarnez le ton que vous attendez de votre équipe',
        body: 'Votre équipe remarque comment vous parlez des autres groupes. Si vous plaisantez sur « ceux de la finance », elle fera de même. Parlez des autres équipes avec curiosité et équité, et corrigez l’histoire avec douceur quand vous entendez des reproches.',
        bullets: [
          'Supposez une raison avant de supposer une intention',
          'Citez nommément les autres équipes quand elles aident',
          'Abordez les problèmes directement avec l’autre responsable, sans le contourner',
        ],
      },
      {
        kind: 'example',
        title: 'Quand une autre équipe rate une passation',
        instead: '« Comme d’habitude. Les opérations ont encore laissé tomber. »',
        tryThis: '« Les opérations ont manqué la passation. Avant de conclure quoi que ce soit, je vais demander à leur responsable ce qui a bloqué et comment leur faciliter la tâche. »',
        why: 'Chercher un coupable renforce le silo et apprend à votre équipe à faire de même. La curiosité ouvre un canal et révèle souvent un problème de processus facile à corriger.',
      },
      {
        kind: 'check',
        question: 'Votre équipe se plaint sans cesse que l’équipe produit change les priorités sans prévenir. Que devriez-vous faire en premier ?',
        options: [
          'Dire à votre équipe que vous l’entendez et que vous continuerez à la protéger du chaos',
          'Envoyer à la responsable produit la liste écrite de chaque changement ayant causé des reprises',
          'Proposer à la responsable produit un court échange pour comprendre ses contraintes de planification',
          'Demander à votre équipe de consigner chaque changement pour avoir des preuves face à la direction',
        ],
        answer: 2,
        explain: 'Une conversation directe et curieuse crée la relation et le contexte nécessaires pour régler le problème ensemble. Protéger votre équipe paraît bienveillant, mais renforce l’histoire du « nous contre eux ».',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Choisissez une équipe dont vous dépendez. Envoyez à son responsable un mot bref pour demander 20 minutes afin de comprendre ses objectifs et ce qui complique son travail. Venez avec une question et écoutez plus que vous ne parlez.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Les silos se nourrissent du manque de contexte et d’histoires jamais vérifiées.',
          'Construisez des relations avec les équipes partenaires avant d’en avoir besoin.',
          'Votre façon de parler des autres équipes donne le ton à la vôtre.',
        ],
      },
    ],
  },
};

export default lesson;
