import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-14',
  week: 14,
  focus: 'change',
  minutes: 4,
  title: 'Say it seven times, seven ways: repetition in change',
  subtitle: 'One announcement is a start, not a message received.',
  slides: [
    {
      kind: 'cover',
      title: '"But I already told them"',
      body: 'You announced the change clearly, so you are surprised when people still seem confused weeks later. By the time you are tired of saying it, most of your team is just starting to hear it.',
    },
    {
      kind: 'idea',
      title: 'Why once is never enough',
      body: 'People are busy, distracted, and often anxious during change, so a single message rarely sticks. Each person also needs to hear it at the moment it becomes relevant to their work. Repetition is not a sign that people are not listening. It is how understanding builds.',
    },
    {
      kind: 'idea',
      title: 'Vary the channel and the voice',
      body: 'Saying the same words in the same place only reaches the same people. Mix where and how the message shows up, and who delivers it.',
      bullets: [
        'Team meetings and quick huddles.',
        'Written summaries and short how-to guides.',
        'Managers repeating it in 1:1s.',
        'Stories from peers who have tried it.',
      ],
    },
    {
      kind: 'idea',
      title: 'Keep the core steady',
      body: 'Repetition works when the core message stays the same. Pick one or two sentences that capture what is changing and why, and use them every time. Then adapt the details to each audience. A steady core builds trust, while a shifting message breeds doubt.',
    },
    {
      kind: 'example',
      title: 'When questions keep coming',
      instead: '"As I said in my email last month..."',
      tryThis: '"Quick reminder of where we’re headed and why, since this is a big shift."',
      why: 'The first line makes people feel blamed for not remembering. The second treats repetition as normal and invites people back in without embarrassment.',
    },
    {
      kind: 'check',
      question: 'Two weeks ago you announced a new expense process in an all hands email. Many people still use the old forms. What is the best next step?',
      options: [
        'Resend the original email with "REMINDER" in the subject line so it stands out more.',
        'Cover it again in team huddles, share a short how-to guide, and ask managers to mention it.',
        '"I know change is hard! Take your time, and use whichever form you feel comfortable with."',
        'Ask the group at your next meeting, "Who didn’t read my email?" so people own the miss.',
      ],
      answer: 1,
      explain: 'Using several channels and voices reaches people where they are. Resending the same email reaches the same people the same way. The patient option sounds kind but leaves two processes running, and calling people out creates embarrassment instead of clarity.',
    },
    {
      kind: 'action',
      title: 'Plan your next three touches',
      body: 'Pick one change your team is living through. Write your core message in one or two sentences. Then list three different ways you will share it in the next two weeks, such as a huddle, a short note, or a manager talking point.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'One announcement is a start, not a finish.',
        'Vary the channel and the messenger to reach more people.',
        'Keep the core message steady every time you repeat it.',
      ],
    },
  ],
  es: {
    title: 'Dilo siete veces, de siete maneras: la repetición en el cambio',
    subtitle: 'Un anuncio es un comienzo, no un mensaje recibido.',
    slides: [
      {
        kind: 'cover',
        title: '“Pero si ya se los dije”',
        body: 'Anunciaste el cambio con claridad, así que te sorprende que semanas después la gente siga confundida. Cuando tú ya estás cansado de decirlo, la mayoría de tu equipo apenas empieza a escucharlo.',
      },
      {
        kind: 'idea',
        title: 'Por qué una vez nunca basta',
        body: 'Durante un cambio la gente está ocupada, distraída y a menudo ansiosa, así que un solo mensaje rara vez se queda. Además, cada persona necesita oírlo en el momento en que se vuelve relevante para su trabajo. Repetir no indica que nadie escucha. Es así como se construye la comprensión.',
      },
      {
        kind: 'idea',
        title: 'Varía el canal y la voz',
        body: 'Decir las mismas palabras en el mismo lugar solo llega a las mismas personas. Combina dónde y cómo aparece el mensaje, y quién lo transmite.',
        bullets: [
          'Reuniones de equipo y encuentros rápidos.',
          'Resúmenes escritos y guías prácticas breves.',
          'Jefes que lo repiten en sus 1:1.',
          'Historias de colegas que ya lo probaron.',
        ],
      },
      {
        kind: 'idea',
        title: 'Mantén firme el núcleo',
        body: 'La repetición funciona cuando el mensaje central no cambia. Elige una o dos frases que expresen qué cambia y por qué, y úsalas siempre. Luego adapta los detalles a cada público. Un núcleo estable genera confianza, mientras que un mensaje que cambia siembra dudas.',
      },
      {
        kind: 'example',
        title: 'Cuando las preguntas siguen llegando',
        instead: '“Como dije en mi correo del mes pasado...”',
        tryThis: '“Un recordatorio rápido de hacia dónde vamos y por qué, porque es un gran cambio.”',
        why: 'La primera frase hace que la gente se sienta culpable por no recordar. La segunda trata la repetición como algo normal e invita a todos a retomar el tema sin vergüenza.',
      },
      {
        kind: 'check',
        question: 'Hace dos semanas anunciaste un nuevo proceso de gastos en un correo a toda la empresa. Muchas personas siguen usando los formularios antiguos. ¿Cuál es el mejor siguiente paso?',
        options: [
          'Reenviar el correo original con “RECORDATORIO” en el asunto para que destaque más.',
          'Explicarlo de nuevo en reuniones breves, compartir una guía práctica corta y pedir a los jefes que lo mencionen.',
          '“¡Sé que el cambio cuesta! Tómense su tiempo y usen el formulario con el que se sientan cómodos.”',
          'Preguntar al grupo en la próxima reunión: “¿Quién no leyó mi correo?”, para que asuman el error.',
        ],
        answer: 1,
        explain: 'Usar varios canales y voces llega a la gente donde está. Reenviar el mismo correo llega a las mismas personas de la misma forma. La opción paciente suena amable, pero deja dos procesos funcionando, y señalar a la gente genera vergüenza en lugar de claridad.',
      },
      {
        kind: 'action',
        title: 'Planea tus próximos tres contactos',
        body: 'Elige un cambio que tu equipo esté viviendo. Escribe tu mensaje central en una o dos frases. Luego anota tres formas distintas de compartirlo en las próximas dos semanas, como una reunión breve, una nota corta o un punto para que lo comenten los jefes.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Un anuncio es un comienzo, no un final.',
          'Varía el canal y la voz para llegar a más personas.',
          'Mantén firme el mensaje central cada vez que lo repitas.',
        ],
      },
    ],
  },
  fr: {
    title: 'Le dire sept fois, de sept façons : la répétition dans le changement',
    subtitle: 'Une annonce est un début, pas un message reçu.',
    slides: [
      {
        kind: 'cover',
        title: '« Mais je le leur ai déjà dit »',
        body: 'Vous avez annoncé le changement clairement, et vous êtes surpris que des semaines plus tard les gens semblent encore perdus. Quand vous êtes las de le répéter, la plupart de vos collaborateurs commencent tout juste à l’entendre.',
      },
      {
        kind: 'idea',
        title: 'Pourquoi une fois ne suffit jamais',
        body: 'Pendant un changement, les gens sont occupés, distraits et souvent inquiets : un message unique s’ancre rarement. Chacun a aussi besoin de l’entendre au moment où il devient utile pour son travail. Répéter ne signifie pas que personne n’écoute. C’est ainsi que la compréhension se construit.',
      },
      {
        kind: 'idea',
        title: 'Variez le canal et la voix',
        body: 'Dire les mêmes mots au même endroit ne touche que les mêmes personnes. Variez où et comment le message apparaît, et qui le porte.',
        bullets: [
          'Réunions d’équipe et points rapides.',
          'Synthèses écrites et courts guides pratiques.',
          'Managers qui le reprennent en 1:1.',
          'Témoignages de collègues qui l’ont déjà essayé.',
        ],
      },
      {
        kind: 'idea',
        title: 'Gardez le cœur du message stable',
        body: 'La répétition fonctionne quand le message central ne varie pas. Choisissez une ou deux phrases qui résument ce qui change et pourquoi, et reprenez-les à chaque fois. Adaptez ensuite les détails à chaque public. Un cœur stable crée la confiance, un message mouvant sème le doute.',
      },
      {
        kind: 'example',
        title: 'Quand les questions continuent',
        instead: '« Comme je l’ai dit dans mon courriel le mois dernier... »',
        tryThis: '« Petit rappel de notre direction et de nos raisons, car c’est un grand changement. »',
        why: 'La première phrase donne aux gens le sentiment d’être fautifs de ne pas se souvenir. La seconde traite la répétition comme normale et permet à chacun de revenir au sujet sans gêne.',
      },
      {
        kind: 'check',
        question: 'Il y a deux semaines, vous avez annoncé une nouvelle procédure de notes de frais dans un courriel à toute l’entreprise. Beaucoup utilisent encore les anciens formulaires. Quelle est la meilleure suite ?',
        options: [
          'Renvoyer le courriel initial avec « RAPPEL » dans l’objet pour qu’il ressorte davantage.',
          'L’expliquer de nouveau lors des points d’équipe, partager un court guide pratique et demander aux managers d’en parler.',
          '« Je sais que le changement est difficile ! Prenez votre temps et utilisez le formulaire qui vous convient. »',
          'Demander au groupe à la prochaine réunion : « Qui n’a pas lu mon courriel ? », pour que chacun assume.',
        ],
        answer: 1,
        explain: 'Utiliser plusieurs canaux et plusieurs voix rejoint les gens là où ils sont. Renvoyer le même courriel touche les mêmes personnes de la même façon. L’option patiente semble bienveillante mais laisse deux procédures coexister, et interpeller les gens crée de la gêne plutôt que de la clarté.',
      },
      {
        kind: 'action',
        title: 'Prévoyez vos trois prochains rappels',
        body: 'Choisissez un changement que vit votre équipe. Écrivez votre message central en une ou deux phrases. Listez ensuite trois façons différentes de le partager dans les deux prochaines semaines, par exemple un point rapide, une courte note ou un argumentaire pour les managers.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Une annonce est un début, pas une fin.',
          'Variez le canal et le messager pour toucher plus de monde.',
          'Gardez le message central stable à chaque répétition.',
        ],
      },
    ],
  },
};

export default lesson;
