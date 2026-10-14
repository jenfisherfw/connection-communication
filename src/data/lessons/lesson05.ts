import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-05',
  week: 5,
  focus: 'communication',
  minutes: 4,
  title: 'Specific recognition beats generic praise',
  subtitle: 'Say what they did and why it mattered',
  slides: [
    {
      kind: 'cover',
      title: 'Specific recognition beats generic praise',
      body: 'You say "great job" often and mean it. Yet people still tell surveys they don’t feel recognized, because praise that could fit anyone doesn’t feel like it was about them.',
    },
    {
      kind: 'idea',
      title: 'Generic praise fades fast',
      body: '"Nice work" is pleasant, but it gives no information. The person can’t tell what you noticed, so they can’t repeat it. Over time, generic praise starts to sound automatic, and people tune it out.',
      bullets: ['It could be said to anyone', 'It names no action', 'It teaches nothing about what good looks like'],
    },
    {
      kind: 'idea',
      title: 'Name the action and the effect',
      body: 'Specific recognition has two parts: what exactly they did, and what difference it made. The detail proves you were paying attention. The effect shows their work mattered beyond the task list.',
      bullets: ['Action: "You rewrote the onboarding guide..."', 'Effect: "...and new hires stopped asking the same five questions."', 'Add the effort if it was invisible'],
    },
    {
      kind: 'idea',
      title: 'Make it timely and honest',
      body: 'Recognition lands best close to the moment, while the work is still fresh. Keep it sincere and proportional. Inflated praise for small things makes your real praise worth less.',
      bullets: ['Same day or same week', 'Match the size of the praise to the work', 'Recognize effort and learning, not only wins'],
    },
    {
      kind: 'example',
      title: 'From generic to specific',
      instead: '"Thanks for all your hard work on the launch. You’re a rock star!"',
      tryThis: '"Thanks for staying on the customer call Thursday until the bug was traced. Because of that, we launched on time and the client renewed."',
      why: 'The person learns exactly what you value, and they know you saw it. That makes the behavior more likely to happen again.',
    },
    {
      kind: 'check',
      question: 'Jada quietly fixed a data error that would have sent wrong numbers to the board. Which message recognizes her best?',
      options: [
        '"Jada, you are amazing! Seriously, the best teammate anyone could ask for. Thank you!"',
        '"Thanks for your attention to detail, Jada. Keep up the great work this quarter."',
        '"Jada, you caught the error in the board report, so leaders saw accurate numbers."',
        '"Great job, team! Another strong week. I really appreciate all of you so much."',
      ],
      answer: 2,
      explain: 'It names her specific action and why it mattered. The first option is warm and enthusiastic, but it could describe anyone and says nothing about what she did.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Think of one person whose work helped you or the team this week. Send them a two sentence message: what they did, and the difference it made. Copy their manager if that fits your culture.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Name the specific action, not just the person.',
        'Say what difference it made.',
        'Recognize soon, sincerely, and in proportion.',
      ],
    },
  ],
  es: {
    title: 'El reconocimiento específico supera al elogio genérico',
    subtitle: 'Di qué hizo y por qué importó',
    slides: [
      {
        kind: 'cover',
        title: 'El reconocimiento específico supera al elogio genérico',
        body: 'Dices “buen trabajo” a menudo y lo dices en serio. Aun así, las personas responden en las encuestas que no se sienten reconocidas, porque un elogio que serviría para cualquiera no se siente propio.',
      },
      {
        kind: 'idea',
        title: 'El elogio genérico se olvida rápido',
        body: '“Bien hecho” es agradable, pero no da información. La persona no sabe qué notaste, así que no puede repetirlo. Con el tiempo, el elogio genérico suena automático y la gente deja de escucharlo.',
        bullets: ['Se le podría decir a cualquiera', 'No nombra ninguna acción', 'No enseña cómo se ve un buen trabajo'],
      },
      {
        kind: 'idea',
        title: 'Nombra la acción y el efecto',
        body: 'El reconocimiento específico tiene dos partes: qué hizo exactamente y qué diferencia generó. El detalle demuestra que prestabas atención. El efecto muestra que su trabajo importó más allá de la lista de tareas.',
        bullets: ['Acción: “Reescribiste la guía de incorporación...”', 'Efecto: “...y las personas nuevas dejaron de hacer las mismas cinco preguntas.”', 'Menciona el esfuerzo si fue invisible'],
      },
      {
        kind: 'idea',
        title: 'Que sea oportuno y honesto',
        body: 'El reconocimiento llega mejor cerca del momento, mientras el trabajo está fresco. Mantenlo sincero y proporcional. Exagerar el elogio por cosas pequeñas le quita valor a tu elogio real.',
        bullets: ['El mismo día o la misma semana', 'Ajusta el tamaño del elogio al del trabajo', 'Reconoce el esfuerzo y el aprendizaje, no solo los logros'],
      },
      {
        kind: 'example',
        title: 'De lo genérico a lo específico',
        instead: '“Gracias por todo tu esfuerzo en el lanzamiento. ¡Eres una estrella!”',
        tryThis: '“Gracias por quedarte en la llamada con el cliente el jueves hasta encontrar el error. Gracias a eso lanzamos a tiempo y el cliente renovó.”',
        why: 'La persona sabe exactamente qué valoras y que lo viste. Eso hace más probable que la conducta se repita.',
      },
      {
        kind: 'check',
        question: 'Jada corrigió sin hacer ruido un error de datos que habría enviado cifras equivocadas a la junta directiva. ¿Qué mensaje la reconoce mejor?',
        options: [
          '“¡Jada, eres increíble! En serio, la mejor compañera que alguien podría pedir. ¡Gracias!”',
          '“Gracias por tu atención al detalle, Jada. Sigue con el gran trabajo este trimestre.”',
          '“Jada, detectaste el error del informe para la junta y así vieron cifras correctas.”',
          '“¡Buen trabajo, equipo! Otra gran semana. De verdad los aprecio muchísimo a todos.”',
        ],
        answer: 2,
        explain: 'Nombra su acción concreta y por qué importó. La primera opción es cálida y entusiasta, pero podría describir a cualquiera y no dice nada de lo que hizo.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Piensa en una persona cuyo trabajo te ayudó a ti o al equipo esta semana. Envíale un mensaje de dos frases: qué hizo y qué diferencia generó. Copia a su jefe si encaja con tu cultura.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Nombra la acción concreta, no solo a la persona.',
          'Di qué diferencia generó.',
          'Reconoce pronto, con sinceridad y en proporción.',
        ],
      },
    ],
  },
  fr: {
    title: 'La reconnaissance précise vaut mieux que le compliment général',
    subtitle: 'Dites ce que la personne a fait et pourquoi c’était important',
    slides: [
      {
        kind: 'cover',
        title: 'La reconnaissance précise vaut mieux que le compliment général',
        body: 'Vous dites souvent « bon travail », et vous le pensez. Pourtant, les enquêtes montrent que les personnes ne se sentent pas reconnues, car un compliment qui irait à n’importe qui ne semble pas leur être destiné.',
      },
      {
        kind: 'idea',
        title: 'Le compliment général s’efface vite',
        body: '« Bien joué » fait plaisir, mais n’apporte aucune information. La personne ne sait pas ce que vous avez remarqué, elle ne peut donc pas le reproduire. Avec le temps, le compliment général sonne automatique et on cesse de l’entendre.',
        bullets: ['Il pourrait s’adresser à n’importe qui', 'Il ne nomme aucune action', 'Il n’apprend rien sur ce qu’est un bon travail'],
      },
      {
        kind: 'idea',
        title: 'Nommez l’action et l’effet',
        body: 'Une reconnaissance précise a deux parties : ce que la personne a fait exactement, et la différence que cela a faite. Le détail prouve que vous étiez attentif. L’effet montre que son travail comptait au‑delà de la liste de tâches.',
        bullets: ['Action : « Vous avez réécrit le guide d’accueil... »', 'Effet : « ...et les nouveaux arrivants ne posent plus les cinq mêmes questions. »', 'Mentionnez l’effort s’il est passé inaperçu'],
      },
      {
        kind: 'idea',
        title: 'Soyez rapide et sincère',
        body: 'La reconnaissance porte mieux près du moment, quand le travail est encore frais. Restez sincère et proportionné. Exagérer pour de petites choses dévalue vos vrais compliments.',
        bullets: ['Le jour même ou la même semaine', 'Ajustez l’ampleur du compliment au travail', 'Reconnaissez l’effort et l’apprentissage, pas seulement les réussites'],
      },
      {
        kind: 'example',
        title: 'Du général au précis',
        instead: '« Merci pour tout votre travail sur le lancement. Vous êtes une star ! »',
        tryThis: '« Merci d’être resté jeudi sur l’appel client jusqu’à trouver l’origine du bug. Grâce à cela, nous avons lancé à temps et le client a renouvelé. »',
        why: 'La personne sait exactement ce que vous valorisez, et que vous l’avez vu. Ce comportement a donc plus de chances de se reproduire.',
      },
      {
        kind: 'check',
        question: 'Jada a discrètement corrigé une erreur de données qui aurait envoyé de mauvais chiffres au conseil d’administration. Quel message la reconnaît le mieux ?',
        options: [
          '« Jada, vous êtes formidable ! Vraiment, la meilleure collègue dont on puisse rêver. Merci ! »',
          '« Merci pour votre souci du détail, Jada. Continuez ce beau travail ce trimestre. »',
          '« Jada, vous avez repéré l’erreur du rapport au conseil : il a vu des chiffres justes. »',
          '« Bravo l’équipe ! Encore une belle semaine. Je vous suis vraiment très reconnaissant. »',
        ],
        answer: 2,
        explain: 'Il nomme son action précise et pourquoi elle comptait. La première option est chaleureuse et enthousiaste, mais elle pourrait décrire n’importe qui et ne dit rien de ce qu’elle a fait.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Pensez à une personne dont le travail vous a aidé, vous ou l’équipe, cette semaine. Envoyez‑lui un message de deux phrases : ce qu’elle a fait et la différence que cela a faite. Mettez son responsable en copie si cela correspond à votre culture.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Nommez l’action précise, pas seulement la personne.',
          'Dites quelle différence elle a faite.',
          'Reconnaissez vite, sincèrement et avec mesure.',
        ],
      },
    ],
  },
};

export default lesson;
