import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-16',
  week: 16,
  focus: 'communication',
  minutes: 4,
  title: 'Feedback upward and to peers',
  subtitle: 'Speak up when you hold no authority',
  slides: [
    {
      kind: 'cover',
      title: 'Feedback without the org chart behind you',
      body: 'Giving feedback to your own team is hard enough. Giving it to your manager or a peer can feel risky, because you hold no authority and the relationship has to last long after the talk.',
    },
    {
      kind: 'idea',
      title: 'Ask before you offer',
      body: 'Upward and peer feedback land best when the other person has opened the door. Asking permission is not timid. It turns a surprise into a conversation they chose.',
      bullets: [
        '"Would it help if I shared how that meeting landed for my team?"',
        '"Are you open to an observation about the handoff?"',
        'Accept a "not now" and come back later',
      ],
    },
    {
      kind: 'idea',
      title: 'Tie it to what they care about',
      body: 'Your manager and your peers have their own goals. Feedback is easier to hear when it connects to something they already want, like a smooth launch, a strong team, or happy customers. Frame it as helping them succeed, not as correcting them.',
    },
    {
      kind: 'idea',
      title: 'Stay on the work, and own your part',
      body: 'Describe one specific moment and its effect on the work. Then name your own part, if you had one. Owning your piece lowers defenses and shows you are a partner, not a critic.',
      bullets: [
        'One moment, not a pattern of grievances',
        'The effect on people, customers, or deadlines',
        'What you could do differently too',
      ],
    },
    {
      kind: 'example',
      title: 'To a peer who misses handoffs',
      instead: '"You always drop the ball on handoffs, and my team is tired of covering for yours."',
      tryThis: '"On the last two releases, the specs reached us the day before launch, and we had to rush testing. I want us both to hit our dates. Can we look at the handoff together?"',
      why: 'It names specific events and their impact, links them to a shared goal, and invites joint problem solving instead of blame.',
    },
    {
      kind: 'check',
      question: 'Your manager often moves your 1:1s at the last minute, and you have stopped bringing important topics. What is the best way to raise it?',
      options: [
        'Wait for your next review, then mention it as one way your working relationship could improve.',
        'Tell them warmly that you understand how busy they are, so it is fine if your 1:1s move around.',
        'Ask if you can share an observation, then say the last three moves left two decisions waiting.',
        'Mention it to a peer first to see whether their 1:1s with your manager get moved just as often.',
      ],
      answer: 2,
      explain: 'Asking first respects their position, and naming specific moves and their effect on the work makes it concrete. Saying it is fine sounds kind but hides the real cost. Waiting for a review or checking with a peer delays a fix and can feel like going around them.',
    },
    {
      kind: 'action',
      title: 'Prepare one conversation',
      body: 'Choose one manager or peer you have feedback for. Write three lines: the moment you saw, its effect on the work, and the shared goal it connects to. Then write your opening permission question, so you are ready when the moment comes.',
    },
    {
      kind: 'takeaway',
      title: 'Feedback across and up',
      bullets: [
        'Ask permission so they choose the conversation',
        'Connect it to a goal they already care about',
        'Name the moment, the impact, and your own part',
      ],
    },
  ],
  es: {
    title: 'Retroalimentación hacia arriba y entre pares',
    subtitle: 'Habla aunque no tengas autoridad',
    slides: [
      {
        kind: 'cover',
        title: 'Retroalimentación sin el organigrama de tu lado',
        body: 'Dar retroalimentación a tu propio equipo ya es difícil. Dársela a tu jefe o a un par puede sentirse arriesgado, porque no tienes autoridad y la relación debe durar mucho después de la conversación.',
      },
      {
        kind: 'idea',
        title: 'Pregunta antes de ofrecer',
        body: 'La retroalimentación hacia arriba o entre pares funciona mejor cuando la otra persona abrió la puerta. Pedir permiso no es timidez. Convierte una sorpresa en una conversación que la otra persona eligió.',
        bullets: [
          '“¿Te serviría que te cuente cómo le cayó esa reunión a mi equipo?”',
          '“¿Te interesa una observación sobre la entrega entre equipos?”',
          'Acepta un “ahora no” y vuelve más tarde',
        ],
      },
      {
        kind: 'idea',
        title: 'Conéctalo con lo que le importa',
        body: 'Tu jefe y tus pares tienen sus propias metas. La retroalimentación se escucha mejor cuando se conecta con algo que ya quieren, como un lanzamiento sin tropiezos, un equipo fuerte o clientes satisfechos. Plantéala como ayuda para que les vaya bien, no como corrección.',
      },
      {
        kind: 'idea',
        title: 'Céntrate en el trabajo y reconoce tu parte',
        body: 'Describe un momento específico y su efecto en el trabajo. Luego nombra tu propia parte, si la tuviste. Reconocerla baja las defensas y muestra que eres un aliado, no un crítico.',
        bullets: [
          'Un momento, no una lista de quejas',
          'El efecto en personas, clientes o plazos',
          'Lo que tú también podrías hacer distinto',
        ],
      },
      {
        kind: 'example',
        title: 'A un par que falla en las entregas',
        instead: '“Siempre dejas caer las entregas y mi equipo ya está cansado de cubrir al tuyo.”',
        tryThis: '“En los dos últimos lanzamientos, las especificaciones nos llegaron un día antes y tuvimos que apurar las pruebas. Quiero que ambos cumplamos nuestras fechas. ¿Revisamos juntos la entrega?”',
        why: 'Nombra hechos concretos y su impacto, los conecta con una meta compartida e invita a resolver juntos en lugar de culpar.',
      },
      {
        kind: 'check',
        question: 'Tu jefa suele mover tus reuniones uno a uno a último momento, y ya dejaste de llevar temas importantes. ¿Cuál es la mejor forma de plantearlo?',
        options: [
          'Esperar a tu próxima evaluación y mencionarlo como algo que podría mejorar la relación de trabajo.',
          'Decirle con calidez que entiendes lo ocupada que está, así que no importa si las reuniones se mueven.',
          'Preguntar si puedes compartir una observación y decir que los tres últimos cambios frenaron dos decisiones.',
          'Comentarlo primero con un par para ver si a esa persona también le mueven tanto las reuniones.',
        ],
        answer: 2,
        explain: 'Pedir permiso respeta su posición, y nombrar cambios concretos y su efecto en el trabajo lo hace tangible. Decir que no importa suena amable, pero oculta el costo real. Esperar a la evaluación o consultar a un par retrasa la solución y puede sentirse como ir por detrás.',
      },
      {
        kind: 'action',
        title: 'Prepara una conversación',
        body: 'Elige a un jefe o par con quien tengas retroalimentación pendiente. Escribe tres líneas: el momento que viste, su efecto en el trabajo y la meta compartida con la que se conecta. Luego escribe tu pregunta de permiso para abrir, así estarás listo cuando llegue el momento.',
      },
      {
        kind: 'takeaway',
        title: 'Retroalimentación hacia los lados y hacia arriba',
        bullets: [
          'Pide permiso para que elijan la conversación',
          'Conéctala con una meta que ya le importa',
          'Nombra el momento, el impacto y tu propia parte',
        ],
      },
    ],
  },
  fr: {
    title: 'Le feedback vers le haut et entre pairs',
    subtitle: 'Prendre la parole sans autorité hiérarchique',
    slides: [
      {
        kind: 'cover',
        title: 'Un feedback sans l’organigramme de votre côté',
        body: 'Donner du feedback à votre équipe est déjà difficile. Le donner à votre responsable ou à un pair peut sembler risqué, car vous n’avez aucune autorité et la relation doit durer bien après l’échange.',
      },
      {
        kind: 'idea',
        title: 'Demandez avant de proposer',
        body: 'Le feedback vers le haut ou entre pairs passe mieux quand l’autre personne a ouvert la porte. Demander la permission n’est pas de la timidité. Cela transforme une surprise en une conversation qu’elle a choisie.',
        bullets: [
          '« Est-ce que cela vous aiderait que je vous dise comment cette réunion a été perçue par mon équipe ? »',
          '« Seriez-vous ouvert à une observation sur le passage de relais ? »',
          'Acceptez un « pas maintenant » et revenez plus tard',
        ],
      },
      {
        kind: 'idea',
        title: 'Reliez-le à ce qui compte pour eux',
        body: 'Votre responsable et vos pairs ont leurs propres objectifs. Un feedback s’entend mieux quand il rejoint quelque chose qu’ils veulent déjà : un lancement sans accroc, une équipe solide ou des clients satisfaits. Présentez-le comme une aide pour réussir, pas comme une correction.',
      },
      {
        kind: 'idea',
        title: 'Restez sur le travail et reconnaissez votre part',
        body: 'Décrivez un moment précis et son effet sur le travail. Puis nommez votre propre part, si vous en avez une. La reconnaître fait baisser les défenses et montre que vous êtes un partenaire, pas un critique.',
        bullets: [
          'Un moment, pas une liste de reproches',
          'L’effet sur les personnes, les clients ou les délais',
          'Ce que vous pourriez faire autrement, vous aussi',
        ],
      },
      {
        kind: 'example',
        title: 'À un pair qui rate les passages de relais',
        instead: '« Vous lâchez toujours les passages de relais, et mon équipe en a assez de compenser pour la vôtre. »',
        tryThis: '« Sur les deux dernières mises en production, les spécifications nous sont arrivées la veille et nous avons dû bâcler les tests. Je veux que nous tenions tous les deux nos dates. Pouvons-nous revoir ce passage ensemble ? »',
        why: 'Elle nomme des faits précis et leur impact, les relie à un objectif commun et invite à chercher une solution ensemble plutôt qu’à blâmer.',
      },
      {
        kind: 'check',
        question: 'Votre responsable déplace souvent vos entretiens individuels à la dernière minute, et vous n’y apportez plus les sujets importants. Quelle est la meilleure façon d’en parler ?',
        options: [
          'Attendre votre prochaine évaluation et le mentionner comme un point d’amélioration de la relation.',
          'Lui dire chaleureusement que vous comprenez sa charge, donc que ce n’est pas grave si les rendez-vous bougent.',
          'Demander si vous pouvez partager une observation, puis dire que les trois derniers reports ont bloqué deux décisions.',
          'En parler d’abord à un pair pour voir si ses entretiens avec ce responsable sont déplacés aussi souvent.',
        ],
        answer: 2,
        explain: 'Demander d’abord respecte sa position, et nommer des reports précis et leur effet sur le travail rend la chose concrète. Dire que ce n’est pas grave semble aimable mais cache le vrai coût. Attendre l’évaluation ou passer par un pair retarde la solution et peut donner l’impression de le contourner.',
      },
      {
        kind: 'action',
        title: 'Préparez une conversation',
        body: 'Choisissez un responsable ou un pair à qui vous avez un feedback à donner. Écrivez trois lignes : le moment observé, son effet sur le travail et l’objectif commun auquel il se rattache. Puis écrivez votre question d’ouverture pour demander la permission, afin d’être prêt le moment venu.',
      },
      {
        kind: 'takeaway',
        title: 'Le feedback latéral et ascendant',
        bullets: [
          'Demandez la permission pour qu’ils choisissent la conversation',
          'Reliez-le à un objectif qui compte déjà pour eux',
          'Nommez le moment, l’impact et votre propre part',
        ],
      },
    ],
  },
};

export default lesson;
