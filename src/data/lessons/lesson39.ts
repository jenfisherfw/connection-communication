import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-39',
  week: 39,
  focus: 'communication',
  minutes: 4,
  title: 'Coaching others through conflict',
  subtitle: 'Help people handle their own tough conversations',
  slides: [
    {
      kind: 'cover',
      title: 'Coaching others through conflict',
      body: 'When someone brings you a conflict with a coworker, the quickest fix is to step in and sort it out. But every time you carry the message for them, you teach the team that conflict is the boss’s job.',
    },
    {
      kind: 'idea',
      title: 'Don’t take the problem off their hands',
      body: 'Your role is to help the person handle the conversation, not to have it for them. Avoid judging who is right after hearing only one side, and avoid passing messages between people. Both feel helpful in the moment and usually make the conflict harder to resolve.',
      bullets: [
        'Listen fully before you respond',
        'Stay curious about the other person’s view too',
        'Keep ownership with the person who came to you',
      ],
    },
    {
      kind: 'idea',
      title: 'Help them get clear',
      body: 'People often arrive with a mix of facts, feelings, and stories about the other person. A few calm questions help them sort it out and find what they actually want. Clarity usually lowers the heat before the real conversation even starts.',
      bullets: [
        '"What happened, exactly?"',
        '"What do you want to be different?"',
        '"What might you have contributed?"',
        '"What would you like them to understand?"',
      ],
    },
    {
      kind: 'example',
      title: 'When they ask you to step in',
      instead: '"Don’t worry about it. I’ll talk to him today."',
      tryThis: '"That sounds frustrating. What would you want him to understand, and how could you open that conversation?"',
      why: 'Acknowledging the feeling keeps trust, and the question puts them back in charge. You can still offer to practice with them or check in after they talk.',
    },
    {
      kind: 'idea',
      title: 'Rehearse, then follow up',
      body: 'A short rehearsal of the first sentence builds confidence and catches blaming words before they come out. Afterward, check in to ask how it went and what they learned. Know your limits too: harassment, discrimination, threats, or safety concerns are not coaching topics. Those go to HR and follow company policy.',
    },
    {
      kind: 'check',
      question: 'Amara tells you that a teammate keeps taking credit for her work in client emails. She asks you to "have a word with him." Nothing she describes involves harassment or safety. What is your best first step?',
      options: [
        'Reassure her that you will handle it with him quietly so she does not have to feel awkward.',
        'Forward her concern to HR right away so the situation is documented and handled formally.',
        'Tell her that you believe her completely and that he has done this kind of thing before.',
        'Acknowledge the frustration, then help her plan what to say to him, and offer to check in after.',
      ],
      answer: 3,
      explain: 'Helping Amara prepare keeps the conversation where it belongs and builds her skill for next time. Handling it for her feels kind but teaches dependence, agreeing with her side can deepen the divide, and HR is for the serious concerns this situation does not involve.',
    },
    {
      kind: 'action',
      title: 'Practice the coaching questions',
      body: 'Write the four questions from this lesson on a sticky note or in your phone. The next time someone brings you a conflict this week, ask at least two of them before you offer any opinion of your own.',
    },
    {
      kind: 'takeaway',
      title: 'Coach the conversation',
      bullets: [
        'Help people have the conversation instead of having it for them',
        'Use questions to separate facts, feelings, and goals',
        'Route harassment, discrimination, threats, and safety to HR',
      ],
    },
  ],
  es: {
    title: 'Acompañar a otros en los conflictos',
    subtitle: 'Ayuda a las personas a manejar sus propias conversaciones difíciles',
    slides: [
      {
        kind: 'cover',
        title: 'Acompañar a otros en los conflictos',
        body: 'Cuando alguien te trae un conflicto con un compañero, la solución más rápida es intervenir y resolverlo. Pero cada vez que llevas el mensaje por esa persona, le enseñas al equipo que los conflictos son trabajo del jefe.',
      },
      {
        kind: 'idea',
        title: 'No te quedes con su problema',
        body: 'Tu papel es ayudar a la persona a manejar la conversación, no tenerla por ella. Evita juzgar quién tiene razón después de escuchar solo una parte y evita pasar mensajes de una persona a otra. Las dos cosas parecen útiles en el momento y casi siempre hacen que el conflicto sea más difícil de resolver.',
        bullets: [
          'Escucha por completo antes de responder',
          'Mantén la curiosidad también por el punto de vista de la otra persona',
          'Deja la responsabilidad en quien vino a hablar contigo',
        ],
      },
      {
        kind: 'idea',
        title: 'Ayúdales a ver con claridad',
        body: 'Muchas veces la gente llega con una mezcla de hechos, emociones e historias sobre la otra persona. Unas preguntas tranquilas les ayudan a ordenar todo y descubrir qué quieren de verdad. La claridad suele bajar la tensión antes de que empiece la conversación real.',
        bullets: [
          '“¿Qué pasó exactamente?”',
          '“¿Qué quieres que cambie?”',
          '“¿Qué pudiste haber aportado tú a la situación?”',
          '“¿Qué te gustaría que entendiera?”',
        ],
      },
      {
        kind: 'example',
        title: 'Cuando te piden que intervengas',
        instead: '“No te preocupes. Hoy hablo con él.”',
        tryThis: '“Suena frustrante. ¿Qué te gustaría que él entendiera y cómo podrías empezar esa conversación?”',
        why: 'Reconocer la emoción mantiene la confianza, y la pregunta le devuelve el control. Aun así, puedes ofrecerte a practicar con la persona o a preguntarle cómo le fue después.',
      },
      {
        kind: 'idea',
        title: 'Ensaya y luego da seguimiento',
        body: 'Un ensayo corto de la primera frase da confianza y detecta palabras de culpa antes de que salgan. Después, pregunta cómo le fue y qué aprendió. Conoce también tus límites: el acoso, la discriminación, las amenazas o los temas de seguridad no se manejan con coaching. Esos van a Recursos Humanos y siguen la política de la empresa.',
      },
      {
        kind: 'check',
        question: 'Amara te cuenta que un compañero sigue atribuyéndose su trabajo en los correos a clientes. Te pide que “hables con él”. Nada de lo que describe implica acoso ni seguridad. ¿Cuál es tu mejor primer paso?',
        options: [
          'Asegurarle que lo resolverás con él discretamente para que ella no tenga que pasar un mal rato.',
          'Enviar su queja a Recursos Humanos de inmediato para que quede documentada y se maneje formalmente.',
          'Decirle que le crees por completo y que él ya ha hecho este tipo de cosas antes.',
          'Reconocer su frustración, ayudarla a planear qué decirle y ofrecerte a hablar con ella después.',
        ],
        answer: 3,
        explain: 'Ayudar a Amara a prepararse mantiene la conversación donde corresponde y desarrolla su habilidad para la próxima vez. Resolverlo por ella parece amable pero crea dependencia, darle la razón puede ahondar la división, y Recursos Humanos es para las situaciones graves que este caso no incluye.',
      },
      {
        kind: 'action',
        title: 'Practica las preguntas de coaching',
        body: 'Escribe las cuatro preguntas de esta lección en una nota adhesiva o en tu teléfono. La próxima vez que alguien te traiga un conflicto esta semana, haz al menos dos de ellas antes de dar tu propia opinión.',
      },
      {
        kind: 'takeaway',
        title: 'Acompaña la conversación',
        bullets: [
          'Ayuda a las personas a tener la conversación en lugar de tenerla por ellas',
          'Usa preguntas para separar hechos, emociones y objetivos',
          'Lleva el acoso, la discriminación, las amenazas y la seguridad a Recursos Humanos',
        ],
      },
    ],
  },
  fr: {
    title: 'Accompagner les autres dans les conflits',
    subtitle: 'Aider chacun à mener ses propres conversations difficiles',
    slides: [
      {
        kind: 'cover',
        title: 'Accompagner les autres dans les conflits',
        body: 'Quand quelqu’un vous parle d’un conflit avec un collègue, la solution la plus rapide est d’intervenir et de régler l’affaire. Mais chaque fois que vous portez le message à sa place, vous apprenez à l’équipe que les conflits sont l’affaire du chef.',
      },
      {
        kind: 'idea',
        title: 'Ne reprenez pas le problème à votre compte',
        body: 'Votre rôle est d’aider la personne à mener la conversation, pas de la mener pour elle. Évitez de juger qui a raison après n’avoir entendu qu’une version, et évitez de faire passer des messages entre les personnes. Les deux semblent utiles sur le moment et rendent souvent le conflit plus difficile à résoudre.',
        bullets: [
          'Écoutez jusqu’au bout avant de répondre',
          'Restez curieux du point de vue de l’autre personne aussi',
          'Laissez la responsabilité à la personne venue vous voir',
        ],
      },
      {
        kind: 'idea',
        title: 'L’aider à y voir clair',
        body: 'Les gens arrivent souvent avec un mélange de faits, d’émotions et d’histoires sur l’autre personne. Quelques questions posées calmement les aident à faire le tri et à trouver ce qu’ils veulent vraiment. La clarté fait souvent baisser la tension avant même le début de la vraie conversation.',
        bullets: [
          '« Que s’est-il passé, précisément ? »',
          '« Qu’aimeriez-vous voir changer ? »',
          '« Quelle a pu être votre part dans la situation ? »',
          '« Que voudriez-vous qu’il comprenne ? »',
        ],
      },
      {
        kind: 'example',
        title: 'Quand on vous demande d’intervenir',
        instead: '« Ne vous inquiétez pas. Je lui parle aujourd’hui. »',
        tryThis: '« C’est frustrant. Que voudriez-vous qu’il comprenne, et comment pourriez-vous ouvrir cette conversation ? »',
        why: 'Reconnaître l’émotion préserve la confiance, et la question rend la main à la personne. Vous pouvez toujours proposer de répéter avec elle ou de faire le point après l’échange.',
      },
      {
        kind: 'idea',
        title: 'Répéter, puis assurer le suivi',
        body: 'Une courte répétition de la première phrase donne de l’assurance et repère les mots accusateurs avant qu’ils sortent. Ensuite, demandez comment cela s’est passé et ce que la personne en retient. Connaissez aussi vos limites : le harcèlement, la discrimination, les menaces ou les questions de sécurité ne relèvent pas du coaching. Ils vont aux RH et suivent la politique de l’entreprise.',
      },
      {
        kind: 'check',
        question: 'Amara vous dit qu’un collègue s’attribue sans cesse son travail dans les e-mails aux clients. Elle vous demande de « lui dire un mot ». Rien de ce qu’elle décrit ne relève du harcèlement ou de la sécurité. Quelle est la meilleure première étape ?',
        options: [
          'L’assurer que vous allez régler cela discrètement avec lui pour lui éviter un moment gênant.',
          'Transmettre immédiatement sa plainte aux RH pour que la situation soit documentée et traitée officiellement.',
          'Lui dire que vous la croyez totalement et qu’il a déjà fait ce genre de chose auparavant.',
          'Reconnaître sa frustration, l’aider à préparer ce qu’elle va lui dire et proposer de faire le point ensuite.',
        ],
        answer: 3,
        explain: 'Aider Amara à se préparer garde la conversation à sa juste place et développe sa capacité pour la prochaine fois. Régler l’affaire pour elle semble bienveillant mais crée de la dépendance, prendre son parti peut creuser le fossé, et les RH sont là pour les situations graves que ce cas ne comporte pas.',
      },
      {
        kind: 'action',
        title: 'Entraînez-vous aux questions de coaching',
        body: 'Notez les quatre questions de cette leçon sur un post-it ou dans votre téléphone. La prochaine fois que quelqu’un vous parle d’un conflit cette semaine, posez-en au moins deux avant de donner votre propre avis.',
      },
      {
        kind: 'takeaway',
        title: 'Accompagnez la conversation',
        bullets: [
          'Aidez chacun à mener la conversation au lieu de la mener à sa place',
          'Utilisez des questions pour distinguer faits, émotions et objectifs',
          'Orientez le harcèlement, la discrimination, les menaces et la sécurité vers les RH',
        ],
      },
    ],
  },
};

export default lesson;
