import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-19',
  week: 19,
  focus: 'communication',
  minutes: 4,
  title: 'How decisions get made: decide, consult, or agree',
  subtitle: 'Say which one before the discussion starts',
  slides: [
    {
      kind: 'cover',
      title: 'Decide, consult, or agree: say which',
      body: 'You ask the team for input, then make a different call, and people feel ignored. Often the decision itself was fine. The real problem was that nobody knew how it would be made.',
    },
    {
      kind: 'idea',
      title: 'Three ways to decide',
      body: 'Most decisions fall into one of three modes. Each one is valid. Trouble starts when you use one mode and people believe you are using another.',
      bullets: [
        'Decide: you make the call and explain it',
        'Consult: you gather input, then you decide',
        'Agree: the group decides together, and your voice counts the same as theirs',
      ],
    },
    {
      kind: 'idea',
      title: 'Name the mode up front',
      body: 'Before discussion starts, say which mode you are using and who makes the final call. That one sentence prevents most of the hurt feelings later. People can accept a decision they disagree with when the process was clear and honest.',
    },
    {
      kind: 'idea',
      title: 'Match the mode to the stakes',
      body: 'No single mode is always right. Choose based on urgency, who holds the knowledge, and how much commitment you need. And never pretend to consult once you have already decided.',
      bullets: [
        'Decide when it is urgent, low impact, or confidential',
        'Consult when others know things you need',
        'Agree when shared commitment matters more than speed',
      ],
    },
    {
      kind: 'example',
      title: 'Opening a discussion about a new tool',
      instead: '"What does everyone think about switching tools? Let’s hear all the ideas."',
      tryThis: '"I’ll make the call on our new tool by Friday. Before then, I want your input on what slows you down today, and I’ll share how your input shaped the choice."',
      why: 'People know their role, the deadline, and that their input will be weighed and acknowledged, not put to a vote.',
    },
    {
      kind: 'check',
      question: 'Your team spent an hour debating a new on call rotation. You already knew you had to pick the option that met a client contract. What would have helped most?',
      options: [
        'Letting the team vote anyway, then explaining afterward why the contract required another option.',
        'Thanking everyone warmly for a great debate and promising their ideas will shape future choices.',
        'Saying at the start that the contract set the choice, and asking for input on how to make it work.',
        'Skipping the meeting and sending the new rotation by email so that no one’s time was wasted.',
      ],
      answer: 2,
      explain: 'Being clear that the core choice was set, while consulting on the details, gives people a real voice where they have one. A vote you overrule, or a warm promise about future input, wears down trust. Skipping the conversation loses useful ideas about the rollout.',
    },
    {
      kind: 'action',
      title: 'Label your next decision',
      body: 'Look at one decision coming up this week. Before you raise it, write down the mode: decide, consult, or agree. Then open the conversation by saying it out loud, and tell people when and how you will close the loop.',
    },
    {
      kind: 'takeaway',
      title: 'Be clear about how',
      bullets: [
        'Decide, consult, and agree are all valid modes',
        'Name the mode before the discussion starts',
        'Never ask for input on a choice already made',
      ],
    },
  ],
  es: {
    title: 'Cómo se toman las decisiones: decidir, consultar o acordar',
    subtitle: 'Dilo antes de que empiece la conversación',
    slides: [
      {
        kind: 'cover',
        title: 'Decidir, consultar o acordar: di cuál',
        body: 'Le pides opiniones al equipo, luego decides otra cosa y la gente se siente ignorada. Muchas veces la decisión estaba bien. El verdadero problema fue que nadie sabía cómo se iba a tomar.',
      },
      {
        kind: 'idea',
        title: 'Tres formas de decidir',
        body: 'La mayoría de las decisiones cae en uno de tres modos. Todos son válidos. El problema empieza cuando usas uno y la gente cree que estás usando otro.',
        bullets: [
          'Decidir: tú tomas la decisión y la explicas',
          'Consultar: reúnes opiniones y luego decides tú',
          'Acordar: el grupo decide en conjunto y tu voz vale lo mismo que las demás',
        ],
      },
      {
        kind: 'idea',
        title: 'Nombra el modo desde el inicio',
        body: 'Antes de que empiece la conversación, di qué modo usarás y quién tiene la última palabra. Esa sola frase evita la mayoría de los malestares posteriores. La gente puede aceptar una decisión con la que no está de acuerdo cuando el proceso fue claro y honesto.',
      },
      {
        kind: 'idea',
        title: 'Ajusta el modo a lo que está en juego',
        body: 'Ningún modo es siempre el correcto. Elige según la urgencia, quién tiene el conocimiento y cuánto compromiso necesitas. Y nunca finjas consultar cuando ya decidiste.',
        bullets: [
          'Decide cuando es urgente, de bajo impacto o confidencial',
          'Consulta cuando otros saben cosas que necesitas',
          'Acuerda cuando el compromiso compartido importa más que la rapidez',
        ],
      },
      {
        kind: 'example',
        title: 'Al abrir una conversación sobre una nueva herramienta',
        instead: '“¿Qué opinan todos de cambiar de herramienta? Escuchemos todas las ideas.”',
        tryThis: '“Voy a decidir la nueva herramienta antes del viernes. Hasta entonces, quiero saber qué los frena hoy, y les contaré cómo su opinión influyó en la elección.”',
        why: 'La gente conoce su rol, el plazo y que su opinión se tendrá en cuenta y se reconocerá, no que se votará.',
      },
      {
        kind: 'check',
        question: 'Tu equipo pasó una hora debatiendo un nuevo sistema de guardias. Tú ya sabías que debías elegir la opción que cumplía un contrato con un cliente. ¿Qué habría ayudado más?',
        options: [
          'Dejar que el equipo votara de todos modos y explicar después por qué el contrato exigía otra opción.',
          'Agradecer con calidez el gran debate y prometer que sus ideas guiarán decisiones futuras.',
          'Decir al inicio que el contrato definía la opción y pedir ideas sobre cómo hacer que funcione.',
          'Saltarte la reunión y enviar el nuevo esquema por correo para no hacerle perder tiempo a nadie.',
        ],
        answer: 2,
        explain: 'Aclarar que la decisión central estaba tomada, y consultar sobre los detalles, da a la gente una voz real donde la tiene. Una votación que luego anulas, o una promesa cálida sobre el futuro, desgasta la confianza. Saltarte la conversación pierde ideas útiles para la implementación.',
      },
      {
        kind: 'action',
        title: 'Etiqueta tu próxima decisión',
        body: 'Mira una decisión que se acerca esta semana. Antes de plantearla, escribe el modo: decidir, consultar o acordar. Luego abre la conversación diciéndolo en voz alta y cuenta cuándo y cómo cerrarás el ciclo.',
      },
      {
        kind: 'takeaway',
        title: 'Claridad sobre el cómo',
        bullets: [
          'Decidir, consultar y acordar son modos válidos',
          'Nombra el modo antes de que empiece la conversación',
          'Nunca pidas opiniones sobre algo ya decidido',
        ],
      },
    ],
  },
  fr: {
    title: 'Comment les décisions se prennent : décider, consulter ou s’accorder',
    subtitle: 'Annoncez-le avant que la discussion commence',
    slides: [
      {
        kind: 'cover',
        title: 'Décider, consulter ou s’accorder : dites lequel',
        body: 'Vous demandez l’avis de l’équipe, puis vous tranchez autrement, et les gens se sentent ignorés. Souvent, la décision était bonne. Le vrai problème, c’est que personne ne savait comment elle serait prise.',
      },
      {
        kind: 'idea',
        title: 'Trois façons de décider',
        body: 'La plupart des décisions relèvent de l’un de trois modes. Chacun est valable. Les difficultés commencent quand vous en utilisez un et que les gens croient que vous en utilisez un autre.',
        bullets: [
          'Décider : vous tranchez et vous expliquez',
          'Consulter : vous recueillez des avis, puis vous décidez',
          'S’accorder : le groupe décide ensemble, et votre voix compte autant que les autres',
        ],
      },
      {
        kind: 'idea',
        title: 'Annoncez le mode dès le départ',
        body: 'Avant la discussion, dites quel mode vous utilisez et qui tranche à la fin. Cette seule phrase évite la plupart des frustrations ensuite. On peut accepter une décision avec laquelle on n’est pas d’accord quand le processus a été clair et honnête.',
      },
      {
        kind: 'idea',
        title: 'Adaptez le mode aux enjeux',
        body: 'Aucun mode n’est toujours le bon. Choisissez selon l’urgence, qui détient les connaissances et le niveau d’engagement dont vous avez besoin. Et ne faites jamais semblant de consulter quand vous avez déjà décidé.',
        bullets: [
          'Décidez quand c’est urgent, peu important ou confidentiel',
          'Consultez quand d’autres savent ce qui vous manque',
          'Cherchez l’accord quand l’engagement commun compte plus que la vitesse',
        ],
      },
      {
        kind: 'example',
        title: 'Lancer une discussion sur un nouvel outil',
        instead: '« Que pensez-vous tous d’un changement d’outil ? Écoutons toutes les idées. »',
        tryThis: '« Je choisirai le nouvel outil d’ici vendredi. D’ici là, j’aimerais savoir ce qui vous ralentit aujourd’hui, et je vous dirai comment vos avis ont pesé sur le choix. »',
        why: 'Chacun connaît son rôle, l’échéance, et sait que son avis sera pris en compte et reconnu, sans être soumis au vote.',
      },
      {
        kind: 'check',
        question: 'Votre équipe a débattu une heure d’un nouveau planning d’astreinte. Vous saviez déjà qu’il fallait retenir l’option conforme à un contrat client. Qu’est-ce qui aurait le plus aidé ?',
        options: [
          'Laisser l’équipe voter quand même, puis expliquer après coup pourquoi le contrat imposait une autre option.',
          'Remercier chaleureusement pour ce beau débat et promettre que leurs idées guideront les choix futurs.',
          'Dire dès le départ que le contrat fixait le choix, et demander des idées pour le faire fonctionner.',
          'Annuler la réunion et envoyer le nouveau planning par courriel pour ne faire perdre de temps à personne.',
        ],
        answer: 2,
        explain: 'Dire clairement que le choix principal était fixé, tout en consultant sur les détails, donne une vraie voix là où elle existe. Un vote que vous annulez, ou une promesse chaleureuse pour plus tard, use la confiance. Supprimer l’échange fait perdre des idées utiles pour la mise en œuvre.',
      },
      {
        kind: 'action',
        title: 'Étiquetez votre prochaine décision',
        body: 'Prenez une décision à venir cette semaine. Avant de l’aborder, notez le mode : décider, consulter ou s’accorder. Puis ouvrez la discussion en l’annonçant à voix haute, et dites quand et comment vous ferez le retour.',
      },
      {
        kind: 'takeaway',
        title: 'Clarifier le comment',
        bullets: [
          'Décider, consulter et s’accorder sont tous valables',
          'Annoncez le mode avant que la discussion commence',
          'Ne demandez jamais d’avis sur un choix déjà fait',
        ],
      },
    ],
  },
};

export default lesson;
