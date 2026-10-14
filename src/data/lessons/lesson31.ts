import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-31',
  week: 31,
  focus: 'communication',
  minutes: 3,
  title: 'Building a feedback culture on your team',
  subtitle: 'Make feedback normal, frequent, and two way',
  slides: [
    {
      kind: 'cover',
      title: 'Building a feedback culture on your team',
      body: 'You can give great feedback and still lead a team where nobody gives it to each other. A feedback culture means it flows in every direction, not just from you.',
    },
    {
      kind: 'idea',
      title: 'Make it small and frequent',
      body: 'Feedback feels heavy when it only shows up in reviews or after something goes wrong. When it comes often, in small doses, it stops feeling like a verdict and starts feeling like help. Aim for many light touches instead of a few big conversations.',
      bullets: [
        'Quick notes right after a meeting or a handoff',
        'Both what worked and what to adjust',
        'Short enough that nobody needs to prepare',
      ],
    },
    {
      kind: 'idea',
      title: 'Ask for it first, and react well',
      body: 'Your team learns how safe feedback is by watching what happens when someone gives it to you. Ask for it specifically, thank the person, and show what you changed. One defensive reaction can undo months of invitations.',
    },
    {
      kind: 'idea',
      title: 'Build it into how the team works',
      body: 'Do not rely on people to remember. Add short feedback moments to routines you already have, so giving it becomes part of the work.',
      bullets: [
        'A two question review after each project: what helped, what to change',
        'Peer feedback on drafts before they go to you',
        'A standing 1:1 question: "What should I do differently?"',
      ],
    },
    {
      kind: 'example',
      title: 'Asking in a way people can answer',
      instead: '"Any feedback for me? My door is always open."',
      tryThis: '"In today’s planning meeting, what is one thing I did that made it harder for you to speak up?"',
      why: 'A general invitation is easy to dodge. A specific, low stakes question about one recent moment is easy to answer honestly.',
    },
    {
      kind: 'check',
      question: 'You asked your team for feedback, and one person said your meetings run long and feel one sided. What response best builds a feedback culture?',
      options: [
        'Explain that the meetings run long because the topics are complex',
        'Say you really appreciate their honesty and will keep it in mind',
        'Ask everyone else whether they agree before deciding anything',
        'Thank them, name one change you will try, and report back in two weeks',
      ],
      answer: 3,
      explain: 'Thanking, acting, and following up shows that feedback leads somewhere. "I’ll keep it in mind" sounds gracious but signals nothing will change, and polling the group can put the person on the spot.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'At the end of your next team meeting, ask one specific question about how you ran it. Write down what you hear, thank people, and tell them one thing you will change before the next meeting.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Small, frequent feedback feels like help, not judgment.',
        'Your reaction to feedback teaches the team how safe it is.',
        'Build feedback into routines so it does not depend on memory.',
      ],
    },
  ],
  es: {
    title: 'Construir una cultura de feedback en tu equipo',
    subtitle: 'Haz que el feedback sea normal, frecuente y en ambas direcciones',
    slides: [
      {
        kind: 'cover',
        title: 'Construir una cultura de feedback en tu equipo',
        body: 'Puedes dar un feedback excelente y aun así liderar un equipo donde nadie se lo da a los demás. Una cultura de feedback significa que fluye en todas las direcciones, no solo desde ti.',
      },
      {
        kind: 'idea',
        title: 'Hazlo pequeño y frecuente',
        body: 'El feedback pesa cuando solo aparece en las evaluaciones o cuando algo sale mal. Cuando llega a menudo y en dosis pequeñas, deja de sentirse como un veredicto y empieza a sentirse como ayuda. Apunta a muchos toques ligeros en lugar de pocas conversaciones grandes.',
        bullets: [
          'Notas rápidas justo después de una reunión o una entrega',
          'Tanto lo que funcionó como lo que conviene ajustar',
          'Tan breve que nadie necesite prepararse',
        ],
      },
      {
        kind: 'idea',
        title: 'Pídelo primero y reacciona bien',
        body: 'Tu equipo aprende qué tan seguro es dar feedback al ver qué pasa cuando alguien te lo da a ti. Pídelo de forma específica, agradece a la persona y muestra lo que cambiaste. Una sola reacción defensiva puede deshacer meses de invitaciones.',
      },
      {
        kind: 'idea',
        title: 'Intégralo en la forma de trabajar',
        body: 'No dependas de que la gente se acuerde. Agrega momentos breves de feedback a rutinas que ya existen, para que darlo sea parte del trabajo.',
        bullets: [
          'Una revisión de dos preguntas tras cada proyecto: qué ayudó, qué cambiar',
          'Feedback entre pares sobre borradores antes de que lleguen a ti',
          'Una pregunta fija en el 1:1: “¿Qué debería hacer distinto?”',
        ],
      },
      {
        kind: 'example',
        title: 'Pedir de forma que se pueda responder',
        instead: '“¿Algún comentario para mí? Mi puerta siempre está abierta.”',
        tryThis: '“En la reunión de planificación de hoy, ¿qué hice que te dificultó hablar?”',
        why: 'Una invitación general es fácil de esquivar. Una pregunta específica y de bajo riesgo sobre un momento reciente es fácil de responder con honestidad.',
      },
      {
        kind: 'check',
        question: 'Pediste feedback a tu equipo y una persona dijo que tus reuniones se alargan y se sienten unilaterales. ¿Qué respuesta construye mejor una cultura de feedback?',
        options: [
          'Explicar que las reuniones se alargan porque los temas son complejos',
          'Decir que valoras mucho su honestidad y que lo tendrás en cuenta',
          'Preguntar a los demás si están de acuerdo antes de decidir nada',
          'Agradecer, nombrar un cambio que probarás e informar en dos semanas',
        ],
        answer: 3,
        explain: 'Agradecer, actuar y dar seguimiento demuestra que el feedback lleva a algo. “Lo tendré en cuenta” suena amable, pero indica que nada cambiará, y consultar al grupo puede poner a la persona en un aprieto.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Al final de tu próxima reunión de equipo, haz una pregunta específica sobre cómo la dirigiste. Anota lo que escuches, agradece y di una cosa que cambiarás antes de la siguiente reunión.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'El feedback pequeño y frecuente se siente como ayuda, no como juicio.',
          'Tu reacción al feedback le enseña al equipo qué tan seguro es darlo.',
          'Integra el feedback en las rutinas para que no dependa de la memoria.',
        ],
      },
    ],
  },
  fr: {
    title: 'Construire une culture du feedback dans votre équipe',
    subtitle: 'Rendre le feedback normal, fréquent et réciproque',
    slides: [
      {
        kind: 'cover',
        title: 'Construire une culture du feedback dans votre équipe',
        body: 'Vous pouvez donner d’excellents feedbacks et diriger quand même une équipe où personne ne s’en donne. Une culture du feedback, c’est un feedback qui circule dans tous les sens, pas seulement depuis vous.',
      },
      {
        kind: 'idea',
        title: 'Petit et fréquent',
        body: 'Le feedback paraît lourd quand il n’apparaît qu’aux entretiens annuels ou après un problème. Quand il arrive souvent, par petites touches, il cesse de ressembler à un verdict et devient une aide. Visez beaucoup de touches légères plutôt que quelques grandes conversations.',
        bullets: [
          'Des remarques rapides juste après une réunion ou une passation',
          'Ce qui a fonctionné comme ce qu’il faut ajuster',
          'Assez court pour que personne n’ait à se préparer',
        ],
      },
      {
        kind: 'idea',
        title: 'Demandez-le en premier, et réagissez bien',
        body: 'Votre équipe mesure le risque de donner du feedback en observant ce qui se passe quand quelqu’un vous en donne. Demandez-le de façon précise, remerciez la personne et montrez ce que vous avez changé. Une seule réaction défensive peut effacer des mois d’invitations.',
      },
      {
        kind: 'idea',
        title: 'Intégrez-le à la façon de travailler',
        body: 'Ne comptez pas sur la mémoire de chacun. Ajoutez de courts moments de feedback aux routines qui existent déjà, pour que le donner fasse partie du travail.',
        bullets: [
          'Un bilan en deux questions après chaque projet : ce qui a aidé, ce qu’il faut changer',
          'Du feedback entre pairs sur les brouillons avant qu’ils vous parviennent',
          'Une question fixe en 1:1 : « Que devrais-je faire différemment ? »',
        ],
      },
      {
        kind: 'example',
        title: 'Demander de façon à obtenir une réponse',
        instead: '« Des retours pour moi ? Ma porte est toujours ouverte. »',
        tryThis: '« Pendant la réunion de planification d’aujourd’hui, qu’ai-je fait qui vous a rendu plus difficile de prendre la parole ? »',
        why: 'Une invitation générale est facile à esquiver. Une question précise et sans enjeu sur un moment récent est facile à traiter honnêtement.',
      },
      {
        kind: 'check',
        question: 'Vous avez demandé du feedback à votre équipe, et une personne a dit que vos réunions s’éternisent et sont à sens unique. Quelle réponse construit le mieux une culture du feedback ?',
        options: [
          'Expliquer que les réunions durent parce que les sujets sont complexes',
          'Dire que vous appréciez beaucoup sa franchise et que vous en tiendrez compte',
          'Demander aux autres s’ils sont d’accord avant de décider quoi que ce soit',
          'Remercier, nommer un changement à tester et faire un retour dans deux semaines',
        ],
        answer: 3,
        explain: 'Remercier, agir et faire un suivi montre que le feedback mène quelque part. « J’en tiendrai compte » paraît élégant mais signale que rien ne changera, et sonder le groupe peut mettre la personne en difficulté.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'À la fin de votre prochaine réunion d’équipe, posez une question précise sur la façon dont vous l’avez menée. Notez ce que vous entendez, remerciez et annoncez une chose que vous changerez avant la réunion suivante.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Un feedback court et fréquent ressemble à une aide, pas à un jugement.',
          'Votre réaction au feedback apprend à l’équipe s’il est sûr d’en donner.',
          'Intégrez le feedback aux routines pour qu’il ne dépende pas de la mémoire.',
        ],
      },
    ],
  },
};

export default lesson;
