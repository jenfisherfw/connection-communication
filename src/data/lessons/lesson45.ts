import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-45',
  week: 45,
  focus: 'communication',
  minutes: 4,
  title: 'Telling a story that moves people',
  subtitle: 'Turn facts into a short, true story that leads to action',
  slides: [
    {
      kind: 'cover',
      title: 'Telling a story that moves people',
      body: 'You have the data, the slides, and a solid case, yet the room stays flat. Facts inform people, but a well told story is what helps them remember and act.',
    },
    {
      kind: 'idea',
      title: 'Start with a person, not a strategy',
      body: 'Abstract goals are hard to feel. A real moment with a real person, like a customer, a colleague, or your earlier self, gives people something to picture. Keep it true, and ask permission if the story belongs to someone else.',
    },
    {
      kind: 'idea',
      title: 'Use a simple shape',
      body: 'Most strong stories follow the same arc. Someone faced a challenge, something was at stake, a choice was made, and something changed. You can tell that in under a minute.',
      bullets: ['The moment: where and who', 'The tension: what was at stake', 'The turn: what happened or was decided', 'The point: why it matters for us now'],
    },
    {
      kind: 'idea',
      title: 'Connect it to the ask',
      body: 'A story without a point is just entertainment. End by linking it clearly to what you need from people now. One sentence is enough: "That’s why I’m asking each of you to..."',
    },
    {
      kind: 'example',
      title: 'Make the number human',
      instead: '"Customer satisfaction dropped four points last quarter, so we need to improve response times."',
      tryThis: '"Last month a customer waited six days for an answer about a billing error. She told us she felt invisible. That’s why we’re setting a two day response goal."',
      why: 'The number is still true, but the story makes it human. People act on what they can picture.',
    },
    {
      kind: 'check',
      question: 'You’re introducing a new handoff checklist to a team that feels it just adds paperwork. Which opening is most likely to move them?',
      options: [
        'Share three statistics on handoff errors across the industry to show how common the problem is.',
        'Tell a dramatic story from another company, adding a few details to make it more memorable.',
        'Open with a warm thank you for their hard work, then walk through each step of the checklist.',
        'Briefly share a real handoff here that went wrong, names left out, then link it to the checklist.',
      ],
      answer: 3,
      explain: 'A true, local story makes the problem real for this team and connects straight to the ask. Statistics inform but rarely move people. Embellishing a story risks trust if anyone checks, and a warm thank you does not answer why the change matters.',
    },
    {
      kind: 'action',
      title: 'Find your one minute story',
      body: 'Think of a message you need to deliver soon. Spend 10 minutes finding one true moment that shows why it matters. Write it in four lines: moment, tension, turn, point. Practice it once out loud and time it.',
    },
    {
      kind: 'takeaway',
      title: 'Stories move people',
      bullets: [
        'Start with a real person and a real moment.',
        'Follow a simple arc: moment, tension, turn, point.',
        'Always tie the story to a clear ask.',
      ],
    },
  ],
  es: {
    title: 'Contar una historia que mueva a la gente',
    subtitle: 'Convierte los datos en una historia breve y verdadera que lleve a la acción',
    slides: [
      {
        kind: 'cover',
        title: 'Contar una historia que mueva a la gente',
        body: 'Tienes los datos, las diapositivas y un buen argumento, pero la sala sigue apagada. Los datos informan, pero una historia bien contada es lo que ayuda a recordar y a actuar.',
      },
      {
        kind: 'idea',
        title: 'Empieza con una persona, no con una estrategia',
        body: 'Las metas abstractas cuestan sentirlas. Un momento real con una persona real, como un cliente, un colega o tú mismo en el pasado, le da a la gente algo que imaginar. Que sea verdadera, y pide permiso si la historia es de otra persona.',
      },
      {
        kind: 'idea',
        title: 'Usa una estructura sencilla',
        body: 'La mayoría de las buenas historias siguen el mismo arco. Alguien enfrentó un desafío, algo estaba en juego, se tomó una decisión y algo cambió. Puedes contarlo en menos de un minuto.',
        bullets: ['El momento: dónde y quién', 'La tensión: qué estaba en juego', 'El giro: qué pasó o qué se decidió', 'El punto: por qué nos importa ahora'],
      },
      {
        kind: 'idea',
        title: 'Conéctala con tu pedido',
        body: 'Una historia sin propósito es solo entretenimiento. Termina vinculándola con claridad a lo que necesitas ahora de la gente. Basta una oración: “Por eso les pido a cada uno que...”',
      },
      {
        kind: 'example',
        title: 'Dale rostro al número',
        instead: '“La satisfacción de los clientes bajó cuatro puntos el último trimestre, así que debemos mejorar los tiempos de respuesta.”',
        tryThis: '“El mes pasado, una clienta esperó seis días una respuesta sobre un error de facturación. Nos dijo que se sintió invisible. Por eso fijamos una meta de respuesta en dos días.”',
        why: 'El número sigue siendo cierto, pero la historia lo vuelve humano. La gente actúa sobre lo que puede imaginar.',
      },
      {
        kind: 'check',
        question: 'Vas a presentar una nueva lista de verificación para los traspasos de trabajo a un equipo que siente que solo agrega papeleo. ¿Qué apertura tiene más probabilidades de moverlos?',
        options: [
          'Compartir tres estadísticas sobre errores en traspasos en la industria para mostrar lo común que es.',
          'Contar una historia impactante de otra empresa, agregando algunos detalles para que se recuerde mejor.',
          'Empezar agradeciendo con calidez su esfuerzo y luego repasar cada paso de la lista de verificación.',
          'Contar brevemente un traspaso real que salió mal aquí, sin nombres, y vincularlo con la lista.',
        ],
        answer: 3,
        explain: 'Una historia verdadera y cercana hace que el problema sea real para este equipo y conecta directo con el pedido. Las estadísticas informan, pero rara vez mueven. Adornar una historia pone en riesgo la confianza si alguien la verifica, y un agradecimiento cálido no explica por qué importa el cambio.',
      },
      {
        kind: 'action',
        title: 'Encuentra tu historia de un minuto',
        body: 'Piensa en un mensaje que debas dar pronto. Dedica 10 minutos a encontrar un momento verdadero que muestre por qué importa. Escríbelo en cuatro líneas: momento, tensión, giro, punto. Practícalo una vez en voz alta y mide el tiempo.',
      },
      {
        kind: 'takeaway',
        title: 'Las historias mueven a la gente',
        bullets: [
          'Empieza con una persona real y un momento real.',
          'Sigue un arco sencillo: momento, tensión, giro, punto.',
          'Vincula siempre la historia con un pedido claro.',
        ],
      },
    ],
  },
  fr: {
    title: 'Raconter une histoire qui fait bouger',
    subtitle: 'Transformer des faits en une histoire courte et vraie qui mène à l’action',
    slides: [
      {
        kind: 'cover',
        title: 'Raconter une histoire qui fait bouger',
        body: 'Vous avez les données, les diapositives et un argumentaire solide, et pourtant la salle reste de marbre. Les faits informent, mais une histoire bien racontée aide à se souvenir et à agir.',
      },
      {
        kind: 'idea',
        title: 'Partez d’une personne, pas d’une stratégie',
        body: 'Les objectifs abstraits se ressentent mal. Un moment réel avec une personne réelle, un client, un collègue ou vous-même par le passé, donne aux gens quelque chose à se représenter. Restez fidèle aux faits et demandez l’accord de la personne si l’histoire est la sienne.',
      },
      {
        kind: 'idea',
        title: 'Utilisez une structure simple',
        body: 'La plupart des bonnes histoires suivent le même arc. Quelqu’un a fait face à un défi, quelque chose était en jeu, un choix a été fait et quelque chose a changé. Cela tient en moins d’une minute.',
        bullets: ['Le moment : où et qui', 'La tension : ce qui était en jeu', 'Le tournant : ce qui s’est passé ou a été décidé', 'Le sens : pourquoi c’est important pour nous aujourd’hui'],
      },
      {
        kind: 'idea',
        title: 'Reliez-la à votre demande',
        body: 'Une histoire sans message n’est qu’un divertissement. Terminez en la reliant clairement à ce que vous attendez des gens maintenant. Une phrase suffit : « C’est pourquoi je demande à chacun de vous de... »',
      },
      {
        kind: 'example',
        title: 'Donnez un visage au chiffre',
        instead: '« La satisfaction client a baissé de quatre points le trimestre dernier, nous devons donc améliorer nos délais de réponse. »',
        tryThis: '« Le mois dernier, une cliente a attendu six jours une réponse sur une erreur de facturation. Elle nous a dit qu’elle s’était sentie invisible. C’est pourquoi nous fixons un objectif de réponse en deux jours. »',
        why: 'Le chiffre reste vrai, mais l’histoire le rend humain. Les gens agissent sur ce qu’ils peuvent se représenter.',
      },
      {
        kind: 'check',
        question: 'Vous présentez une nouvelle liste de contrôle des passations à une équipe qui y voit surtout de la paperasse. Quelle ouverture a le plus de chances de la faire bouger ?',
        options: [
          'Partager trois statistiques sur les erreurs de passation dans le secteur pour montrer leur fréquence.',
          'Raconter une histoire marquante d’une autre entreprise, en ajoutant quelques détails pour la rendre mémorable.',
          'Commencer par remercier chaleureusement l’équipe, puis présenter chaque étape de la liste de contrôle.',
          'Raconter brièvement une passation réelle qui a mal tourné ici, sans noms, puis la relier à la liste.',
        ],
        answer: 3,
        explain: 'Une histoire vraie et proche rend le problème concret pour cette équipe et mène directement à la demande. Les statistiques informent mais font rarement bouger. Enjoliver une histoire met la confiance en jeu si quelqu’un vérifie, et un remerciement chaleureux n’explique pas pourquoi le changement compte.',
      },
      {
        kind: 'action',
        title: 'Trouvez votre histoire d’une minute',
        body: 'Pensez à un message que vous devez bientôt faire passer. Prenez 10 minutes pour trouver un moment vrai qui montre pourquoi il compte. Écrivez-le en quatre lignes : moment, tension, tournant, sens. Entraînez-vous une fois à voix haute en vous chronométrant.',
      },
      {
        kind: 'takeaway',
        title: 'Les histoires font bouger',
        bullets: [
          'Partez d’une personne réelle et d’un moment réel.',
          'Suivez un arc simple : moment, tension, tournant, sens.',
          'Reliez toujours l’histoire à une demande claire.',
        ],
      },
    ],
  },
};

export default lesson;
