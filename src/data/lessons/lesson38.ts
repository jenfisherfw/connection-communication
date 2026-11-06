import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-38',
  week: 38,
  focus: 'communication',
  minutes: 4,
  title: '1:1s with the managers you lead',
  subtitle: 'Turn status check ins into real leadership conversations',
  slides: [
    {
      kind: 'cover',
      title: '1:1s with the managers you lead',
      body: 'When you lead other managers, your 1:1s can easily turn into project updates. Meanwhile the hardest parts of their job, leading people, stay out of the conversation until something goes wrong.',
    },
    {
      kind: 'idea',
      title: 'Talk about their leadership, not just their work',
      body: 'Your managers already report on numbers and deadlines in other places. Use the 1:1 for what only you can help with: how they lead. Make room for their people, their decisions, and their own growth as a leader.',
      bullets: [
        'A people situation they are thinking about',
        'A decision they are unsure about',
        'A skill they want to build this quarter',
      ],
    },
    {
      kind: 'idea',
      title: 'Coach before you solve',
      body: 'When a manager brings you a problem, it is tempting to hand over the answer. That feels efficient, but it teaches them to bring every problem to you. Ask what they have tried and what options they see first. Offer your view after they have done their own thinking.',
      bullets: ['"What have you tried so far?"', '"What options do you see?"', '"What would you do if I weren’t here?"'],
    },
    {
      kind: 'example',
      title: 'Opening the 1:1',
      instead: '"So, any updates on the project?"',
      tryThis: '"Let’s start with your team. What’s one people situation on your mind this week?"',
      why: 'The first question sets the agenda. Starting with people signals that leading them is the real work, and it surfaces small issues while they are still easy to address.',
    },
    {
      kind: 'idea',
      title: 'Be a channel in both directions',
      body: 'Your managers are the link between you and most of the organization. Ask what they are hearing from their teams, and check how they plan to share key messages from your level. A few minutes on this keeps messages consistent and helps you learn about problems before they grow.',
    },
    {
      kind: 'check',
      question: 'In your 1:1, Dana, a new manager, says: "Two people on my team keep clashing in meetings, and I’m not sure what to do." You have handled this situation many times. What is the best response?',
      options: [
        '"That’s a tough one. What have you noticed so far, and what options are you weighing?"',
        '"Here’s what works: meet with each of them separately, then bring them together. Make sense?"',
        '"Don’t worry, you’re doing great. I’ll sit in on your next meeting and handle it."',
      ],
      answer: 0,
      explain: 'Asking first helps Dana build her own judgment and shows you trust her to lead. Giving the answer right away skips her thinking, and stepping in yourself, though kind, can undercut her authority with her team.',
    },
    {
      kind: 'action',
      title: 'Add one standing question',
      body: 'Before your next 1:1 with each manager you lead, add one question to the top of your shared agenda: "What’s one people situation on your mind?" Ask it first, before any project updates, and listen for at least two minutes before you offer advice.',
    },
    {
      kind: 'takeaway',
      title: 'Lead the leaders',
      bullets: [
        'Use 1:1s for their leadership, not just their status',
        'Ask about their thinking before sharing yours',
        'Keep messages flowing both ways through your managers',
      ],
    },
  ],
  es: {
    title: 'Reuniones 1:1 con los gerentes que lideras',
    subtitle: 'Convierte los reportes de avance en conversaciones de liderazgo',
    slides: [
      {
        kind: 'cover',
        title: 'Reuniones 1:1 con los gerentes que lideras',
        body: 'Cuando lideras a otros gerentes, tus reuniones 1:1 pueden convertirse fácilmente en reportes de proyectos. Mientras tanto, la parte más difícil de su trabajo, liderar personas, queda fuera de la conversación hasta que algo sale mal.',
      },
      {
        kind: 'idea',
        title: 'Habla de su liderazgo, no solo de su trabajo',
        body: 'Tus gerentes ya reportan cifras y plazos en otros espacios. Usa la reunión 1:1 para aquello en lo que solo tú puedes ayudar: cómo lideran. Dale espacio a su gente, a sus decisiones y a su propio crecimiento como líderes.',
        bullets: [
          'Una situación con personas que les preocupa',
          'Una decisión sobre la que tienen dudas',
          'Una habilidad que quieren desarrollar este trimestre',
        ],
      },
      {
        kind: 'idea',
        title: 'Acompaña antes de resolver',
        body: 'Cuando un gerente te trae un problema, es tentador darle la respuesta. Parece eficiente, pero le enseña a traerte todos los problemas. Primero pregunta qué ha intentado y qué opciones ve. Ofrece tu punto de vista después de que haya pensado por su cuenta.',
        bullets: ['“¿Qué has intentado hasta ahora?”', '“¿Qué opciones ves?”', '“¿Qué harías si yo no estuviera?”'],
      },
      {
        kind: 'example',
        title: 'Abrir la reunión 1:1',
        instead: '“Entonces, ¿alguna novedad del proyecto?”',
        tryThis: '“Empecemos por tu equipo. ¿Qué situación con alguna persona tienes en mente esta semana?”',
        why: 'La primera pregunta marca la agenda. Empezar por las personas indica que liderarlas es el trabajo de verdad y saca a la luz problemas pequeños mientras todavía son fáciles de atender.',
      },
      {
        kind: 'idea',
        title: 'Sé un canal en ambas direcciones',
        body: 'Tus gerentes son el enlace entre tú y la mayor parte de la organización. Pregúntales qué están escuchando de sus equipos y revisa cómo planean compartir los mensajes clave que vienen de tu nivel. Unos minutos en esto mantienen los mensajes coherentes y te ayudan a enterarte de los problemas antes de que crezcan.',
      },
      {
        kind: 'check',
        question: 'En tu reunión 1:1, Dana, una gerente nueva, te dice: “Dos personas de mi equipo chocan una y otra vez en las reuniones y no sé qué hacer.” Tú has manejado esta situación muchas veces. ¿Cuál es la mejor respuesta?',
        options: [
          '“Es complicado. ¿Qué has notado hasta ahora y qué opciones estás considerando?”',
          '“Esto es lo que funciona: reúnete con cada uno por separado y luego júntalos. ¿Tiene sentido?”',
          '“No te preocupes, lo estás haciendo muy bien. Iré a tu próxima reunión y yo me encargo.”',
        ],
        answer: 0,
        explain: 'Preguntar primero ayuda a Dana a desarrollar su propio criterio y muestra que confías en que ella lidere. Dar la respuesta de inmediato se salta su reflexión, y entrar tú, aunque sea con buena intención, puede restarle autoridad frente a su equipo.',
      },
      {
        kind: 'action',
        title: 'Agrega una pregunta fija',
        body: 'Antes de tu próxima reunión 1:1 con cada gerente que lideras, agrega una pregunta al inicio de la agenda compartida: “¿Qué situación con alguna persona tienes en mente?” Hazla primero, antes de cualquier novedad de proyectos, y escucha al menos dos minutos antes de dar consejos.',
      },
      {
        kind: 'takeaway',
        title: 'Liderar a quienes lideran',
        bullets: [
          'Usa las reuniones 1:1 para su liderazgo, no solo para su avance',
          'Pregunta por su forma de pensar antes de compartir la tuya',
          'Mantén los mensajes fluyendo en ambas direcciones a través de tus gerentes',
        ],
      },
    ],
  },
  fr: {
    title: 'Les 1:1 avec les managers que vous encadrez',
    subtitle: 'Transformer les points d’avancement en vraies conversations de leadership',
    slides: [
      {
        kind: 'cover',
        title: 'Les 1:1 avec les managers que vous encadrez',
        body: 'Quand vous encadrez d’autres managers, vos 1:1 peuvent vite devenir de simples points d’avancement. Pendant ce temps, la partie la plus difficile de leur métier, diriger des personnes, reste hors de la conversation jusqu’à ce qu’un problème éclate.',
      },
      {
        kind: 'idea',
        title: 'Parlez de leur leadership, pas seulement de leur travail',
        body: 'Vos managers rendent déjà compte de leurs chiffres et de leurs échéances ailleurs. Utilisez le 1:1 pour ce sur quoi vous seul pouvez les aider : leur façon de diriger. Faites de la place pour leurs équipes, leurs décisions et leur propre progression de manager.',
        bullets: [
          'Une situation humaine qui les préoccupe',
          'Une décision sur laquelle ils hésitent',
          'Une compétence qu’ils veulent développer ce trimestre',
        ],
      },
      {
        kind: 'idea',
        title: 'Accompagner avant de résoudre',
        body: 'Quand un manager vous apporte un problème, il est tentant de lui donner la réponse. Cela semble efficace, mais cela lui apprend à vous apporter tous ses problèmes. Demandez d’abord ce qu’il a essayé et quelles options il voit. Donnez votre avis une fois qu’il a mené sa propre réflexion.',
        bullets: ['« Qu’avez-vous essayé jusqu’ici ? »', '« Quelles options voyez-vous ? »', '« Que feriez-vous si je n’étais pas là ? »'],
      },
      {
        kind: 'example',
        title: 'Ouvrir le 1:1',
        instead: '« Alors, du nouveau sur le projet ? »',
        tryThis: '« Commençons par votre équipe. Quelle situation humaine vous occupe l’esprit cette semaine ? »',
        why: 'La première question fixe l’ordre du jour. Commencer par les personnes montre que les diriger est le vrai travail, et fait émerger les petits problèmes tant qu’ils sont encore faciles à traiter.',
      },
      {
        kind: 'idea',
        title: 'Soyez un relais dans les deux sens',
        body: 'Vos managers sont le lien entre vous et la plus grande partie de l’organisation. Demandez-leur ce qu’ils entendent dans leurs équipes, et vérifiez comment ils comptent relayer les messages clés venus de votre niveau. Quelques minutes sur ce point gardent les messages cohérents et vous aident à repérer les problèmes avant qu’ils grossissent.',
      },
      {
        kind: 'check',
        question: 'Pendant votre 1:1, Dana, une nouvelle manager, vous dit : « Deux personnes de mon équipe s’accrochent sans cesse en réunion, et je ne sais pas quoi faire. » Vous avez géré cette situation de nombreuses fois. Quelle est la meilleure réponse ?',
        options: [
          '« C’est délicat. Qu’avez-vous remarqué jusqu’ici, et quelles options envisagez-vous ? »',
          '« Voici ce qui marche : voyez chacun séparément, puis réunissez-les. C’est clair ? »',
          '« Ne vous inquiétez pas, vous vous en sortez très bien. Je viendrai à votre prochaine réunion et je m’en occupe. »',
        ],
        answer: 0,
        explain: 'Poser d’abord des questions aide Dana à construire son propre jugement et montre que vous lui faites confiance pour diriger. Donner la réponse tout de suite court-circuite sa réflexion, et intervenir vous-même, même avec bienveillance, peut affaiblir son autorité auprès de son équipe.',
      },
      {
        kind: 'action',
        title: 'Ajoutez une question fixe',
        body: 'Avant votre prochain 1:1 avec chaque manager que vous encadrez, ajoutez une question en haut de l’ordre du jour partagé : « Quelle situation humaine vous occupe l’esprit ? » Posez-la en premier, avant tout point d’avancement, et écoutez au moins deux minutes avant de donner un conseil.',
      },
      {
        kind: 'takeaway',
        title: 'Diriger ceux qui dirigent',
        bullets: [
          'Consacrez les 1:1 à leur leadership, pas seulement à leur avancement',
          'Interrogez leur réflexion avant de partager la vôtre',
          'Faites circuler les messages dans les deux sens grâce à vos managers',
        ],
      },
    ],
  },
};

export default lesson;
