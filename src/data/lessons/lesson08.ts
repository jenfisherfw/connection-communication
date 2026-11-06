import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-08',
  week: 8,
  focus: 'communication',
  minutes: 4,
  title: 'Their meeting, not yours: a simple 1:1 structure',
  subtitle: 'Give the agenda back to the person you lead.',
  slides: [
    {
      kind: 'cover',
      title: 'Whose 1:1 is it?',
      body: 'You block time to connect, then spend it asking for status updates you could have read in a tracker. Your report leaves without what they came for, and the meeting slowly turns into a chore for you both.',
    },
    {
      kind: 'idea',
      title: 'Status belongs somewhere else',
      body: 'A 1:1 is the one meeting built around one person. When it becomes a status check, you lose the space where concerns, ideas, and growth come up. Move updates to a shared doc or team channel, and protect the 1:1 for what cannot be said anywhere else.',
    },
    {
      kind: 'idea',
      title: 'A simple three part flow',
      body: 'Structure frees people to talk because they know what is coming. Keep it light and steady so it works in 20 minutes or in 45.',
      bullets: [
        'Their topics first: what is on your mind this week?',
        'Your topics second: only what truly needs a conversation.',
        'Growth and support: what would help you do your best work?',
        'Close with next steps you both write down.',
      ],
    },
    {
      kind: 'idea',
      title: 'Let them own the agenda',
      body: 'Ask your report to add topics to a shared note before you meet. At first it may stay blank, so seed it with a question or two. Within a few weeks most people start bringing real issues, because they see you act on them. Your job is to listen more than you talk and to follow through.',
    },
    {
      kind: 'example',
      title: 'Opening the meeting',
      instead: '"So, where are we on the Q3 report?"',
      tryThis: '"This is your time. What’s most useful to talk about today?"',
      why: 'Starting with your agenda signals that the meeting is for you. Opening with their priorities invites what you most need to hear, including problems that are still small.',
    },
    {
      kind: 'check',
      question: 'Priya, new to your team, arrives at her 1:1 with nothing on the shared agenda for the third week in a row. What is the best next move?',
      options: [
        '"No agenda again? Let’s just run through your project list, then."',
        '"Don’t worry about the agenda, you’re doing great. We can just chat."',
        'Start with one open question, then add a written prompt to the doc for next week.',
        'Pause your 1:1s until she has topics to bring, so you both respect each other’s time.',
      ],
      answer: 2,
      explain: 'New people often do not yet know what a 1:1 is for. An open question gets the talk going today, and a written prompt shows her how to use the time. Reassurance alone sounds kind but leaves the meeting without purpose, and pausing tells her she is on her own.',
    },
    {
      kind: 'action',
      title: 'Hand over the first five minutes',
      body: 'Before your next 1:1, send one line: "What would make our time most useful this week?" In the meeting, let them speak first and hold your own items until they finish. Afterward, note one thing you will follow up on, and do it within two days.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'The 1:1 is their meeting. Move status updates somewhere else.',
        'Use a steady flow: their topics, your topics, growth, next steps.',
        'Follow through on what you hear so people keep bringing real issues.',
      ],
    },
  ],
  es: {
    title: 'Su reunión, no la tuya: una estructura sencilla para la 1:1',
    subtitle: 'Devuelve la agenda a la persona que lideras.',
    slides: [
      {
        kind: 'cover',
        title: '¿De quién es la 1:1?',
        body: 'Reservas tiempo para conectar y terminas pidiendo actualizaciones de estado que podrías leer en un tablero. Tu colaborador se va sin lo que vino a buscar, y la reunión se vuelve poco a poco una carga para ambos.',
      },
      {
        kind: 'idea',
        title: 'El estado va en otro lugar',
        body: 'La 1:1 es la única reunión construida en torno a una persona. Cuando se convierte en revisión de estado, pierdes el espacio donde surgen preocupaciones, ideas y crecimiento. Lleva las actualizaciones a un documento compartido o a un canal del equipo, y protege la 1:1 para lo que no se puede decir en otro lugar.',
      },
      {
        kind: 'idea',
        title: 'Un flujo sencillo en tres partes',
        body: 'La estructura da libertad para hablar porque la persona sabe qué viene. Mantenla ligera y constante para que funcione en 20 minutos o en 45.',
        bullets: [
          'Primero sus temas: ¿qué tienes en mente esta semana?',
          'Luego tus temas: solo lo que de verdad necesita conversación.',
          'Crecimiento y apoyo: ¿qué te ayudaría a hacer tu mejor trabajo?',
          'Cierra con próximos pasos que ambos anotan.',
        ],
      },
      {
        kind: 'idea',
        title: 'Que la agenda sea suya',
        body: 'Pide a tu colaborador que agregue temas a una nota compartida antes de reunirse. Al principio puede quedar en blanco, así que siémbrala con una o dos preguntas. En pocas semanas la mayoría empieza a traer temas reales, porque ve que actúas sobre ellos. Tu tarea es escuchar más de lo que hablas y cumplir lo que prometes.',
      },
      {
        kind: 'example',
        title: 'Cómo abrir la reunión',
        instead: '“Bueno, ¿cómo vamos con el informe del tercer trimestre?”',
        tryThis: '“Este es tu tiempo. ¿De qué te sirve más hablar hoy?”',
        why: 'Empezar con tu agenda indica que la reunión es para ti. Abrir con sus prioridades invita lo que más necesitas escuchar, incluidos los problemas que todavía son pequeños.',
      },
      {
        kind: 'check',
        question: 'Priya, nueva en tu equipo, llega a su 1:1 sin nada en la agenda compartida por tercera semana seguida. ¿Cuál es el mejor siguiente paso?',
        options: [
          '“¿Otra vez sin agenda? Entonces repasemos tu lista de proyectos.”',
          '“No te preocupes por la agenda, lo estás haciendo muy bien. Solo conversemos.”',
          'Empieza con una pregunta abierta y agrega una guía escrita al documento para la próxima semana.',
          'Pausa tus 1:1 con ella hasta que tenga temas que traer, para respetar el tiempo de ambos.',
        ],
        answer: 2,
        explain: 'Las personas nuevas a menudo aún no saben para qué sirve una 1:1. Una pregunta abierta inicia la conversación hoy, y una guía escrita le muestra cómo usar el tiempo. Tranquilizarla sin más suena amable, pero deja la reunión sin propósito, y pausarlas le dice que está sola.',
      },
      {
        kind: 'action',
        title: 'Cede los primeros cinco minutos',
        body: 'Antes de tu próxima 1:1, envía una línea: “¿Qué haría más útil nuestro tiempo esta semana?” En la reunión, deja que hable primero y guarda tus temas hasta que termine. Después, anota una cosa a la que darás seguimiento y hazlo en menos de dos días.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'La 1:1 es su reunión. Lleva las actualizaciones de estado a otro lugar.',
          'Usa un flujo estable: sus temas, tus temas, crecimiento, próximos pasos.',
          'Cumple con lo que escuchas para que sigan trayendo temas reales.',
        ],
      },
    ],
  },
  fr: {
    title: 'Sa réunion, pas la vôtre : une structure simple pour le 1:1',
    subtitle: 'Rendez l’ordre du jour à la personne que vous encadrez.',
    slides: [
      {
        kind: 'cover',
        title: 'À qui appartient le 1:1 ?',
        body: 'Vous bloquez du temps pour créer du lien, puis vous le passez à demander des points d’avancement que vous auriez pu lire dans un tableau de suivi. Votre collaborateur repart sans ce qu’il était venu chercher, et la réunion devient peu à peu une corvée pour vous deux.',
      },
      {
        kind: 'idea',
        title: 'L’avancement a sa place ailleurs',
        body: 'Le 1:1 est la seule réunion construite autour d’une personne. Quand il devient un point d’avancement, vous perdez l’espace où émergent les inquiétudes, les idées et le développement. Déplacez les mises à jour vers un document partagé ou un canal d’équipe, et protégez le 1:1 pour ce qui ne peut se dire nulle part ailleurs.',
      },
      {
        kind: 'idea',
        title: 'Un déroulé simple en trois temps',
        body: 'Une structure libère la parole, car chacun sait ce qui vient. Gardez-la légère et régulière pour qu’elle fonctionne en 20 minutes comme en 45.',
        bullets: [
          'Ses sujets d’abord : qu’est-ce qui vous occupe cette semaine ?',
          'Vos sujets ensuite : seulement ce qui mérite vraiment un échange.',
          'Développement et soutien : qu’est-ce qui vous aiderait à donner le meilleur de vous-même ?',
          'Terminez par des prochaines étapes notées par vous deux.',
        ],
      },
      {
        kind: 'idea',
        title: 'Laissez-lui l’ordre du jour',
        body: 'Demandez à votre collaborateur d’ajouter des sujets dans une note partagée avant la rencontre. Au début, elle restera peut-être vide : amorcez-la avec une ou deux questions. En quelques semaines, la plupart des gens apportent de vrais sujets, car ils voient que vous agissez. Votre rôle : écouter plus que parler, et tenir parole.',
      },
      {
        kind: 'example',
        title: 'Ouvrir la réunion',
        instead: '« Alors, où en est le rapport du troisième trimestre ? »',
        tryThis: '« Ce temps est le vôtre. De quoi est-il le plus utile de parler aujourd’hui ? »',
        why: 'Commencer par votre ordre du jour signale que la réunion est pour vous. Ouvrir sur ses priorités fait émerger ce que vous avez le plus besoin d’entendre, y compris les problèmes encore petits.',
      },
      {
        kind: 'check',
        question: 'Priya, nouvelle dans votre équipe, arrive à son 1:1 sans rien dans l’ordre du jour partagé, pour la troisième semaine de suite. Quelle est la meilleure suite ?',
        options: [
          '« Encore pas d’ordre du jour ? Passons donc en revue votre liste de projets. »',
          '« Ne vous inquiétez pas pour l’ordre du jour, vous faites du très bon travail. Discutons simplement. »',
          'Commencer par une question ouverte, puis ajouter une invite écrite au document pour la semaine suivante.',
          'Suspendre vos 1:1 jusqu’à ce qu’elle ait des sujets, pour respecter le temps de chacun.',
        ],
        answer: 2,
        explain: 'Les nouvelles recrues ne savent souvent pas encore à quoi sert un 1:1. Une question ouverte lance l’échange aujourd’hui, et une invite écrite lui montre comment utiliser ce temps. Rassurer sans plus semble bienveillant mais laisse la réunion sans but, et suspendre lui dit qu’elle est seule.',
      },
      {
        kind: 'action',
        title: 'Cédez les cinq premières minutes',
        body: 'Avant votre prochain 1:1, envoyez une ligne : « Qu’est-ce qui rendrait notre temps le plus utile cette semaine ? » Pendant la réunion, laissez votre collaborateur parler en premier et gardez vos sujets pour après. Ensuite, notez un point à suivre et faites-le sous deux jours.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Le 1:1 est sa réunion. Déplacez les points d’avancement ailleurs.',
          'Suivez un déroulé régulier : ses sujets, vos sujets, développement, prochaines étapes.',
          'Donnez suite à ce que vous entendez pour que les vrais sujets continuent d’arriver.',
        ],
      },
    ],
  },
};

export default lesson;
