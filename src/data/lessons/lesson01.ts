import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-01',
  week: 1,
  focus: 'communication',
  minutes: 4,
  title: 'Feedback that lands',
  subtitle: 'Situation, behavior, impact, then a question',
  slides: [
    {
      kind: 'cover',
      title: 'Feedback that lands',
      body: 'You want to be honest without making someone defensive. Most feedback misses because it is vague, loaded, or ends as a verdict instead of a conversation.',
    },
    {
      kind: 'idea',
      title: 'Start with the situation',
      body: 'Name one specific moment: when and where it happened. A clear anchor keeps you both talking about the same event, not a general impression of the person.',
      bullets: ['"In Tuesday’s client call..."', '"In the draft you sent this morning..."', 'Skip "always" and "never"'],
    },
    {
      kind: 'idea',
      title: 'Describe behavior, then impact',
      body: 'Say what you saw or heard, the way a camera would record it. Then share the effect it had on you, the team, or the work. Behavior plus impact explains why it matters without guessing at motives.',
      bullets: ['Behavior: what someone could observe', 'Impact: the real result it had', 'Leave out labels like "careless" or "rude"'],
    },
    {
      kind: 'idea',
      title: 'End with a question',
      body: 'Feedback lands best as the start of a conversation. A genuine question invites their view, surfaces context you may not have, and turns a critique into shared problem solving.',
      bullets: ['"How did it look from your side?"', '"What got in the way?"', '"What would help next time?"'],
    },
    {
      kind: 'example',
      title: 'From verdict to conversation',
      instead: '"You’re not a team player. You need to fix your attitude in meetings."',
      tryThis: '"In this morning’s standup, you cut Priya off twice while she was explaining the delay. She stopped talking, and we didn’t hear the full issue. What was going on for you?"',
      why: 'A label invites an argument about who they are. A specific moment, its impact, and a real question invite them to look at it with you.',
    },
    {
      kind: 'check',
      question: 'Your analyst sent a report to a client with errors. You want to raise it with her. Which opening is strongest?',
      options: [
        '"I know you’re busy and doing great work, so don’t worry, but please be more careful."',
        '"You’ve been careless with details lately. Can you double check things?"',
        '"Yesterday’s client report had three wrong totals, and the client called me. What happened?"',
        '"We need to talk about quality. I expect better from someone at your level."',
      ],
      answer: 2,
      explain: 'It names the moment, the facts, and the impact, then asks for her view. The warm first option softens the point until it disappears, and the others are labels or verdicts.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Pick one piece of feedback you have been putting off. Write it in four lines: situation, behavior, impact, question. Read it aloud once, cut any labels, then deliver it within two days.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Anchor feedback in one specific moment.',
        'Describe what you saw and the impact it had.',
        'End with a real question, not a verdict.',
      ],
    },
  ],
  es: {
    title: 'Retroalimentación que llega',
    subtitle: 'Situación, conducta, impacto y luego una pregunta',
    slides: [
      {
        kind: 'cover',
        title: 'Retroalimentación que llega',
        body: 'Quieres ser honesto sin poner a la otra persona a la defensiva. Casi toda la retroalimentación falla porque es vaga, cargada o termina en un veredicto en lugar de una conversación.',
      },
      {
        kind: 'idea',
        title: 'Empieza por la situación',
        body: 'Nombra un momento específico: cuándo y dónde ocurrió. Un ancla clara hace que ambos hablen del mismo hecho y no de una impresión general sobre la persona.',
        bullets: ['“En la llamada con el cliente del martes...”', '“En el borrador que enviaste esta mañana...”', 'Evita “siempre” y “nunca”'],
      },
      {
        kind: 'idea',
        title: 'Describe la conducta y luego el impacto',
        body: 'Di lo que viste u oíste, como lo grabaría una cámara. Luego comparte el efecto que tuvo en ti, en el equipo o en el trabajo. Conducta más impacto explica por qué importa sin adivinar intenciones.',
        bullets: ['Conducta: lo que cualquiera podría observar', 'Impacto: el resultado real que tuvo', 'Deja fuera etiquetas como “descuidado” o “grosero”'],
      },
      {
        kind: 'idea',
        title: 'Cierra con una pregunta',
        body: 'La retroalimentación funciona mejor como el inicio de una conversación. Una pregunta genuina invita su punto de vista, saca a la luz contexto que quizá no tienes y convierte la crítica en resolución conjunta.',
        bullets: ['“¿Cómo lo viviste tú?”', '“¿Qué se interpuso?”', '“¿Qué te ayudaría la próxima vez?”'],
      },
      {
        kind: 'example',
        title: 'Del veredicto a la conversación',
        instead: '“No trabajas en equipo. Tienes que cambiar tu actitud en las reuniones.”',
        tryThis: '“En la reunión diaria de hoy interrumpiste a Priya dos veces mientras explicaba el retraso. Dejó de hablar y no escuchamos todo el problema. ¿Qué estaba pasando para ti?”',
        why: 'Una etiqueta abre una discusión sobre quién es la persona. Un momento concreto, su impacto y una pregunta real la invitan a mirarlo contigo.',
      },
      {
        kind: 'check',
        question: 'Tu analista envió a un cliente un informe con errores. Quieres hablarlo con ella. ¿Qué inicio es el más sólido?',
        options: [
          '“Sé que estás ocupada y haces un gran trabajo, así que no te preocupes, pero ten más cuidado.”',
          '“Últimamente has sido descuidada con los detalles. ¿Puedes revisar todo dos veces?”',
          '“El informe de ayer tenía tres totales equivocados y el cliente me llamó. ¿Qué pasó?”',
          '“Tenemos que hablar de calidad. Espero más de alguien con tu nivel.”',
        ],
        answer: 2,
        explain: 'Nombra el momento, los hechos y el impacto, y luego pide su punto de vista. La primera opción, cálida, suaviza tanto el mensaje que desaparece; las demás son etiquetas o veredictos.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Elige una retroalimentación que hayas estado posponiendo. Escríbela en cuatro líneas: situación, conducta, impacto, pregunta. Léela en voz alta una vez, quita cualquier etiqueta y compártela en los próximos dos días.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Ancla la retroalimentación en un momento específico.',
          'Describe lo que viste y el impacto que tuvo.',
          'Cierra con una pregunta real, no con un veredicto.',
        ],
      },
    ],
  },
  fr: {
    title: 'Un feedback qui porte',
    subtitle: 'Situation, comportement, impact, puis une question',
    slides: [
      {
        kind: 'cover',
        title: 'Un feedback qui porte',
        body: 'Vous voulez être franc sans braquer l’autre. La plupart des feedbacks échouent parce qu’ils sont flous, chargés, ou se terminent par un verdict au lieu d’une conversation.',
      },
      {
        kind: 'idea',
        title: 'Commencez par la situation',
        body: 'Nommez un moment précis : quand et où cela s’est passé. Un point d’ancrage clair vous permet de parler du même fait, et non d’une impression générale sur la personne.',
        bullets: ['« Pendant l’appel client de mardi... »', '« Dans le brouillon envoyé ce matin... »', 'Évitez « toujours » et « jamais »'],
      },
      {
        kind: 'idea',
        title: 'Décrivez le comportement, puis l’impact',
        body: 'Dites ce que vous avez vu ou entendu, comme le ferait une caméra. Partagez ensuite l’effet que cela a eu sur vous, l’équipe ou le travail. Comportement et impact expliquent l’enjeu sans deviner les intentions.',
        bullets: ['Comportement : ce que chacun pourrait observer', 'Impact : le résultat réel', 'Laissez de côté les étiquettes comme « négligent » ou « impoli »'],
      },
      {
        kind: 'idea',
        title: 'Terminez par une question',
        body: 'Un feedback porte mieux lorsqu’il ouvre une conversation. Une vraie question invite son point de vue, fait apparaître un contexte que vous ignorez peut‑être et transforme la critique en résolution commune.',
        bullets: ['« Comment l’avez‑vous vécu ? »', '« Qu’est‑ce qui vous a freiné ? »', '« Qu’est‑ce qui vous aiderait la prochaine fois ? »'],
      },
      {
        kind: 'example',
        title: 'Du verdict à la conversation',
        instead: '« Vous n’avez pas l’esprit d’équipe. Il faut revoir votre attitude en réunion. »',
        tryThis: '« Au point d’équipe de ce matin, vous avez coupé Priya deux fois pendant qu’elle expliquait le retard. Elle s’est arrêtée et nous n’avons pas entendu tout le problème. Que se passait‑il pour vous ? »',
        why: 'Une étiquette ouvre un débat sur qui est la personne. Un moment précis, son impact et une vraie question l’invitent à examiner la situation avec vous.',
      },
      {
        kind: 'check',
        question: 'Votre analyste a envoyé à un client un rapport comportant des erreurs. Vous voulez en parler avec elle. Quelle entrée en matière est la plus solide ?',
        options: [
          '« Je sais que vous êtes débordée et que vous faites du bon travail, ne vous inquiétez pas, mais soyez plus attentive. »',
          '« Vous êtes négligente avec les détails ces temps‑ci. Pouvez‑vous tout vérifier deux fois ? »',
          '« Le rapport d’hier contenait trois totaux faux et le client m’a appelé. Que s’est‑il passé ? »',
          '« Il faut parler de qualité. J’attends mieux de quelqu’un de votre niveau. »',
        ],
        answer: 2,
        explain: 'Elle nomme le moment, les faits et l’impact, puis demande son point de vue. La première option, chaleureuse, adoucit le message au point de l’effacer ; les autres sont des étiquettes ou des verdicts.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Choisissez un feedback que vous repoussez. Écrivez‑le en quatre lignes : situation, comportement, impact, question. Lisez‑le une fois à voix haute, retirez toute étiquette, puis partagez‑le dans les deux jours.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Ancrez le feedback dans un moment précis.',
          'Décrivez ce que vous avez vu et son impact.',
          'Terminez par une vraie question, pas par un verdict.',
        ],
      },
    ],
  },
};

export default lesson;
