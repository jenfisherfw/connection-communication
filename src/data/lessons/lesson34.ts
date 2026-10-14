import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-34',
  week: 34,
  focus: 'change',
  minutes: 4,
  title: 'Change fatigue: prioritize, pause, protect',
  subtitle: 'Help your team carry change without burning out',
  slides: [
    {
      kind: 'cover',
      title: 'Change fatigue: prioritize, pause, protect',
      body: 'Your team is still absorbing the last change when the next one arrives. You cannot stop every initiative, but you can shape how much lands on people at once.',
    },
    {
      kind: 'idea',
      title: 'Fatigue is a load problem',
      body: 'Change fatigue is rarely about one change. It comes from many overlapping changes, each reasonable on its own, piling up with no end in sight. Watch for signs like cynical jokes, quiet withdrawal, slower decisions, and "here we go again."',
    },
    {
      kind: 'idea',
      title: 'Prioritize: make the load visible',
      body: 'List every change your team is carrying right now, big and small. Then rank them with your own leader. Teams cope better when they know what matters most and what can wait.',
      bullets: [
        'Name the top one or two changes for this quarter',
        'Ask your leader which items can slow down or stop',
        'Tell the team plainly what is lower priority',
      ],
    },
    {
      kind: 'idea',
      title: 'Pause and protect',
      body: 'Build in short pauses after big milestones so people can settle before the next push. Protect focus time and the routines that keep the team steady. If someone is showing serious strain, check in privately and point them to the support your organization offers, such as HR or an assistance program.',
    },
    {
      kind: 'example',
      title: 'Announcing yet another change',
      instead: '"I know it’s a lot, but we just have to push through."',
      tryThis: '"This is the fourth change this quarter, and I know that is heavy. Here is what matters most, what we are pausing, and what we will not take on until spring."',
      why: 'Naming the load shows you see it. Saying what you are pausing gives people real relief, not just sympathy.',
    },
    {
      kind: 'check',
      question: 'Your team is mid rollout on a new system when leadership announces a reorganization. People seem drained. What is the most helpful move?',
      options: [
        'Hold a team lunch to boost morale before the reorganization news sinks in',
        'Wait a few weeks to share the reorganization so people can finish the rollout',
        'Encourage the team to stay positive, since change is part of the job now',
        'Agree with your leader on what to slow down, then tell the team what is paused',
      ],
      answer: 3,
      explain: 'Reducing the actual load, and saying so clearly, is what eases fatigue. A team lunch is kind, but it adds a nice moment without taking anything off people’s plates. Holding back news usually erodes trust.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'Write down every change your team is carrying. Circle the two that matter most. Bring the list to your leader and ask, "Which of the rest can we slow down or stop?" Share the answer with your team.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Fatigue comes from the total load, not one change.',
        'Make the load visible and agree on what matters most.',
        'Real relief means pausing something, not just saying you understand.',
      ],
    },
  ],
  es: {
    title: 'Fatiga del cambio: prioriza, pausa, protege',
    subtitle: 'Ayuda a tu equipo a sostener el cambio sin agotarse',
    slides: [
      {
        kind: 'cover',
        title: 'Fatiga del cambio: prioriza, pausa, protege',
        body: 'Tu equipo todavía está asimilando el último cambio cuando llega el siguiente. No puedes detener cada iniciativa, pero sí puedes influir en cuánto cae sobre la gente al mismo tiempo.',
      },
      {
        kind: 'idea',
        title: 'La fatiga es un problema de carga',
        body: 'La fatiga del cambio rara vez se debe a un solo cambio. Surge de muchos cambios superpuestos, cada uno razonable por sí solo, que se acumulan sin un final a la vista. Presta atención a señales como bromas cínicas, retraimiento silencioso, decisiones más lentas y el “otra vez lo mismo”.',
      },
      {
        kind: 'idea',
        title: 'Prioriza: haz visible la carga',
        body: 'Haz una lista de todos los cambios que tu equipo está cargando ahora, grandes y pequeños. Luego ordénalos con tu propio líder. Los equipos lo llevan mejor cuando saben qué importa más y qué puede esperar.',
        bullets: [
          'Nombra los uno o dos cambios principales de este trimestre',
          'Pregunta a tu líder qué puede ir más lento o detenerse',
          'Dile al equipo con claridad qué tiene menor prioridad',
        ],
      },
      {
        kind: 'idea',
        title: 'Pausa y protege',
        body: 'Incluye pausas breves después de los grandes hitos para que la gente se asiente antes del siguiente impulso. Protege el tiempo de concentración y las rutinas que dan estabilidad al equipo. Si alguien muestra un desgaste serio, habla en privado y oriéntalo hacia el apoyo que ofrece tu organización, como RR. HH. o un programa de asistencia.',
      },
      {
        kind: 'example',
        title: 'Al anunciar otro cambio más',
        instead: '“Sé que es mucho, pero simplemente hay que aguantar.”',
        tryThis: '“Este es el cuarto cambio del trimestre y sé que pesa. Esto es lo que más importa, esto es lo que pausamos y esto no lo asumiremos hasta la primavera.”',
        why: 'Nombrar la carga demuestra que la ves. Decir qué pausas da un alivio real, no solo comprensión.',
      },
      {
        kind: 'check',
        question: 'Tu equipo está a mitad de la implementación de un sistema nuevo cuando la dirección anuncia una reorganización. La gente se ve agotada. ¿Qué es lo más útil?',
        options: [
          'Organizar un almuerzo de equipo para subir el ánimo antes de que se asiente la noticia',
          'Esperar unas semanas para compartir la reorganización y que terminen la implementación',
          'Animar al equipo a mantenerse positivo, porque el cambio ya es parte del trabajo',
          'Acordar con tu líder qué frenar y luego decirle al equipo qué queda en pausa',
        ],
        answer: 3,
        explain: 'Reducir la carga real, y decirlo con claridad, es lo que alivia la fatiga. Un almuerzo es un gesto amable, pero suma un buen momento sin quitarle nada a nadie de encima. Retener noticias suele erosionar la confianza.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Anota cada cambio que tu equipo está cargando. Marca con un círculo los dos que más importan. Lleva la lista a tu líder y pregunta: “¿Cuáles de los demás podemos frenar o detener?” Comparte la respuesta con tu equipo.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'La fatiga viene de la carga total, no de un solo cambio.',
          'Haz visible la carga y acuerda qué importa más.',
          'El alivio real implica pausar algo, no solo decir que entiendes.',
        ],
      },
    ],
  },
  fr: {
    title: 'Fatigue du changement : prioriser, faire une pause, protéger',
    subtitle: 'Aider votre équipe à porter le changement sans s’épuiser',
    slides: [
      {
        kind: 'cover',
        title: 'Fatigue du changement : prioriser, faire une pause, protéger',
        body: 'Votre équipe digère encore le dernier changement quand le suivant arrive. Vous ne pouvez pas arrêter chaque initiative, mais vous pouvez influer sur ce qui tombe sur les gens en même temps.',
      },
      {
        kind: 'idea',
        title: 'La fatigue est une question de charge',
        body: 'La fatigue du changement vient rarement d’un seul changement. Elle naît de nombreux changements qui se superposent, chacun raisonnable en soi, et s’accumulent sans fin en vue. Repérez les signaux : blagues cyniques, retrait silencieux, décisions plus lentes et « encore un ».',
      },
      {
        kind: 'idea',
        title: 'Prioriser : rendre la charge visible',
        body: 'Listez tous les changements que votre équipe porte en ce moment, grands et petits. Puis classez-les avec votre propre responsable. Les équipes tiennent mieux quand elles savent ce qui compte le plus et ce qui peut attendre.',
        bullets: [
          'Nommez les un ou deux changements prioritaires du trimestre',
          'Demandez à votre responsable ce qui peut ralentir ou s’arrêter',
          'Dites clairement à l’équipe ce qui passe au second plan',
        ],
      },
      {
        kind: 'idea',
        title: 'Faire une pause et protéger',
        body: 'Prévoyez de courtes pauses après les grandes étapes pour que chacun se pose avant l’élan suivant. Protégez le temps de concentration et les routines qui stabilisent l’équipe. Si une personne montre une fatigue sérieuse, échangez en privé et orientez-la vers le soutien proposé par votre organisation, comme les RH ou un programme d’aide.',
      },
      {
        kind: 'example',
        title: 'Annoncer un changement de plus',
        instead: '« Je sais que c’est beaucoup, mais il faut juste tenir le coup. »',
        tryThis: '« C’est le quatrième changement ce trimestre et je sais que c’est lourd. Voici ce qui compte le plus, ce que nous mettons en pause et ce que nous ne lancerons pas avant le printemps. »',
        why: 'Nommer la charge montre que vous la voyez. Dire ce que vous mettez en pause apporte un vrai soulagement, pas seulement de la compassion.',
      },
      {
        kind: 'check',
        question: 'Votre équipe est en plein déploiement d’un nouveau système quand la direction annonce une réorganisation. Les gens semblent épuisés. Quel est le geste le plus utile ?',
        options: [
          'Organiser un déjeuner d’équipe pour remonter le moral avant que la nouvelle ne s’installe',
          'Attendre quelques semaines avant d’annoncer la réorganisation, le temps de finir le déploiement',
          'Encourager l’équipe à rester positive, puisque le changement fait désormais partie du travail',
          'Convenir avec votre responsable de ce qu’il faut ralentir, puis dire à l’équipe ce qui est en pause',
        ],
        answer: 3,
        explain: 'Réduire la charge réelle, et le dire clairement, est ce qui soulage la fatigue. Un déjeuner est une attention sympathique, mais il ajoute un bon moment sans rien retirer à personne. Retenir une information érode souvent la confiance.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Notez chaque changement que porte votre équipe. Entourez les deux plus importants. Apportez la liste à votre responsable et demandez : « Parmi les autres, lesquels pouvons-nous ralentir ou arrêter ? » Partagez la réponse avec votre équipe.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'La fatigue vient de la charge totale, pas d’un seul changement.',
          'Rendez la charge visible et convenez de ce qui compte le plus.',
          'Un vrai soulagement consiste à mettre quelque chose en pause, pas seulement à dire que vous comprenez.',
        ],
      },
    ],
  },
};

export default lesson;
