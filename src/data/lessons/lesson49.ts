import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-49',
  week: 49,
  focus: 'change',
  minutes: 3,
  title: 'Making change stick: from project to habit',
  subtitle: 'Keep the new way alive after the project ends',
  slides: [
    {
      kind: 'cover',
      title: 'Making change stick: from project to habit',
      body: 'Projects have end dates. Habits do not. When the project team moves on, who keeps the new way alive?',
    },
    {
      kind: 'idea',
      title: 'Hand over ownership on purpose',
      body: 'Many changes fade when the project team moves on and no one owns the new way. Name an owner inside the day to day team, someone who will notice drift and speak up. Make the handover a real conversation, not an email.',
    },
    {
      kind: 'idea',
      title: 'Watch for drift, not failure',
      body: 'Old habits return slowly, usually under pressure when deadlines loom. Drift is normal, and it is not proof that people are resisting. Check in at 30, 60, and 90 days with a simple question: where are we slipping back, and why?',
      bullets: ['Look for workarounds and shortcuts', 'Notice what happens on busy weeks', 'Ask what makes the old way tempting'],
    },
    {
      kind: 'idea',
      title: 'Make the new way visible in how you lead',
      body: 'People watch what you ask about, measure, and praise. If you never mention the change after launch, they conclude it no longer matters. Weave it into your regular questions, reviews, and recognition so it reads as normal work.',
    },
    {
      kind: 'example',
      title: 'When the team slips back',
      instead: '"I thought we agreed to do it the new way. Why is this still happening?"',
      tryThis: '"I’ve noticed we drift back to the old process on busy weeks. What makes the old way easier in those moments?"',
      why: 'Naming the pattern without blame invites people to solve the real obstacle with you, instead of defending themselves.',
    },
    {
      kind: 'check',
      question: 'Your team’s new handoff process worked well for three months. Now the project lead has moved to another team, and handoffs are getting messy again. What do you do first?',
      options: [
        'Agree with the team on who owns the process now and how you will all check on it.',
        'Ask the former project lead to keep an eye on things from their new team for a while.',
        'Send the team a friendly reminder with the original process document attached.',
        'Wait a few more weeks to see whether the problem settles on its own.',
      ],
      answer: 0,
      explain: 'Change fades when ownership is unclear. A named owner inside the team, plus an agreed way to check in, turns the project into a habit. Leaning on someone who has moved on, or on a reminder, only delays the problem.',
    },
    {
      kind: 'action',
      title: 'Schedule your 30 day check',
      body: 'Choose one change your team made in the last few months. Put a 15 minute check in on the calendar, and write the question you will open with: "Where are we slipping back, and what would make the new way easier?"',
    },
    {
      kind: 'takeaway',
      title: 'Turn the project into a habit',
      bullets: [
        'Hand ownership to someone in the daily team, out loud.',
        'Expect drift and check in at 30, 60, and 90 days.',
        'Keep asking about the change so it stays part of normal work.',
      ],
    },
  ],
  es: {
    title: 'Que el cambio perdure: del proyecto al hábito',
    subtitle: 'Mantén viva la nueva forma de trabajar cuando el proyecto termina',
    slides: [
      {
        kind: 'cover',
        title: 'Que el cambio perdure: del proyecto al hábito',
        body: 'Los proyectos tienen fecha de cierre. Los hábitos no. Cuando el equipo del proyecto pasa a otra cosa, ¿quién mantiene viva la nueva forma de trabajar?',
      },
      {
        kind: 'idea',
        title: 'Traspasa la responsabilidad a propósito',
        body: 'Muchos cambios se desvanecen cuando el equipo del proyecto se va y nadie se hace cargo de lo nuevo. Nombra a una persona responsable dentro del equipo del día a día, alguien que note cuando las cosas se desvían y lo diga. Haz que el traspaso sea una conversación real, no un correo.',
      },
      {
        kind: 'idea',
        title: 'Vigila el desvío, no el fracaso',
        body: 'Los viejos hábitos vuelven poco a poco, casi siempre bajo presión, cuando aprietan los plazos. Desviarse es normal y no prueba que las personas se resistan. Revisa a los 30, 60 y 90 días con una pregunta sencilla: ¿en qué estamos retrocediendo y por qué?',
        bullets: ['Busca atajos y soluciones alternativas', 'Observa qué pasa en las semanas cargadas', 'Pregunta qué hace tentadora la forma anterior'],
      },
      {
        kind: 'idea',
        title: 'Haz visible lo nuevo en tu forma de liderar',
        body: 'Las personas observan lo que preguntas, mides y reconoces. Si nunca mencionas el cambio después del lanzamiento, concluyen que ya no importa. Inclúyelo en tus preguntas habituales, tus revisiones y tus reconocimientos para que se vea como trabajo normal.',
      },
      {
        kind: 'example',
        title: 'Cuando el equipo retrocede',
        instead: '“Pensé que habíamos acordado hacerlo de la nueva forma. ¿Por qué sigue pasando esto?”',
        tryThis: '“He notado que volvemos al proceso anterior en las semanas cargadas. ¿Qué hace más fácil la forma anterior en esos momentos?”',
        why: 'Nombrar el patrón sin culpar invita a las personas a resolver contigo el obstáculo real, en lugar de defenderse.',
      },
      {
        kind: 'check',
        question: 'El nuevo proceso de traspaso de tu equipo funcionó bien durante tres meses. Ahora la líder del proyecto pasó a otro equipo y los traspasos vuelven a desordenarse. ¿Qué haces primero?',
        options: [
          'Acordar con el equipo quién es ahora responsable del proceso y cómo lo van a revisar entre todos.',
          'Pedir a la antigua líder del proyecto que siga pendiente de todo desde su nuevo equipo por un tiempo.',
          'Enviar al equipo un recordatorio amable con el documento original del proceso adjunto.',
          'Esperar unas semanas más para ver si el problema se resuelve solo.',
        ],
        answer: 0,
        explain: 'El cambio se desvanece cuando no está claro quién es responsable. Una persona responsable dentro del equipo, más una forma acordada de revisar, convierte el proyecto en hábito. Apoyarte en alguien que ya se fue, o en un recordatorio, solo retrasa el problema.',
      },
      {
        kind: 'action',
        title: 'Agenda tu revisión de los 30 días',
        body: 'Elige un cambio que tu equipo haya hecho en los últimos meses. Agenda una revisión de 15 minutos y escribe la pregunta con la que vas a abrir: “¿En qué estamos retrocediendo y qué haría más fácil la nueva forma?”',
      },
      {
        kind: 'takeaway',
        title: 'Convierte el proyecto en hábito',
        bullets: [
          'Traspasa la responsabilidad a alguien del equipo diario, en voz alta.',
          'Espera desvíos y revisa a los 30, 60 y 90 días.',
          'Sigue preguntando por el cambio para que siga siendo trabajo normal.',
        ],
      },
    ],
  },
  fr: {
    title: 'Faire durer le changement : du projet à l’habitude',
    subtitle: 'Garder la nouvelle façon de faire vivante après la fin du projet',
    slides: [
      {
        kind: 'cover',
        title: 'Faire durer le changement : du projet à l’habitude',
        body: 'Les projets ont une date de fin. Les habitudes, non. Quand l’équipe projet passe à autre chose, qui fait vivre la nouvelle façon de faire ?',
      },
      {
        kind: 'idea',
        title: 'Transmettre la responsabilité de façon délibérée',
        body: 'Beaucoup de changements s’effacent quand l’équipe projet s’en va et que personne ne porte la nouvelle façon de faire. Désignez une personne responsable dans l’équipe du quotidien, quelqu’un qui remarquera les dérives et le dira. Faites de cette passation une vraie conversation, pas un simple courriel.',
      },
      {
        kind: 'idea',
        title: 'Surveiller la dérive, pas l’échec',
        body: 'Les vieilles habitudes reviennent lentement, souvent sous la pression des échéances. La dérive est normale et ne prouve pas que les gens résistent. Faites un point à 30, 60 et 90 jours avec une question simple : sur quoi revenons-nous en arrière, et pourquoi ?',
        bullets: ['Repérez les contournements et les raccourcis', 'Observez ce qui se passe les semaines chargées', 'Demandez ce qui rend l’ancienne façon tentante'],
      },
      {
        kind: 'idea',
        title: 'Rendre la nouvelle façon visible dans votre leadership',
        body: 'Les gens observent ce sur quoi vous questionnez, ce que vous mesurez et ce que vous saluez. Si vous ne parlez plus du changement après le lancement, ils en concluent qu’il ne compte plus. Intégrez-le à vos questions habituelles, à vos revues et à vos remerciements pour qu’il devienne du travail normal.',
      },
      {
        kind: 'example',
        title: 'Quand l’équipe revient en arrière',
        instead: '« Je pensais qu’on avait convenu de faire autrement. Pourquoi est-ce que ça arrive encore ? »',
        tryThis: '« J’ai remarqué qu’on revient à l’ancien processus les semaines chargées. Qu’est-ce qui rend l’ancienne façon plus facile à ces moments-là ? »',
        why: 'Nommer le schéma sans blâmer invite chacun à résoudre avec vous le vrai obstacle, au lieu de se défendre.',
      },
      {
        kind: 'check',
        question: 'Le nouveau processus de passation de votre équipe a bien fonctionné pendant trois mois. La cheffe de projet a rejoint une autre équipe, et les passations redeviennent désordonnées. Que faites-vous d’abord ?',
        options: [
          'Convenir avec l’équipe de qui porte désormais le processus et de la façon de le suivre ensemble.',
          'Demander à l’ancienne cheffe de projet de garder un œil sur tout depuis sa nouvelle équipe pendant un temps.',
          'Envoyer à l’équipe un rappel bienveillant avec le document du processus d’origine en pièce jointe.',
          'Attendre encore quelques semaines pour voir si le problème se règle de lui-même.',
        ],
        answer: 0,
        explain: 'Le changement s’efface quand la responsabilité est floue. Une personne responsable au sein de l’équipe, avec une façon convenue de faire le point, transforme le projet en habitude. S’appuyer sur quelqu’un qui est parti, ou sur un rappel, ne fait que repousser le problème.',
      },
      {
        kind: 'action',
        title: 'Planifiez votre point à 30 jours',
        body: 'Choisissez un changement que votre équipe a fait ces derniers mois. Inscrivez un point de 15 minutes à l’agenda et écrivez la question qui l’ouvrira : « Sur quoi revenons-nous en arrière, et qu’est-ce qui rendrait la nouvelle façon plus facile ? »',
      },
      {
        kind: 'takeaway',
        title: 'Transformez le projet en habitude',
        bullets: [
          'Confiez la responsabilité à une personne de l’équipe du quotidien, ouvertement.',
          'Attendez-vous à des dérives et faites le point à 30, 60 et 90 jours.',
          'Continuez à parler du changement pour qu’il reste du travail normal.',
        ],
      },
    ],
  },
};

export default lesson;
