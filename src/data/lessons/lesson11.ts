import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-11',
  week: 11,
  focus: 'change',
  minutes: 4,
  title: 'What changes, what stays, and what we don’t know yet',
  subtitle: 'Three columns that calm uncertainty.',
  slides: [
    {
      kind: 'cover',
      title: 'Silence fills with rumors',
      body: 'You want to wait until every detail is settled before you say anything. But while you wait, people fill the gap with guesses, and the guesses are usually worse than the truth.',
    },
    {
      kind: 'idea',
      title: 'Sort the news into three columns',
      body: 'When change is announced, people mostly want to know what it means for them. A simple way to answer is to sort everything you know into three groups and share all three.',
      bullets: [
        'What is changing: be specific about the what and the when.',
        'What is staying the same: name the things people can count on.',
        'What we do not know yet: say it plainly, with when you expect to know.',
      ],
    },
    {
      kind: 'idea',
      title: 'Stability is part of the message',
      body: 'Leaders often skip the "what stays the same" column because it feels obvious. It is not obvious to your team. Hearing that their manager, their core work, or their schedule is not changing gives people solid ground to stand on while other things shift.',
    },
    {
      kind: 'idea',
      title: 'Unknowns build trust when named',
      body: 'Saying "I don’t know yet" can feel like weakness. In practice it builds credibility, as long as you add when you will know and follow up on that date. Guessing, or promising things you cannot control, costs far more trust later.',
    },
    {
      kind: 'example',
      title: 'Answering a hard question',
      instead: '"I can’t really talk about that right now."',
      tryThis: '"That part isn’t decided yet. I expect to know by the end of the month, and I’ll tell you then."',
      why: 'The first line sounds like a secret, which feeds worry. The second is honest about the unknown and gives people a date to hold on to.',
    },
    {
      kind: 'check',
      question: 'Your team moves to a new scheduling system next quarter. Leaders have not decided whether shift lengths will change. Someone asks, "Are our shifts changing?" What is the best reply?',
      options: [
        '"Nothing is changing for you, so there’s no need to worry about it."',
        '"That isn’t decided yet. I’ll update you by the 15th, even if it’s still open."',
        '"I totally get the worry. Let’s just wait and see what leadership decides, okay?"',
        '"I can’t say much yet, but I’m sure it will all work out fine for everyone here."',
      ],
      answer: 1,
      explain: 'The best reply names the unknown and commits to a date. Saying nothing is changing may turn out false. The empathetic option sounds warm but leaves people with no timeline, and a vague promise that it will work out asks for trust without giving a reason.',
    },
    {
      kind: 'action',
      title: 'Draft your three columns',
      body: 'Pick a change your team is facing now. On one page, write three headings: changing, staying the same, not known yet. Add two or three items under each, and include a date for each unknown. Share it at your next team meeting.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Share what is changing, what is staying, and what is not known yet.',
        'Naming what stays the same gives people stable ground.',
        'Pair every unknown with a date, then follow up on it.',
      ],
    },
  ],
  es: {
    title: 'Qué cambia, qué se mantiene y qué aún no sabemos',
    subtitle: 'Tres columnas que calman la incertidumbre.',
    slides: [
      {
        kind: 'cover',
        title: 'El silencio se llena de rumores',
        body: 'Quieres esperar a que todo esté definido antes de decir algo. Pero mientras esperas, la gente llena el vacío con suposiciones, y esas suposiciones suelen ser peores que la realidad.',
      },
      {
        kind: 'idea',
        title: 'Ordena la noticia en tres columnas',
        body: 'Cuando se anuncia un cambio, la gente quiere saber sobre todo qué significa para ella. Una forma sencilla de responder es ordenar todo lo que sabes en tres grupos y compartir los tres.',
        bullets: [
          'Qué cambia: sé específico sobre qué y cuándo.',
          'Qué se mantiene: nombra aquello con lo que la gente puede contar.',
          'Qué aún no sabemos: dilo con claridad y cuándo esperas saberlo.',
        ],
      },
      {
        kind: 'idea',
        title: 'La estabilidad también es parte del mensaje',
        body: 'Los líderes suelen saltarse la columna de “lo que se mantiene” porque parece obvia. Para tu equipo no lo es. Escuchar que su jefe, su trabajo principal o su horario no cambian les da un piso firme mientras otras cosas se mueven.',
      },
      {
        kind: 'idea',
        title: 'Nombrar lo desconocido genera confianza',
        body: 'Decir “todavía no lo sé” puede sentirse como debilidad. En la práctica genera credibilidad, siempre que agregues cuándo lo sabrás y cumplas esa fecha. Adivinar, o prometer cosas que no controlas, cuesta mucha más confianza después.',
      },
      {
        kind: 'example',
        title: 'Responder una pregunta difícil',
        instead: '“La verdad, de eso no puedo hablar ahora.”',
        tryThis: '“Esa parte todavía no está decidida. Espero saberlo a fin de mes y te lo contaré entonces.”',
        why: 'La primera frase suena a secreto, y eso alimenta la preocupación. La segunda es honesta sobre lo desconocido y da a la gente una fecha a la cual aferrarse.',
      },
      {
        kind: 'check',
        question: 'Tu equipo pasará a un nuevo sistema de turnos el próximo trimestre. La dirección no ha decidido si cambiará la duración de los turnos. Alguien pregunta: “¿Van a cambiar nuestros turnos?” ¿Cuál es la mejor respuesta?',
        options: [
          '“Para ti no cambia nada, así que no hay de qué preocuparse.”',
          '“Eso aún no está decidido. Te aviso antes del 15, aunque siga abierto.”',
          '“Entiendo totalmente la preocupación. Esperemos a ver qué decide la dirección, ¿sí?”',
          '“Todavía no puedo decir mucho, pero seguro todo saldrá bien para todos aquí.”',
        ],
        answer: 1,
        explain: 'La mejor respuesta nombra lo desconocido y se compromete con una fecha. Decir que nada cambia puede resultar falso. La opción empática suena cálida, pero deja a la gente sin plazo, y una promesa vaga de que todo saldrá bien pide confianza sin dar razones.',
      },
      {
        kind: 'action',
        title: 'Escribe tus tres columnas',
        body: 'Elige un cambio que tu equipo esté viviendo ahora. En una hoja, escribe tres títulos: cambia, se mantiene, aún no sabemos. Agrega dos o tres puntos en cada uno e incluye una fecha para cada incógnita. Compártelo en tu próxima reunión de equipo.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Comparte qué cambia, qué se mantiene y qué aún no se sabe.',
          'Nombrar lo que se mantiene da a la gente un piso firme.',
          'Acompaña cada incógnita con una fecha y cúmplela.',
        ],
      },
    ],
  },
  fr: {
    title: 'Ce qui change, ce qui reste, et ce que nous ne savons pas encore',
    subtitle: 'Trois colonnes pour apaiser l’incertitude.',
    slides: [
      {
        kind: 'cover',
        title: 'Le silence se remplit de rumeurs',
        body: 'Vous voulez attendre que chaque détail soit réglé avant de parler. Mais pendant que vous attendez, les gens comblent le vide avec des suppositions, et elles sont souvent pires que la réalité.',
      },
      {
        kind: 'idea',
        title: 'Classez l’information en trois colonnes',
        body: 'Quand un changement est annoncé, les gens veulent surtout savoir ce qu’il signifie pour eux. Une façon simple de répondre consiste à classer tout ce que vous savez en trois groupes et à partager les trois.',
        bullets: [
          'Ce qui change : soyez précis sur le quoi et le quand.',
          'Ce qui reste : nommez ce sur quoi les gens peuvent compter.',
          'Ce que nous ne savons pas encore : dites-le clairement, avec la date où vous saurez.',
        ],
      },
      {
        kind: 'idea',
        title: 'La stabilité fait partie du message',
        body: 'Les managers sautent souvent la colonne « ce qui reste », car elle semble évidente. Elle ne l’est pas pour votre équipe. Entendre que leur manager, leur travail principal ou leurs horaires ne changent pas donne aux gens un sol stable pendant que le reste bouge.',
      },
      {
        kind: 'idea',
        title: 'Nommer l’inconnu renforce la confiance',
        body: 'Dire « je ne sais pas encore » peut sembler un aveu de faiblesse. En pratique, cela renforce votre crédibilité, à condition d’indiquer quand vous saurez et de revenir vers eux à cette date. Deviner, ou promettre ce que vous ne maîtrisez pas, coûte bien plus de confiance ensuite.',
      },
      {
        kind: 'example',
        title: 'Répondre à une question difficile',
        instead: '« Je ne peux pas vraiment en parler pour l’instant. »',
        tryThis: '« Ce point n’est pas encore décidé. Je pense le savoir d’ici la fin du mois, et je vous le dirai à ce moment-là. »',
        why: 'La première phrase ressemble à un secret, ce qui nourrit l’inquiétude. La seconde est honnête sur l’inconnu et donne aux gens une date à laquelle se raccrocher.',
      },
      {
        kind: 'check',
        question: 'Votre équipe passe à un nouvel outil de planning le trimestre prochain. La direction n’a pas décidé si la durée des postes changera. Quelqu’un demande : « Nos horaires vont-ils changer ? » Quelle est la meilleure réponse ?',
        options: [
          '« Rien ne change pour vous, donc inutile de vous inquiéter. »',
          '« Ce n’est pas encore décidé. Je vous tiens au courant d’ici le 15, même si la question reste ouverte. »',
          '« Je comprends tout à fait l’inquiétude. Attendons de voir ce que décide la direction, d’accord ? »',
          '« Je ne peux pas en dire beaucoup, mais je suis sûr que tout se passera bien pour tout le monde. »',
        ],
        answer: 1,
        explain: 'La meilleure réponse nomme l’inconnu et s’engage sur une date. Dire que rien ne change pourrait se révéler faux. L’option empathique semble chaleureuse mais ne donne aucun calendrier, et une vague promesse que tout ira bien demande de la confiance sans donner de raison.',
      },
      {
        kind: 'action',
        title: 'Rédigez vos trois colonnes',
        body: 'Choisissez un changement que vit votre équipe en ce moment. Sur une page, écrivez trois titres : ce qui change, ce qui reste, ce que nous ne savons pas encore. Ajoutez deux ou trois points sous chacun, avec une date pour chaque inconnue. Partagez-le à votre prochaine réunion d’équipe.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Partagez ce qui change, ce qui reste et ce qui n’est pas encore connu.',
          'Nommer ce qui reste donne aux gens un sol stable.',
          'Associez chaque inconnue à une date, puis tenez-la.',
        ],
      },
    ],
  },
};

export default lesson;
