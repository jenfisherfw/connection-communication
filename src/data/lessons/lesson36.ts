import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-36',
  week: 36,
  focus: 'communication',
  minutes: 5,
  title: 'Running the meetings that run the organization',
  subtitle: 'Make your recurring meetings decide, align, and travel well',
  slides: [
    {
      kind: 'cover',
      title: 'Running the meetings that run the organization',
      body: 'Your recurring meetings are where priorities get set and messages start their trip through the organization. Yet many leaders run them on autopilot, then wonder why the same issues come back every week.',
    },
    {
      kind: 'idea',
      title: 'Give every meeting one job',
      body: 'A meeting that tries to inform, decide, and brainstorm at once usually does none of them well. Name the main job at the top of the agenda so people know how to prepare and how to take part. If the job is only to share updates, ask whether a short written note would do.',
      bullets: [
        'Decide: a clear choice leaves the room',
        'Solve: the group works on a real problem',
        'Align: everyone hears the same message at the same time',
        'Connect: the team builds trust and context',
      ],
    },
    {
      kind: 'idea',
      title: 'Surface disagreement before the decision',
      body: 'In senior meetings, people often keep their doubts quiet and raise them later in the hallway. That is how decisions get quietly undone. Ask for concerns while they can still change the outcome, and invite quieter voices by name, ideally with some notice.',
      bullets: ['"What would make this fail?"', '"Who sees this differently?"', '"What are we not saying?"'],
    },
    {
      kind: 'example',
      title: 'Closing the meeting',
      instead: '"Great discussion, everyone. Let’s keep moving on this."',
      tryThis: '"Before we go: we decided to pilot the new schedule at two sites. Maya owns it, we check in on the 15th, and each of you tells your team by Friday using the same three points."',
      why: 'Meetings run the organization only when decisions leave the room intact. Naming the decision, owner, date, and message out loud prevents ten different versions of what happened.',
    },
    {
      kind: 'idea',
      title: 'Plan the message, not just the decision',
      body: 'When the people in the room lead other teams, every decision becomes a message that will travel. Take two minutes at the end to agree on what can be shared, what stays in the room for now, and the key points everyone will use. Consistent words from every leader build trust faster than any memo.',
    },
    {
      kind: 'check',
      question: 'Your weekly leadership meeting has just agreed to merge two support queues. Priya, one of your managers, stayed silent the whole time, and last month she had concerns about this idea. What is your best move?',
      options: [
        'Move on. Priya is an experienced leader, and she would have spoken up if it really mattered to her.',
        'Before closing, say: "Priya, you raised concerns about this last month. What still worries you?"',
        'Thank everyone warmly for the great energy and send a friendly recap so the whole group feels included.',
        'Message Priya privately after the meeting: "Are you okay with what the group decided today?"',
      ],
      answer: 1,
      explain: 'Asking in the room, while the decision can still change, gives Priya a real chance to shape it and shows everyone that doubts are welcome. A warm recap or a private check in after the fact invites the hallway conversation you want to avoid.',
    },
    {
      kind: 'action',
      title: 'Audit one recurring meeting',
      body: 'Pick one recurring meeting you lead. In one sentence, write its main job and the decisions it should produce. Put that sentence at the top of the next agenda, and end that meeting by reading back each decision, owner, and date.',
    },
    {
      kind: 'takeaway',
      title: 'Meetings that move the work',
      bullets: [
        'Give each meeting one clear job',
        'Invite disagreement while it can still change the outcome',
        'Close with the decision, the owner, the date, and the shared message',
      ],
    },
  ],
  es: {
    title: 'Dirigir las reuniones que dirigen la organización',
    subtitle: 'Haz que tus reuniones recurrentes decidan, alineen y se transmitan bien',
    slides: [
      {
        kind: 'cover',
        title: 'Dirigir las reuniones que dirigen la organización',
        body: 'En tus reuniones recurrentes se fijan prioridades y los mensajes empiezan su recorrido por la organización. Aun así, muchos líderes las dirigen en piloto automático y luego se preguntan por qué los mismos temas regresan cada semana.',
      },
      {
        kind: 'idea',
        title: 'Dale a cada reunión un solo propósito',
        body: 'Una reunión que intenta informar, decidir y generar ideas a la vez rara vez logra alguna de esas cosas. Nombra el propósito principal al inicio de la agenda para que la gente sepa cómo prepararse y cómo participar. Si el propósito es solo compartir novedades, pregúntate si bastaría con una nota breve por escrito.',
        bullets: [
          'Decidir: sale de la sala una decisión clara',
          'Resolver: el grupo trabaja un problema real',
          'Alinear: todos escuchan el mismo mensaje al mismo tiempo',
          'Conectar: el equipo construye confianza y contexto',
        ],
      },
      {
        kind: 'idea',
        title: 'Saca a la luz el desacuerdo antes de decidir',
        body: 'En las reuniones de líderes, la gente suele callar sus dudas y plantearlas después en el pasillo. Así es como las decisiones se deshacen sin ruido. Pide las preocupaciones mientras todavía pueden cambiar el resultado e invita por su nombre a las voces más calladas, idealmente avisándoles antes.',
        bullets: ['“¿Qué haría que esto fracasara?”', '“¿Quién lo ve de otra manera?”', '“¿Qué no estamos diciendo?”'],
      },
      {
        kind: 'example',
        title: 'Cerrar la reunión',
        instead: '“Excelente conversación, equipo. Sigamos avanzando con esto.”',
        tryThis: '“Antes de irnos: decidimos hacer un piloto del nuevo horario en dos sedes. Maya es la responsable, revisamos el día 15 y cada uno se lo comunica a su equipo antes del viernes con los mismos tres puntos.”',
        why: 'Las reuniones dirigen la organización solo cuando las decisiones salen intactas de la sala. Decir en voz alta la decisión, la persona responsable, la fecha y el mensaje evita diez versiones distintas de lo que pasó.',
      },
      {
        kind: 'idea',
        title: 'Planea el mensaje, no solo la decisión',
        body: 'Cuando las personas en la sala dirigen otros equipos, cada decisión se convierte en un mensaje que va a viajar. Toma dos minutos al final para acordar qué se puede compartir, qué se queda en la sala por ahora y los puntos clave que todos usarán. Las mismas palabras de cada líder generan más confianza que cualquier memorándum.',
      },
      {
        kind: 'check',
        question: 'Tu reunión semanal de líderes acaba de acordar fusionar dos colas de soporte. Priya, una de tus gerentes, estuvo en silencio todo el tiempo, y el mes pasado tenía dudas sobre esta idea. ¿Cuál es tu mejor opción?',
        options: [
          'Seguir adelante. Priya es una líder con experiencia y habría hablado si de verdad le importara.',
          'Antes de cerrar, decir: “Priya, el mes pasado planteaste dudas sobre esto. ¿Qué te sigue preocupando?”',
          'Agradecer a todos con calidez por la buena energía y enviar un resumen amable para que todos se sientan incluidos.',
          'Escribirle a Priya en privado después de la reunión: “¿Estás de acuerdo con lo que decidió hoy el grupo?”',
        ],
        answer: 1,
        explain: 'Preguntar en la sala, mientras la decisión todavía puede cambiar, le da a Priya una oportunidad real de influir y muestra a todos que las dudas son bienvenidas. Un resumen cálido o una consulta privada después invitan justo a la conversación de pasillo que quieres evitar.',
      },
      {
        kind: 'action',
        title: 'Revisa una reunión recurrente',
        body: 'Elige una reunión recurrente que dirijas. En una sola frase, escribe su propósito principal y las decisiones que debería producir. Pon esa frase al inicio de la próxima agenda y cierra esa reunión repasando en voz alta cada decisión, responsable y fecha.',
      },
      {
        kind: 'takeaway',
        title: 'Reuniones que hacen avanzar el trabajo',
        bullets: [
          'Dale a cada reunión un propósito claro',
          'Invita al desacuerdo mientras todavía puede cambiar el resultado',
          'Cierra con la decisión, la persona responsable, la fecha y el mensaje compartido',
        ],
      },
    ],
  },
  fr: {
    title: 'Animer les réunions qui font tourner l’organisation',
    subtitle: 'Des réunions récurrentes qui décident, alignent et se relaient bien',
    slides: [
      {
        kind: 'cover',
        title: 'Animer les réunions qui font tourner l’organisation',
        body: 'C’est dans vos réunions récurrentes que se fixent les priorités et que les messages commencent leur parcours dans l’organisation. Pourtant, beaucoup de responsables les animent en pilote automatique, puis se demandent pourquoi les mêmes sujets reviennent chaque semaine.',
      },
      {
        kind: 'idea',
        title: 'Une réunion, une mission',
        body: 'Une réunion qui veut à la fois informer, décider et faire émerger des idées n’atteint souvent aucun de ces buts. Indiquez la mission principale en haut de l’ordre du jour pour que chacun sache comment se préparer et participer. Si la mission est seulement de partager des nouvelles, demandez-vous si une courte note écrite suffirait.',
        bullets: [
          'Décider : un choix clair sort de la salle',
          'Résoudre : le groupe travaille sur un vrai problème',
          'Aligner : tout le monde entend le même message au même moment',
          'Relier : l’équipe construit confiance et contexte',
        ],
      },
      {
        kind: 'idea',
        title: 'Faire émerger les désaccords avant de décider',
        body: 'Dans les réunions de direction, on garde souvent ses doutes pour soi et on les exprime plus tard dans le couloir. C’est ainsi que les décisions se défont en silence. Demandez les objections tant qu’elles peuvent encore changer le résultat, et invitez nommément les voix plus discrètes, idéalement en les prévenant à l’avance.',
        bullets: ['« Qu’est-ce qui ferait échouer ce projet ? »', '« Qui voit les choses autrement ? »', '« Qu’est-ce que nous ne disons pas ? »'],
      },
      {
        kind: 'example',
        title: 'Clore la réunion',
        instead: '« Belle discussion, tout le monde. Continuons d’avancer là-dessus. »',
        tryThis: '« Avant de partir : nous avons décidé de tester le nouveau planning sur deux sites. Maya en est responsable, nous faisons le point le 15, et chacun informe son équipe d’ici vendredi avec les trois mêmes messages. »',
        why: 'Les réunions font tourner l’organisation seulement si les décisions sortent intactes de la salle. Nommer à voix haute la décision, la personne responsable, la date et le message évite dix versions différentes de ce qui s’est passé.',
      },
      {
        kind: 'idea',
        title: 'Préparer le message, pas seulement la décision',
        body: 'Quand les personnes présentes dirigent d’autres équipes, chaque décision devient un message qui va circuler. Prenez deux minutes à la fin pour convenir de ce qui peut être partagé, de ce qui reste dans la salle pour l’instant et des points clés que chacun utilisera. Des mots cohérents de chaque responsable créent plus de confiance que n’importe quelle note de service.',
      },
      {
        kind: 'check',
        question: 'Votre réunion hebdomadaire de direction vient de décider de fusionner deux files de support. Priya, l’une de vos managers, est restée silencieuse tout du long, et le mois dernier elle avait des réserves sur cette idée. Quelle est la meilleure option ?',
        options: [
          'Passer à la suite. Priya est une manager expérimentée et elle aurait parlé si cela comptait vraiment pour elle.',
          'Avant de conclure, dire : « Priya, vous aviez des réserves le mois dernier. Qu’est-ce qui vous inquiète encore ? »',
          'Remercier chaleureusement tout le monde pour la belle énergie et envoyer un compte rendu sympathique pour que chacun se sente inclus.',
          'Écrire à Priya en privé après la réunion : « Êtes-vous à l’aise avec ce que le groupe a décidé ? »',
        ],
        answer: 1,
        explain: 'Poser la question dans la salle, tant que la décision peut encore évoluer, donne à Priya une vraie occasion d’influer et montre à tous que les doutes sont bienvenus. Un compte rendu chaleureux ou un échange privé après coup ouvrent justement la porte à la conversation de couloir que vous voulez éviter.',
      },
      {
        kind: 'action',
        title: 'Passez une réunion récurrente au crible',
        body: 'Choisissez une réunion récurrente que vous animez. En une phrase, écrivez sa mission principale et les décisions qu’elle devrait produire. Placez cette phrase en haut du prochain ordre du jour, et terminez cette réunion en relisant chaque décision, responsable et date.',
      },
      {
        kind: 'takeaway',
        title: 'Des réunions qui font avancer le travail',
        bullets: [
          'Donnez à chaque réunion une mission claire',
          'Invitez le désaccord tant qu’il peut encore changer le résultat',
          'Concluez avec la décision, la personne responsable, la date et le message commun',
        ],
      },
    ],
  },
};

export default lesson;
