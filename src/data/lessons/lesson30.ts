import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-30',
  week: 30,
  focus: 'communication',
  minutes: 3,
  title: 'Calm under pressure: pause, breathe, frame',
  subtitle: 'Steady yourself first so your words steady the room',
  slides: [
    {
      kind: 'cover',
      title: 'Calm under pressure: pause, breathe, frame',
      body: 'When a deadline slips or a meeting turns tense, everyone watches the leader. Your first ten seconds often set the tone more than anything you say after.',
    },
    {
      kind: 'idea',
      title: 'Pause before you respond',
      body: 'Under pressure, the fastest reply is rarely the best one. A short pause gives your thinking a chance to catch up with your feelings. It also signals to others that you are taking the moment seriously, not reacting to it.',
      bullets: [
        'Silence for two or three seconds is fine',
        '"Give me a moment to think" is a complete sentence',
        'Avoid sending messages while you are still heated',
      ],
    },
    {
      kind: 'idea',
      title: 'Breathe to slow your body down',
      body: 'Stress speeds up your breathing and your speech, and people hear that urgency as alarm. One slow breath, with a longer exhale than inhale, helps you lower your voice and slow your pace. Calm is contagious, and so is panic.',
    },
    {
      kind: 'idea',
      title: 'Frame what matters next',
      body: 'Once you are steady, give people a simple frame: what happened, what matters most right now, and the next step. A clear frame turns a swirl of worry into something the team can act on.',
      bullets: [
        'Name the facts you know, and what you do not know yet',
        'Choose the one priority for the next hour or day',
        'Say who does what, and when you will regroup',
      ],
    },
    {
      kind: 'example',
      title: 'When the client escalates',
      instead: '"This is a disaster. How did nobody catch this?"',
      tryThis: '"Okay. Let’s get clear on what we know, fix the client’s issue first, and look at causes on Thursday."',
      why: 'Blame in the moment raises fear and slows the fix. A calm frame puts attention on the next step and promises a fair review later.',
    },
    {
      kind: 'check',
      question: 'In a team call, a senior stakeholder says your project is "clearly off the rails." You feel your face get hot. What is the best first move?',
      options: [
        'Pause, take a breath, then ask which part concerns them most',
        'Thank them warmly and promise the team will work harder',
        'Explain right away all the reasons the delays were not your fault',
        'Reassure everyone that the project is fine and fully on track',
      ],
      answer: 0,
      explain: 'Pausing and breathing keeps you from reacting, and asking which part concerns them lets you frame a real response. A warm promise to work harder sounds supportive but skips the actual issue.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Write a three line frame on a sticky note or in your phone: "What we know. What matters most now. Next step and when we regroup." The next time pressure rises, pause, take one slow breath, and use it.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'A short pause protects you from your fastest, least helpful reply.',
        'A slow breath lowers your pace, and the room follows.',
        'Frame the facts, the priority, and the next step.',
      ],
    },
  ],
  es: {
    title: 'Calma bajo presión: pausa, respira, enmarca',
    subtitle: 'Serénate primero para que tus palabras serenen al grupo',
    slides: [
      {
        kind: 'cover',
        title: 'Calma bajo presión: pausa, respira, enmarca',
        body: 'Cuando un plazo se retrasa o una reunión se pone tensa, todos miran a quien lidera. Tus primeros diez segundos suelen marcar el tono más que todo lo que digas después.',
      },
      {
        kind: 'idea',
        title: 'Haz una pausa antes de responder',
        body: 'Bajo presión, la respuesta más rápida rara vez es la mejor. Una pausa breve le da a tu pensamiento la oportunidad de alcanzar a tus emociones. También muestra a los demás que te tomas el momento en serio, en lugar de reaccionar.',
        bullets: [
          'Dos o tres segundos de silencio están bien',
          '“Dame un momento para pensar” es una frase completa',
          'Evita enviar mensajes mientras sigues alterado',
        ],
      },
      {
        kind: 'idea',
        title: 'Respira para desacelerar el cuerpo',
        body: 'El estrés acelera tu respiración y tu forma de hablar, y la gente percibe esa prisa como alarma. Una respiración lenta, con la exhalación más larga que la inhalación, te ayuda a bajar la voz y el ritmo. La calma se contagia, y el pánico también.',
      },
      {
        kind: 'idea',
        title: 'Enmarca lo que importa ahora',
        body: 'Cuando estés más sereno, ofrece un marco sencillo: qué pasó, qué importa más en este momento y cuál es el siguiente paso. Un marco claro convierte un torbellino de preocupación en algo sobre lo que el equipo puede actuar.',
        bullets: [
          'Nombra los hechos que conoces y lo que aún no sabes',
          'Elige la única prioridad para la próxima hora o el próximo día',
          'Di quién hace qué y cuándo volverán a reunirse',
        ],
      },
      {
        kind: 'example',
        title: 'Cuando el cliente escala el problema',
        instead: '“Esto es un desastre. ¿Cómo es que nadie lo detectó?”',
        tryThis: '“Bien. Aclaremos lo que sabemos, resolvamos primero el problema del cliente y revisemos las causas el jueves.”',
        why: 'Culpar en el momento aumenta el miedo y retrasa la solución. Un marco sereno pone la atención en el siguiente paso y promete una revisión justa más adelante.',
      },
      {
        kind: 'check',
        question: 'En una llamada de equipo, una persona de alto nivel dice que tu proyecto está “claramente descarrilado”. Sientes que la cara se te calienta. ¿Cuál es el mejor primer paso?',
        options: [
          'Hacer una pausa, respirar y luego preguntar qué parte le preocupa más',
          'Agradecerle con calidez y prometer que el equipo se esforzará más',
          'Explicar de inmediato todas las razones por las que el retraso no fue tu culpa',
          'Asegurar a todos que el proyecto está bien y totalmente encaminado',
        ],
        answer: 0,
        explain: 'Pausar y respirar evita que reacciones, y preguntar qué parte le preocupa te permite enmarcar una respuesta real. Una promesa cálida de esforzarse más suena solidaria, pero esquiva el problema de fondo.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Escribe un marco de tres líneas en una nota adhesiva o en tu teléfono: “Lo que sabemos. Lo que más importa ahora. Siguiente paso y cuándo nos volvemos a reunir.” La próxima vez que suba la presión, haz una pausa, respira lento una vez y úsalo.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Una pausa breve te protege de tu respuesta más rápida y menos útil.',
          'Una respiración lenta baja tu ritmo, y el grupo te sigue.',
          'Enmarca los hechos, la prioridad y el siguiente paso.',
        ],
      },
    ],
  },
  fr: {
    title: 'Garder son calme sous pression : pause, souffle, cadre',
    subtitle: 'Vous apaiser d’abord pour que vos mots apaisent le groupe',
    slides: [
      {
        kind: 'cover',
        title: 'Garder son calme sous pression : pause, souffle, cadre',
        body: 'Quand une échéance glisse ou qu’une réunion se tend, tout le monde regarde la personne qui dirige. Vos dix premières secondes donnent souvent le ton davantage que tout ce que vous direz ensuite.',
      },
      {
        kind: 'idea',
        title: 'Marquez une pause avant de répondre',
        body: 'Sous pression, la réponse la plus rapide est rarement la meilleure. Une courte pause laisse à votre réflexion le temps de rattraper vos émotions. Elle montre aussi aux autres que vous prenez le moment au sérieux, au lieu d’y réagir.',
        bullets: [
          'Deux ou trois secondes de silence, c’est très bien',
          '« Laissez-moi un instant pour réfléchir » est une phrase complète',
          'Évitez d’envoyer des messages tant que vous êtes à chaud',
        ],
      },
      {
        kind: 'idea',
        title: 'Respirez pour ralentir le corps',
        body: 'Le stress accélère votre respiration et votre débit, et les autres entendent cette urgence comme une alarme. Une respiration lente, avec une expiration plus longue que l’inspiration, vous aide à baisser la voix et à ralentir. Le calme est contagieux, la panique aussi.',
      },
      {
        kind: 'idea',
        title: 'Posez un cadre sur la suite',
        body: 'Une fois plus posé, donnez un cadre simple : ce qui s’est passé, ce qui compte le plus maintenant et la prochaine étape. Un cadre clair transforme un tourbillon d’inquiétude en quelque chose sur quoi l’équipe peut agir.',
        bullets: [
          'Nommez les faits connus, et ce que vous ne savez pas encore',
          'Choisissez la seule priorité pour l’heure ou la journée qui vient',
          'Dites qui fait quoi, et quand vous refaites le point',
        ],
      },
      {
        kind: 'example',
        title: 'Quand le client fait remonter le problème',
        instead: '« C’est une catastrophe. Comment personne ne l’a vu ? »',
        tryThis: '« D’accord. Clarifions ce que nous savons, réglons d’abord le problème du client et regardons les causes jeudi. »',
        why: 'Chercher un coupable sur le moment augmente la peur et ralentit la solution. Un cadre calme oriente l’attention vers la prochaine étape et promet un examen équitable plus tard.',
      },
      {
        kind: 'check',
        question: 'Lors d’un appel d’équipe, une personne de la direction affirme que votre projet « déraille clairement ». Vous sentez votre visage chauffer. Quel est le meilleur premier geste ?',
        options: [
          'Marquer une pause, respirer, puis demander quelle partie l’inquiète le plus',
          'La remercier chaleureusement et promettre que l’équipe va redoubler d’efforts',
          'Expliquer aussitôt toutes les raisons pour lesquelles le retard n’est pas de votre fait',
          'Rassurer tout le monde en affirmant que le projet va bien et suit son cours',
        ],
        answer: 0,
        explain: 'Faire une pause et respirer vous évite de réagir, et demander quelle partie l’inquiète vous permet de cadrer une vraie réponse. Une promesse chaleureuse d’en faire plus paraît bienveillante mais esquive le vrai sujet.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Écrivez un cadre en trois lignes sur un post-it ou dans votre téléphone : « Ce que nous savons. Ce qui compte le plus maintenant. Prochaine étape et moment où nous refaisons le point. » La prochaine fois que la pression monte, faites une pause, respirez lentement une fois et utilisez-le.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Une courte pause vous protège de votre réponse la plus rapide et la moins utile.',
          'Une respiration lente ralentit votre rythme, et le groupe suit.',
          'Cadrez les faits, la priorité et la prochaine étape.',
        ],
      },
    ],
  },
};

export default lesson;
