import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-15',
  week: 15,
  focus: 'communication',
  minutes: 4,
  title: 'Bottom line up front: speak so busy people listen',
  subtitle: 'Lead with the point, then give the path',
  slides: [
    {
      kind: 'cover',
      title: 'Lead with the point',
      body: 'You prepared the whole story, and five sentences in, your senior leader is already glancing at their phone. Busy people decide in the first thirty seconds whether to keep listening.',
    },
    {
      kind: 'idea',
      title: 'Start where they need to start',
      body: 'Most of us tell things in the order we lived them: background, struggle, finding, ask. Busy listeners need the reverse. Open with your conclusion or request, then add only the context that supports it.',
      bullets: [
        'Your point or ask in one sentence',
        'Two or three facts or reasons behind it',
        'What you need from them, and by when',
      ],
    },
    {
      kind: 'idea',
      title: 'Find your one sentence first',
      body: 'If you cannot say your point in one sentence, you are not ready to speak yet. Write that sentence down before the meeting or update. If it takes three tries, that is the thinking getting done before you spend anyone else’s time.',
      bullets: [
        'Test it: could they act on this sentence alone?',
        'Cut warm up phrases like "just wanted to flag"',
        'Save the full history for anyone who asks',
      ],
    },
    {
      kind: 'example',
      title: 'Updating your director',
      instead: '"So, last week we started looking at the vendor numbers, and there were some surprises, and then Priya pulled more data, and..."',
      tryThis: '"We should renew with Vendor B. It costs 12% less and met every deadline this year. I need your sign off by Friday."',
      why: 'Your director knows in ten seconds what you want and why. If they want the full story, they will ask, and now they have a reason to listen to it.',
    },
    {
      kind: 'idea',
      title: 'Point first is not cold',
      body: 'Leading with the point can feel abrupt, especially on teams or in cultures that value relationship first. You can keep the warmth. What matters is that the point does not get buried under it.',
      bullets: [
        'A warm opener: one sentence, not five',
        'Then the point, said clearly',
        'Then an open invitation for questions',
      ],
    },
    {
      kind: 'check',
      question: 'You have two minutes with your VP in the hallway to raise a staffing gap that will delay a launch. What do you open with?',
      options: [
        '"Do you have a second? I’ve been meaning to talk to you about how stretched the team has been lately."',
        '"The launch will slip two weeks unless we add one contractor. Can I send you the numbers today?"',
        '"Quick background first: since March we lost two people, and hiring has been slow because of the freeze."',
        '"I know you’re slammed, so I’ll put everything in an email and you can read it whenever works for you."',
      ],
      answer: 1,
      explain: 'It names the impact, the fix, and a next step in two sentences. The friendly opener and the background are both true, but they make the VP wait for the point. The email puts off a decision you could start right now.',
    },
    {
      kind: 'action',
      title: 'Rewrite one message',
      body: 'Pick one email or chat update you send this week. Before you hit send, move your ask or conclusion to the first line, and cut any background they do not need in order to act. Notice whether the reply comes faster.',
    },
    {
      kind: 'takeaway',
      title: 'Point first',
      bullets: [
        'Open with your conclusion or ask, then the reasons',
        'Write your one sentence before you speak',
        'Keep warmth short so the point stays on top',
      ],
    },
  ],
  es: {
    title: 'Lo esencial primero: habla para que la gente ocupada escuche',
    subtitle: 'Empieza por el punto y luego da el camino',
    slides: [
      {
        kind: 'cover',
        title: 'Empieza por el punto',
        body: 'Preparaste toda la historia y, a la quinta frase, tu líder ya está mirando el teléfono. La gente ocupada decide en los primeros treinta segundos si sigue escuchando.',
      },
      {
        kind: 'idea',
        title: 'Empieza donde ellos necesitan empezar',
        body: 'Casi todos contamos las cosas en el orden en que las vivimos: contexto, dificultad, hallazgo, pedido. Quien está ocupado necesita lo contrario. Abre con tu conclusión o tu pedido y luego agrega solo el contexto que lo respalda.',
        bullets: [
          'Tu punto o pedido en una sola frase',
          'Dos o tres datos o razones que lo sostienen',
          'Qué necesitas de la otra persona y para cuándo',
        ],
      },
      {
        kind: 'idea',
        title: 'Encuentra primero tu frase',
        body: 'Si no puedes decir tu punto en una frase, todavía no estás listo para hablar. Escribe esa frase antes de la reunión o la actualización. Si te toma tres intentos, es el trabajo de pensar, hecho antes de usar el tiempo de los demás.',
        bullets: [
          'Pruébala: ¿podrían actuar solo con esta frase?',
          'Quita rodeos como “solo quería comentar”',
          'Guarda la historia completa para quien la pida',
        ],
      },
      {
        kind: 'example',
        title: 'Al poner al día a tu directora',
        instead: '“Bueno, la semana pasada empezamos a revisar los números del proveedor, y hubo sorpresas, y luego Priya sacó más datos, y...”',
        tryThis: '“Deberíamos renovar con el Proveedor B. Cuesta 12% menos y cumplió todos los plazos este año. Necesito tu aprobación para el viernes.”',
        why: 'Tu directora sabe en diez segundos qué quieres y por qué. Si quiere la historia completa, la pedirá, y ahora tiene una razón para escucharla.',
      },
      {
        kind: 'idea',
        title: 'Ir al punto no es ser frío',
        body: 'Empezar por el punto puede sentirse brusco, sobre todo en equipos o culturas que valoran primero la relación. Puedes conservar la calidez. Lo importante es que el punto no quede enterrado debajo de ella.',
        bullets: [
          'Un saludo cálido: una frase, no cinco',
          'Luego el punto, dicho con claridad',
          'Luego una invitación abierta a preguntar',
        ],
      },
      {
        kind: 'check',
        question: 'Tienes dos minutos con tu vicepresidenta en el pasillo para plantear una falta de personal que retrasará un lanzamiento. ¿Con qué abres?',
        options: [
          '“¿Tienes un segundo? Hace tiempo quiero hablarte de lo sobrecargado que ha estado el equipo últimamente.”',
          '“El lanzamiento se atrasará dos semanas si no sumamos un contratista. ¿Te envío los números hoy?”',
          '“Primero un poco de contexto: desde marzo perdimos a dos personas y la contratación va lenta por el congelamiento.”',
          '“Sé que estás a tope, así que pondré todo en un correo y lo lees cuando te quede bien.”',
        ],
        answer: 1,
        explain: 'Nombra el impacto, la solución y un siguiente paso en dos frases. El saludo amable y el contexto son ciertos, pero la hacen esperar el punto. El correo aplaza una decisión que podrías empezar ahora mismo.',
      },
      {
        kind: 'action',
        title: 'Reescribe un mensaje',
        body: 'Elige un correo o mensaje de chat que envíes esta semana. Antes de enviarlo, pasa tu pedido o conclusión a la primera línea y quita el contexto que no necesitan para actuar. Observa si la respuesta llega más rápido.',
      },
      {
        kind: 'takeaway',
        title: 'El punto primero',
        bullets: [
          'Abre con tu conclusión o pedido, luego las razones',
          'Escribe tu frase antes de hablar',
          'Mantén la calidez breve para que el punto quede arriba',
        ],
      },
    ],
  },
  fr: {
    title: 'L’essentiel d’abord : parler pour que les gens pressés écoutent',
    subtitle: 'Commencez par le message, puis donnez le chemin',
    slides: [
      {
        kind: 'cover',
        title: 'Commencez par le message',
        body: 'Vous avez préparé toute l’histoire et, dès la cinquième phrase, votre responsable regarde déjà son téléphone. Les personnes très occupées décident en trente secondes si elles continuent d’écouter.',
      },
      {
        kind: 'idea',
        title: 'Partez de ce dont ils ont besoin',
        body: 'Nous racontons souvent les choses dans l’ordre où nous les avons vécues : contexte, difficultés, constat, demande. Un auditoire pressé a besoin de l’inverse. Ouvrez par votre conclusion ou votre demande, puis ajoutez seulement le contexte utile.',
        bullets: [
          'Votre message ou votre demande en une phrase',
          'Deux ou trois faits ou raisons qui l’appuient',
          'Ce dont vous avez besoin, et pour quand',
        ],
      },
      {
        kind: 'idea',
        title: 'Trouvez d’abord votre phrase',
        body: 'Si vous ne pouvez pas dire votre message en une phrase, vous n’êtes pas encore prêt à parler. Écrivez cette phrase avant la réunion ou le point. S’il vous faut trois essais, c’est la réflexion qui se fait avant de prendre le temps des autres.',
        bullets: [
          'Testez-la : pourraient-ils agir avec cette seule phrase ?',
          'Supprimez les préambules comme « je voulais juste signaler »',
          'Gardez l’historique complet pour qui le demande',
        ],
      },
      {
        kind: 'example',
        title: 'Faire le point avec votre directrice',
        instead: '« Alors, la semaine dernière, on a commencé à regarder les chiffres du fournisseur, il y a eu des surprises, puis Priya a sorti d’autres données, et... »',
        tryThis: '« Nous devrions renouveler avec le fournisseur B. Il coûte 12 % de moins et a tenu tous ses délais cette année. J’ai besoin de votre accord d’ici vendredi. »',
        why: 'Votre directrice sait en dix secondes ce que vous voulez et pourquoi. Si elle veut toute l’histoire, elle la demandera, et elle aura une raison de l’écouter.',
      },
      {
        kind: 'idea',
        title: 'Aller droit au but n’est pas froid',
        body: 'Commencer par le message peut sembler abrupt, surtout dans les équipes ou les cultures qui privilégient la relation. Vous pouvez garder la chaleur. L’important est que le message ne soit pas enfoui dessous.',
        bullets: [
          'Une ouverture chaleureuse : une phrase, pas cinq',
          'Puis le message, dit clairement',
          'Puis une invitation ouverte aux questions',
        ],
      },
      {
        kind: 'check',
        question: 'Vous avez deux minutes avec votre vice-présidente dans le couloir pour signaler un manque d’effectif qui retardera un lancement. Comment ouvrez-vous ?',
        options: [
          '« Vous avez une seconde ? Je voulais vous parler de la charge de l’équipe, qui est très tendue ces temps-ci. »',
          '« Le lancement glissera de deux semaines sans un prestataire en renfort. Je vous envoie les chiffres aujourd’hui ? »',
          '« D’abord un peu de contexte : depuis mars, nous avons perdu deux personnes et le gel des embauches ralentit tout. »',
          '« Je sais que vous êtes débordée, je vais tout mettre dans un courriel et vous le lirez quand vous pourrez. »',
        ],
        answer: 1,
        explain: 'Elle nomme l’impact, la solution et une prochaine étape en deux phrases. L’ouverture amicale et le contexte sont vrais, mais ils font attendre le message. Le courriel repousse une décision que vous pourriez lancer tout de suite.',
      },
      {
        kind: 'action',
        title: 'Réécrivez un message',
        body: 'Choisissez un courriel ou un message que vous envoyez cette semaine. Avant de l’envoyer, placez votre demande ou votre conclusion en première ligne et retirez le contexte inutile pour agir. Observez si la réponse arrive plus vite.',
      },
      {
        kind: 'takeaway',
        title: 'Le message d’abord',
        bullets: [
          'Ouvrez par votre conclusion ou votre demande, puis les raisons',
          'Écrivez votre phrase avant de parler',
          'Gardez la chaleur brève pour que le message reste en tête',
        ],
      },
    ],
  },
};

export default lesson;
