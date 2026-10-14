import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-20',
  week: 20,
  focus: 'change',
  minutes: 4,
  title: 'Bring skeptics in early',
  subtitle: 'Turn doubt into a better plan',
  slides: [
    {
      kind: 'cover',
      title: 'Bring skeptics in early',
      body: 'Every change has its doubters, and it is tempting to work around them until the plan is done. But skeptics left out early often become blockers later.',
    },
    {
      kind: 'idea',
      title: 'Skeptics see risks you miss',
      body: 'The people who question a change often know the work best. Their doubts can point to real gaps in the plan: a process that will break, a customer who will notice, a workload nobody counted. Treat skepticism as data before you treat it as resistance.',
    },
    {
      kind: 'idea',
      title: 'Invite them before the plan is fixed',
      body: 'Involvement after everything is locked feels like theater. Bring skeptics in while there is still room to change something real, even if the overall direction is set. Be honest about what is open and what is not.',
      bullets: [
        'Say what is decided and what is still open',
        'Ask them to find the weak spots',
        'Show what you changed because of them',
      ],
    },
    {
      kind: 'idea',
      title: 'Give them a real role',
      body: 'A skeptic who helps test or pilot a plan often becomes its most credible voice. Peers trust them because they were not easy to convince. Not everyone will come around, and that is fine. A fair hearing matters more than agreement.',
    },
    {
      kind: 'example',
      title: 'Reaching out to a known doubter',
      instead: '"I know you have concerns, but this is happening, so I need you on board."',
      tryThis: '"You’ve seen rollouts like this go wrong before. Before we finalize, would you poke holes in the plan with me? I want to catch what we’re missing."',
      why: 'It respects their experience, gives them a real job, and invites concerns while they can still shape the outcome.',
    },
    {
      kind: 'check',
      question: 'Mei, a respected senior analyst, keeps raising doubts about a new reporting process in team meetings. Launch is six weeks away. What is the best next step?',
      options: [
        'Thank her publicly for her passion and reassure the team that leaders already thought it through.',
        'Meet with her one on one, ask what risks she sees, and invite her to help test it before launch.',
        'Ask her to hold her concerns until after launch so the team can stay positive and focused for now.',
        'Move ahead quietly and plan to win her over later, once early results start to prove the process.',
      ],
      answer: 1,
      explain: 'Meeting privately and giving her a real role turns her knowledge into an asset while there is still time to adjust. Public thanks with reassurance sounds kind but brushes her concerns aside. Delaying or working around her lets both the risks and the frustration grow.',
    },
    {
      kind: 'action',
      title: 'Have one skeptic conversation',
      body: 'Name one person who doubts a change you are leading. This week, invite them to a 15 minute conversation built on one question: "What do you think could go wrong?" Listen, take notes, and tell them one thing you will look into.',
    },
    {
      kind: 'takeaway',
      title: 'Skeptics as partners',
      bullets: [
        'Treat doubts as data about real risks',
        'Invite skeptics while the plan can still change',
        'Give them a role and show what you changed',
      ],
    },
  ],
  es: {
    title: 'Suma a los escépticos desde el principio',
    subtitle: 'Convierte la duda en un mejor plan',
    slides: [
      {
        kind: 'cover',
        title: 'Suma a los escépticos desde el principio',
        body: 'Todo cambio tiene sus escépticos, y es tentador rodearlos hasta que el plan esté listo. Pero los escépticos que quedan fuera al inicio suelen convertirse en bloqueos más adelante.',
      },
      {
        kind: 'idea',
        title: 'Los escépticos ven riesgos que tú no ves',
        body: 'Quienes cuestionan un cambio suelen conocer mejor el trabajo. Sus dudas pueden señalar huecos reales en el plan: un proceso que se va a romper, un cliente que lo va a notar, una carga de trabajo que nadie contó. Trata el escepticismo como información antes de tratarlo como resistencia.',
      },
      {
        kind: 'idea',
        title: 'Invítalos antes de cerrar el plan',
        body: 'Participar cuando todo ya está cerrado se siente como teatro. Suma a los escépticos mientras todavía se puede cambiar algo real, aunque la dirección general esté definida. Sé honesto sobre qué está abierto y qué no.',
        bullets: [
          'Di qué está decidido y qué sigue abierto',
          'Pídeles que encuentren los puntos débiles',
          'Muestra qué cambiaste gracias a ellos',
        ],
      },
      {
        kind: 'idea',
        title: 'Dales un rol real',
        body: 'Un escéptico que ayuda a probar o pilotear un plan suele convertirse en su voz más creíble. Sus pares le creen porque no fue fácil de convencer. No todos cambiarán de opinión, y está bien. Una escucha justa importa más que el acuerdo.',
      },
      {
        kind: 'example',
        title: 'Al acercarte a alguien que duda',
        instead: '“Sé que tienes dudas, pero esto va a pasar, así que necesito que te subas al barco.”',
        tryThis: '“Ya has visto implementaciones así salir mal. Antes de cerrar, ¿me ayudas a encontrarle fallas al plan? Quiero detectar lo que se nos escapa.”',
        why: 'Respeta su experiencia, le da una tarea real e invita sus inquietudes mientras todavía pueden influir en el resultado.',
      },
      {
        kind: 'check',
        question: 'Mei, una analista sénior muy respetada, plantea dudas sobre un nuevo proceso de reportes en cada reunión del equipo. Faltan seis semanas para el lanzamiento. ¿Cuál es el mejor siguiente paso?',
        options: [
          'Agradecerle en público su pasión y asegurar al equipo que los líderes ya lo pensaron bien.',
          'Reunirte con ella a solas, preguntarle qué riesgos ve e invitarla a probarlo antes del lanzamiento.',
          'Pedirle que guarde sus dudas hasta después del lanzamiento para que el equipo siga positivo y enfocado.',
          'Avanzar sin hacer ruido y planear convencerla después, cuando los primeros resultados prueben el proceso.',
        ],
        answer: 1,
        explain: 'Reunirte en privado y darle un rol real convierte su conocimiento en un recurso mientras aún hay tiempo de ajustar. Agradecerle en público y tranquilizar al equipo suena amable, pero deja de lado sus inquietudes. Postergar o rodearla hace crecer tanto los riesgos como la frustración.',
      },
      {
        kind: 'action',
        title: 'Ten una conversación con un escéptico',
        body: 'Piensa en una persona que duda de un cambio que lideras. Esta semana, invítala a una conversación de 15 minutos con una sola pregunta: “¿Qué crees que podría salir mal?” Escucha, toma notas y dile una cosa que vas a revisar.',
      },
      {
        kind: 'takeaway',
        title: 'Los escépticos como aliados',
        bullets: [
          'Trata las dudas como información sobre riesgos reales',
          'Invita a los escépticos mientras el plan aún puede cambiar',
          'Dales un rol y muestra qué cambiaste',
        ],
      },
    ],
  },
  fr: {
    title: 'Associer les sceptiques tôt',
    subtitle: 'Transformer le doute en un meilleur plan',
    slides: [
      {
        kind: 'cover',
        title: 'Associez les sceptiques tôt',
        body: 'Chaque changement a ses sceptiques, et il est tentant de les contourner jusqu’à ce que le plan soit bouclé. Mais les sceptiques tenus à l’écart au début deviennent souvent des freins plus tard.',
      },
      {
        kind: 'idea',
        title: 'Les sceptiques voient des risques que vous ne voyez pas',
        body: 'Ceux qui questionnent un changement connaissent souvent le mieux le travail. Leurs doutes peuvent révéler de vraies failles : un processus qui va casser, un client qui va le remarquer, une charge de travail que personne n’a comptée. Traitez le scepticisme comme une information avant de le traiter comme une résistance.',
      },
      {
        kind: 'idea',
        title: 'Invitez-les avant que le plan soit figé',
        body: 'Participer quand tout est déjà verrouillé ressemble à une mise en scène. Associez les sceptiques tant qu’il est encore possible de changer quelque chose de réel, même si la direction générale est fixée. Soyez honnête sur ce qui est ouvert et ce qui ne l’est pas.',
        bullets: [
          'Dites ce qui est décidé et ce qui reste ouvert',
          'Demandez-leur de trouver les points faibles',
          'Montrez ce que vous avez changé grâce à eux',
        ],
      },
      {
        kind: 'idea',
        title: 'Donnez-leur un vrai rôle',
        body: 'Un sceptique qui aide à tester ou à piloter un plan en devient souvent la voix la plus crédible. Ses pairs lui font confiance parce qu’il n’a pas été facile à convaincre. Tout le monde ne changera pas d’avis, et c’est normal. Une écoute équitable compte plus que l’accord.',
      },
      {
        kind: 'example',
        title: 'Aller vers une personne qui doute',
        instead: '« Je sais que vous avez des réserves, mais ça va se faire, alors j’ai besoin que vous suiviez. »',
        tryThis: '« Vous avez déjà vu des déploiements comme celui-ci mal tourner. Avant de finaliser, voulez-vous chercher les failles du plan avec moi ? Je veux repérer ce qui nous échappe. »',
        why: 'Elle respecte son expérience, lui confie une vraie mission et accueille ses réserves tant qu’elles peuvent encore influencer le résultat.',
      },
      {
        kind: 'check',
        question: 'Mei, une analyste senior très respectée, exprime des doutes sur un nouveau processus de reporting à chaque réunion d’équipe. Le lancement est dans six semaines. Quelle est la meilleure prochaine étape ?',
        options: [
          'La remercier publiquement pour sa passion et assurer à l’équipe que la direction a déjà tout réfléchi.',
          'La voir en tête-à-tête, lui demander quels risques elle voit et l’inviter à le tester avant le lancement.',
          'Lui demander de garder ses doutes jusqu’après le lancement pour que l’équipe reste positive et concentrée.',
          'Avancer discrètement et prévoir de la convaincre plus tard, quand les premiers résultats prouveront le processus.',
        ],
        answer: 1,
        explain: 'La voir en privé et lui confier un vrai rôle transforme son savoir en atout tant qu’il reste du temps pour ajuster. Les remerciements publics avec des paroles rassurantes semblent aimables mais écartent ses réserves. Attendre ou la contourner fait grandir à la fois les risques et la frustration.',
      },
      {
        kind: 'action',
        title: 'Ayez une conversation avec un sceptique',
        body: 'Pensez à une personne qui doute d’un changement que vous menez. Cette semaine, proposez-lui un échange de 15 minutes autour d’une seule question : « Qu’est-ce qui pourrait mal tourner, selon vous ? » Écoutez, prenez des notes et dites-lui une chose que vous allez examiner.',
      },
      {
        kind: 'takeaway',
        title: 'Les sceptiques comme partenaires',
        bullets: [
          'Traitez les doutes comme des informations sur des risques réels',
          'Associez les sceptiques tant que le plan peut encore changer',
          'Donnez-leur un rôle et montrez ce que vous avez changé',
        ],
      },
    ],
  },
};

export default lesson;
