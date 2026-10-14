import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-40',
  week: 40,
  focus: 'communication',
  minutes: 4,
  title: 'Team communication agreements',
  subtitle: 'Turn unspoken habits into shared, simple norms',
  slides: [
    {
      kind: 'cover',
      title: 'Team communication agreements',
      body: 'Every team has communication rules. Most of them are unspoken, so people guess. One person expects a reply within the hour, another checks messages twice a day, and both quietly decide the other is the problem.',
    },
    {
      kind: 'idea',
      title: 'Unspoken norms create friction',
      body: 'Many team tensions are not about personality. They come from different assumptions about how and when to communicate. Naming those assumptions turns blame into a practical question the team can solve together.',
      bullets: [
        'How fast do we reply, and on which channel?',
        'What counts as urgent, and how do we flag it?',
        'What do we expect after hours or on days off?',
        'Where do decisions get written down?',
      ],
    },
    {
      kind: 'idea',
      title: 'Build the agreements together',
      body: 'Agreements you hand down feel like rules. Agreements the team writes feel like promises. Ask everyone what helps and what gets in the way, then keep only a handful of specific behaviors that anyone could observe. Five clear agreements beat twenty vague values.',
      bullets: [
        '"Urgent means a phone call, not a chat message."',
        '"We reply to chat within four working hours."',
        '"Every meeting ends with written next steps."',
      ],
    },
    {
      kind: 'example',
      title: 'When an agreement slips',
      instead: '"Some people still aren’t following our norms. Please do better."',
      tryThis: '"We agreed urgent requests come by phone. This week three came by chat after hours. Is that agreement still working for us, or do we need to adjust it?"',
      why: 'Naming the specific pattern without singling anyone out keeps the focus on the agreement. Asking whether it still works treats the team as owners, not rule breakers.',
    },
    {
      kind: 'idea',
      title: 'Keep them alive',
      body: 'Agreements fade unless you return to them. Post them where the team works, walk new hires through them, and review them every few months. Make it normal for anyone, including you, to point out a slip kindly. When you break one yourself, say so first.',
    },
    {
      kind: 'check',
      question: 'Your hybrid team is frustrated: remote members feel left out of decisions made in quick office chats. You want to set a communication agreement. What is the best way to start?',
      options: [
        'Write a clear policy that all decisions must be posted in the team channel, then share it at the next meeting.',
        'Name the pattern at the next meeting, ask how it affects people, and draft one agreement together.',
        'Ask the office staff to be more thoughtful about including remote colleagues from now on, starting this week.',
      ],
      answer: 1,
      explain: 'Naming the pattern and drafting the agreement together builds ownership, so people actually keep it. A policy handed down may be sensible but feels imposed, and asking for more thoughtfulness is warm but too vague to change behavior.',
    },
    {
      kind: 'action',
      title: 'Ask one question',
      body: 'At your next team meeting, ask: "What’s one communication habit that slows us down?" Give everyone a minute to think, collect the answers, and pick one to turn into a specific agreement you will try for the next two weeks.',
    },
    {
      kind: 'takeaway',
      title: 'Agree on how you talk',
      bullets: [
        'Name unspoken norms before they turn into blame',
        'Write a few specific agreements together',
        'Revisit them often and model them yourself',
      ],
    },
  ],
  es: {
    title: 'Acuerdos de comunicación del equipo',
    subtitle: 'Convierte los hábitos no dichos en normas simples y compartidas',
    slides: [
      {
        kind: 'cover',
        title: 'Acuerdos de comunicación del equipo',
        body: 'Todo equipo tiene reglas de comunicación. La mayoría no se dicen, así que la gente adivina. Una persona espera respuesta en una hora, otra revisa los mensajes dos veces al día, y las dos deciden en silencio que el problema es la otra.',
      },
      {
        kind: 'idea',
        title: 'Las normas no dichas generan fricción',
        body: 'Muchas tensiones en los equipos no tienen que ver con la personalidad. Vienen de supuestos distintos sobre cómo y cuándo comunicarse. Nombrar esos supuestos convierte la culpa en una pregunta práctica que el equipo puede resolver junto.',
        bullets: [
          '¿Qué tan rápido respondemos y por qué canal?',
          '¿Qué es urgente y cómo lo señalamos?',
          '¿Qué esperamos fuera del horario o en días libres?',
          '¿Dónde quedan escritas las decisiones?',
        ],
      },
      {
        kind: 'idea',
        title: 'Construyan los acuerdos juntos',
        body: 'Los acuerdos impuestos se sienten como reglas. Los acuerdos que escribe el equipo se sienten como promesas. Pregunta a todos qué ayuda y qué estorba, y luego quédate solo con unas pocas conductas específicas que cualquiera pueda observar. Cinco acuerdos claros valen más que veinte valores vagos.',
        bullets: [
          '“Urgente significa una llamada, no un mensaje de chat.”',
          '“Respondemos el chat en un máximo de cuatro horas laborales.”',
          '“Toda reunión termina con próximos pasos por escrito.”',
        ],
      },
      {
        kind: 'example',
        title: 'Cuando un acuerdo se olvida',
        instead: '“Algunas personas todavía no siguen nuestras normas. Por favor, mejoren.”',
        tryThis: '“Acordamos que las solicitudes urgentes llegan por teléfono. Esta semana llegaron tres por chat fuera del horario. ¿Nos sigue funcionando ese acuerdo o necesitamos ajustarlo?”',
        why: 'Nombrar el patrón específico sin señalar a nadie mantiene el foco en el acuerdo. Preguntar si todavía funciona trata al equipo como dueño del acuerdo, no como infractor.',
      },
      {
        kind: 'idea',
        title: 'Mantenlos vivos',
        body: 'Los acuerdos se desvanecen si no vuelves a ellos. Publícalos donde trabaja el equipo, explícaselos a las personas nuevas y revísalos cada pocos meses. Haz que sea normal que cualquiera, incluido tú, señale con amabilidad cuando alguien no cumple uno. Cuando tú no lo cumplas, dilo primero.',
      },
      {
        kind: 'check',
        question: 'Tu equipo híbrido está frustrado: las personas remotas se sienten fuera de las decisiones que se toman en charlas rápidas en la oficina. Quieres crear un acuerdo de comunicación. ¿Cuál es la mejor forma de empezar?',
        options: [
          'Escribir una política clara de que todas las decisiones se publiquen en el canal del equipo y compartirla en la próxima reunión.',
          'Nombrar el patrón en la próxima reunión, preguntar cómo afecta a las personas y redactar juntos un acuerdo.',
          'Pedir al personal de la oficina que tenga más en cuenta a sus colegas remotos de ahora en adelante, a partir de esta semana.',
        ],
        answer: 1,
        explain: 'Nombrar el patrón y redactar juntos el acuerdo genera sentido de pertenencia, así que la gente de verdad lo cumple. Una política impuesta puede ser sensata pero se siente como una orden, y pedir más consideración es amable pero demasiado vago para cambiar conductas.',
      },
      {
        kind: 'action',
        title: 'Haz una pregunta',
        body: 'En tu próxima reunión de equipo, pregunta: “¿Qué hábito de comunicación nos frena?” Da un minuto para pensar, reúne las respuestas y elige una para convertirla en un acuerdo específico que probarán durante las próximas dos semanas.',
      },
      {
        kind: 'takeaway',
        title: 'Pónganse de acuerdo en cómo se comunican',
        bullets: [
          'Nombra las normas no dichas antes de que se conviertan en culpa',
          'Escriban juntos unos pocos acuerdos específicos',
          'Revísenlos con frecuencia y da el ejemplo',
        ],
      },
    ],
  },
  fr: {
    title: 'Les accords de communication d’équipe',
    subtitle: 'Transformer les habitudes implicites en règles simples et partagées',
    slides: [
      {
        kind: 'cover',
        title: 'Les accords de communication d’équipe',
        body: 'Chaque équipe a des règles de communication. La plupart restent implicites, alors chacun devine. Une personne attend une réponse dans l’heure, une autre consulte ses messages deux fois par jour, et chacune conclut en silence que le problème, c’est l’autre.',
      },
      {
        kind: 'idea',
        title: 'Les règles implicites créent des frictions',
        body: 'Beaucoup de tensions d’équipe ne tiennent pas à la personnalité. Elles viennent d’hypothèses différentes sur la manière et le moment de communiquer. Nommer ces hypothèses transforme le reproche en une question pratique que l’équipe peut résoudre ensemble.',
        bullets: [
          'À quelle vitesse répondons-nous, et sur quel canal ?',
          'Qu’est-ce qui est urgent, et comment le signaler ?',
          'Qu’attendons-nous en dehors des horaires ou les jours de congé ?',
          'Où les décisions sont-elles consignées ?',
        ],
      },
      {
        kind: 'idea',
        title: 'Construire les accords ensemble',
        body: 'Des accords imposés ressemblent à des règles. Des accords écrits par l’équipe ressemblent à des promesses. Demandez à chacun ce qui aide et ce qui gêne, puis ne gardez qu’une poignée de comportements précis et observables par tous. Cinq accords clairs valent mieux que vingt valeurs floues.',
        bullets: [
          '« Urgent veut dire un appel, pas un message instantané. »',
          '« Nous répondons aux messages en quatre heures ouvrées maximum. »',
          '« Chaque réunion se termine par des prochaines étapes écrites. »',
        ],
      },
      {
        kind: 'example',
        title: 'Quand un accord n’est pas respecté',
        instead: '« Certains ne respectent toujours pas nos règles. Merci de faire mieux. »',
        tryThis: '« Nous avions convenu que les demandes urgentes passent par téléphone. Cette semaine, trois sont arrivées par messagerie en dehors des horaires. Cet accord nous convient-il encore, ou faut-il l’ajuster ? »',
        why: 'Nommer le comportement précis sans désigner personne garde l’attention sur l’accord. Demander s’il fonctionne encore traite l’équipe en propriétaire de ses règles, pas en contrevenante.',
      },
      {
        kind: 'idea',
        title: 'Les faire vivre',
        body: 'Les accords s’effacent si l’on n’y revient pas. Affichez-les là où l’équipe travaille, présentez-les aux nouveaux arrivants et revoyez-les tous les quelques mois. Faites en sorte que chacun, vous compris, puisse signaler un écart avec bienveillance. Quand c’est vous qui en commettez un, dites-le en premier.',
      },
      {
        kind: 'check',
        question: 'Votre équipe hybride est frustrée : les personnes à distance se sentent exclues des décisions prises lors de discussions rapides au bureau. Vous voulez établir un accord de communication. Quelle est la meilleure façon de commencer ?',
        options: [
          'Rédiger une règle claire selon laquelle toutes les décisions sont publiées dans le canal de l’équipe, puis la présenter à la prochaine réunion.',
          'Nommer le problème à la prochaine réunion, demander comment il touche chacun et rédiger ensemble un accord.',
          'Demander aux personnes au bureau de penser davantage à leurs collègues à distance à partir de cette semaine.',
        ],
        answer: 1,
        explain: 'Nommer le problème et rédiger l’accord ensemble crée un sentiment d’appartenance, et les gens le respectent vraiment. Une règle imposée peut être sensée mais paraît dictée d’en haut, et demander plus d’attention est bienveillant mais trop vague pour changer les comportements.',
      },
      {
        kind: 'action',
        title: 'Posez une question',
        body: 'À votre prochaine réunion d’équipe, demandez : « Quelle habitude de communication nous ralentit ? » Laissez une minute de réflexion, recueillez les réponses et choisissez-en une à transformer en accord précis que vous testerez pendant deux semaines.',
      },
      {
        kind: 'takeaway',
        title: 'S’accorder sur la façon de communiquer',
        bullets: [
          'Nommez les règles implicites avant qu’elles ne deviennent des reproches',
          'Écrivez ensemble quelques accords précis',
          'Revenez-y souvent et montrez l’exemple',
        ],
      },
    ],
  },
};

export default lesson;
