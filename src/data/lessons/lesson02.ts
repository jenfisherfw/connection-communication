import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-02',
  week: 2,
  focus: 'communication',
  minutes: 3,
  title: 'Three levels of listening',
  subtitle: 'To respond, to understand, and to what is unsaid',
  slides: [
    {
      kind: 'cover',
      title: 'Three levels of listening',
      body: 'You are busy, so you listen for the moment you can help. But people often stop talking the second they sense you already have the answer.',
    },
    {
      kind: 'idea',
      title: 'Level one: listening to respond',
      body: 'At this level, part of your mind is building your reply while the other person talks. You catch the facts, but you filter them through what you plan to say next. It is fast and useful for simple updates, and it misses almost everything else.',
      bullets: ['You interrupt to fix or advise', 'You hear the problem you expected', 'They leave feeling processed, not heard'],
    },
    {
      kind: 'idea',
      title: 'Level two: listening to understand',
      body: 'Here you set your reply aside and stay curious. You ask what they mean, reflect back what you heard, and check that you got it right before offering anything.',
      bullets: ['"Say more about that."', '"So the hard part is the timeline, not the work?"', 'Let a pause sit for a few seconds'],
    },
    {
      kind: 'idea',
      title: 'Level three: listening to what is unsaid',
      body: 'The deepest level notices tone, energy, hesitation, and what keeps coming up or gets skipped. You do not guess at hidden motives. You gently name what you notice and let them decide what it means.',
      bullets: ['A flat "it’s fine" after a big change', 'A topic they mention twice, then drop', 'A long pause before a yes'],
    },
    {
      kind: 'example',
      title: 'Naming what you notice',
      instead: '"Great, sounds like you’ve got it handled. Let me know if anything comes up."',
      tryThis: '"You said it’s fine, but you went quiet when we got to the new reporting line. What’s on your mind about that?"',
      why: 'You describe what you observed without deciding what it means. That gives them a safe opening to share the real concern.',
    },
    {
      kind: 'check',
      question: 'Marco says, "The reorg is fine, I guess," and looks away. You have five minutes. What is the best response?',
      options: [
        '"You said fine, but it sounded like there was more. What’s sitting with you?"',
        '"I’m sure it will work out. Change is hard at first for everyone, and you’ll do great."',
        '"Okay, good. Let’s move on to the project plan, since we’re short on time."',
        '"Can I walk you through why the reorg makes sense for the team?"',
      ],
      answer: 0,
      explain: 'It reflects what you noticed and invites him to share. The reassuring option sounds kind, but it closes the door before you know what he is feeling.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'In your next one to one, wait three seconds before you reply each time the other person stops talking. Once in the conversation, name something you noticed in their tone and ask about it.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Notice when you are only listening to respond.',
        'Reflect back and check before you advise.',
        'Name what you notice, then let them explain it.',
      ],
    },
  ],
  es: {
    title: 'Tres niveles de escucha',
    subtitle: 'Para responder, para entender y para lo que no se dice',
    slides: [
      {
        kind: 'cover',
        title: 'Tres niveles de escucha',
        body: 'Estás ocupado, así que escuchas buscando el momento de ayudar. Pero muchas personas dejan de hablar en cuanto sienten que ya tienes la respuesta.',
      },
      {
        kind: 'idea',
        title: 'Nivel uno: escuchar para responder',
        body: 'En este nivel, una parte de tu mente prepara la respuesta mientras la otra persona habla. Captas los datos, pero los filtras por lo que piensas decir. Es rápido y útil para actualizaciones simples, y se pierde casi todo lo demás.',
        bullets: ['Interrumpes para resolver o aconsejar', 'Escuchas el problema que esperabas', 'La persona se va sintiéndose atendida, no escuchada'],
      },
      {
        kind: 'idea',
        title: 'Nivel dos: escuchar para entender',
        body: 'Aquí dejas tu respuesta a un lado y te mantienes curioso. Preguntas qué quiere decir, reflejas lo que escuchaste y confirmas que lo entendiste antes de ofrecer algo.',
        bullets: ['“Cuéntame más.”', '“Entonces lo difícil es el plazo, no el trabajo, ¿cierto?”', 'Deja que una pausa dure unos segundos'],
      },
      {
        kind: 'idea',
        title: 'Nivel tres: escuchar lo que no se dice',
        body: 'El nivel más profundo nota el tono, la energía, las dudas y lo que se repite o se evita. No adivinas motivos ocultos. Nombras con cuidado lo que notas y dejas que la persona decida qué significa.',
        bullets: ['Un “está bien” sin energía después de un gran cambio', 'Un tema que menciona dos veces y luego suelta', 'Una pausa larga antes de un sí'],
      },
      {
        kind: 'example',
        title: 'Nombrar lo que notas',
        instead: '“Perfecto, parece que lo tienes bajo control. Avísame si surge algo.”',
        tryThis: '“Dijiste que está bien, pero te quedaste callado cuando hablamos de la nueva línea de reporte. ¿Qué piensas de eso?”',
        why: 'Describes lo que observaste sin decidir qué significa. Eso le da una entrada segura para compartir la preocupación real.',
      },
      {
        kind: 'check',
        question: 'Marco dice: “La reorganización está bien, supongo”, y aparta la mirada. Tienes cinco minutos. ¿Cuál es la mejor respuesta?',
        options: [
          '“Dijiste que está bien, pero sonó a que hay algo más. ¿Qué te está pesando?”',
          '“Seguro que todo saldrá bien. Los cambios cuestan al principio a todos, y te irá genial.”',
          '“Bien. Pasemos al plan del proyecto, que tenemos poco tiempo.”',
          '“¿Te explico por qué la reorganización tiene sentido para el equipo?”',
        ],
        answer: 0,
        explain: 'Refleja lo que notaste y lo invita a compartir. La opción tranquilizadora suena amable, pero cierra la puerta antes de saber qué siente.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'En tu próxima reunión uno a uno, espera tres segundos antes de responder cada vez que la otra persona deje de hablar. En algún momento, nombra algo que notaste en su tono y pregunta por ello.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Nota cuando solo escuchas para responder.',
          'Refleja y confirma antes de aconsejar.',
          'Nombra lo que notas y deja que la persona lo explique.',
        ],
      },
    ],
  },
  fr: {
    title: 'Trois niveaux d’écoute',
    subtitle: 'Pour répondre, pour comprendre et pour le non‑dit',
    slides: [
      {
        kind: 'cover',
        title: 'Trois niveaux d’écoute',
        body: 'Vous êtes pris, alors vous écoutez en guettant le moment d’aider. Mais beaucoup de personnes cessent de parler dès qu’elles sentent que vous avez déjà la réponse.',
      },
      {
        kind: 'idea',
        title: 'Niveau un : écouter pour répondre',
        body: 'À ce niveau, une partie de votre esprit prépare la réponse pendant que l’autre parle. Vous captez les faits, mais vous les filtrez à travers ce que vous comptez dire. C’est rapide et utile pour un simple point d’avancement, et cela manque presque tout le reste.',
        bullets: ['Vous interrompez pour régler ou conseiller', 'Vous entendez le problème que vous attendiez', 'L’autre repart traité, pas écouté'],
      },
      {
        kind: 'idea',
        title: 'Niveau deux : écouter pour comprendre',
        body: 'Ici, vous mettez votre réponse de côté et restez curieux. Vous demandez ce que la personne veut dire, reformulez ce que vous avez entendu et vérifiez avant de proposer quoi que ce soit.',
        bullets: ['« Dites‑m’en plus. »', '« Donc, le plus dur, c’est le délai, pas le travail ? »', 'Laissez un silence durer quelques secondes'],
      },
      {
        kind: 'idea',
        title: 'Niveau trois : écouter le non‑dit',
        body: 'Le niveau le plus profond perçoit le ton, l’énergie, l’hésitation, ce qui revient ou ce qui est évité. Vous ne devinez pas de motifs cachés. Vous nommez avec tact ce que vous remarquez et laissez la personne dire ce que cela signifie.',
        bullets: ['Un « ça va » sans énergie après un grand changement', 'Un sujet évoqué deux fois, puis abandonné', 'Un long silence avant un oui'],
      },
      {
        kind: 'example',
        title: 'Nommer ce que vous remarquez',
        instead: '« Parfait, vous avez l’air de maîtriser. Dites‑moi si quelque chose se présente. »',
        tryThis: '« Vous dites que ça va, mais vous êtes devenu silencieux quand nous avons parlé du nouveau rattachement. Qu’en pensez‑vous ? »',
        why: 'Vous décrivez ce que vous avez observé sans décider de ce que cela signifie. La personne a ainsi une ouverture sûre pour partager sa vraie préoccupation.',
      },
      {
        kind: 'check',
        question: 'Marco dit : « La réorganisation, ça va, je suppose », et détourne le regard. Vous avez cinq minutes. Quelle est la meilleure réponse ?',
        options: [
          '« Vous dites que ça va, mais j’ai l’impression qu’il y a autre chose. Qu’est‑ce qui vous pèse ? »',
          '« Je suis sûr que tout ira bien. Le changement est difficile au début pour tout le monde, et vous serez très bien. »',
          '« D’accord. Passons au plan du projet, nous manquons de temps. »',
          '« Puis‑je vous expliquer pourquoi la réorganisation a du sens pour l’équipe ? »',
        ],
        answer: 0,
        explain: 'Elle reflète ce que vous avez remarqué et l’invite à partager. L’option rassurante semble bienveillante, mais elle ferme la porte avant de savoir ce qu’il ressent.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Lors de votre prochain entretien individuel, attendez trois secondes avant de répondre chaque fois que l’autre cesse de parler. À un moment, nommez quelque chose que vous avez remarqué dans son ton et posez une question.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Remarquez quand vous écoutez seulement pour répondre.',
          'Reformulez et vérifiez avant de conseiller.',
          'Nommez ce que vous remarquez, puis laissez l’autre l’expliquer.',
        ],
      },
    ],
  },
};

export default lesson;
