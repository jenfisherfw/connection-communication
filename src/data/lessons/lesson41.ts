import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-41',
  week: 41,
  focus: 'change',
  minutes: 5,
  title: 'Sharing hard news with dignity',
  subtitle: 'Be clear, be human, and know what belongs with HR',
  slides: [
    {
      kind: 'cover',
      title: 'Sharing hard news with dignity',
      body: 'Sooner or later you will share news people do not want to hear: a project cut, a restructure, or roles being eliminated. You want to be kind, and you also have limits on what you know and can say.',
    },
    {
      kind: 'idea',
      title: 'Lead with the news',
      body: 'When leaders are nervous, they warm up with long context and leave people bracing for the blow. Say the core message early, in plain words, then give the reasons briefly. Clarity is a form of respect, because it lets people start processing instead of guessing.',
      bullets: [
        'Share it in person or on live video when you can',
        'Choose a private, unhurried time',
        'Avoid soft words that blur what is happening',
      ],
    },
    {
      kind: 'idea',
      title: 'Know your lane, and say so',
      body: 'Before the conversation, work with HR to separate what you can share, what you cannot, and what is not decided yet. HR and company policy lead on details like severance, benefits, selection, and timing for any layoff. You do not give legal opinions or guess. Saying "I don’t know, and here is who does" builds more trust than a confident wrong answer.',
    },
    {
      kind: 'example',
      title: 'Telling the team',
      instead: '"I can’t really say much, but don’t worry. I’m sure it will all work out."',
      tryThis: '"I have hard news. Our team is being reduced by four roles. Everyone affected is hearing directly today, with HR. I’ll share what I know, I won’t guess at what I don’t, and I’ll stay after for questions."',
      why: 'Vague comfort sounds kind but leaves people anxious and unsure whom to trust. A clear message with honest limits treats people as adults and shows them where to get real answers.',
    },
    {
      kind: 'idea',
      title: 'Make room for the reaction',
      body: 'People may go quiet, get angry, or cry. You do not need to fix it or defend the decision. Pause, acknowledge what you see, and let silence happen. Keep the focus on them, not on how hard this has been for you. Then remember the people who stay: they need a follow up conversation too.',
    },
    {
      kind: 'check',
      question: 'Right after you share that his role is being eliminated, Malik asks: "What about my severance? And is this even legal?" HR has asked you to route these questions to them. What is your best response?',
      options: [
        '"I’m sure the company will treat you fairly. Try not to worry about that part right now."',
        '"I think it was about two weeks per year last time, but please don’t quote me on that."',
        '"Those are fair questions, and you deserve accurate answers. Jenna from HR can meet today."',
        '"I understand. Honestly, I didn’t agree with this either, but my hands were tied."',
      ],
      answer: 2,
      explain: 'Taking the questions seriously and connecting Malik to HR gives him reliable answers without you guessing about pay or legal matters. Reassurance sounds warm but dodges his question, a guess can be wrong, and distancing yourself from the decision erodes trust.',
    },
    {
      kind: 'action',
      title: 'Make a three column note',
      body: 'Think of one difficult message you may need to deliver soon. Write three short lists: what I can say, what I cannot say, and what I do not know yet. Review it with HR or your manager before the conversation.',
    },
    {
      kind: 'takeaway',
      title: 'Hard news, handled with care',
      bullets: [
        'Lead with the message in plain words',
        'Stay in your lane: HR leads on layoff details, and you never give legal advice',
        'Make space for reactions, and follow up with those who stay',
      ],
    },
  ],
  es: {
    title: 'Comunicar noticias difíciles con dignidad',
    subtitle: 'Sé claro, sé humano y reconoce lo que le corresponde a Recursos Humanos',
    slides: [
      {
        kind: 'cover',
        title: 'Comunicar noticias difíciles con dignidad',
        body: 'Tarde o temprano tendrás que compartir noticias que nadie quiere oír: un proyecto cancelado, una reestructuración o la eliminación de puestos. Quieres ser amable, y también tienes límites sobre lo que sabes y lo que puedes decir.',
      },
      {
        kind: 'idea',
        title: 'Empieza por la noticia',
        body: 'Cuando los líderes están nerviosos, dan mucho contexto antes de llegar al punto y dejan a la gente esperando el golpe. Di el mensaje central pronto y con palabras sencillas, y luego explica brevemente las razones. La claridad es una forma de respeto, porque permite a las personas empezar a procesar en lugar de adivinar.',
        bullets: [
          'Compártela en persona o por video en vivo cuando sea posible',
          'Elige un momento privado y sin prisas',
          'Evita palabras suaves que oculten lo que está pasando',
        ],
      },
      {
        kind: 'idea',
        title: 'Conoce tu papel y dilo',
        body: 'Antes de la conversación, trabaja con Recursos Humanos para separar lo que puedes compartir, lo que no puedes y lo que todavía no está decidido. Recursos Humanos y la política de la empresa definen los detalles de cualquier despido, como la indemnización, los beneficios, la selección y los plazos. No das opiniones legales ni haces suposiciones. Decir “No lo sé, y esta es la persona que sí lo sabe” genera más confianza que una respuesta segura pero equivocada.',
      },
      {
        kind: 'example',
        title: 'Comunicarlo al equipo',
        instead: '“No puedo decir mucho, pero no se preocupen. Seguro que todo saldrá bien.”',
        tryThis: '“Tengo una noticia difícil. Nuestro equipo se reducirá en cuatro puestos. Las personas afectadas están recibiendo la noticia hoy directamente, con Recursos Humanos. Compartiré lo que sé, no voy a adivinar lo que no sé y me quedaré después para responder preguntas.”',
        why: 'El consuelo vago suena amable, pero deja a la gente ansiosa y sin saber en quién confiar. Un mensaje claro con límites honestos trata a las personas como adultas y les muestra dónde conseguir respuestas reales.',
      },
      {
        kind: 'idea',
        title: 'Deja espacio para la reacción',
        body: 'Las personas pueden quedarse en silencio, enojarse o llorar. No necesitas arreglarlo ni defender la decisión. Haz una pausa, reconoce lo que ves y permite el silencio. Mantén el foco en ellas, no en lo difícil que ha sido para ti. Y recuerda a quienes se quedan: también necesitan una conversación de seguimiento.',
      },
      {
        kind: 'check',
        question: 'Justo después de que le comunicas que su puesto será eliminado, Malik pregunta: “¿Y mi indemnización? ¿Esto es siquiera legal?” Recursos Humanos te pidió que les remitas esas preguntas. ¿Cuál es tu mejor respuesta?',
        options: [
          '“Estoy seguro de que la empresa te tratará de forma justa. Trata de no preocuparte por eso ahora.”',
          '“Creo que la última vez fueron unas dos semanas por año, pero no me cites en eso.”',
          '“Son preguntas justas y mereces respuestas precisas. Jenna, de Recursos Humanos, puede reunirse hoy contigo.”',
          '“Te entiendo. Sinceramente, yo tampoco estaba de acuerdo, pero tenía las manos atadas.”',
        ],
        answer: 2,
        explain: 'Tomar en serio sus preguntas y conectar a Malik con Recursos Humanos le da respuestas confiables sin que tú adivines sobre pagos o asuntos legales. Tranquilizarlo suena cálido pero evade la pregunta, una suposición puede ser incorrecta y distanciarte de la decisión debilita la confianza.',
      },
      {
        kind: 'action',
        title: 'Haz una nota de tres columnas',
        body: 'Piensa en un mensaje difícil que tal vez tengas que dar pronto. Escribe tres listas cortas: lo que puedo decir, lo que no puedo decir y lo que todavía no sé. Revísala con Recursos Humanos o con tu jefe antes de la conversación.',
      },
      {
        kind: 'takeaway',
        title: 'Noticias difíciles, manejadas con cuidado',
        bullets: [
          'Empieza por el mensaje, con palabras sencillas',
          'Respeta tu papel: Recursos Humanos define los detalles de los despidos y tú nunca das asesoría legal',
          'Deja espacio para las reacciones y da seguimiento a quienes se quedan',
        ],
      },
    ],
  },
  fr: {
    title: 'Annoncer une nouvelle difficile avec dignité',
    subtitle: 'Être clair, rester humain et savoir ce qui revient aux RH',
    slides: [
      {
        kind: 'cover',
        title: 'Annoncer une nouvelle difficile avec dignité',
        body: 'Tôt ou tard, vous devrez annoncer une nouvelle que personne ne veut entendre : un projet arrêté, une réorganisation ou des postes supprimés. Vous voulez être bienveillant, et vous avez aussi des limites sur ce que vous savez et ce que vous pouvez dire.',
      },
      {
        kind: 'idea',
        title: 'Commencez par la nouvelle',
        body: 'Quand un responsable est nerveux, il multiplie le contexte et laisse les gens redouter le coup. Énoncez le message central tôt, avec des mots simples, puis donnez brièvement les raisons. La clarté est une forme de respect, car elle permet aux personnes de commencer à encaisser au lieu de deviner.',
        bullets: [
          'Annoncez-la en personne ou en visio quand c’est possible',
          'Choisissez un moment privé et sans précipitation',
          'Évitez les mots adoucis qui brouillent la réalité',
        ],
      },
      {
        kind: 'idea',
        title: 'Connaissez votre rôle, et dites-le',
        body: 'Avant l’échange, travaillez avec les RH pour distinguer ce que vous pouvez dire, ce que vous ne pouvez pas dire et ce qui n’est pas encore décidé. Les RH et la politique de l’entreprise pilotent les détails de tout licenciement, comme les indemnités, les avantages, les critères de sélection et le calendrier. Vous ne donnez pas d’avis juridique et vous ne devinez pas. Dire « Je ne sais pas, et voici qui le sait » inspire plus confiance qu’une réponse assurée mais fausse.',
      },
      {
        kind: 'example',
        title: 'L’annoncer à l’équipe',
        instead: '« Je ne peux pas dire grand-chose, mais ne vous inquiétez pas. Je suis sûr que tout ira bien. »',
        tryThis: '« J’ai une nouvelle difficile. Notre équipe va perdre quatre postes. Les personnes concernées sont informées directement aujourd’hui, avec les RH. Je vais partager ce que je sais, je ne devinerai pas ce que j’ignore, et je reste ensuite pour vos questions. »',
        why: 'Un réconfort vague paraît bienveillant mais laisse les gens anxieux et sans savoir à qui se fier. Un message clair, avec des limites honnêtes, traite les personnes en adultes et leur indique où trouver de vraies réponses.',
      },
      {
        kind: 'idea',
        title: 'Laissez place aux réactions',
        body: 'Les gens peuvent se taire, se mettre en colère ou pleurer. Vous n’avez pas à arranger les choses ni à défendre la décision. Faites une pause, reconnaissez ce que vous voyez et laissez le silence s’installer. Gardez l’attention sur eux, pas sur la difficulté que cela représente pour vous. Et pensez à ceux qui restent : eux aussi ont besoin d’un échange de suivi.',
      },
      {
        kind: 'check',
        question: 'Juste après que vous lui annoncez la suppression de son poste, Malik demande : « Et mes indemnités ? Est-ce que c’est seulement légal ? » Les RH vous ont demandé de leur adresser ces questions. Quelle est la meilleure réponse ?',
        options: [
          '« Je suis sûr que l’entreprise vous traitera équitablement. Essayez de ne pas vous en soucier pour l’instant. »',
          '« Je crois que la dernière fois, c’était environ deux semaines par année, mais ne me citez pas. »',
          '« Ce sont des questions légitimes et vous méritez des réponses exactes. Jenna, des RH, peut vous recevoir aujourd’hui. »',
          '« Je comprends. Franchement, je n’étais pas d’accord non plus, mais j’avais les mains liées. »',
        ],
        answer: 2,
        explain: 'Prendre ses questions au sérieux et mettre Malik en lien avec les RH lui donne des réponses fiables sans que vous deviniez sur la rémunération ou le droit. Le rassurer paraît chaleureux mais esquive sa question, une estimation peut être fausse, et vous désolidariser de la décision abîme la confiance.',
      },
      {
        kind: 'action',
        title: 'Faites une note en trois colonnes',
        body: 'Pensez à un message difficile que vous devrez peut-être annoncer bientôt. Écrivez trois courtes listes : ce que je peux dire, ce que je ne peux pas dire et ce que je ne sais pas encore. Relisez-la avec les RH ou votre responsable avant l’échange.',
      },
      {
        kind: 'takeaway',
        title: 'Une nouvelle difficile, annoncée avec soin',
        bullets: [
          'Commencez par le message, avec des mots simples',
          'Restez dans votre rôle : les RH pilotent les détails des licenciements, et vous ne donnez jamais d’avis juridique',
          'Laissez place aux réactions et assurez un suivi auprès de ceux qui restent',
        ],
      },
    ],
  },
};

export default lesson;
