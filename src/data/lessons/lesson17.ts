import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-17',
  week: 17,
  focus: 'communication',
  minutes: 4,
  title: 'Listening when the feedback is about you',
  subtitle: 'Receive first, respond later',
  slides: [
    {
      kind: 'cover',
      title: 'When the feedback is about you',
      body: 'You ask for honest feedback, and then someone actually gives it. Your body wants to explain, defend, or fix, and the other person is watching to see whether it was safe to speak.',
    },
    {
      kind: 'idea',
      title: 'Your first job is to make it safe',
      body: 'How you react the first time decides whether you hear the truth again. People remember your face and your first sentence more than anything you do afterward. Aim to receive first and respond later.',
      bullets: [
        'Breathe and let them finish',
        'Thank them for the courage, not for being right',
        'Hold your explanations for now',
      ],
    },
    {
      kind: 'idea',
      title: 'Get curious, not defensive',
      body: 'Defensiveness often hides inside explaining. Even accurate context can sound like "you’re wrong" when it comes too fast. Ask questions that help you see what they saw.',
      bullets: [
        '"Can you give me an example?"',
        '"What was the impact on you?"',
        '"What would you have wanted me to do?"',
      ],
    },
    {
      kind: 'idea',
      title: 'Sort it later, then close the loop',
      body: 'You do not have to agree with all of it on the spot. Take time to reflect, look for patterns, and test it with someone you trust. Then go back and tell them what you will do. Closing the loop is what turns feedback into trust.',
    },
    {
      kind: 'example',
      title: 'When a team member says you interrupt',
      instead: '"I don’t think that’s fair. I only jump in when meetings are running long."',
      tryThis: '"Thank you for telling me. Can you think of a recent time it happened, so I can see it the way you did?"',
      why: 'You protect the relationship and gather real information. Your side of the story can wait until you understand the pattern.',
    },
    {
      kind: 'check',
      question: 'In a skip level meeting, Amara says your updates feel rushed and people leave unsure of priorities. Which response helps most right now?',
      options: [
        '"That’s useful to hear. When did it feel most rushed to you?"',
        '"I’m sorry you feel that way. Please know my door is always open."',
        '"I hear you. The reorg has squeezed our time, so it’s been tough."',
        '"Good point. Would a written summary after each meeting fix it?"',
      ],
      answer: 0,
      explain: 'Thanking her and asking for a specific moment keeps her talking and gives you something real to work with. The apology sounds warm but puts the issue on her feelings. Explaining, or jumping to a fix, closes the conversation before you understand it.',
    },
    {
      kind: 'action',
      title: 'Ask one question, then just listen',
      body: 'This week, ask one person: "What is one thing I could do differently that would help you?" Your only job is to listen, ask one follow up question, and say thank you. Write down what you heard, and tell them within a week what you will try.',
    },
    {
      kind: 'takeaway',
      title: 'Receive, then respond',
      bullets: [
        'Your first reaction decides whether you hear the truth again',
        'Ask for examples before you explain',
        'Close the loop by saying what you will do',
      ],
    },
  ],
  es: {
    title: 'Escuchar cuando la retroalimentación es sobre ti',
    subtitle: 'Primero recibe, después responde',
    slides: [
      {
        kind: 'cover',
        title: 'Cuando la retroalimentación es sobre ti',
        body: 'Pides retroalimentación honesta y alguien de verdad te la da. Tu cuerpo quiere explicar, defenderse o arreglarlo, y la otra persona está atenta a ver si fue seguro hablar.',
      },
      {
        kind: 'idea',
        title: 'Tu primera tarea es que sea seguro',
        body: 'Cómo reaccionas la primera vez decide si volverás a escuchar la verdad. La gente recuerda tu cara y tu primera frase más que cualquier cosa que hagas después. Primero recibe y responde más tarde.',
        bullets: [
          'Respira y deja que termine',
          'Agradece la valentía, no que tenga razón',
          'Guarda tus explicaciones por ahora',
        ],
      },
      {
        kind: 'idea',
        title: 'Ten curiosidad, no te defiendas',
        body: 'La actitud defensiva suele esconderse en las explicaciones. Incluso un contexto correcto puede sonar a “estás equivocado” si llega demasiado rápido. Haz preguntas que te ayuden a ver lo que la otra persona vio.',
        bullets: [
          '“¿Me puedes dar un ejemplo?”',
          '“¿Qué impacto tuvo en ti?”',
          '“¿Qué te hubiera gustado que hiciera?”',
        ],
      },
      {
        kind: 'idea',
        title: 'Ordénalo después y cierra el ciclo',
        body: 'No tienes que estar de acuerdo con todo en ese momento. Tómate tiempo para reflexionar, busca patrones y contrástalo con alguien de confianza. Luego vuelve y cuéntale qué vas a hacer. Cerrar el ciclo es lo que convierte la retroalimentación en confianza.',
      },
      {
        kind: 'example',
        title: 'Cuando alguien del equipo dice que interrumpes',
        instead: '“No me parece justo. Solo intervengo cuando las reuniones se alargan.”',
        tryThis: '“Gracias por decírmelo. ¿Recuerdas una vez reciente en que pasó, para verlo como tú lo viste?”',
        why: 'Proteges la relación y reúnes información real. Tu versión de la historia puede esperar hasta que entiendas el patrón.',
      },
      {
        kind: 'check',
        question: 'En una reunión con quienes reportan a tus gerentes, Amara dice que tus actualizaciones se sienten apuradas y la gente sale sin claridad sobre las prioridades. ¿Qué respuesta ayuda más ahora?',
        options: [
          '“Me sirve saberlo. ¿Cuándo se sintió más apurado para ti?”',
          '“Lamento que te sientas así. Sabes que mi puerta siempre está abierta.”',
          '“Te entiendo. La reorganización nos quitó tiempo, así que ha sido difícil.”',
          '“Buen punto. ¿Un resumen escrito después de cada reunión lo resolvería?”',
        ],
        answer: 0,
        explain: 'Agradecer y pedir un momento concreto la mantiene hablando y te da algo real con qué trabajar. La disculpa suena cálida, pero pone el problema en sus sentimientos. Explicar o saltar a una solución cierra la conversación antes de entenderla.',
      },
      {
        kind: 'action',
        title: 'Haz una pregunta y solo escucha',
        body: 'Esta semana, pregúntale a una persona: “¿Qué es algo que podría hacer distinto que te ayudaría?” Tu única tarea es escuchar, hacer una pregunta de seguimiento y dar las gracias. Anota lo que escuchaste y, en menos de una semana, dile qué vas a probar.',
      },
      {
        kind: 'takeaway',
        title: 'Recibe y luego responde',
        bullets: [
          'Tu primera reacción decide si volverás a escuchar la verdad',
          'Pide ejemplos antes de explicar',
          'Cierra el ciclo diciendo qué vas a hacer',
        ],
      },
    ],
  },
  fr: {
    title: 'Écouter quand le feedback vous concerne',
    subtitle: 'Recevoir d’abord, répondre ensuite',
    slides: [
      {
        kind: 'cover',
        title: 'Quand le feedback vous concerne',
        body: 'Vous demandez un feedback honnête, et quelqu’un vous le donne vraiment. Votre corps veut expliquer, se défendre ou réparer, et l’autre personne observe si elle a eu raison de parler.',
      },
      {
        kind: 'idea',
        title: 'Votre premier rôle : rendre la parole sûre',
        body: 'Votre réaction la première fois décide si vous entendrez encore la vérité. On se souvient de votre visage et de votre première phrase plus que de tout ce que vous faites ensuite. Recevez d’abord, répondez plus tard.',
        bullets: [
          'Respirez et laissez la personne finir',
          'Remerciez pour le courage, pas pour avoir raison',
          'Gardez vos explications pour plus tard',
        ],
      },
      {
        kind: 'idea',
        title: 'Soyez curieux, pas sur la défensive',
        body: 'La défensive se cache souvent dans les explications. Même un contexte exact peut sonner comme « vous avez tort » s’il arrive trop vite. Posez des questions qui vous aident à voir ce que l’autre a vu.',
        bullets: [
          '« Pouvez-vous me donner un exemple ? »',
          '« Quel effet cela a-t-il eu sur vous ? »',
          '« Qu’auriez-vous voulu que je fasse ? »',
        ],
      },
      {
        kind: 'idea',
        title: 'Triez plus tard, puis bouclez la boucle',
        body: 'Vous n’avez pas à tout accepter sur le moment. Prenez le temps de réfléchir, cherchez des tendances et vérifiez auprès d’une personne de confiance. Puis revenez dire ce que vous allez faire. C’est ce retour qui transforme le feedback en confiance.',
      },
      {
        kind: 'example',
        title: 'Quand un collaborateur dit que vous coupez la parole',
        instead: '« Je ne trouve pas ça juste. J’interviens seulement quand les réunions s’éternisent. »',
        tryThis: '« Merci de me le dire. Pensez-vous à une fois récente où c’est arrivé, pour que je le voie comme vous ? »',
        why: 'Vous protégez la relation et recueillez une information réelle. Votre version peut attendre que vous compreniez la tendance.',
      },
      {
        kind: 'check',
        question: 'Lors d’une réunion avec les équipes de vos managers, Amara dit que vos points d’information semblent précipités et que les gens repartent sans priorités claires. Quelle réponse aide le plus maintenant ?',
        options: [
          '« C’est utile à entendre. À quel moment cela vous a-t-il semblé le plus précipité ? »',
          '« Je suis désolé que vous le ressentiez ainsi. Ma porte est toujours ouverte. »',
          '« Je vous entends. La réorganisation nous a pris du temps, ça a été difficile. »',
          '« Bonne remarque. Un résumé écrit après chaque réunion réglerait-il cela ? »',
        ],
        answer: 0,
        explain: 'Remercier et demander un moment précis l’encourage à continuer et vous donne du concret. Les excuses semblent chaleureuses mais ramènent le problème à ses émotions. Expliquer, ou sauter à une solution, ferme la conversation avant que vous ayez compris.',
      },
      {
        kind: 'action',
        title: 'Posez une question, puis écoutez',
        body: 'Cette semaine, demandez à une personne : « Qu’est-ce que je pourrais faire différemment qui vous aiderait ? » Votre seul rôle est d’écouter, de poser une question de relance et de dire merci. Notez ce que vous avez entendu et dites-lui dans la semaine ce que vous allez essayer.',
      },
      {
        kind: 'takeaway',
        title: 'Recevoir, puis répondre',
        bullets: [
          'Votre première réaction décide si vous entendrez encore la vérité',
          'Demandez des exemples avant d’expliquer',
          'Bouclez la boucle en disant ce que vous allez faire',
        ],
      },
    ],
  },
};

export default lesson;
