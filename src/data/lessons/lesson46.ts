import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-46',
  week: 46,
  focus: 'communication',
  minutes: 4,
  title: 'The hard conversation, start to finish',
  subtitle: 'Open clearly, stay curious, and close with real next steps',
  slides: [
    {
      kind: 'cover',
      title: 'The hard conversation, start to finish',
      body: 'You know you need to have the conversation, and you have been putting it off for weeks. Waiting rarely makes it easier; it usually makes the issue bigger and the talk harder.',
    },
    {
      kind: 'idea',
      title: 'Prepare the opening, not a script',
      body: 'Many hard conversations go wrong in the first 30 seconds. Write your first two sentences in advance: the topic and why it matters. Then stop talking and listen. Scripting the rest makes you rigid just when you need to be curious.',
    },
    {
      kind: 'idea',
      title: 'Stay curious in the middle',
      body: 'Once the issue is named, your job is to understand their view before solving anything. Ask open questions, reflect back what you hear, and let silence do some work. Emotions are normal; acknowledge them without rushing to fix them.',
      bullets: ['"Help me understand how you see it."', '"What am I missing?"', '"It sounds like this has been frustrating."'],
    },
    {
      kind: 'idea',
      title: 'End with clear next steps',
      body: 'A conversation that ends with a vague "let’s keep an eye on it" often has to happen again. Agree on what each of you will do and when you will check in. Then follow up as promised.',
      bullets: ['Summarize what you both agreed', 'Set a specific check in date', 'Involve HR first if the issue touches conduct, safety, or formal action'],
    },
    {
      kind: 'example',
      title: 'Name it kindly and directly',
      instead: '"So, how are things going? Anything on your mind lately?"',
      tryThis: '"I want to talk about the last three client reports that went out late. It matters because the client has noticed. I’d like to hear your side first."',
      why: 'Naming the topic directly is kinder than circling around it. It lowers anxiety and opens a real dialogue.',
    },
    {
      kind: 'check',
      question: 'Ten minutes into a hard conversation about missed deadlines, your team member says, "I’m drowning, and no one has noticed." What is your best next move?',
      options: [
        'Tell them you understand completely, and that everyone on the team is feeling stretched right now.',
        'Pause the deadline topic and ask them to tell you more about what drowning looks like for them.',
        'Reassure them that you value their work, then return gently to the deadline plan you prepared.',
        'Offer to take two projects off their plate right away so they feel supported by you straight away.',
      ],
      answer: 1,
      explain: 'New information like this changes the conversation, so curiosity comes first. Saying everyone is stretched minimizes their experience. Returning to your plan signals you did not really hear them, and solving before understanding may fix the wrong problem.',
    },
    {
      kind: 'action',
      title: 'Write your first two sentences',
      body: 'Pick one conversation you have been avoiding. In under 10 minutes, write your first two sentences: the topic, named plainly, and why it matters. Then write the one open question you will ask next. Put a time on your calendar to have the conversation.',
    },
    {
      kind: 'takeaway',
      title: 'Start clear, stay curious, end concrete',
      bullets: [
        'Name the topic in your first two sentences.',
        'Understand their view before you solve anything.',
        'Close with agreed next steps and a follow up date.',
      ],
    },
  ],
  es: {
    title: 'La conversación difícil, de principio a fin',
    subtitle: 'Abre con claridad, mantén la curiosidad y cierra con próximos pasos reales',
    slides: [
      {
        kind: 'cover',
        title: 'La conversación difícil, de principio a fin',
        body: 'Sabes que necesitas tener esa conversación y llevas semanas posponiéndola. Esperar rara vez la hace más fácil; por lo general agranda el problema y complica la charla.',
      },
      {
        kind: 'idea',
        title: 'Prepara la apertura, no un guion',
        body: 'Muchas conversaciones difíciles se tuercen en los primeros 30 segundos. Escribe de antemano tus dos primeras oraciones: el tema y por qué importa. Luego deja de hablar y escucha. Llevar todo el guion te vuelve rígido justo cuando necesitas curiosidad.',
      },
      {
        kind: 'idea',
        title: 'Mantén la curiosidad en el medio',
        body: 'Una vez nombrado el tema, tu tarea es entender su punto de vista antes de resolver nada. Haz preguntas abiertas, refleja lo que escuchas y deja que el silencio también trabaje. Las emociones son normales; reconócelas sin apurarte a arreglarlas.',
        bullets: ['“Ayúdame a entender cómo lo ves.”', '“¿Qué se me está escapando?”', '“Parece que esto ha sido frustrante.”'],
      },
      {
        kind: 'idea',
        title: 'Cierra con próximos pasos claros',
        body: 'Una conversación que termina con un vago “estemos atentos” muchas veces tiene que repetirse. Acuerden qué hará cada uno y cuándo volverán a hablar. Luego haz el seguimiento que prometiste.',
        bullets: ['Resume lo que acordaron', 'Fija una fecha concreta de seguimiento', 'Consulta primero con RR. HH. si el tema involucra conducta, seguridad o acciones formales'],
      },
      {
        kind: 'example',
        title: 'Nómbralo con amabilidad y de forma directa',
        instead: '“Entonces, ¿cómo va todo? ¿Algo que tengas en mente últimamente?”',
        tryThis: '“Quiero hablar de los últimos tres informes para el cliente que salieron tarde. Importa porque el cliente lo notó. Me gustaría escuchar primero tu versión.”',
        why: 'Nombrar el tema de forma directa es más amable que darle vueltas. Reduce la ansiedad y abre un diálogo real.',
      },
      {
        kind: 'check',
        question: 'A los diez minutos de una conversación difícil sobre plazos incumplidos, tu colaborador dice: “Me estoy ahogando y nadie lo ha notado.” ¿Cuál es tu mejor siguiente paso?',
        options: [
          'Decirle que lo entiendes por completo y que todo el equipo se siente sobrecargado en este momento.',
          'Pausar el tema de los plazos y pedirle que te cuente más sobre cómo es ese ahogo para él.',
          'Asegurarle que valoras su trabajo y luego volver con suavidad al plan de plazos que preparaste.',
          'Ofrecerte a quitarle dos proyectos de inmediato para que sienta tu apoyo cuanto antes.',
        ],
        answer: 1,
        explain: 'Una información nueva como esta cambia la conversación, así que primero va la curiosidad. Decir que todos están sobrecargados minimiza su experiencia. Volver a tu plan indica que no lo escuchaste de verdad, y resolver antes de entender puede arreglar el problema equivocado.',
      },
      {
        kind: 'action',
        title: 'Escribe tus dos primeras oraciones',
        body: 'Elige una conversación que has estado evitando. En menos de 10 minutos, escribe tus dos primeras oraciones: el tema, dicho con claridad, y por qué importa. Luego escribe la pregunta abierta que harás después. Agenda un momento en tu calendario para tener la conversación.',
      },
      {
        kind: 'takeaway',
        title: 'Empieza claro, mantén la curiosidad, cierra en concreto',
        bullets: [
          'Nombra el tema en tus dos primeras oraciones.',
          'Entiende su punto de vista antes de resolver nada.',
          'Cierra con próximos pasos acordados y una fecha de seguimiento.',
        ],
      },
    ],
  },
  fr: {
    title: 'La conversation difficile, du début à la fin',
    subtitle: 'Ouvrir clairement, rester curieux et conclure par de vraies prochaines étapes',
    slides: [
      {
        kind: 'cover',
        title: 'La conversation difficile, du début à la fin',
        body: 'Vous savez que cette conversation est nécessaire, et vous la repoussez depuis des semaines. Attendre la rend rarement plus facile ; en général, le problème grossit et l’échange devient plus dur.',
      },
      {
        kind: 'idea',
        title: 'Préparez l’ouverture, pas un script',
        body: 'Beaucoup de conversations difficiles déraillent dans les 30 premières secondes. Écrivez à l’avance vos deux premières phrases : le sujet et pourquoi il compte. Puis taisez-vous et écoutez. Scénariser la suite vous rend rigide au moment où il faut être curieux.',
      },
      {
        kind: 'idea',
        title: 'Restez curieux au milieu',
        body: 'Une fois le sujet nommé, votre rôle est de comprendre son point de vue avant de résoudre quoi que ce soit. Posez des questions ouvertes, reformulez ce que vous entendez et laissez le silence agir. Les émotions sont normales ; reconnaissez-les sans vous précipiter pour les apaiser.',
        bullets: ['« Aidez-moi à comprendre comment vous voyez les choses. »', '« Qu’est-ce qui m’échappe ? »', '« J’ai l’impression que cela a été frustrant. »'],
      },
      {
        kind: 'idea',
        title: 'Terminez par des étapes claires',
        body: 'Une conversation qui se termine par un vague « restons attentifs » doit souvent être refaite. Mettez-vous d’accord sur ce que chacun fera et sur la date du prochain point. Puis assurez le suivi promis.',
        bullets: ['Résumez ce que vous avez convenu', 'Fixez une date de suivi précise', 'Impliquez d’abord les RH si le sujet touche au comportement, à la sécurité ou à une démarche formelle'],
      },
      {
        kind: 'example',
        title: 'Nommez-le avec bienveillance et franchise',
        instead: '« Alors, comment ça va ? Quelque chose vous préoccupe en ce moment ? »',
        tryThis: '« J’aimerais parler des trois derniers rapports client qui sont partis en retard. C’est important parce que le client l’a remarqué. Je voudrais d’abord entendre votre point de vue. »',
        why: 'Nommer le sujet directement est plus bienveillant que de tourner autour. Cela réduit l’anxiété et ouvre un vrai dialogue.',
      },
      {
        kind: 'check',
        question: 'Après dix minutes d’une conversation difficile sur des délais non tenus, votre collaborateur dit : « Je suis submergé, et personne ne l’a remarqué. » Quelle est votre meilleure réaction ?',
        options: [
          'Lui dire que vous comprenez tout à fait et que toute l’équipe se sent débordée en ce moment.',
          'Mettre de côté le sujet des délais et lui demander de vous en dire plus sur ce qui le submerge.',
          'L’assurer que vous appréciez son travail, puis revenir doucement au plan de délais que vous aviez prévu.',
          'Proposer de lui retirer tout de suite deux projets pour qu’il se sente soutenu sans attendre.',
        ],
        answer: 1,
        explain: 'Une information nouvelle comme celle-ci change la conversation : la curiosité passe en premier. Dire que tout le monde est débordé minimise son vécu. Revenir à votre plan montre que vous ne l’avez pas vraiment entendu, et résoudre avant de comprendre risque de traiter le mauvais problème.',
      },
      {
        kind: 'action',
        title: 'Écrivez vos deux premières phrases',
        body: 'Choisissez une conversation que vous évitez. En moins de 10 minutes, écrivez vos deux premières phrases : le sujet, nommé simplement, et pourquoi il compte. Puis écrivez la question ouverte que vous poserez ensuite. Bloquez un créneau dans votre agenda pour avoir cette conversation.',
      },
      {
        kind: 'takeaway',
        title: 'Ouvrir clairement, rester curieux, conclure concrètement',
        bullets: [
          'Nommez le sujet dès vos deux premières phrases.',
          'Comprenez son point de vue avant de résoudre quoi que ce soit.',
          'Concluez par des étapes convenues et une date de suivi.',
        ],
      },
    ],
  },
};

export default lesson;
