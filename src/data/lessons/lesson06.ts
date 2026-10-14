import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-06',
  week: 6,
  focus: 'change',
  minutes: 4,
  title: 'What resistance is protecting',
  subtitle: 'Why people push back on change, and how to listen for it',
  slides: [
    {
      kind: 'cover',
      title: 'What resistance is protecting',
      body: 'You announce a change and get eye rolls, silence, or a flood of objections. It is tempting to label people as resistant, but pushback usually means something they value feels at risk.',
    },
    {
      kind: 'idea',
      title: 'Resistance is information',
      body: 'People rarely resist change for no reason. They resist losing something: skill, status, control, relationships, or a way of working that made them good at their job. When you treat pushback as data instead of defiance, you learn what the change really costs.',
      bullets: ['Competence: "I was great at the old way."', 'Control: "Nobody asked us."', 'Belonging: "My team is being split up."'],
    },
    {
      kind: 'idea',
      title: 'Listen for the loss under the objection',
      body: 'The first objection is often not the real one. "The new tool is clunky" may mean "I am afraid I will look slow in front of my team." Ask what worries them most, and keep asking until you hear what they are protecting.',
      bullets: ['"What concerns you most about this?"', '"What would you hate to lose?"', '"What would make this workable for you?"'],
    },
    {
      kind: 'idea',
      title: 'Respond to the real concern',
      body: 'Once you know what people are protecting, you can address it directly. Offer training to those worried about skill. Give choices on how, even when the what is fixed. Be honest about real losses instead of pretending there are none.',
      bullets: ['Acknowledge the loss out loud', 'Separate what is fixed from what is open', 'Bring their ideas into the how'],
    },
    {
      kind: 'example',
      title: 'Meeting pushback with curiosity',
      instead: '"I hear you, but this is happening, so we all need to get on board."',
      tryThis: '"You’ve run this process well for six years, so it makes sense this feels like a loss. What part of the old way do you most want to protect?"',
      why: 'You name the loss and invite them to say what matters. That turns a standoff into a conversation about how to make the change work.',
    },
    {
      kind: 'check',
      question: 'Rafael, your most experienced specialist, says the new scheduling system "will never work here." What is the best first move?',
      options: [
        '"You know this work better than anyone. What worries you about how it will play out?"',
        '"I know change is hard, and I really appreciate you. Let’s just give it a fair try."',
        '"Leadership already decided, so let’s focus our energy on making it succeed."',
        '"Can I show you the data on how well it worked at our other sites?"',
      ],
      answer: 0,
      explain: 'It respects his expertise and asks for the concern underneath. The appreciative option sounds kind, but it skips past what he is protecting, and data rarely answers a fear of loss.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Think of one person pushing back on a current change. In your next conversation, ask, "What would you hate to lose in this change?" Listen without defending the change, then write down what they named.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Pushback usually protects something people value.',
        'Ask until you hear the loss beneath the objection.',
        'Address the real concern, and be honest about real losses.',
      ],
    },
  ],
  es: {
    title: 'Lo que protege la resistencia',
    subtitle: 'Por qué las personas se resisten al cambio y cómo escucharlo',
    slides: [
      {
        kind: 'cover',
        title: 'Lo que protege la resistencia',
        body: 'Anuncias un cambio y recibes miradas de fastidio, silencio o una lluvia de objeciones. Es tentador etiquetar a las personas como resistentes, pero la oposición suele indicar que algo que valoran se siente en riesgo.',
      },
      {
        kind: 'idea',
        title: 'La resistencia es información',
        body: 'Rara vez alguien se resiste al cambio sin motivo. Se resiste a perder algo: habilidad, estatus, control, relaciones o una forma de trabajar en la que era bueno. Cuando tratas la oposición como información y no como desafío, descubres lo que el cambio cuesta de verdad.',
        bullets: ['Competencia: “Yo era muy bueno con el método anterior.”', 'Control: “Nadie nos preguntó.”', 'Pertenencia: “Van a dividir a mi equipo.”'],
      },
      {
        kind: 'idea',
        title: 'Escucha la pérdida detrás de la objeción',
        body: 'La primera objeción a menudo no es la real. “La herramienta nueva es torpe” puede significar “Me da miedo verme lento frente a mi equipo”. Pregunta qué le preocupa más y sigue preguntando hasta escuchar qué está protegiendo.',
        bullets: ['“¿Qué es lo que más te preocupa de esto?”', '“¿Qué no te gustaría perder?”', '“¿Qué haría que esto funcionara para ti?”'],
      },
      {
        kind: 'idea',
        title: 'Responde a la preocupación real',
        body: 'Cuando sabes qué protege la persona, puedes abordarlo directamente. Ofrece capacitación a quien teme por sus habilidades. Da opciones sobre el cómo, aunque el qué esté definido. Sé honesto sobre las pérdidas reales en lugar de fingir que no existen.',
        bullets: ['Reconoce la pérdida en voz alta', 'Separa lo que está definido de lo que está abierto', 'Incluye sus ideas en el cómo'],
      },
      {
        kind: 'example',
        title: 'Responder a la oposición con curiosidad',
        instead: '“Te entiendo, pero esto va a pasar, así que todos tenemos que sumarnos.”',
        tryThis: '“Has llevado este proceso muy bien durante seis años, así que tiene sentido que esto se sienta como una pérdida. ¿Qué parte del método anterior quieres proteger más?”',
        why: 'Nombras la pérdida y lo invitas a decir qué le importa. Eso convierte un enfrentamiento en una conversación sobre cómo hacer que el cambio funcione.',
      },
      {
        kind: 'check',
        question: 'Rafael, tu especialista con más experiencia, dice que el nuevo sistema de horarios “nunca va a funcionar aquí”. ¿Cuál es el mejor primer paso?',
        options: [
          '“Conoces este trabajo mejor que nadie. ¿Qué te preocupa de cómo va a funcionar?”',
          '“Sé que el cambio cuesta y te aprecio mucho. Démosle una oportunidad justa.”',
          '“La dirección ya lo decidió, así que enfoquemos la energía en que salga bien.”',
          '“¿Te muestro los datos de lo bien que funcionó en las otras sedes?”',
        ],
        answer: 0,
        explain: 'Respeta su experiencia y pregunta por la preocupación de fondo. La opción de aprecio suena amable, pero pasa por alto lo que protege, y los datos rara vez responden a un miedo a perder.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Piensa en una persona que se está oponiendo a un cambio actual. En tu próxima conversación, pregunta: “¿Qué no te gustaría perder con este cambio?”. Escucha sin defender el cambio y luego anota lo que mencionó.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'La oposición suele proteger algo que las personas valoran.',
          'Pregunta hasta escuchar la pérdida detrás de la objeción.',
          'Atiende la preocupación real y sé honesto sobre las pérdidas.',
        ],
      },
    ],
  },
  fr: {
    title: 'Ce que la résistance protège',
    subtitle: 'Pourquoi on résiste au changement, et comment l’écouter',
    slides: [
      {
        kind: 'cover',
        title: 'Ce que la résistance protège',
        body: 'Vous annoncez un changement et récoltez des soupirs, du silence ou une avalanche d’objections. Il est tentant de qualifier les gens de réfractaires, mais l’opposition signale souvent que quelque chose qu’ils valorisent semble menacé.',
      },
      {
        kind: 'idea',
        title: 'La résistance est une information',
        body: 'On résiste rarement au changement sans raison. On résiste à la perte de quelque chose : une compétence, un statut, du contrôle, des relations ou une façon de travailler qui faisait notre force. Quand vous traitez l’opposition comme une donnée et non comme un défi, vous découvrez ce que le changement coûte vraiment.',
        bullets: ['Compétence : « J’excellais avec l’ancienne méthode. »', 'Contrôle : « Personne ne nous a demandé notre avis. »', 'Appartenance : « Mon équipe va être séparée. »'],
      },
      {
        kind: 'idea',
        title: 'Écoutez la perte derrière l’objection',
        body: 'La première objection n’est souvent pas la vraie. « Le nouvel outil est lourd » peut vouloir dire « J’ai peur de paraître lent devant mon équipe ». Demandez ce qui inquiète le plus la personne, et continuez jusqu’à entendre ce qu’elle protège.',
        bullets: ['« Qu’est‑ce qui vous inquiète le plus ? »', '« Qu’est‑ce que vous ne voudriez surtout pas perdre ? »', '« Qu’est‑ce qui rendrait cela faisable pour vous ? »'],
      },
      {
        kind: 'idea',
        title: 'Répondez à la vraie préoccupation',
        body: 'Une fois que vous savez ce que la personne protège, vous pouvez y répondre directement. Proposez une formation à qui craint pour ses compétences. Laissez des choix sur le comment, même si le quoi est fixé. Soyez honnête sur les pertes réelles au lieu de prétendre qu’il n’y en a pas.',
        bullets: ['Reconnaissez la perte à voix haute', 'Distinguez ce qui est fixé de ce qui reste ouvert', 'Intégrez leurs idées au comment'],
      },
      {
        kind: 'example',
        title: 'Accueillir l’opposition avec curiosité',
        instead: '« Je vous entends, mais ça va se faire, donc tout le monde doit suivre. »',
        tryThis: '« Vous gérez ce processus avec brio depuis six ans, il est logique que cela ressemble à une perte. Quelle partie de l’ancienne méthode voulez‑vous le plus préserver ? »',
        why: 'Vous nommez la perte et l’invitez à dire ce qui compte. Un bras de fer devient une conversation sur la façon de faire réussir le changement.',
      },
      {
        kind: 'check',
        question: 'Rafael, votre spécialiste le plus expérimenté, affirme que le nouveau système de planning « ne marchera jamais ici ». Quelle est la meilleure première réaction ?',
        options: [
          '« Vous connaissez ce travail mieux que personne. Qu’est‑ce qui vous inquiète dans sa mise en place ? »',
          '« Je sais que le changement est difficile et je vous apprécie. Laissons‑lui une vraie chance. »',
          '« La direction a déjà décidé, alors mettons notre énergie à le faire réussir. »',
          '« Puis‑je vous montrer les chiffres des autres sites, où cela a très bien marché ? »',
        ],
        answer: 0,
        explain: 'Elle respecte son expertise et cherche la préoccupation sous‑jacente. L’option reconnaissante semble bienveillante, mais elle passe à côté de ce qu’il protège, et les chiffres répondent rarement à une peur de perdre.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Pensez à une personne qui s’oppose à un changement en cours. Lors de votre prochain échange, demandez : « Qu’est‑ce que vous ne voudriez surtout pas perdre avec ce changement ? » Écoutez sans défendre le changement, puis notez ce qu’elle a nommé.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'L’opposition protège souvent quelque chose de précieux.',
          'Questionnez jusqu’à entendre la perte derrière l’objection.',
          'Répondez à la vraie préoccupation, honnêtement.',
        ],
      },
    ],
  },
};

export default lesson;
