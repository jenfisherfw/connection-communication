import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-26',
  week: 26,
  focus: 'change',
  minutes: 4,
  title: 'The messy middle: keeping momentum when change gets hard',
  subtitle: 'Lead through the stretch where the old way still tempts people',
  slides: [
    {
      kind: 'cover',
      title: 'The messy middle',
      body: 'The launch energy is gone, the old way still tempts people, and the benefits are not visible yet. This is where many changes quietly stall.',
    },
    {
      kind: 'idea',
      title: 'Expect the dip',
      body: 'Most changes get harder before they get better. Productivity often drops while people learn new habits, and frustration rises. Naming this ahead of time turns it from a sign of failure into an expected stage.',
      bullets: [
        'Say early: "There will be a stretch where this feels slower."',
        'Treat mistakes as part of learning, not proof the change is wrong',
        'Watch for workarounds that quietly bring the old way back',
      ],
    },
    {
      kind: 'idea',
      title: 'Make progress visible',
      body: 'In the middle, people cannot see how far they have come. Show them. Share small measures that are moving, stories from colleagues who are making it work, and what you fixed because of their feedback.',
    },
    {
      kind: 'idea',
      title: 'Listen for what is really stuck',
      body: 'When momentum fades, ask before you push. Some friction is just the learning curve. Some points to a real problem in the design, like a tool that does not fit the work or a process that doubled someone’s workload. Fix what you can, and say plainly what you cannot.',
    },
    {
      kind: 'example',
      title: 'Honest energy beats cheerleading',
      instead: '"I know it’s tough, but we just need to push through and stay positive."',
      tryThis: '"We’re in the hard middle part, and that’s expected. Here’s what has improved since March, one thing we changed because of your feedback, and what’s still rough."',
      why: 'It names the stage honestly, shows real progress, and proves that people’s input matters. That builds more energy than a call to stay positive.',
    },
    {
      kind: 'check',
      question: 'Three months into a new scheduling system, complaints are rising and some staff have gone back to spreadsheets. What should you do first?',
      options: [
        'Remind everyone the system is required and spreadsheets are no longer allowed.',
        'Celebrate the launch again with a team lunch to lift spirits and morale.',
        'Ask the people using spreadsheets what the system fails to do for them.',
        'Pause the rollout until everyone feels fully comfortable with the tool.',
      ],
      answer: 2,
      explain: 'Workarounds are information. Asking what the system fails to do helps you tell a learning curve from a real design problem. Mandates, morale events, and open ended pauses all skip that step.',
    },
    {
      kind: 'action',
      title: 'Send a midpoint update',
      body: 'Write a five sentence update on a change you are leading: where we are, one thing that improved, one thing we changed because of feedback, what is still hard, and what comes next. Share it with your team this week.',
    },
    {
      kind: 'takeaway',
      title: 'Lead through the middle',
      bullets: [
        'Name the dip early so it feels expected, not like failure.',
        'Make progress, and feedback in action, visible.',
        'Treat workarounds as signals, and fix what is truly broken.',
      ],
    },
  ],
  es: {
    title: 'La etapa intermedia: mantener el impulso cuando el cambio se complica',
    subtitle: 'Lidera en el tramo en que la forma antigua todavía tienta a la gente',
    slides: [
      {
        kind: 'cover',
        title: 'La etapa intermedia',
        body: 'La energía del lanzamiento se fue, la forma antigua todavía tienta a la gente y los beneficios aún no se ven. Aquí es donde muchos cambios se estancan sin hacer ruido.',
      },
      {
        kind: 'idea',
        title: 'Espera la caída',
        body: 'La mayoría de los cambios se ponen más difíciles antes de mejorar. La productividad suele bajar mientras la gente aprende nuevos hábitos, y la frustración aumenta. Nombrarlo con anticipación lo convierte de una señal de fracaso en una etapa esperada.',
        bullets: [
          'Dilo pronto: “Habrá un tramo en el que esto se sienta más lento.”',
          'Trata los errores como parte del aprendizaje, no como prueba de que el cambio está mal',
          'Presta atención a los atajos que traen de vuelta la forma antigua sin que nadie lo diga',
        ],
      },
      {
        kind: 'idea',
        title: 'Haz visible el progreso',
        body: 'En la etapa intermedia, la gente no ve cuánto ha avanzado. Muéstraselo. Comparte pequeños indicadores que se están moviendo, historias de colegas a quienes ya les funciona y lo que corregiste gracias a sus comentarios.',
      },
      {
        kind: 'idea',
        title: 'Escucha qué está realmente atascado',
        body: 'Cuando el impulso decae, pregunta antes de presionar. Parte de la fricción es solo la curva de aprendizaje. Otra parte señala un problema real del diseño, como una herramienta que no se ajusta al trabajo o un proceso que duplicó la carga de alguien. Arregla lo que puedas y di con claridad lo que no.',
      },
      {
        kind: 'example',
        title: 'La honestidad da más energía que los ánimos',
        instead: '“Sé que es difícil, pero solo tenemos que aguantar y mantenernos positivos.”',
        tryThis: '“Estamos en la parte difícil del camino, y es normal. Esto es lo que mejoró desde marzo, una cosa que cambiamos gracias a sus comentarios y lo que todavía cuesta.”',
        why: 'Nombra la etapa con honestidad, muestra avances reales y demuestra que la opinión de la gente importa. Eso genera más energía que pedir que todos se mantengan positivos.',
      },
      {
        kind: 'check',
        question: 'Tres meses después de implantar un nuevo sistema de turnos, las quejas aumentan y algunas personas volvieron a usar hojas de cálculo. ¿Qué deberías hacer primero?',
        options: [
          'Recordar a todos que el sistema es obligatorio y que ya no se permiten hojas de cálculo.',
          'Celebrar otra vez el lanzamiento con una comida de equipo para levantar el ánimo.',
          'Preguntar a quienes usan hojas de cálculo qué no les resuelve el sistema.',
          'Pausar la implantación hasta que todos se sientan totalmente cómodos con la herramienta.',
        ],
        answer: 2,
        explain: 'Los atajos son información. Preguntar qué no resuelve el sistema te ayuda a distinguir una curva de aprendizaje de un problema real de diseño. Las imposiciones, las celebraciones y las pausas sin fecha se saltan ese paso.',
      },
      {
        kind: 'action',
        title: 'Envía una actualización a mitad de camino',
        body: 'Escribe una actualización de cinco frases sobre un cambio que estés liderando: dónde estamos, algo que mejoró, algo que cambiamos gracias a los comentarios, lo que todavía cuesta y lo que viene. Compártela con tu equipo esta semana.',
      },
      {
        kind: 'takeaway',
        title: 'Lidera en la etapa intermedia',
        bullets: [
          'Nombra la caída pronto para que se viva como algo esperado, no como un fracaso.',
          'Haz visibles el progreso y los comentarios convertidos en acciones.',
          'Trata los atajos como señales y arregla lo que de verdad no funciona.',
        ],
      },
    ],
  },
  fr: {
    title: 'Le milieu du gué : garder l’élan quand le changement devient difficile',
    subtitle: 'Menez l’équipe dans la phase où l’ancienne façon de faire tente encore',
    slides: [
      {
        kind: 'cover',
        title: 'Le milieu du gué',
        body: 'L’énergie du lancement est retombée, l’ancienne façon de faire tente encore, et les bénéfices ne sont pas encore visibles. C’est là que beaucoup de changements s’enlisent sans bruit.',
      },
      {
        kind: 'idea',
        title: 'Attendez-vous au creux',
        body: 'La plupart des changements deviennent plus difficiles avant de s’améliorer. La productivité baisse souvent pendant que les gens prennent de nouvelles habitudes, et la frustration monte. Le dire à l’avance transforme ce passage en étape prévue plutôt qu’en signe d’échec.',
        bullets: [
          'Dites-le tôt : « Il y aura une période où tout semblera plus lent. »',
          'Traitez les erreurs comme une part de l’apprentissage, pas comme la preuve que le changement est mauvais',
          'Repérez les contournements qui ramènent discrètement l’ancienne méthode',
        ],
      },
      {
        kind: 'idea',
        title: 'Rendez les progrès visibles',
        body: 'Au milieu du gué, les gens ne voient pas le chemin parcouru. Montrez-le-leur. Partagez les petits indicateurs qui bougent, les histoires de collègues pour qui cela fonctionne déjà, et ce que vous avez corrigé grâce à leurs retours.',
      },
      {
        kind: 'idea',
        title: 'Cherchez ce qui bloque vraiment',
        body: 'Quand l’élan retombe, interrogez avant de pousser. Une partie des frictions relève simplement de l’apprentissage. Une autre révèle un vrai problème de conception, comme un outil inadapté au travail ou un processus qui a doublé la charge de quelqu’un. Corrigez ce que vous pouvez, et dites clairement ce que vous ne pouvez pas changer.',
      },
      {
        kind: 'example',
        title: 'L’honnêteté motive plus que les encouragements',
        instead: '« Je sais que c’est dur, mais il faut tenir bon et rester positifs. »',
        tryThis: '« Nous sommes dans la phase difficile, et c’est normal. Voici ce qui s’est amélioré depuis mars, une chose que nous avons changée grâce à vos retours, et ce qui reste compliqué. »',
        why: 'Ce message nomme l’étape avec honnêteté, montre des progrès réels et prouve que l’avis des gens compte. Cela crée plus d’énergie qu’un appel à rester positif.',
      },
      {
        kind: 'check',
        question: 'Trois mois après le déploiement d’un nouvel outil de planification, les plaintes augmentent et certains sont revenus aux tableurs. Que faire en premier ?',
        options: [
          'Rappeler à tous que l’outil est obligatoire et que les tableurs ne sont plus autorisés.',
          'Fêter de nouveau le lancement avec un déjeuner d’équipe pour remonter le moral.',
          'Demander aux personnes qui utilisent des tableurs ce que l’outil ne fait pas pour elles.',
          'Suspendre le déploiement jusqu’à ce que chacun soit parfaitement à l’aise avec l’outil.',
        ],
        answer: 2,
        explain: 'Les contournements sont une source d’information. Demander ce que l’outil ne permet pas vous aide à distinguer une phase d’apprentissage d’un vrai problème de conception. Les obligations, les fêtes et les pauses sans échéance sautent cette étape.',
      },
      {
        kind: 'action',
        title: 'Envoyez un point d’étape',
        body: 'Rédigez un point d’étape de cinq phrases sur un changement que vous menez : où nous en sommes, une chose qui s’est améliorée, une chose que nous avons modifiée grâce aux retours, ce qui reste difficile et la suite. Partagez-le avec votre équipe cette semaine.',
      },
      {
        kind: 'takeaway',
        title: 'Tenir le cap au milieu du gué',
        bullets: [
          'Annoncez le creux tôt pour qu’il paraisse attendu, et non comme un échec.',
          'Rendez visibles les progrès et les retours suivis d’effets.',
          'Voyez les contournements comme des signaux, et réparez ce qui est vraiment cassé.',
        ],
      },
    ],
  },
};

export default lesson;
