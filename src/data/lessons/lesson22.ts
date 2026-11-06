import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-22',
  week: 22,
  focus: 'communication',
  minutes: 4,
  title: 'Recognition that fits the person',
  subtitle: 'Thank people in a way they can actually hear',
  slides: [
    {
      kind: 'cover',
      title: 'Recognition that fits the person',
      body: 'You meant it as a thank you. Then the person you praised at the all-hands looked like they wanted to disappear. Recognition only works when it fits the person receiving it.',
    },
    {
      kind: 'idea',
      title: 'Same words, different landing',
      body: 'People differ in how they like to be seen. Some light up with public credit. Others find it exposing and would rather get a quiet note. Some value a bigger challenge or a seat at the table more than any words.',
      bullets: [
        'Public: a shout-out in the team meeting or channel',
        'Private: a short note or a word in your 1:1',
        'Growth: a stretch assignment or time with senior leaders',
        'Practical: time back, flexibility, or tools that make work easier',
      ],
    },
    {
      kind: 'idea',
      title: 'Ask, don’t guess',
      body: 'The fastest way to learn what fits is to ask. Do it before you need it, in a calm 1:1, not in the rush of a win. Write down what you hear so you still remember it six months from now.',
      bullets: [
        'When you do great work, how do you like it to be noticed?',
        'What kind of recognition feels awkward to you?',
        'Whose opinion of your work matters most to you?',
      ],
    },
    {
      kind: 'idea',
      title: 'Fit includes culture and context',
      body: 'Background, language, and role shape what feels respectful. In some cultures, being singled out above the group feels uncomfortable. For remote people, a note their own leaders can see may matter more than applause on a late night call. Fit the form to the person, and keep the substance fair across the team.',
    },
    {
      kind: 'example',
      title: 'From generic to fitted',
      instead: '"Great job on the launch, everyone! Let’s give Priya a big round of applause."',
      tryThis: '"Priya, I know you prefer things low key, so I wanted to tell you directly: your test plan caught the billing bug before customers did. I’ve also shared it with our director."',
      why: 'It respects her preference, names the specific contribution, and still gives her visibility in a form she is comfortable with.',
    },
    {
      kind: 'check',
      question: 'Marcus, a quiet engineer, solved a problem that saved the team a week. You know he dislikes the spotlight. What fits best?',
      options: [
        'Praise him at the all-hands anyway, because quiet people need a push to be seen.',
        'Skip recognition this time so he does not feel awkward or singled out.',
        'Thank him privately for the specific fix and ask if he’d like it shared upward.',
        'Give the whole team credit in the channel so no one person stands out.',
      ],
      answer: 2,
      explain: 'A private, specific thank you matches how Marcus likes to be seen, and asking about sharing it upward lets him choose his visibility. Skipping recognition or blending it into team credit leaves his work unseen.',
    },
    {
      kind: 'action',
      title: 'Ask one person this week',
      body: 'In your next 1:1, ask one team member: "When you do great work, what kind of recognition feels good to you, and what feels awkward?" Write their answer in your notes and use it the next time they deliver.',
    },
    {
      kind: 'takeaway',
      title: 'Fit beats volume',
      bullets: [
        'The same praise can feel like a gift to one person and a burden to another.',
        'Ask how people like to be recognized before the moment comes.',
        'Be specific, match the form to the person, and keep it fair across the team.',
      ],
    },
  ],
  es: {
    title: 'Reconocimiento a la medida de cada persona',
    subtitle: 'Agradece de una forma que la persona realmente pueda recibir',
    slides: [
      {
        kind: 'cover',
        title: 'Reconocimiento a la medida de cada persona',
        body: 'Lo dijiste como un agradecimiento. Pero la persona que elogiaste frente a toda la empresa parecía querer desaparecer. El reconocimiento solo funciona cuando se ajusta a quien lo recibe.',
      },
      {
        kind: 'idea',
        title: 'Mismas palabras, distinto efecto',
        body: 'Cada persona prefiere ser vista de una manera diferente. A algunas les encanta el crédito público. Otras lo sienten como una exposición y prefieren una nota discreta. Otras valoran más un reto mayor o un lugar en la mesa que cualquier palabra.',
        bullets: [
          'Público: una mención en la reunión o en el canal del equipo',
          'Privado: una nota breve o unas palabras en tu 1:1',
          'Crecimiento: un proyecto retador o tiempo con líderes sénior',
          'Práctico: tiempo libre, flexibilidad o herramientas que faciliten el trabajo',
        ],
      },
      {
        kind: 'idea',
        title: 'Pregunta, no adivines',
        body: 'La forma más rápida de saber qué funciona es preguntar. Hazlo antes de necesitarlo, en un 1:1 tranquilo, no en medio de la emoción de un logro. Anota lo que escuchas para recordarlo dentro de seis meses.',
        bullets: [
          'Cuando haces un gran trabajo, ¿cómo te gusta que se note?',
          '¿Qué tipo de reconocimiento te resulta incómodo?',
          '¿Qué opinión sobre tu trabajo es la que más te importa?',
        ],
      },
      {
        kind: 'idea',
        title: 'La cultura y el contexto también cuentan',
        body: 'El origen, el idioma y el rol influyen en lo que se siente respetuoso. En algunas culturas, destacar a alguien por encima del grupo resulta incómodo. Para quienes trabajan a distancia, una nota que sus propios líderes puedan ver puede valer más que un aplauso en una llamada a medianoche. Ajusta la forma a la persona y mantén el fondo justo para todo el equipo.',
      },
      {
        kind: 'example',
        title: 'De lo genérico a lo personal',
        instead: '“¡Buen trabajo con el lanzamiento, equipo! Un gran aplauso para Priya.”',
        tryThis: '“Priya, sé que prefieres las cosas discretas, así que quería decírtelo en persona: tu plan de pruebas detectó el error de facturación antes que los clientes. También se lo compartí a nuestra directora.”',
        why: 'Respeta su preferencia, nombra la contribución concreta y aun así le da visibilidad de una forma en la que se siente cómoda.',
      },
      {
        kind: 'check',
        question: 'Marcus, un ingeniero reservado, resolvió un problema que le ahorró una semana al equipo. Sabes que no le gusta ser el centro de atención. ¿Qué es lo más adecuado?',
        options: [
          'Elogiarlo frente a toda la empresa de todos modos, porque a la gente callada hay que darle un empujón.',
          'No reconocerlo esta vez para que no se sienta incómodo ni señalado.',
          'Agradecerle en privado por la solución concreta y preguntarle si quiere que lo compartas con la dirección.',
          'Darle el crédito a todo el equipo en el canal para que nadie destaque.',
        ],
        answer: 2,
        explain: 'Un agradecimiento privado y concreto coincide con la forma en que Marcus prefiere ser visto, y preguntarle si quiere que se comparta le permite elegir su visibilidad. Omitir el reconocimiento o diluirlo en el crédito del equipo deja su trabajo sin ver.',
      },
      {
        kind: 'action',
        title: 'Pregúntale a una persona esta semana',
        body: 'En tu próximo 1:1, pregúntale a alguien de tu equipo: “Cuando haces un gran trabajo, ¿qué tipo de reconocimiento te hace sentir bien y cuál te incomoda?” Anota su respuesta y úsala la próxima vez que logre algo.',
      },
      {
        kind: 'takeaway',
        title: 'Ajustarse vale más que repetir',
        bullets: [
          'El mismo elogio puede ser un regalo para una persona y una carga para otra.',
          'Pregunta cómo le gusta a cada quien ser reconocido antes de que llegue el momento.',
          'Sé específico, ajusta la forma a la persona y mantén la justicia en todo el equipo.',
        ],
      },
    ],
  },
  fr: {
    title: 'Une reconnaissance adaptée à chaque personne',
    subtitle: 'Remerciez d’une façon que la personne peut vraiment recevoir',
    slides: [
      {
        kind: 'cover',
        title: 'Une reconnaissance adaptée à chaque personne',
        body: 'Vous vouliez dire merci. Pourtant, la personne que vous avez félicitée devant toute l’entreprise semblait vouloir disparaître. La reconnaissance ne fonctionne que si elle correspond à la personne qui la reçoit.',
      },
      {
        kind: 'idea',
        title: 'Les mêmes mots, un effet différent',
        body: 'Chacun aime être reconnu à sa manière. Certains s’épanouissent sous les éloges publics. D’autres s’y sentent exposés et préfèrent un mot discret. D’autres encore apprécient davantage un nouveau défi ou une place à la table que n’importe quel compliment.',
        bullets: [
          'Public : une mention en réunion ou sur le canal de l’équipe',
          'Privé : un petit mot ou quelques phrases pendant votre 1:1',
          'Développement : une mission stimulante ou du temps avec la direction',
          'Concret : du temps libéré, de la souplesse ou des outils qui facilitent le travail',
        ],
      },
      {
        kind: 'idea',
        title: 'Demandez au lieu de deviner',
        body: 'Le moyen le plus rapide de savoir ce qui convient, c’est de demander. Faites-le avant d’en avoir besoin, lors d’un 1:1 serein, pas dans l’effervescence d’une réussite. Notez ce que vous entendez pour vous en souvenir dans six mois.',
        bullets: [
          'Quand vous faites un excellent travail, comment aimez-vous que ce soit remarqué ?',
          'Quel type de reconnaissance vous met mal à l’aise ?',
          'Quelle opinion sur votre travail compte le plus pour vous ?',
        ],
      },
      {
        kind: 'idea',
        title: 'La culture et le contexte comptent aussi',
        body: 'L’origine, la langue et le rôle influencent ce qui paraît respectueux. Dans certaines cultures, être mis en avant au-dessus du groupe est gênant. Pour les personnes à distance, un message visible par leurs propres responsables peut compter davantage que des applaudissements lors d’un appel tardif. Adaptez la forme à la personne et gardez le fond équitable pour toute l’équipe.',
      },
      {
        kind: 'example',
        title: 'Du générique au personnalisé',
        instead: '« Bravo pour le lancement, tout le monde ! On applaudit bien fort Priya. »',
        tryThis: '« Priya, je sais que vous préférez la discrétion, alors je voulais vous le dire directement : votre plan de tests a repéré l’erreur de facturation avant les clients. J’en ai aussi parlé à notre directrice. »',
        why: 'Ce message respecte sa préférence, nomme la contribution précise et lui donne tout de même de la visibilité sous une forme qui lui convient.',
      },
      {
        kind: 'check',
        question: 'Marcus, un ingénieur discret, a résolu un problème qui a fait gagner une semaine à l’équipe. Vous savez qu’il n’aime pas être sous les projecteurs. Que faire ?',
        options: [
          'Le féliciter quand même devant toute l’entreprise, car les personnes discrètes ont besoin d’un coup de pouce.',
          'Ne rien dire cette fois pour qu’il ne se sente ni gêné ni mis à part.',
          'Le remercier en privé pour sa solution précise et lui demander s’il souhaite que vous en parliez à la direction.',
          'Attribuer le mérite à toute l’équipe sur le canal pour que personne ne se démarque.',
        ],
        answer: 2,
        explain: 'Un remerciement privé et précis correspond à la manière dont Marcus aime être reconnu, et lui demander s’il veut que l’information remonte lui laisse le choix de sa visibilité. Passer sous silence ou diluer le mérite dans l’équipe laisse son travail dans l’ombre.',
      },
      {
        kind: 'action',
        title: 'Posez la question à une personne cette semaine',
        body: 'Lors de votre prochain 1:1, demandez à un membre de l’équipe : « Quand vous faites un excellent travail, quel type de reconnaissance vous fait plaisir, et lequel vous met mal à l’aise ? » Notez sa réponse et utilisez-la la prochaine fois qu’il ou elle réussit quelque chose.',
      },
      {
        kind: 'takeaway',
        title: 'Mieux vaut juste que fort',
        bullets: [
          'Le même compliment peut être un cadeau pour l’un et un fardeau pour l’autre.',
          'Demandez comment chacun aime être reconnu avant que le moment arrive.',
          'Soyez précis, adaptez la forme à la personne et restez équitable dans l’équipe.',
        ],
      },
    ],
  },
};

export default lesson;
