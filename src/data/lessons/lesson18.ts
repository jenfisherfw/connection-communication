import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-18',
  week: 18,
  focus: 'communication',
  minutes: 4,
  title: 'The repair conversation: acknowledge, own, act',
  subtitle: 'What you do after a mistake matters most',
  slides: [
    {
      kind: 'cover',
      title: 'The repair conversation',
      body: 'Every leader gets it wrong sometimes: a sharp word, a broken promise, a decision made without someone who should have been in the room. The lasting damage rarely comes from the mistake itself. It comes from what happens next.',
    },
    {
      kind: 'idea',
      title: 'Acknowledge what happened',
      body: 'Name the specific thing you did and how it likely landed. Skip vague lines like "if anyone was upset." Being specific shows you understand, and that is what the other person needs most.',
      bullets: [
        'Say what you did, in plain words',
        'Name the impact you saw or heard about',
        'Ask whether you missed anything',
      ],
    },
    {
      kind: 'idea',
      title: 'Own it without a "but"',
      body: 'An apology followed by "but" erases itself. Context may matter later, yet in the repair moment it sounds like an excuse. Keep the ownership clean, and resist the pull to make the other person comfort you.',
    },
    {
      kind: 'idea',
      title: 'Act, then follow through',
      body: 'Repair is a promise about the future. Say what you will do differently, and keep it small and concrete enough to keep. Trust returns through what people see you do after the conversation.',
      bullets: [
        'One specific change, not a vow to be perfect',
        'A set time to check back in',
        'Follow through even when no one reminds you',
      ],
    },
    {
      kind: 'example',
      title: 'After snapping at someone in a meeting',
      instead: '"Sorry if I came off harsh yesterday, but we were under a lot of pressure."',
      tryThis: '"Yesterday I cut you off and dismissed your idea in front of the team. That wasn’t fair to you. Next week I’ll ask you to walk everyone through it, and I’d like your read on how I’m doing."',
      why: 'It names the act and the impact, owns it without excuses, and offers a concrete step that repairs it in front of the same people.',
    },
    {
      kind: 'check',
      question: 'You approved a schedule change without asking Luis, the shift lead it affects most. He is clearly frustrated. Which opening starts the best repair?',
      options: [
        '"I’m so sorry, I feel terrible about it. I hope you know how much I value you."',
        '"I should have asked you first, but leadership needed an answer that afternoon."',
        '"Let’s not dwell on it. Going forward, I’ll try to be more inclusive with everyone."',
        '"I changed your schedule without asking you. Next time, I’ll check with you first."',
      ],
      answer: 3,
      explain: 'It names what happened and commits to a specific change, which opens the door to hear the impact from him. The first option is warm but centers your feelings. The second adds a "but" that cancels the ownership, and the third is too vague to trust.',
    },
    {
      kind: 'action',
      title: 'Make one small repair',
      body: 'Think of one moment in the last month when you let someone down, even in a small way. Write down what you did, its likely impact, and one thing you will do differently. Then have a two minute repair conversation this week.',
    },
    {
      kind: 'takeaway',
      title: 'Repair builds trust',
      bullets: [
        'Acknowledge the specific act and its impact',
        'Own it cleanly, with no "but"',
        'Follow through on one concrete change',
      ],
    },
  ],
  es: {
    title: 'La conversación de reparación: reconoce, asume, actúa',
    subtitle: 'Lo que haces después de un error es lo que más pesa',
    slides: [
      {
        kind: 'cover',
        title: 'La conversación de reparación',
        body: 'Todo líder se equivoca a veces: una palabra dura, una promesa rota, una decisión tomada sin alguien que debía estar presente. El daño duradero rara vez viene del error en sí. Viene de lo que pasa después.',
      },
      {
        kind: 'idea',
        title: 'Reconoce lo que pasó',
        body: 'Nombra lo que hiciste exactamente y cómo probablemente cayó. Evita frases vagas como “si alguien se molestó”. Ser específico muestra que entiendes, y eso es lo que la otra persona más necesita.',
        bullets: [
          'Di lo que hiciste, con palabras simples',
          'Nombra el impacto que viste o te contaron',
          'Pregunta si se te escapó algo',
        ],
      },
      {
        kind: 'idea',
        title: 'Asúmelo sin un “pero”',
        body: 'Una disculpa seguida de “pero” se borra sola. El contexto puede importar más tarde, pero en el momento de reparar suena a excusa. Mantén la responsabilidad limpia y resiste la tentación de que la otra persona te consuele.',
      },
      {
        kind: 'idea',
        title: 'Actúa y cumple',
        body: 'Reparar es una promesa sobre el futuro. Di qué harás distinto y que sea pequeño y concreto, para poder cumplirlo. La confianza vuelve con lo que la gente te ve hacer después de la conversación.',
        bullets: [
          'Un cambio específico, no un voto de perfección',
          'Un momento acordado para volver a hablar',
          'Cumple aunque nadie te lo recuerde',
        ],
      },
      {
        kind: 'example',
        title: 'Después de reaccionar mal en una reunión',
        instead: '“Perdón si ayer sonó duro, pero estábamos bajo mucha presión.”',
        tryThis: '“Ayer te interrumpí y descarté tu idea frente al equipo. No fue justo contigo. La próxima semana te pediré que la presentes a todos, y me gustaría saber cómo me ves en esto.”',
        why: 'Nombra el acto y el impacto, lo asume sin excusas y ofrece un paso concreto que repara frente a las mismas personas.',
      },
      {
        kind: 'check',
        question: 'Aprobaste un cambio de horario sin consultar a Luis, el jefe de turno más afectado. Se le nota frustrado. ¿Qué frase inicia la mejor reparación?',
        options: [
          '“Lo siento muchísimo, me siento fatal. Espero que sepas cuánto te valoro.”',
          '“Debí consultarte primero, pero la dirección necesitaba una respuesta esa tarde.”',
          '“No le demos más vueltas. De ahora en adelante intentaré incluir más a todos.”',
          '“Cambié tu horario sin consultarte. La próxima vez, hablaré contigo primero.”',
        ],
        answer: 3,
        explain: 'Nombra lo que pasó y se compromete con un cambio concreto, lo que abre la puerta a escuchar el impacto de su parte. La primera opción es cálida, pero pone tus sentimientos al centro. La segunda agrega un “pero” que anula la responsabilidad, y la tercera es demasiado vaga para creerla.',
      },
      {
        kind: 'action',
        title: 'Haz una pequeña reparación',
        body: 'Piensa en un momento del último mes en que le fallaste a alguien, aunque sea en algo pequeño. Escribe qué hiciste, su probable impacto y una cosa que harás distinto. Luego ten una conversación de reparación de dos minutos esta semana.',
      },
      {
        kind: 'takeaway',
        title: 'Reparar construye confianza',
        bullets: [
          'Reconoce el acto concreto y su impacto',
          'Asúmelo con claridad, sin “pero”',
          'Cumple con un cambio concreto',
        ],
      },
    ],
  },
  fr: {
    title: 'La conversation de réparation : reconnaître, assumer, agir',
    subtitle: 'Ce que vous faites après une erreur compte le plus',
    slides: [
      {
        kind: 'cover',
        title: 'La conversation de réparation',
        body: 'Tout leader se trompe parfois : un mot trop sec, une promesse non tenue, une décision prise sans quelqu’un qui aurait dû être là. Les dégâts durables viennent rarement de l’erreur elle-même. Ils viennent de ce qui se passe ensuite.',
      },
      {
        kind: 'idea',
        title: 'Reconnaissez ce qui s’est passé',
        body: 'Nommez précisément ce que vous avez fait et comment cela a probablement été reçu. Évitez les formules vagues comme « si quelqu’un a été contrarié ». Être précis montre que vous comprenez, et c’est ce dont l’autre a le plus besoin.',
        bullets: [
          'Dites ce que vous avez fait, avec des mots simples',
          'Nommez l’impact que vous avez vu ou entendu',
          'Demandez si quelque chose vous a échappé',
        ],
      },
      {
        kind: 'idea',
        title: 'Assumez sans « mais »',
        body: 'Des excuses suivies d’un « mais » s’effacent d’elles-mêmes. Le contexte pourra compter plus tard, mais au moment de réparer, il sonne comme une excuse. Gardez une responsabilité nette et résistez à l’envie que l’autre vous rassure.',
      },
      {
        kind: 'idea',
        title: 'Agissez, puis tenez parole',
        body: 'Réparer, c’est une promesse sur l’avenir. Dites ce que vous ferez autrement, de façon assez modeste et concrète pour pouvoir le tenir. La confiance revient par ce que les gens vous voient faire après la conversation.',
        bullets: [
          'Un changement précis, pas un vœu de perfection',
          'Un moment fixé pour en reparler',
          'Tenez parole même si personne ne vous le rappelle',
        ],
      },
      {
        kind: 'example',
        title: 'Après avoir été cassant en réunion',
        instead: '« Désolé si j’ai paru dur hier, mais nous étions sous pression. »',
        tryThis: '« Hier, je vous ai coupé la parole et j’ai écarté votre idée devant l’équipe. Ce n’était pas juste envers vous. La semaine prochaine, je vous demanderai de la présenter à tous, et j’aimerais savoir comment vous me voyez progresser. »',
        why: 'Elle nomme l’acte et l’impact, l’assume sans excuse et propose une étape concrète qui répare devant les mêmes personnes.',
      },
      {
        kind: 'check',
        question: 'Vous avez validé un changement de planning sans consulter Luis, le chef d’équipe le plus concerné. Il est visiblement agacé. Quelle phrase lance la meilleure réparation ?',
        options: [
          '« Je suis vraiment désolé, je me sens très mal. J’espère que vous savez combien je vous apprécie. »',
          '« J’aurais dû vous consulter d’abord, mais la direction voulait une réponse l’après-midi même. »',
          '« N’en parlons plus. À l’avenir, j’essaierai d’impliquer davantage tout le monde. »',
          '« J’ai changé votre planning sans vous consulter. La prochaine fois, je vous en parlerai d’abord. »',
        ],
        answer: 3,
        explain: 'Elle nomme ce qui s’est passé et s’engage sur un changement précis, ce qui ouvre la porte pour entendre l’impact de son côté. La première option est chaleureuse mais met vos émotions au centre. La deuxième ajoute un « mais » qui annule la responsabilité, et la troisième est trop vague pour inspirer confiance.',
      },
      {
        kind: 'action',
        title: 'Faites une petite réparation',
        body: 'Pensez à un moment du dernier mois où vous avez déçu quelqu’un, même un peu. Notez ce que vous avez fait, son impact probable et une chose que vous ferez autrement. Puis ayez une conversation de réparation de deux minutes cette semaine.',
      },
      {
        kind: 'takeaway',
        title: 'Réparer construit la confiance',
        bullets: [
          'Reconnaissez l’acte précis et son impact',
          'Assumez clairement, sans « mais »',
          'Tenez parole sur un changement concret',
        ],
      },
    ],
  },
};

export default lesson;
