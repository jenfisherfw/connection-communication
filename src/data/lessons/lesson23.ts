import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-23',
  week: 23,
  focus: 'communication',
  minutes: 4,
  title: 'Coaching questions that grow people',
  subtitle: 'Help people find their own answers, and know when to just tell',
  slides: [
    {
      kind: 'cover',
      title: 'Coaching questions that grow people',
      body: 'When someone brings you a problem, the quickest move is to hand them your answer. It solves today, but it teaches them to come back tomorrow with the next one.',
    },
    {
      kind: 'idea',
      title: 'Your answer is not always the help',
      body: 'Giving answers feels efficient and caring. Yet each time you solve it for them, you keep the thinking and the confidence for yourself. Coaching means helping people find their own next step, while you stay available for what they truly cannot see.',
    },
    {
      kind: 'idea',
      title: 'Open questions that do the work',
      body: 'Good coaching questions are short, open, and curious. They start with what or how more often than why, because why can sound like blame. Ask one question at a time, then let the silence work.',
      bullets: [
        'What’s the real challenge here for you?',
        'What have you tried so far?',
        'What options do you see?',
        'What would you do if I weren’t here?',
      ],
    },
    {
      kind: 'idea',
      title: 'Know when to tell',
      body: 'Coaching is not withholding. If there is a safety risk, a hard deadline, or a fact they simply do not have, say so plainly. A useful pattern is to ask first, then offer your view as one option rather than the answer.',
    },
    {
      kind: 'example',
      title: 'From fixing to coaching',
      instead: '"Just call the client and offer them a discount. That always works."',
      tryThis: '"What outcome do you want from the client call? What are two ways you could get there?"',
      why: 'The question keeps ownership with them and builds their judgment. You can still share the discount idea after they have thought it through.',
    },
    {
      kind: 'check',
      question: 'Dana asks how to handle a teammate who keeps missing handoffs. She has a week before the next team meeting. What is your best first response?',
      options: [
        'Ask what she has noticed so far and what she thinks is driving it.',
        'Offer to raise it with the teammate yourself to spare her the stress.',
        'Share how you handled a similar teammate years ago, step by step.',
        'Reassure her that it is probably a phase and will sort itself out.',
      ],
      answer: 0,
      explain: 'Starting with her observations and her theory builds her thinking and gives you better information. Taking it over or reassuring her sounds kind but removes the chance to grow. Your own story may help later, after she has had her say.',
    },
    {
      kind: 'action',
      title: 'Hold your answer once',
      body: 'The next time someone asks you "What should I do?", pause and ask "What options do you see?" first. Listen to the whole answer before you add anything. Notice how often they already know.',
    },
    {
      kind: 'takeaway',
      title: 'Questions build capability',
      bullets: [
        'Handing over answers solves today and creates dependence tomorrow.',
        'Short, open what and how questions help people think for themselves.',
        'Ask first, offer your view as one option, and tell plainly when it matters.',
      ],
    },
  ],
  es: {
    title: 'Preguntas de coaching que hacen crecer',
    subtitle: 'Ayuda a las personas a encontrar sus respuestas y sabe cuándo decir las cosas',
    slides: [
      {
        kind: 'cover',
        title: 'Preguntas de coaching que hacen crecer',
        body: 'Cuando alguien te trae un problema, lo más rápido es darle tu respuesta. Resuelve el día de hoy, pero le enseña a volver mañana con el siguiente problema.',
      },
      {
        kind: 'idea',
        title: 'Tu respuesta no siempre es la ayuda',
        body: 'Dar respuestas se siente eficiente y generoso. Pero cada vez que lo resuelves por la otra persona, te quedas con el razonamiento y la confianza. Hacer coaching es ayudar a la gente a encontrar su propio siguiente paso, mientras sigues disponible para lo que de verdad no puede ver.',
      },
      {
        kind: 'idea',
        title: 'Preguntas abiertas que hacen el trabajo',
        body: 'Las buenas preguntas de coaching son breves, abiertas y curiosas. Suelen empezar con qué o cómo más que con por qué, porque el por qué puede sonar a reproche. Haz una pregunta a la vez y deja que el silencio trabaje.',
        bullets: [
          '¿Cuál es el verdadero desafío aquí para ti?',
          '¿Qué has intentado hasta ahora?',
          '¿Qué opciones ves?',
          '¿Qué harías si yo no estuviera aquí?',
        ],
      },
      {
        kind: 'idea',
        title: 'Sabe cuándo decirlo',
        body: 'El coaching no es retener información. Si hay un riesgo de seguridad, una fecha límite firme o un dato que la persona simplemente no tiene, dilo con claridad. Un buen patrón es preguntar primero y luego ofrecer tu punto de vista como una opción, no como la respuesta.',
      },
      {
        kind: 'example',
        title: 'De resolver a acompañar',
        instead: '“Llama al cliente y ofrécele un descuento. Eso siempre funciona.”',
        tryThis: '“¿Qué resultado quieres de la llamada con el cliente? ¿Cuáles son dos maneras de lograrlo?”',
        why: 'La pregunta deja la responsabilidad en sus manos y fortalece su criterio. Puedes compartir la idea del descuento después de que lo haya pensado.',
      },
      {
        kind: 'check',
        question: 'Dana te pregunta cómo manejar a un compañero que no cumple con las entregas. Tiene una semana antes de la próxima reunión de equipo. ¿Cuál es tu mejor primera respuesta?',
        options: [
          'Preguntarle qué ha notado hasta ahora y qué cree que lo está causando.',
          'Ofrecerte a hablar tú con el compañero para ahorrarle el estrés.',
          'Contarle paso a paso cómo manejaste un caso parecido hace años.',
          'Tranquilizarla diciéndole que seguro es una etapa y se resolverá sola.',
        ],
        answer: 0,
        explain: 'Empezar por lo que ella ha observado y por su propia hipótesis fortalece su razonamiento y te da mejor información. Encargarte tú o tranquilizarla suena amable, pero le quita la oportunidad de crecer. Tu historia puede servir más tarde, después de que ella haya hablado.',
      },
      {
        kind: 'action',
        title: 'Guarda tu respuesta una vez',
        body: 'La próxima vez que alguien te pregunte “¿Qué debería hacer?”, haz una pausa y pregunta primero “¿Qué opciones ves?” Escucha toda la respuesta antes de agregar algo. Observa cuántas veces ya lo saben.',
      },
      {
        kind: 'takeaway',
        title: 'Las preguntas desarrollan capacidades',
        bullets: [
          'Dar respuestas resuelve hoy y crea dependencia mañana.',
          'Las preguntas breves y abiertas con qué y cómo ayudan a pensar por cuenta propia.',
          'Pregunta primero, ofrece tu punto de vista como una opción y habla claro cuando importa.',
        ],
      },
    ],
  },
  fr: {
    title: 'Des questions de coaching qui font grandir',
    subtitle: 'Aidez les gens à trouver leurs propres réponses, et sachez quand trancher',
    slides: [
      {
        kind: 'cover',
        title: 'Des questions de coaching qui font grandir',
        body: 'Quand quelqu’un vous apporte un problème, le plus rapide est de lui donner votre réponse. Cela règle la question du jour, mais lui apprend à revenir demain avec la suivante.',
      },
      {
        kind: 'idea',
        title: 'Votre réponse n’est pas toujours l’aide attendue',
        body: 'Donner des réponses paraît efficace et bienveillant. Pourtant, chaque fois que vous résolvez le problème à la place de l’autre, vous gardez pour vous la réflexion et la confiance. Coacher, c’est aider les gens à trouver leur prochaine étape, tout en restant disponible pour ce qu’ils ne peuvent vraiment pas voir.',
      },
      {
        kind: 'idea',
        title: 'Des questions ouvertes qui font le travail',
        body: 'Les bonnes questions de coaching sont courtes, ouvertes et curieuses. Elles commencent plus souvent par quoi ou comment que par pourquoi, car le pourquoi peut sonner comme un reproche. Posez une question à la fois, puis laissez le silence agir.',
        bullets: [
          'Quel est le vrai défi pour vous ici ?',
          'Qu’avez-vous essayé jusqu’à présent ?',
          'Quelles options voyez-vous ?',
          'Que feriez-vous si je n’étais pas là ?',
        ],
      },
      {
        kind: 'idea',
        title: 'Savoir quand dire les choses',
        body: 'Coacher, ce n’est pas retenir l’information. S’il y a un risque pour la sécurité, une échéance ferme ou un fait que la personne ignore, dites-le clairement. Une bonne habitude consiste à questionner d’abord, puis à proposer votre avis comme une option parmi d’autres, et non comme la réponse.',
      },
      {
        kind: 'example',
        title: 'De la solution au coaching',
        instead: '« Appelez simplement le client et proposez-lui une remise. Ça marche toujours. »',
        tryThis: '« Quel résultat attendez-vous de cet appel avec le client ? Quelles sont deux façons d’y arriver ? »',
        why: 'La question laisse la responsabilité à la personne et développe son jugement. Vous pourrez toujours proposer l’idée de la remise une fois qu’elle y aura réfléchi.',
      },
      {
        kind: 'check',
        question: 'Dana vous demande comment gérer un collègue qui rate régulièrement les passations. Elle a une semaine avant la prochaine réunion d’équipe. Quelle est votre meilleure première réponse ?',
        options: [
          'Lui demander ce qu’elle a remarqué jusqu’ici et ce qui, selon elle, en est la cause.',
          'Proposer d’en parler vous-même au collègue pour lui épargner ce stress.',
          'Lui raconter étape par étape comment vous avez géré un cas semblable.',
          'La rassurer en lui disant que c’est sans doute passager et que ça s’arrangera.',
        ],
        answer: 0,
        explain: 'Partir de ses observations et de son hypothèse développe sa réflexion et vous donne de meilleures informations. Reprendre le dossier ou la rassurer semble bienveillant, mais lui retire l’occasion de progresser. Votre propre expérience pourra servir plus tard, une fois qu’elle se sera exprimée.',
      },
      {
        kind: 'action',
        title: 'Retenez votre réponse une fois',
        body: 'La prochaine fois qu’on vous demande « Que devrais-je faire ? », marquez une pause et demandez d’abord « Quelles options voyez-vous ? » Écoutez toute la réponse avant d’ajouter quoi que ce soit. Remarquez combien de fois la personne le sait déjà.',
      },
      {
        kind: 'takeaway',
        title: 'Les questions développent les compétences',
        bullets: [
          'Donner les réponses règle le présent et crée de la dépendance pour demain.',
          'Des questions courtes et ouvertes, avec quoi et comment, aident à penser par soi-même.',
          'Questionnez d’abord, proposez votre avis comme une option et soyez direct quand c’est important.',
        ],
      },
    ],
  },
};

export default lesson;
