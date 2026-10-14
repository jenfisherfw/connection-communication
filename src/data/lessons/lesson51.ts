import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-51',
  week: 51,
  focus: 'communication',
  minutes: 4,
  title: 'Teams that lead themselves',
  subtitle: 'Clear decision rights, shared context, and safe mistakes',
  slides: [
    {
      kind: 'cover',
      title: 'Teams that lead themselves',
      body: 'You may be the bottleneck without knowing it. If every decision waits for you, your team can only move as fast as your calendar.',
    },
    {
      kind: 'idea',
      title: 'Be clear about decision rights',
      body: 'Teams take ownership when they know which decisions are theirs. Sort the common decisions into three groups and share the list. Clarity removes the guessing and the waiting.',
      bullets: ['The team decides', 'The team decides, then tells you', 'You decide, with the team’s input'],
    },
    {
      kind: 'idea',
      title: 'Share context, not just tasks',
      body: 'People make good decisions when they understand the goals, the limits, and the reasons behind them. Share the bigger picture often: what the organization needs, which tradeoffs matter, and what success looks like. Context lets people act without asking.',
    },
    {
      kind: 'idea',
      title: 'Respond to mistakes with learning',
      body: 'A team will only take initiative if it is safe to get things wrong sometimes. When a team decision misses, ask together what you learned and what you would adjust. If you take back control after one mistake, people will stop deciding.',
    },
    {
      kind: 'example',
      title: 'When the team asks permission',
      instead: '"Let me think about it and get back to you."',
      tryThis: '"This one is your call. You know the customer better than I do. Tell me what you decide."',
      why: 'It hands the decision back with trust and a reason, and it keeps you informed without making you the gatekeeper.',
    },
    {
      kind: 'check',
      question: 'You told your team they can set their own sprint priorities. Their first plan ranks a project you care about lower than you would. What do you do?',
      options: [
        'Quietly adjust the plan yourself, since it is a small change and saves a debate.',
        'Share the context you have about that project, then let the team make the call.',
        'Praise the plan warmly in public and raise your concerns with the lead in private.',
        'Take priority setting back for now, until the team has more experience.',
      ],
      answer: 1,
      explain: 'Adding context respects their ownership and helps them decide well. Overriding them, or praising the plan while undercutting it in private, teaches people that the decision was never really theirs.',
    },
    {
      kind: 'action',
      title: 'Hand back one decision',
      body: 'Look at your calendar or inbox for one recurring decision your team brings to you. This week, tell them it is now theirs, share the context they need, and agree on how they will keep you informed.',
    },
    {
      kind: 'takeaway',
      title: 'Lead so the team can lead',
      bullets: [
        'Make decision rights clear and write them down.',
        'Share context generously so people can act without asking.',
        'Treat early mistakes as learning, not a reason to take control back.',
      ],
    },
  ],
  es: {
    title: 'Equipos que se lideran a sí mismos',
    subtitle: 'Decisiones claras, contexto compartido y errores seguros',
    slides: [
      {
        kind: 'cover',
        title: 'Equipos que se lideran a sí mismos',
        body: 'Tal vez eres el cuello de botella sin saberlo. Si cada decisión te espera a ti, tu equipo solo puede avanzar tan rápido como tu agenda.',
      },
      {
        kind: 'idea',
        title: 'Aclara quién decide qué',
        body: 'Los equipos se apropian del trabajo cuando saben qué decisiones les corresponden. Ordena las decisiones frecuentes en tres grupos y comparte la lista. La claridad elimina las suposiciones y la espera.',
        bullets: ['El equipo decide', 'El equipo decide y luego te informa', 'Tú decides, con la opinión del equipo'],
      },
      {
        kind: 'idea',
        title: 'Comparte contexto, no solo tareas',
        body: 'Las personas toman buenas decisiones cuando entienden los objetivos, los límites y las razones detrás de ellos. Comparte el panorama general con frecuencia: qué necesita la organización, qué concesiones importan y cómo se ve el éxito. El contexto permite actuar sin tener que preguntar.',
      },
      {
        kind: 'idea',
        title: 'Responde a los errores con aprendizaje',
        body: 'Un equipo solo toma la iniciativa si es seguro equivocarse de vez en cuando. Cuando una decisión del equipo no sale bien, pregunten juntos qué aprendieron y qué ajustarían. Si retomas el control después de un error, las personas dejarán de decidir.',
      },
      {
        kind: 'example',
        title: 'Cuando el equipo pide permiso',
        instead: '“Déjame pensarlo y te aviso.”',
        tryThis: '“Esta decisión es tuya. Conoces al cliente mejor que yo. Cuéntame qué decides.”',
        why: 'Devuelve la decisión con confianza y con una razón, y te mantiene informado sin convertirte en el guardián de todo.',
      },
      {
        kind: 'check',
        question: 'Le dijiste a tu equipo que puede fijar sus propias prioridades del sprint. Su primer plan pone más abajo de lo que tú pondrías un proyecto que te importa. ¿Qué haces?',
        options: [
          'Ajustar el plan tú mismo sin decir nada, ya que es un cambio pequeño y evita un debate.',
          'Compartir el contexto que tienes sobre ese proyecto y luego dejar que el equipo decida.',
          'Elogiar el plan con calidez en público y plantear tus dudas a la líder en privado.',
          'Retomar por ahora la definición de prioridades, hasta que el equipo tenga más experiencia.',
        ],
        answer: 1,
        explain: 'Sumar contexto respeta que la decisión es suya y les ayuda a decidir bien. Cambiar su plan, o elogiarlo mientras lo debilitas en privado, enseña que la decisión nunca fue realmente del equipo.',
      },
      {
        kind: 'action',
        title: 'Devuelve una decisión',
        body: 'Revisa tu agenda o tu correo y encuentra una decisión recurrente que tu equipo te trae. Esta semana, diles que ahora es suya, comparte el contexto que necesitan y acuerden cómo te van a mantener al tanto.',
      },
      {
        kind: 'takeaway',
        title: 'Lidera para que el equipo lidere',
        bullets: [
          'Deja claro quién decide qué y ponlo por escrito.',
          'Comparte contexto con generosidad para que puedan actuar sin preguntar.',
          'Trata los primeros errores como aprendizaje, no como motivo para retomar el control.',
        ],
      },
    ],
  },
  fr: {
    title: 'Des équipes qui se dirigent elles-mêmes',
    subtitle: 'Des droits de décision clairs, un contexte partagé et le droit à l’erreur',
    slides: [
      {
        kind: 'cover',
        title: 'Des équipes qui se dirigent elles-mêmes',
        body: 'Vous êtes peut-être le goulot d’étranglement sans le savoir. Si chaque décision vous attend, votre équipe ne peut pas avancer plus vite que votre agenda.',
      },
      {
        kind: 'idea',
        title: 'Clarifier qui décide quoi',
        body: 'Les équipes s’approprient le travail quand elles savent quelles décisions leur reviennent. Classez les décisions courantes en trois groupes et partagez la liste. La clarté supprime les suppositions et l’attente.',
        bullets: ['L’équipe décide', 'L’équipe décide, puis vous informe', 'Vous décidez, avec l’avis de l’équipe'],
      },
      {
        kind: 'idea',
        title: 'Partager le contexte, pas seulement les tâches',
        body: 'On prend de bonnes décisions quand on comprend les objectifs, les limites et les raisons qui les sous-tendent. Partagez souvent la vue d’ensemble : ce dont l’organisation a besoin, les arbitrages qui comptent et ce à quoi ressemble la réussite. Le contexte permet d’agir sans demander.',
      },
      {
        kind: 'idea',
        title: 'Répondre aux erreurs par l’apprentissage',
        body: 'Une équipe ne prend des initiatives que si elle peut parfois se tromper sans risque. Quand une décision de l’équipe ne donne pas le résultat attendu, demandez ensemble ce que vous avez appris et ce que vous ajusteriez. Si vous reprenez la main après une seule erreur, les gens cesseront de décider.',
      },
      {
        kind: 'example',
        title: 'Quand l’équipe demande la permission',
        instead: '« Laissez-moi y réfléchir et je reviens vers vous. »',
        tryThis: '« Cette décision vous revient. Vous connaissez le client mieux que moi. Dites-moi ce que vous décidez. »',
        why: 'Vous rendez la décision avec confiance et une raison, tout en restant informé sans devenir le point de passage obligé.',
      },
      {
        kind: 'check',
        question: 'Vous avez dit à votre équipe qu’elle peut fixer ses propres priorités de sprint. Son premier plan place un projet qui vous tient à cœur plus bas que vous ne l’auriez fait. Que faites-vous ?',
        options: [
          'Ajuster discrètement le plan vous-même, puisque c’est un petit changement qui évite un débat.',
          'Partager le contexte dont vous disposez sur ce projet, puis laisser l’équipe trancher.',
          'Saluer chaleureusement le plan en public et faire part de vos réserves à la responsable en privé.',
          'Reprendre pour l’instant la fixation des priorités, le temps que l’équipe gagne en expérience.',
        ],
        answer: 1,
        explain: 'Apporter du contexte respecte leur responsabilité et les aide à bien décider. Passer outre, ou saluer le plan tout en le contredisant en privé, apprend aux gens que la décision n’a jamais vraiment été la leur.',
      },
      {
        kind: 'action',
        title: 'Rendez une décision',
        body: 'Parcourez votre agenda ou votre messagerie pour trouver une décision récurrente que votre équipe vous soumet. Cette semaine, dites-lui qu’elle lui revient désormais, partagez le contexte nécessaire et convenez de la façon dont elle vous tiendra informé.',
      },
      {
        kind: 'takeaway',
        title: 'Diriger pour que l’équipe dirige',
        bullets: [
          'Clarifiez les droits de décision et mettez-les par écrit.',
          'Partagez généreusement le contexte pour qu’on puisse agir sans demander.',
          'Traitez les premières erreurs comme un apprentissage, pas comme une raison de reprendre la main.',
        ],
      },
    ],
  },
};

export default lesson;
