import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-25',
  week: 25,
  focus: 'communication',
  minutes: 4,
  title: 'Async first: decisions across time zones and screens',
  subtitle: 'Make decisions in writing so everyone can take part',
  slides: [
    {
      kind: 'cover',
      title: 'Async first: decisions across time zones and screens',
      body: 'Your team spans four time zones. Every decision either waits for a meeting someone joins at midnight, or happens in a quick chat and half the team finds out later.',
    },
    {
      kind: 'idea',
      title: 'Default to writing',
      body: 'Async first means a decision starts as a short written proposal that people can read and answer on their own time. Live meetings become the exception, saved for things that truly need real time talk, like conflict or sensitive news.',
      bullets: [
        'Fewer meetings at bad hours',
        'A record of what was decided and why',
        'Quieter voices get time to think and weigh in',
      ],
    },
    {
      kind: 'idea',
      title: 'A proposal people can act on',
      body: 'A good async proposal is easy to answer. Put the ask first, then the context. Make it clear how the decision will be made and by when.',
      bullets: [
        'The decision needed, in one sentence',
        'The options and your recommendation',
        'Who decides and who is consulted',
        'The deadline for input, with the time zone',
      ],
    },
    {
      kind: 'idea',
      title: 'Close the loop in writing',
      body: 'Silence is not agreement. When the window closes, post the decision, the reasoning, and what happens next in the same thread. Tag anyone who must act. People who missed the discussion can catch up without another meeting.',
    },
    {
      kind: 'example',
      title: 'A request that gets an answer',
      instead: '"Thoughts on the new on-call schedule? Let me know."',
      tryThis: '"Decision needed by Thursday 5 p.m. UTC: which on-call plan below do we adopt? I recommend option B. Maya decides after input. Reply with concerns or a thumbs up."',
      why: 'The vague version invites scattered replies and no closure. The clear version names the ask, the owner, and the deadline, so people in every time zone know how to contribute.',
    },
    {
      kind: 'check',
      question: 'You posted a proposal with a Wednesday deadline. By Wednesday, two people have replied and four have said nothing. What should you do?',
      options: [
        'Treat the silence as agreement and quietly move ahead with the plan.',
        'Post the decision with reasoning and next steps, and tag who must act.',
        'Book a live call so everyone can discuss it together before deciding.',
        'Extend the deadline a week so the quiet people have more time to reply.',
      ],
      answer: 1,
      explain: 'The deadline was clear, so honor it: share the decision, the why, and what happens next in writing. Moving ahead quietly leaves people guessing. A call or an open extension teaches everyone that async deadlines do not really count.',
    },
    {
      kind: 'action',
      title: 'Convert one meeting',
      body: 'Pick one decision you would normally schedule a meeting for this week. Write it as a short proposal with the ask, the options, the owner, and a deadline with a time zone. Post it, then close the loop in the same thread.',
    },
    {
      kind: 'takeaway',
      title: 'Write it, then close it',
      bullets: [
        'Start decisions in writing so every time zone can take part.',
        'Lead with the ask, the owner, and the deadline.',
        'When the window closes, post the decision and the why.',
      ],
    },
  ],
  es: {
    title: 'Primero lo asíncrono: decisiones entre husos horarios y pantallas',
    subtitle: 'Toma decisiones por escrito para que todos puedan participar',
    slides: [
      {
        kind: 'cover',
        title: 'Primero lo asíncrono: decisiones entre husos horarios y pantallas',
        body: 'Tu equipo está repartido en cuatro husos horarios. Cada decisión espera una reunión a la que alguien se conecta a medianoche, o se toma en una charla rápida y la mitad del equipo se entera después.',
      },
      {
        kind: 'idea',
        title: 'Escribir por defecto',
        body: 'Trabajar primero de forma asíncrona significa que una decisión empieza como una breve propuesta escrita que la gente puede leer y responder a su propio ritmo. Las reuniones en vivo pasan a ser la excepción, reservadas para lo que de verdad requiere hablar en tiempo real, como un conflicto o una noticia delicada.',
        bullets: [
          'Menos reuniones en horarios difíciles',
          'Un registro de qué se decidió y por qué',
          'Las voces más calladas tienen tiempo para pensar y opinar',
        ],
      },
      {
        kind: 'idea',
        title: 'Una propuesta que permite actuar',
        body: 'Una buena propuesta asíncrona es fácil de responder. Pon primero la petición y después el contexto. Deja claro cómo se tomará la decisión y para cuándo.',
        bullets: [
          'La decisión necesaria, en una frase',
          'Las opciones y tu recomendación',
          'Quién decide y a quién se consulta',
          'La fecha límite para opinar, con el huso horario',
        ],
      },
      {
        kind: 'idea',
        title: 'Cierra el ciclo por escrito',
        body: 'El silencio no es acuerdo. Cuando se cierre el plazo, publica la decisión, el razonamiento y los siguientes pasos en el mismo hilo. Menciona a quienes deban actuar. Quien no participó en la conversación puede ponerse al día sin otra reunión.',
      },
      {
        kind: 'example',
        title: 'Una petición que obtiene respuesta',
        instead: '“¿Qué opinan del nuevo horario de guardias? Me cuentan.”',
        tryThis: '“Decisión necesaria antes del jueves a las 5 p.m. UTC: ¿qué plan de guardias de abajo adoptamos? Recomiendo la opción B. Maya decide después de recibir comentarios. Respondan con sus dudas o con un pulgar arriba.”',
        why: 'La versión vaga provoca respuestas dispersas y ningún cierre. La versión clara nombra la petición, la responsable y el plazo, así que las personas de cada huso horario saben cómo contribuir.',
      },
      {
        kind: 'check',
        question: 'Publicaste una propuesta con fecha límite el miércoles. Llega el miércoles: dos personas respondieron y cuatro no dijeron nada. ¿Qué deberías hacer?',
        options: [
          'Tomar el silencio como acuerdo y seguir adelante con el plan sin avisar.',
          'Publicar la decisión con el razonamiento y los siguientes pasos, y mencionar a quien deba actuar.',
          'Agendar una llamada en vivo para que todos lo hablen juntos antes de decidir.',
          'Ampliar el plazo una semana para que las personas calladas tengan más tiempo.',
        ],
        answer: 1,
        explain: 'El plazo era claro, así que respétalo: comparte por escrito la decisión, el porqué y lo que sigue. Avanzar sin avisar deja a la gente adivinando. Una llamada o una prórroga abierta le enseña a todos que los plazos asíncronos no cuentan de verdad.',
      },
      {
        kind: 'action',
        title: 'Convierte una reunión',
        body: 'Elige una decisión para la que normalmente agendarías una reunión esta semana. Escríbela como una propuesta breve con la petición, las opciones, la persona responsable y una fecha límite con huso horario. Publícala y cierra el ciclo en el mismo hilo.',
      },
      {
        kind: 'takeaway',
        title: 'Escríbelo y luego ciérralo',
        bullets: [
          'Empieza las decisiones por escrito para que todos los husos horarios participen.',
          'Abre con la petición, la persona responsable y la fecha límite.',
          'Cuando se cierre el plazo, publica la decisión y el porqué.',
        ],
      },
    ],
  },
  fr: {
    title: 'L’asynchrone d’abord : décider entre fuseaux horaires et écrans',
    subtitle: 'Prenez les décisions par écrit pour que chacun puisse y participer',
    slides: [
      {
        kind: 'cover',
        title: 'L’asynchrone d’abord : décider entre fuseaux horaires et écrans',
        body: 'Votre équipe est répartie sur quatre fuseaux horaires. Chaque décision attend une réunion à laquelle quelqu’un se connecte à minuit, ou se prend lors d’un échange rapide et la moitié de l’équipe l’apprend plus tard.',
      },
      {
        kind: 'idea',
        title: 'L’écrit par défaut',
        body: 'Fonctionner d’abord en asynchrone signifie qu’une décision commence par une courte proposition écrite que chacun peut lire et commenter à son rythme. Les réunions en direct deviennent l’exception, réservées à ce qui exige vraiment un échange en temps réel, comme un conflit ou une nouvelle sensible.',
        bullets: [
          'Moins de réunions à des heures impossibles',
          'Une trace de ce qui a été décidé et pourquoi',
          'Les personnes plus discrètes ont le temps de réfléchir et de s’exprimer',
        ],
      },
      {
        kind: 'idea',
        title: 'Une proposition qui permet d’agir',
        body: 'Une bonne proposition asynchrone est facile à traiter. Placez la demande en premier, puis le contexte. Précisez comment la décision sera prise et pour quand.',
        bullets: [
          'La décision attendue, en une phrase',
          'Les options et votre recommandation',
          'Qui décide et qui est consulté',
          'La date limite pour réagir, avec le fuseau horaire',
        ],
      },
      {
        kind: 'idea',
        title: 'Bouclez la boucle par écrit',
        body: 'Le silence ne vaut pas accord. Quand le délai est écoulé, publiez la décision, le raisonnement et la suite dans le même fil. Mentionnez les personnes qui doivent agir. Celles qui ont manqué la discussion peuvent se mettre à jour sans nouvelle réunion.',
      },
      {
        kind: 'example',
        title: 'Une demande qui obtient une réponse',
        instead: '« Des avis sur le nouveau planning d’astreinte ? Dites-moi. »',
        tryThis: '« Décision attendue avant jeudi 17 h UTC : quel plan d’astreinte ci-dessous adoptons-nous ? Je recommande l’option B. Maya tranche après vos retours. Répondez avec vos réserves ou un pouce levé. »',
        why: 'La version floue suscite des réponses éparses et aucune conclusion. La version claire nomme la demande, la responsable et l’échéance, pour que chacun, quel que soit son fuseau horaire, sache comment contribuer.',
      },
      {
        kind: 'check',
        question: 'Vous avez publié une proposition avec une échéance au mercredi. Mercredi arrive : deux personnes ont répondu et quatre n’ont rien dit. Que faire ?',
        options: [
          'Considérer le silence comme un accord et avancer discrètement avec le plan.',
          'Publier la décision avec le raisonnement et la suite, et mentionner qui doit agir.',
          'Organiser un appel en direct pour en discuter tous ensemble avant de décider.',
          'Prolonger le délai d’une semaine pour laisser plus de temps aux silencieux.',
        ],
        answer: 1,
        explain: 'L’échéance était claire, alors respectez-la : partagez par écrit la décision, le pourquoi et la suite. Avancer discrètement laisse les gens dans le doute. Un appel ou une prolongation sans fin apprend à tous que les échéances asynchrones ne comptent pas vraiment.',
      },
      {
        kind: 'action',
        title: 'Transformez une réunion',
        body: 'Choisissez une décision pour laquelle vous auriez normalement planifié une réunion cette semaine. Rédigez-la sous forme de courte proposition avec la demande, les options, la personne responsable et une échéance avec fuseau horaire. Publiez-la, puis bouclez la boucle dans le même fil.',
      },
      {
        kind: 'takeaway',
        title: 'Écrivez, puis concluez',
        bullets: [
          'Lancez les décisions par écrit pour que tous les fuseaux horaires puissent participer.',
          'Commencez par la demande, la personne responsable et l’échéance.',
          'Quand le délai est écoulé, publiez la décision et le pourquoi.',
        ],
      },
    ],
  },
};

export default lesson;
