import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-43',
  week: 43,
  focus: 'change',
  minutes: 4,
  title: 'Leading change at scale',
  subtitle: 'Keep the message clear as it travels through many teams',
  slides: [
    {
      kind: 'cover',
      title: 'Leading change at scale',
      body: 'A change that works with one team can stall across ten. The message you gave clearly in one room gets diluted, reshaped, or lost by the time it reaches the front line.',
    },
    {
      kind: 'idea',
      title: 'Your managers are the message',
      body: 'At scale, most people hear about a change from their direct manager, not from you. If those managers are confused or quietly skeptical, that is what spreads. Brief managers before everyone else, and give them room to ask the hard questions first.',
      bullets: ['Brief managers a day or two early', 'Give them the why, not just the what', 'Invite their doubts in private first'],
    },
    {
      kind: 'idea',
      title: 'Give people a core message they can carry',
      body: 'Write the change in three or four plain sentences that anyone could repeat accurately. Then let each team add what it means for them locally. The core stays the same; the examples change.',
      bullets: ['One shared core message', 'Local translation by each leader', 'A single place for updates and questions'],
    },
    {
      kind: 'idea',
      title: 'Build listening loops, not just broadcasts',
      body: 'A broadcast tells you what was sent, not what was heard. Set up simple ways to hear back: a short pulse question, a shared question log, or managers reporting the top three concerns each week. Then answer the questions you collect, visibly.',
    },
    {
      kind: 'example',
      title: 'Equip, don’t just forward',
      instead: '"Please cascade this deck to your teams by Friday."',
      tryThis: '"Here’s the core message in four sentences. Take ten minutes to think about what it means for your team, then bring me the two questions you expect to hear."',
      why: 'Managers who have made sense of a change themselves explain it far better than managers who forward slides.',
    },
    {
      kind: 'check',
      question: 'You’re rolling out a new planning process across six departments. One week in, two departments are using it and four have barely started. What should you do first?',
      options: [
        'Send a firm reminder to all six departments with the deadline and a link to the training materials.',
        'Publicly thank the two departments that adopted it quickly, so the others feel inspired to follow.',
        'Talk with the four lagging managers to learn what is getting in the way for their teams.',
        'Schedule a company wide town hall to repeat the rationale and take questions from everyone.',
      ],
      answer: 2,
      explain: 'Slow adoption usually signals a real obstacle: workload, unclear steps, or manager doubt. A reminder or a town hall repeats the message without finding the block. Public thanks feels encouraging but can read as shaming the others.',
    },
    {
      kind: 'action',
      title: 'Write your four sentence core',
      body: 'Pick a change you are leading or supporting. Write it in four sentences: what is changing, why, what stays the same, and where people can ask questions. Share it with one manager this week and ask, "What would your team ask first?"',
    },
    {
      kind: 'takeaway',
      title: 'Scale through people',
      bullets: [
        'Managers carry the change, so brief them first.',
        'Keep one core message and let teams translate it locally.',
        'Listen for what was heard, then answer it visibly.',
      ],
    },
  ],
  es: {
    title: 'Liderar el cambio a gran escala',
    subtitle: 'Mantén el mensaje claro mientras recorre muchos equipos',
    slides: [
      {
        kind: 'cover',
        title: 'Liderar el cambio a gran escala',
        body: 'Un cambio que funciona con un equipo puede estancarse en diez. El mensaje que diste con claridad en una sala se diluye, se transforma o se pierde antes de llegar a la primera línea.',
      },
      {
        kind: 'idea',
        title: 'Tus mandos son el mensaje',
        body: 'A gran escala, la mayoría de las personas se entera de un cambio por su jefe directo, no por ti. Si esos mandos están confundidos o son escépticos en silencio, eso es lo que se propaga. Informa a los mandos antes que a nadie y dales espacio para hacer primero las preguntas difíciles.',
        bullets: ['Informa a los mandos uno o dos días antes', 'Dales el porqué, no solo el qué', 'Escucha sus dudas primero en privado'],
      },
      {
        kind: 'idea',
        title: 'Da a la gente un mensaje central que pueda llevar',
        body: 'Escribe el cambio en tres o cuatro oraciones sencillas que cualquiera pueda repetir con precisión. Luego deja que cada equipo agregue lo que significa en su contexto. El núcleo se mantiene; los ejemplos cambian.',
        bullets: ['Un mensaje central compartido', 'Adaptación local por cada líder', 'Un solo lugar para novedades y preguntas'],
      },
      {
        kind: 'idea',
        title: 'Crea circuitos de escucha, no solo comunicados',
        body: 'Un comunicado te dice qué se envió, no qué se escuchó. Crea formas sencillas de recibir respuesta: una breve pregunta de pulso, un registro compartido de preguntas o mandos que reporten las tres principales inquietudes cada semana. Luego responde de forma visible las preguntas que reúnas.',
      },
      {
        kind: 'example',
        title: 'Prepara, no solo reenvíes',
        instead: '“Por favor, compartan esta presentación con sus equipos antes del viernes.”',
        tryThis: '“Aquí está el mensaje central en cuatro oraciones. Tómate diez minutos para pensar qué significa para tu equipo y luego tráeme las dos preguntas que esperas escuchar.”',
        why: 'Los mandos que le encontraron sentido al cambio lo explican mucho mejor que quienes solo reenvían diapositivas.',
      },
      {
        kind: 'check',
        question: 'Estás implementando un nuevo proceso de planificación en seis departamentos. Después de una semana, dos lo usan y cuatro apenas han empezado. ¿Qué deberías hacer primero?',
        options: [
          'Enviar un recordatorio firme a los seis departamentos con la fecha límite y un enlace a la capacitación.',
          'Agradecer en público a los dos departamentos que lo adoptaron rápido, para inspirar a los demás.',
          'Hablar con los cuatro mandos rezagados para entender qué obstáculos tienen sus equipos.',
          'Organizar una reunión general de toda la empresa para repetir el porqué y responder preguntas.',
        ],
        answer: 2,
        explain: 'Una adopción lenta suele señalar un obstáculo real: carga de trabajo, pasos poco claros o dudas del mando. Un recordatorio o una reunión general repiten el mensaje sin encontrar el bloqueo. El agradecimiento público parece alentador, pero puede sentirse como exponer a los demás.',
      },
      {
        kind: 'action',
        title: 'Escribe tu mensaje central en cuatro oraciones',
        body: 'Elige un cambio que lideres o apoyes. Escríbelo en cuatro oraciones: qué cambia, por qué, qué se mantiene y dónde puede preguntar la gente. Compártelo esta semana con un mando y pregúntale: “¿Qué preguntaría primero tu equipo?”',
      },
      {
        kind: 'takeaway',
        title: 'Escala a través de las personas',
        bullets: [
          'Los mandos llevan el cambio, así que infórmales primero.',
          'Mantén un mensaje central y deja que cada equipo lo adapte.',
          'Escucha qué se entendió y responde de forma visible.',
        ],
      },
    ],
  },
  fr: {
    title: 'Conduire le changement à grande échelle',
    subtitle: 'Garder un message clair quand il traverse de nombreuses équipes',
    slides: [
      {
        kind: 'cover',
        title: 'Conduire le changement à grande échelle',
        body: 'Un changement qui fonctionne avec une équipe peut s’enliser avec dix. Le message que vous avez porté clairement dans une salle se dilue, se déforme ou se perd avant d’atteindre le terrain.',
      },
      {
        kind: 'idea',
        title: 'Vos managers sont le message',
        body: 'À grande échelle, la plupart des gens apprennent un changement par leur manager direct, pas par vous. Si ces managers sont perdus ou discrètement sceptiques, c’est cela qui se diffuse. Informez les managers avant tout le monde et laissez-leur la place de poser d’abord les questions difficiles.',
        bullets: ['Informez les managers un ou deux jours avant', 'Donnez-leur le pourquoi, pas seulement le quoi', 'Accueillez d’abord leurs doutes en privé'],
      },
      {
        kind: 'idea',
        title: 'Un message central facile à transmettre',
        body: 'Résumez le changement en trois ou quatre phrases simples que chacun peut répéter fidèlement. Laissez ensuite chaque équipe préciser ce qu’il signifie pour elle. Le cœur reste le même ; les exemples changent.',
        bullets: ['Un message central partagé', 'Une déclinaison locale par chaque leader', 'Un seul endroit pour les nouvelles et les questions'],
      },
      {
        kind: 'idea',
        title: 'Créez des boucles d’écoute, pas seulement des annonces',
        body: 'Une annonce vous dit ce qui a été envoyé, pas ce qui a été compris. Mettez en place des moyens simples d’avoir des retours : une courte question de pouls, un registre de questions partagé, ou des managers qui remontent les trois principales préoccupations chaque semaine. Puis répondez visiblement aux questions recueillies.',
      },
      {
        kind: 'example',
        title: 'Outillez, ne faites pas que transférer',
        instead: '« Merci de diffuser cette présentation à vos équipes d’ici vendredi. »',
        tryThis: '« Voici le message central en quatre phrases. Prenez dix minutes pour réfléchir à ce qu’il signifie pour votre équipe, puis apportez-moi les deux questions que vous pensez entendre. »',
        why: 'Les managers qui ont eux-mêmes donné du sens au changement l’expliquent bien mieux que ceux qui transfèrent des diapositives.',
      },
      {
        kind: 'check',
        question: 'Vous déployez un nouveau processus de planification dans six services. Au bout d’une semaine, deux services l’utilisent et quatre ont à peine commencé. Que faites-vous en premier ?',
        options: [
          'Envoyer un rappel ferme aux six services avec l’échéance et un lien vers les supports de formation.',
          'Remercier publiquement les deux services qui l’ont adopté vite, pour donner envie aux autres de suivre.',
          'Échanger avec les quatre managers en retard pour comprendre ce qui bloque leurs équipes.',
          'Organiser une réunion générale pour répéter les raisons du changement et répondre à toutes les questions.',
        ],
        answer: 2,
        explain: 'Une adoption lente signale souvent un vrai obstacle : charge de travail, étapes floues ou doutes du manager. Un rappel ou une réunion générale répètent le message sans trouver le blocage. Des remerciements publics semblent encourageants mais peuvent être vécus comme une mise en cause des autres.',
      },
      {
        kind: 'action',
        title: 'Écrivez votre message central en quatre phrases',
        body: 'Choisissez un changement que vous menez ou soutenez. Écrivez-le en quatre phrases : ce qui change, pourquoi, ce qui reste pareil et où poser ses questions. Partagez-le cette semaine avec un manager et demandez-lui : « Que demanderait votre équipe en premier ? »',
      },
      {
        kind: 'takeaway',
        title: 'Passez à l’échelle par les personnes',
        bullets: [
          'Les managers portent le changement : informez-les en premier.',
          'Gardez un message central et laissez chaque équipe le décliner.',
          'Écoutez ce qui a été compris, puis répondez visiblement.',
        ],
      },
    ],
  },
};

export default lesson;
