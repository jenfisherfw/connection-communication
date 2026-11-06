import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-10',
  week: 10,
  focus: 'communication',
  minutes: 4,
  title: 'Write for the reader: the ask first, context second',
  subtitle: 'Make your messages easy to act on.',
  slides: [
    {
      kind: 'cover',
      title: 'Buried in paragraph four',
      body: 'You spent twenty minutes on a careful message, and the reply asks the one thing you thought was obvious. Busy readers skim, and if your request is hidden under background, they miss it.',
    },
    {
      kind: 'idea',
      title: 'Lead with what you need',
      body: 'Put the ask in the first line or the subject: what you need, from whom, and by when. Context still matters, but it comes second, for readers who want it. This respects their time and gets you faster, clearer answers.',
      bullets: [
        'The ask: "Can you approve the revised plan?"',
        'The deadline: "by Thursday at noon"',
        'The context: two or three short lines below',
      ],
    },
    {
      kind: 'idea',
      title: 'Write for how people read',
      body: 'Most people read on a phone, between meetings, in a few seconds. Short paragraphs, clear labels, and one topic per message make your words easier to act on. If a message needs a scroll to reach the point, split it or move the detail into a linked doc.',
    },
    {
      kind: 'idea',
      title: 'Clear is kind',
      body: 'Directness in writing can feel abrupt, so warmth matters. A friendly closing line or a thank you keeps the tone human. What feels unkind is making someone guess what you want. A clear ask with a warm close is both efficient and respectful.',
    },
    {
      kind: 'example',
      title: 'Opening a request',
      instead: '"Hi team, as you know we’ve been looking at vendors since spring, and after a lot of back and forth..."',
      tryThis: '"Decision needed by Friday: pick Vendor A or B. My recommendation and the tradeoffs are below."',
      why: 'The second version tells readers right away what to do and when. Anyone who wants the full story can keep reading, and anyone in a hurry can still act.',
    },
    {
      kind: 'check',
      question: 'You need your director to approve extra budget by Friday. Which opening line for your email works best?',
      options: [
        'Start with the project history, so she understands why the budget changed before you ask.',
        '"Hope you’re having a great week! I wanted to share a quick update on how things are going."',
        '"Sorry to bother you, I know you’re busy. Do you have a minute for a budget question?"',
        '"Can you approve $4,000 more for the vendor by Friday? Details are below."',
      ],
      answer: 3,
      explain: 'The last option states the ask, the amount, and the deadline, with context just below. The warm opener sounds friendly but hides the request. The apology adds a round trip before she even sees the question.',
    },
    {
      kind: 'action',
      title: 'Flip one message',
      body: 'Before you send your next request, find the sentence that holds the ask. Move it to the top, add a deadline if there is one, and trim the background to three lines or fewer. Notice how quickly the reply comes back.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Put the ask and the deadline in the first line.',
        'Keep context short and below the request.',
        'A clear ask with a warm close is both efficient and kind.',
      ],
    },
  ],
  es: {
    title: 'Escribe para quien lee: primero la petición, después el contexto',
    subtitle: 'Haz que tus mensajes sean fáciles de responder.',
    slides: [
      {
        kind: 'cover',
        title: 'Enterrado en el cuarto párrafo',
        body: 'Dedicaste veinte minutos a un mensaje cuidadoso y la respuesta pregunta justo lo que creías obvio. Quien está ocupado lee por encima, y si tu petición queda escondida bajo el contexto, no la ve.',
      },
      {
        kind: 'idea',
        title: 'Empieza por lo que necesitas',
        body: 'Pon la petición en la primera línea o en el asunto: qué necesitas, de quién y para cuándo. El contexto sigue importando, pero va después, para quien lo quiera. Así respetas su tiempo y obtienes respuestas más rápidas y claras.',
        bullets: [
          'La petición: “¿Puedes aprobar el plan revisado?”',
          'El plazo: “antes del jueves al mediodía”',
          'El contexto: dos o tres líneas breves debajo',
        ],
      },
      {
        kind: 'idea',
        title: 'Escribe para cómo lee la gente',
        body: 'La mayoría lee en el teléfono, entre reuniones, en pocos segundos. Párrafos cortos, etiquetas claras y un tema por mensaje facilitan actuar. Si hay que desplazarse para llegar al punto, divide el mensaje o lleva el detalle a un documento enlazado.',
      },
      {
        kind: 'idea',
        title: 'Ser claro es ser amable',
        body: 'Ser directo por escrito puede sonar brusco, así que la calidez importa. Una línea final cordial o un agradecimiento mantienen el tono humano. Lo que de verdad resulta poco amable es obligar a alguien a adivinar qué quieres. Una petición clara con un cierre cálido es eficiente y respetuosa.',
      },
      {
        kind: 'example',
        title: 'Cómo abrir una petición',
        instead: '“Hola, equipo: como saben, hemos estado evaluando proveedores desde la primavera y, después de mucho ir y venir...”',
        tryThis: '“Decisión necesaria para el viernes: elegir el proveedor A o el B. Abajo van mi recomendación y los pros y contras.”',
        why: 'La segunda versión dice de inmediato qué hacer y cuándo. Quien quiera la historia completa puede seguir leyendo, y quien tenga prisa igual puede actuar.',
      },
      {
        kind: 'check',
        question: 'Necesitas que tu directora apruebe presupuesto adicional antes del viernes. ¿Qué primera línea funciona mejor para tu correo?',
        options: [
          'Empezar con la historia del proyecto, para que entienda por qué cambió el presupuesto antes de pedir.',
          '“¡Espero que tengas una gran semana! Quería compartirte una actualización rápida de cómo van las cosas.”',
          '“Perdona la molestia, sé que estás ocupada. ¿Tienes un minuto para una pregunta de presupuesto?”',
          '“¿Puedes aprobar 4.000 dólares más para el proveedor antes del viernes? Abajo van los detalles.”',
        ],
        answer: 3,
        explain: 'La última opción plantea la petición, el monto y el plazo, con el contexto justo debajo. El saludo cálido suena amable, pero esconde la petición. La disculpa agrega un ida y vuelta antes de que ella vea la pregunta.',
      },
      {
        kind: 'action',
        title: 'Invierte un mensaje',
        body: 'Antes de enviar tu próxima petición, busca la frase que contiene lo que pides. Muévela arriba, agrega un plazo si lo hay y reduce el contexto a tres líneas o menos. Observa qué tan rápido llega la respuesta.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Pon la petición y el plazo en la primera línea.',
          'Mantén el contexto breve y debajo de la petición.',
          'Una petición clara con un cierre cálido es eficiente y amable.',
        ],
      },
    ],
  },
  fr: {
    title: 'Écrire pour le lecteur : la demande d’abord, le contexte ensuite',
    subtitle: 'Rendez vos messages faciles à traiter.',
    slides: [
      {
        kind: 'cover',
        title: 'Enfoui au quatrième paragraphe',
        body: 'Vous avez passé vingt minutes sur un message soigné, et la réponse pose justement la question qui vous semblait évidente. Les lecteurs pressés survolent, et si votre demande est cachée sous le contexte, ils la manquent.',
      },
      {
        kind: 'idea',
        title: 'Commencez par ce dont vous avez besoin',
        body: 'Placez la demande dans la première ligne ou l’objet : ce qu’il vous faut, de qui et pour quand. Le contexte compte toujours, mais il vient ensuite, pour ceux qui le veulent. Vous respectez ainsi leur temps et obtenez des réponses plus rapides et plus claires.',
        bullets: [
          'La demande : « Pouvez-vous valider le plan révisé ? »',
          'L’échéance : « d’ici jeudi midi »',
          'Le contexte : deux ou trois lignes courtes en dessous',
        ],
      },
      {
        kind: 'idea',
        title: 'Écrivez pour la façon dont on lit',
        body: 'La plupart des gens lisent sur leur téléphone, entre deux réunions, en quelques secondes. Des paragraphes courts, des repères clairs et un sujet par message facilitent l’action. S’il faut faire défiler pour arriver à l’essentiel, scindez le message ou placez le détail dans un document lié.',
      },
      {
        kind: 'idea',
        title: 'La clarté est une forme de bienveillance',
        body: 'Être direct à l’écrit peut paraître sec, alors la chaleur compte. Une formule de fin aimable ou un remerciement garde un ton humain. Ce qui est vraiment peu aimable, c’est d’obliger quelqu’un à deviner ce que vous voulez. Une demande claire avec une conclusion chaleureuse est à la fois efficace et respectueuse.',
      },
      {
        kind: 'example',
        title: 'Ouvrir une demande',
        instead: '« Bonjour à tous, comme vous le savez, nous étudions des prestataires depuis le printemps et, après bien des allers-retours... »',
        tryThis: '« Décision attendue d’ici vendredi : choisir le prestataire A ou B. Ma recommandation et les compromis sont ci-dessous. »',
        why: 'La seconde version dit tout de suite quoi faire et pour quand. Ceux qui veulent l’histoire complète peuvent continuer à lire, et ceux qui sont pressés peuvent quand même agir.',
      },
      {
        kind: 'check',
        question: 'Vous avez besoin que votre directrice approuve un budget supplémentaire d’ici vendredi. Quelle première ligne fonctionne le mieux pour votre courriel ?',
        options: [
          'Commencer par l’historique du projet, pour qu’elle comprenne pourquoi le budget a changé avant de demander.',
          '« J’espère que vous passez une excellente semaine ! Je voulais partager un petit point sur l’avancement. »',
          '« Désolé de vous déranger, je sais que vous êtes occupée. Avez-vous une minute pour une question de budget ? »',
          '« Pouvez-vous approuver 4 000 dollars de plus pour le prestataire d’ici vendredi ? Les détails sont ci-dessous. »',
        ],
        answer: 3,
        explain: 'La dernière option énonce la demande, le montant et l’échéance, avec le contexte juste en dessous. L’ouverture chaleureuse semble aimable mais cache la demande. Les excuses ajoutent un aller-retour avant même qu’elle voie la question.',
      },
      {
        kind: 'action',
        title: 'Inversez un message',
        body: 'Avant d’envoyer votre prochaine demande, repérez la phrase qui contient ce que vous demandez. Placez-la en haut, ajoutez une échéance s’il y en a une et réduisez le contexte à trois lignes au plus. Observez la rapidité de la réponse.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Placez la demande et l’échéance dans la première ligne.',
          'Gardez le contexte court, sous la demande.',
          'Une demande claire avec une conclusion chaleureuse est efficace et bienveillante.',
        ],
      },
    ],
  },
};

export default lesson;
