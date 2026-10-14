import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-44',
  week: 44,
  focus: 'change',
  minutes: 4,
  title: 'Shifting a culture one behavior at a time',
  subtitle: 'Small, visible behaviors change culture more than big announcements',
  slides: [
    {
      kind: 'cover',
      title: 'Shifting a culture one behavior at a time',
      body: 'Everyone agrees the culture should change, yet nothing moves. Values posters and big announcements rarely change how people actually work on a Tuesday afternoon.',
    },
    {
      kind: 'idea',
      title: 'Make it a behavior you can see',
      body: '"Be more collaborative" is too vague to practice. Pick one observable behavior instead, like "share drafts when they are half done, not finished." If two people could watch a meeting and agree whether it happened, it is specific enough.',
    },
    {
      kind: 'idea',
      title: 'Model it first, and out loud',
      body: 'People watch what leaders do far more closely than what they say. When you practice the new behavior, name it so others notice: "I’m sharing this early on purpose, so you can shape it." Your example gives everyone else permission.',
    },
    {
      kind: 'idea',
      title: 'Notice it, reward it, and stop tolerating the opposite',
      body: 'Culture shifts when the new behavior gets noticed and the old one quietly stops working. Thank people specifically when they try it. When the old pattern shows up, address it calmly and privately, every time.',
      bullets: ['Recognize the behavior, not just the result', 'Remove small barriers that make it hard', 'Stay consistent, especially under pressure'],
    },
    {
      kind: 'example',
      title: 'From slogan to practice',
      instead: '"We need to be a more open, feedback friendly culture."',
      tryThis: '"For the next month, let’s end every project review with one thing that worked and one thing to change. I’ll go first."',
      why: 'A concrete, time bound behavior is easy to try and easy to notice. Going first shows that it is safe.',
    },
    {
      kind: 'check',
      question: 'You want your team to raise problems earlier. In a meeting, a junior analyst flags a risk that could delay a launch you care about. Which response best shifts the culture?',
      options: [
        'Thank them for flagging it early, then ask what they think the team should look at first.',
        'Reassure them warmly that the launch is in good shape and the team has it covered.',
        'Note the risk and say you will discuss it offline so the meeting can stay on track.',
        'Ask why it was not raised sooner, so the team learns to flag risks even earlier.',
      ],
      answer: 0,
      explain: 'The moment someone tries the new behavior is when the culture gets decided. Thanking them and engaging with the risk rewards it in public. Reassurance dismisses the concern, taking it offline can look like burying it, and asking why it was late punishes the very behavior you want.',
    },
    {
      kind: 'action',
      title: 'Choose one behavior and go first',
      body: 'Write down one behavior you want to see more of on your team, in words specific enough to observe. This week, do it yourself at least once in front of the team and name it out loud. Then watch for the first person who tries it and thank them specifically.',
    },
    {
      kind: 'takeaway',
      title: 'Culture moves one behavior at a time',
      bullets: [
        'Choose a behavior people can see, not a value on a wall.',
        'Model it out loud so others know it is safe.',
        'Reward it every time, and stop tolerating the opposite.',
      ],
    },
  ],
  es: {
    title: 'Transformar la cultura, un comportamiento a la vez',
    subtitle: 'Los comportamientos pequeños y visibles cambian la cultura más que los grandes anuncios',
    slides: [
      {
        kind: 'cover',
        title: 'Transformar la cultura, un comportamiento a la vez',
        body: 'Todos coinciden en que la cultura debe cambiar, pero nada se mueve. Los carteles de valores y los grandes anuncios rara vez cambian cómo trabaja la gente un martes por la tarde.',
      },
      {
        kind: 'idea',
        title: 'Conviértelo en un comportamiento visible',
        body: '“Sé más colaborativo” es demasiado vago para practicarlo. Elige un comportamiento observable, como “comparte los borradores a medio hacer, no terminados”. Si dos personas pueden observar una reunión y coincidir en si ocurrió, es lo bastante específico.',
      },
      {
        kind: 'idea',
        title: 'Modélalo primero y en voz alta',
        body: 'La gente observa lo que hacen los líderes mucho más que lo que dicen. Cuando practiques el nuevo comportamiento, nómbralo para que los demás lo noten: “Lo comparto temprano a propósito, para que puedan darle forma”. Tu ejemplo les da permiso a los demás.',
      },
      {
        kind: 'idea',
        title: 'Nótalo, recompénsalo y deja de tolerar lo contrario',
        body: 'La cultura cambia cuando el nuevo comportamiento se nota y el anterior deja de funcionar sin hacer ruido. Agradece de forma específica cuando alguien lo intenta. Cuando aparezca el patrón anterior, abórdalo con calma y en privado, cada vez.',
        bullets: ['Reconoce el comportamiento, no solo el resultado', 'Elimina pequeñas barreras que lo dificultan', 'Sé constante, sobre todo bajo presión'],
      },
      {
        kind: 'example',
        title: 'Del lema a la práctica',
        instead: '“Necesitamos ser una cultura más abierta a la retroalimentación.”',
        tryThis: '“Durante el próximo mes, cerremos cada revisión de proyecto con algo que funcionó y algo que cambiar. Yo empiezo.”',
        why: 'Un comportamiento concreto y con plazo es fácil de probar y fácil de notar. Empezar tú demuestra que es seguro.',
      },
      {
        kind: 'check',
        question: 'Quieres que tu equipo plantee los problemas antes. En una reunión, un analista junior señala un riesgo que podría retrasar un lanzamiento que te importa. ¿Qué respuesta impulsa mejor la cultura?',
        options: [
          'Agradecerle por avisar a tiempo y luego preguntarle qué cree que el equipo debería revisar primero.',
          'Tranquilizarlo con calidez diciendo que el lanzamiento va bien y que el equipo lo tiene controlado.',
          'Tomar nota del riesgo y decir que lo hablarán aparte para que la reunión siga su curso.',
          'Preguntarle por qué no lo planteó antes, para que el equipo aprenda a avisar aún más pronto.',
        ],
        answer: 0,
        explain: 'El momento en que alguien prueba el nuevo comportamiento es cuando se decide la cultura. Agradecer y ocuparte del riesgo lo recompensa en público. Tranquilizar descarta la inquietud, hablarlo aparte puede parecer enterrarlo y preguntar por qué llegó tarde castiga justo el comportamiento que buscas.',
      },
      {
        kind: 'action',
        title: 'Elige un comportamiento y empieza tú',
        body: 'Escribe un comportamiento que quieras ver más en tu equipo, con palabras lo bastante específicas para observarlo. Esta semana, hazlo tú al menos una vez frente al equipo y nómbralo en voz alta. Luego fíjate en la primera persona que lo intente y agradécele de forma específica.',
      },
      {
        kind: 'takeaway',
        title: 'La cultura cambia un comportamiento a la vez',
        bullets: [
          'Elige un comportamiento visible, no un valor en la pared.',
          'Modélalo en voz alta para que los demás sepan que es seguro.',
          'Recompénsalo siempre y deja de tolerar lo contrario.',
        ],
      },
    ],
  },
  fr: {
    title: 'Faire évoluer la culture, un comportement à la fois',
    subtitle: 'De petits comportements visibles changent la culture plus que les grandes annonces',
    slides: [
      {
        kind: 'cover',
        title: 'Faire évoluer la culture, un comportement à la fois',
        body: 'Tout le monde s’accorde à dire que la culture doit changer, et pourtant rien ne bouge. Les affiches de valeurs et les grandes annonces changent rarement la façon dont on travaille vraiment un mardi après-midi.',
      },
      {
        kind: 'idea',
        title: 'Choisissez un comportement visible',
        body: '« Soyez plus collaboratifs » est trop vague pour être pratiqué. Choisissez plutôt un comportement observable, comme « partager les brouillons à moitié faits, pas terminés ». Si deux personnes peuvent observer une réunion et s’accorder sur ce qui s’est passé, c’est assez précis.',
      },
      {
        kind: 'idea',
        title: 'Montrez l’exemple, à voix haute',
        body: 'Les équipes observent ce que font les leaders bien plus que ce qu’ils disent. Quand vous pratiquez le nouveau comportement, nommez-le pour que les autres le remarquent : « Je partage ceci tôt exprès, pour que vous puissiez y contribuer. » Votre exemple donne la permission aux autres.',
      },
      {
        kind: 'idea',
        title: 'Remarquez, valorisez, et ne tolérez plus l’inverse',
        body: 'La culture évolue quand le nouveau comportement est remarqué et que l’ancien cesse discrètement de fonctionner. Remerciez précisément ceux qui essaient. Quand l’ancien réflexe réapparaît, abordez-le calmement et en privé, à chaque fois.',
        bullets: ['Reconnaissez le comportement, pas seulement le résultat', 'Levez les petits obstacles qui le compliquent', 'Restez constant, surtout sous pression'],
      },
      {
        kind: 'example',
        title: 'Du slogan à la pratique',
        instead: '« Nous devons devenir une culture plus ouverte aux retours. »',
        tryThis: '« Pendant le mois qui vient, terminons chaque revue de projet par une chose qui a marché et une chose à changer. Je commence. »',
        why: 'Un comportement concret et limité dans le temps est facile à essayer et à remarquer. Commencer vous-même montre que c’est sans risque.',
      },
      {
        kind: 'check',
        question: 'Vous voulez que votre équipe signale les problèmes plus tôt. En réunion, un analyste junior signale un risque qui pourrait retarder un lancement qui vous tient à cœur. Quelle réponse fait le mieux évoluer la culture ?',
        options: [
          'Le remercier de l’avoir signalé tôt, puis lui demander ce que l’équipe devrait examiner en premier.',
          'Le rassurer chaleureusement en disant que le lancement est sur la bonne voie et que tout est maîtrisé.',
          'Noter le risque et proposer d’en parler en aparté pour que la réunion reste dans les temps.',
          'Lui demander pourquoi il ne l’a pas signalé plus tôt, pour que l’équipe apprenne à anticiper.',
        ],
        answer: 0,
        explain: 'C’est au moment où quelqu’un essaie le nouveau comportement que la culture se joue. Le remercier et traiter le risque le valorise en public. Rassurer balaie l’inquiétude, en parler en aparté peut ressembler à l’enterrer, et demander pourquoi c’est tardif punit précisément le comportement souhaité.',
      },
      {
        kind: 'action',
        title: 'Choisissez un comportement et lancez-vous',
        body: 'Notez un comportement que vous voulez voir davantage dans votre équipe, avec des mots assez précis pour être observés. Cette semaine, pratiquez-le au moins une fois devant l’équipe et nommez-le à voix haute. Puis repérez la première personne qui l’essaie et remerciez-la précisément.',
      },
      {
        kind: 'takeaway',
        title: 'La culture évolue un comportement à la fois',
        bullets: [
          'Choisissez un comportement visible, pas une valeur affichée au mur.',
          'Montrez l’exemple à voix haute pour que chacun sache que c’est sans risque.',
          'Valorisez-le à chaque fois, et ne tolérez plus l’inverse.',
        ],
      },
    ],
  },
};

export default lesson;
