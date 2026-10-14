import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-03',
  week: 3,
  focus: 'communication',
  minutes: 3,
  title: 'How trust is built',
  subtitle: 'Reliability, candor, and care, repeated',
  slides: [
    {
      kind: 'cover',
      title: 'How trust is built',
      body: 'You can’t announce trust into existence, and one big gesture rarely earns it. Trust grows from small moments people watch you handle, again and again.',
    },
    {
      kind: 'idea',
      title: 'Reliability: do what you said',
      body: 'People trust leaders whose words predict their actions. Small promises count the most because there are so many of them. When you can’t keep one, say so early and reset it.',
      bullets: ['Make fewer, clearer commitments', 'Write down what you promised', '"I said Friday. It will be Tuesday, and here’s why."'],
    },
    {
      kind: 'idea',
      title: 'Candor: tell the truth kindly',
      body: 'Trust drops when people sense you are holding back or spinning. Share what you know, admit what you don’t, and give honest feedback in private. Candor without care feels harsh, so pair the truth with respect.',
      bullets: ['"I don’t know yet. I’ll tell you when I do."', 'Admit your own mistakes first', 'No surprises in reviews'],
    },
    {
      kind: 'idea',
      title: 'Care: show it in small ways',
      body: 'People need to believe you have their interests in mind, not only the results. Care shows up in remembering what matters to them, protecting their time, and giving credit in public.',
      bullets: ['Follow up on something personal they shared', 'Ask before adding to a full plate', 'Name their contribution to your boss'],
    },
    {
      kind: 'example',
      title: 'When you have to break a promise',
      instead: '"Sorry, things got crazy. We’ll get to your promotion case eventually."',
      tryThis: '"I told you I’d submit your promotion case this month, and I missed the deadline. That’s on me. I’ve booked time Thursday to finish it, and I’ll send you a copy."',
      why: 'Owning a miss, with a specific fix, can build more trust than a perfect record. Vague apologies teach people your promises are soft.',
    },
    {
      kind: 'check',
      question: 'Your team learns a budget cut is coming. Details are not final, and people are asking you about it. Which response builds the most trust?',
      options: [
        '"Don’t worry about it. I’ll protect this team no matter what happens."',
        '"I can’t comment on rumors. Let’s keep our focus on this quarter’s work."',
        '"I really care about you all, so let’s not stress over details yet."',
        '"Yes, cuts are coming. I don’t know the details yet. I’ll share them Friday."',
      ],
      answer: 3,
      explain: 'It is candid about what is known and unknown, and it makes a promise you can keep. The protective and caring options sound warm, but they promise what you can’t control or avoid the truth.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'List every commitment you made to your team in the last two weeks. Pick one you are at risk of missing. Today, tell the person where it stands and give a new date you can keep.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Small promises kept build big trust.',
        'Say what you know and what you don’t.',
        'Show care in specific, repeated actions.',
      ],
    },
  ],
  es: {
    title: 'Cómo se construye la confianza',
    subtitle: 'Fiabilidad, franqueza y cuidado, una y otra vez',
    slides: [
      {
        kind: 'cover',
        title: 'Cómo se construye la confianza',
        body: 'La confianza no se crea con un anuncio, y un gran gesto rara vez la gana. Crece en pequeños momentos que las personas te ven manejar una y otra vez.',
      },
      {
        kind: 'idea',
        title: 'Fiabilidad: haz lo que dijiste',
        body: 'Las personas confían en líderes cuyas palabras anticipan sus acciones. Las promesas pequeñas cuentan más porque son muchísimas. Cuando no puedas cumplir una, dilo pronto y fija un nuevo acuerdo.',
        bullets: ['Haz menos compromisos, pero más claros', 'Anota lo que prometiste', '“Dije el viernes. Será el martes, y te explico por qué.”'],
      },
      {
        kind: 'idea',
        title: 'Franqueza: di la verdad con amabilidad',
        body: 'La confianza cae cuando las personas sienten que te guardas información o la maquillas. Comparte lo que sabes, admite lo que no sabes y da retroalimentación honesta en privado. La franqueza sin cuidado se siente dura, así que acompaña la verdad con respeto.',
        bullets: ['“Todavía no lo sé. Te aviso cuando lo sepa.”', 'Admite primero tus propios errores', 'Sin sorpresas en las evaluaciones'],
      },
      {
        kind: 'idea',
        title: 'Cuidado: muéstralo en detalles',
        body: 'Las personas necesitan creer que te importan sus intereses, no solo los resultados. El cuidado se nota cuando recuerdas lo que les importa, proteges su tiempo y reconoces su aporte en público.',
        bullets: ['Retoma algo personal que te contaron', 'Pregunta antes de sumar trabajo a una agenda llena', 'Menciona su aporte ante tu jefe'],
      },
      {
        kind: 'example',
        title: 'Cuando tienes que romper una promesa',
        instead: '“Perdón, todo se complicó. Algún día veremos lo de tu promoción.”',
        tryThis: '“Te dije que presentaría tu caso de promoción este mes y no cumplí el plazo. Es mi responsabilidad. Reservé tiempo el jueves para terminarlo y te enviaré una copia.”',
        why: 'Asumir una falla, con una solución concreta, puede generar más confianza que un historial perfecto. Las disculpas vagas enseñan que tus promesas son blandas.',
      },
      {
        kind: 'check',
        question: 'Tu equipo se entera de que viene un recorte de presupuesto. Los detalles no son definitivos y te están preguntando. ¿Qué respuesta genera más confianza?',
        options: [
          '“No te preocupes. Voy a proteger a este equipo pase lo que pase.”',
          '“No puedo comentar rumores. Enfoquémonos en el trabajo de este trimestre.”',
          '“Me importan mucho todos, así que no nos estresemos por los detalles.”',
          '“Sí, habrá recortes. Aún no sé los detalles. Los compartiré el viernes.”',
        ],
        answer: 3,
        explain: 'Es franca sobre lo que se sabe y lo que no, y hace una promesa que puedes cumplir. Las opciones protectora y afectuosa suenan cálidas, pero prometen lo que no controlas o evitan la verdad.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Haz una lista de todos los compromisos que hiciste con tu equipo en las últimas dos semanas. Elige uno que podrías incumplir. Hoy mismo, dile a esa persona cómo va y dale una nueva fecha que sí puedas cumplir.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Las promesas pequeñas cumplidas construyen gran confianza.',
          'Di lo que sabes y lo que no sabes.',
          'Muestra cuidado con acciones concretas y repetidas.',
        ],
      },
    ],
  },
  fr: {
    title: 'Comment se construit la confiance',
    subtitle: 'Fiabilité, franchise et attention, encore et encore',
    slides: [
      {
        kind: 'cover',
        title: 'Comment se construit la confiance',
        body: 'La confiance ne se décrète pas, et un grand geste suffit rarement à la gagner. Elle grandit dans de petits moments que les autres vous voient gérer, encore et encore.',
      },
      {
        kind: 'idea',
        title: 'Fiabilité : faites ce que vous avez dit',
        body: 'On fait confiance aux leaders dont les paroles annoncent les actes. Les petites promesses comptent le plus, car elles sont nombreuses. Quand vous ne pouvez pas en tenir une, dites‑le tôt et fixez un nouvel engagement.',
        bullets: ['Prenez moins d’engagements, mais plus clairs', 'Notez ce que vous avez promis', '« J’avais dit vendredi. Ce sera mardi, et voici pourquoi. »'],
      },
      {
        kind: 'idea',
        title: 'Franchise : dites la vérité avec tact',
        body: 'La confiance baisse quand on sent que vous retenez ou enjolivez l’information. Partagez ce que vous savez, reconnaissez ce que vous ignorez et donnez un feedback honnête en privé. La franchise sans égards paraît dure : associez la vérité au respect.',
        bullets: ['« Je ne sais pas encore. Je vous le dirai dès que possible. »', 'Reconnaissez d’abord vos propres erreurs', 'Pas de surprises lors des évaluations'],
      },
      {
        kind: 'idea',
        title: 'Attention : montrez‑la par de petits gestes',
        body: 'Les personnes ont besoin de croire que vous tenez à leurs intérêts, pas seulement aux résultats. L’attention se voit quand vous vous souvenez de ce qui compte pour elles, protégez leur temps et reconnaissez leur apport en public.',
        bullets: ['Revenez sur un sujet personnel qu’on vous a confié', 'Demandez avant d’ajouter une tâche à un agenda plein', 'Citez leur contribution auprès de votre responsable'],
      },
      {
        kind: 'example',
        title: 'Quand vous devez manquer une promesse',
        instead: '« Désolé, c’était la folie. On verra votre dossier de promotion un jour. »',
        tryThis: '« Je vous avais dit que je déposerais votre dossier de promotion ce mois‑ci, et j’ai manqué l’échéance. C’est ma responsabilité. J’ai réservé du temps jeudi pour le terminer et je vous en enverrai une copie. »',
        why: 'Reconnaître un manquement, avec une solution précise, peut créer plus de confiance qu’un parcours parfait. Les excuses vagues apprennent que vos promesses sont fragiles.',
      },
      {
        kind: 'check',
        question: 'Votre équipe apprend qu’une coupe budgétaire se prépare. Rien n’est définitif et on vous pose des questions. Quelle réponse crée le plus de confiance ?',
        options: [
          '« Ne vous inquiétez pas. Je protégerai cette équipe quoi qu’il arrive. »',
          '« Je ne commente pas les rumeurs. Concentrons‑nous sur le travail du trimestre. »',
          '« Je tiens beaucoup à vous, alors ne nous stressons pas pour les détails. »',
          '« Oui, des coupes arrivent. Je n’ai pas encore les détails. Je les partage vendredi. »',
        ],
        answer: 3,
        explain: 'Elle est franche sur ce qui est connu et inconnu, et fait une promesse tenable. Les options protectrice et affectueuse semblent chaleureuses, mais elles promettent ce que vous ne maîtrisez pas ou évitent la vérité.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Listez tous les engagements pris envers votre équipe ces deux dernières semaines. Choisissez‑en un que vous risquez de manquer. Aujourd’hui, dites à la personne où vous en êtes et donnez une nouvelle date tenable.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Les petites promesses tenues bâtissent une grande confiance.',
          'Dites ce que vous savez et ce que vous ignorez.',
          'Montrez votre attention par des actes précis et répétés.',
        ],
      },
    ],
  },
};

export default lesson;
