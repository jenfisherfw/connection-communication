import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-28',
  week: 28,
  focus: 'change',
  minutes: 4,
  title: 'Leading a change you did not choose',
  subtitle: 'Be honest about your doubts and still lead with commitment',
  slides: [
    {
      kind: 'cover',
      title: 'Leading a change you did not choose',
      body: 'The decision came from above, and you have doubts too. Your team is watching to see whether you will sell it, sink it, or level with them.',
    },
    {
      kind: 'idea',
      title: 'Get clear before you cascade',
      body: 'Before you talk to your team, make sure you understand the change. Ask your own leader the questions your team will ask you. You do not have to agree with every part to explain it well.',
      bullets: [
        'Why now, and what problem does it solve?',
        'What is decided, and what is still open?',
        'Where can my team shape how it happens?',
      ],
    },
    {
      kind: 'idea',
      title: 'Be honest without undermining',
      body: 'Your team will notice if you fake enthusiasm. They will also notice if you roll your eyes. Aim for the honest middle: say it was not your call, explain the reasoning as you understand it, and commit to making it work.',
      bullets: [
        'Avoid: "They’re making us do this."',
        'Avoid: "Honestly, it’s perfect."',
        'Try: "I had questions too. Here’s what I learned and how we’ll make it work."',
      ],
    },
    {
      kind: 'idea',
      title: 'Concerns go up, commitment goes down',
      body: 'Disagreement belongs in the right place. Bring specific concerns and evidence to your leader in private. With your team, focus on what you can shape together. If you hear about legal, safety, or ethical risks, take them to HR or the proper channel.',
    },
    {
      kind: 'example',
      title: 'Own your role in the message',
      instead: '"Look, I don’t love it either, but corporate decided, so we just have to deal with it."',
      tryThis: '"This wasn’t my decision, and I asked a lot of questions about it. Here’s the reasoning I heard, and here’s where we still get a say in how it works for us."',
      why: 'It is honest about your role, shares the why, and gives the team real influence. Blaming corporate invites the team to resist rather than shape the change.',
    },
    {
      kind: 'check',
      question: 'In a team meeting, someone asks you directly, "Do you actually agree with this?" You had reservations. What is the best response?',
      options: [
        'Say you fully agree, so the team doesn’t lose confidence in the plan.',
        'Say you had questions, share what you learned, and commit to it.',
        'Say you’d rather not share your personal view so you can stay neutral.',
        'Say you understand their frustration and that you share it completely.',
      ],
      answer: 1,
      explain: 'Honest and committed is the credible middle. Faking agreement erodes trust, refusing to answer feels evasive, and joining the frustration sounds supportive but signals that the change is optional.',
    },
    {
      kind: 'action',
      title: 'Prepare your three lines',
      body: 'For a change you did not choose, write three sentences: what was decided and why, what you asked or questioned, and where your team still has a say. Practice saying them out loud before your next team meeting.',
    },
    {
      kind: 'takeaway',
      title: 'Honest and committed',
      bullets: [
        'Understand the why well enough to explain it, even if you have doubts.',
        'Raise concerns upward; lead commitment with your team.',
        'Show your team where they can still shape the change.',
      ],
    },
  ],
  es: {
    title: 'Liderar un cambio que no elegiste',
    subtitle: 'Sé honesto sobre tus dudas y lidera con compromiso',
    slides: [
      {
        kind: 'cover',
        title: 'Liderar un cambio que no elegiste',
        body: 'La decisión vino de arriba y tú también tienes dudas. Tu equipo está atento a ver si vas a venderla, hundirla o hablarles con franqueza.',
      },
      {
        kind: 'idea',
        title: 'Aclárate antes de transmitirlo',
        body: 'Antes de hablar con tu equipo, asegúrate de entender el cambio. Hazle a tu propio líder las preguntas que tu equipo te hará a ti. No necesitas estar de acuerdo con cada parte para explicarlo bien.',
        bullets: [
          '¿Por qué ahora y qué problema resuelve?',
          '¿Qué está decidido y qué sigue abierto?',
          '¿Dónde puede influir mi equipo en cómo se hace?',
        ],
      },
      {
        kind: 'idea',
        title: 'Sé honesto sin socavar',
        body: 'Tu equipo notará si finges entusiasmo. También notará si pones los ojos en blanco. Busca el punto medio honesto: di que no fue tu decisión, explica el razonamiento tal como lo entiendes y comprométete a que funcione.',
        bullets: [
          'Evita: “Nos están obligando a hacer esto.”',
          'Evita: “La verdad, es perfecto.”',
          'Prueba: “Yo también tuve preguntas. Esto es lo que aprendí y así haremos que funcione.”',
        ],
      },
      {
        kind: 'idea',
        title: 'Las dudas suben, el compromiso baja',
        body: 'El desacuerdo tiene su lugar. Lleva tus inquietudes concretas y tus datos a tu líder en privado. Con tu equipo, enfócate en lo que pueden definir juntos. Si te enteras de riesgos legales, de seguridad o éticos, llévalos a Recursos Humanos o al canal correspondiente.',
      },
      {
        kind: 'example',
        title: 'Asume tu papel en el mensaje',
        instead: '“Miren, a mí tampoco me encanta, pero la dirección lo decidió, así que hay que aguantarse.”',
        tryThis: '“No fue mi decisión y pregunté mucho al respecto. Este es el razonamiento que escuché, y aquí es donde todavía podemos opinar sobre cómo funcionará para nosotros.”',
        why: 'Es honesto sobre tu papel, comparte el porqué y le da al equipo una influencia real. Culpar a la dirección invita al equipo a resistirse en lugar de darle forma al cambio.',
      },
      {
        kind: 'check',
        question: 'En una reunión de equipo, alguien te pregunta directamente: “¿De verdad estás de acuerdo con esto?” Tenías reservas. ¿Cuál es la mejor respuesta?',
        options: [
          'Decir que estás totalmente de acuerdo para que el equipo no pierda confianza en el plan.',
          'Decir que tuviste preguntas, compartir lo que aprendiste y comprometerte.',
          'Decir que prefieres no dar tu opinión personal para mantenerte neutral.',
          'Decir que entiendes su frustración y que la compartes por completo.',
        ],
        answer: 1,
        explain: 'Ser honesto y comprometido es el punto medio creíble. Fingir acuerdo erosiona la confianza, no responder parece evasivo, y sumarse a la frustración suena solidario pero transmite que el cambio es opcional.',
      },
      {
        kind: 'action',
        title: 'Prepara tus tres frases',
        body: 'Para un cambio que no elegiste, escribe tres frases: qué se decidió y por qué, qué preguntaste o cuestionaste, y dónde tu equipo todavía puede opinar. Practica decirlas en voz alta antes de tu próxima reunión de equipo.',
      },
      {
        kind: 'takeaway',
        title: 'Honesto y comprometido',
        bullets: [
          'Entiende el porqué lo suficiente para explicarlo, aunque tengas dudas.',
          'Lleva tus inquietudes hacia arriba; lidera el compromiso con tu equipo.',
          'Muéstrale a tu equipo dónde todavía puede darle forma al cambio.',
        ],
      },
    ],
  },
  fr: {
    title: 'Mener un changement que vous n’avez pas choisi',
    subtitle: 'Soyez honnête sur vos doutes tout en menant avec engagement',
    slides: [
      {
        kind: 'cover',
        title: 'Mener un changement que vous n’avez pas choisi',
        body: 'La décision vient d’en haut, et vous avez des doutes vous aussi. Votre équipe vous observe : allez-vous la vendre, la saboter ou parler franchement ?',
      },
      {
        kind: 'idea',
        title: 'Clarifiez avant de relayer',
        body: 'Avant de parler à votre équipe, assurez-vous de bien comprendre le changement. Posez à votre propre responsable les questions que votre équipe vous posera. Vous n’avez pas besoin d’être d’accord avec chaque point pour bien l’expliquer.',
        bullets: [
          'Pourquoi maintenant, et quel problème cela résout-il ?',
          'Qu’est-ce qui est décidé, et qu’est-ce qui reste ouvert ?',
          'Sur quoi mon équipe peut-elle influer dans la mise en œuvre ?',
        ],
      },
      {
        kind: 'idea',
        title: 'Honnête sans saper',
        body: 'Votre équipe remarquera si vous feignez l’enthousiasme. Elle remarquera aussi si vous levez les yeux au ciel. Visez le juste milieu honnête : dites que ce n’était pas votre décision, expliquez le raisonnement tel que vous le comprenez, et engagez-vous à faire en sorte que cela fonctionne.',
        bullets: [
          'À éviter : « On nous oblige à faire ça. »',
          'À éviter : « Franchement, c’est parfait. »',
          'À essayer : « Moi aussi, j’avais des questions. Voici ce que j’ai appris et comment nous allons y arriver. »',
        ],
      },
      {
        kind: 'idea',
        title: 'Les réserves remontent, l’engagement descend',
        body: 'Le désaccord a sa place, au bon endroit. Portez vos réserves précises et vos éléments factuels à votre responsable, en privé. Avec votre équipe, concentrez-vous sur ce que vous pouvez construire ensemble. Si vous entendez parler de risques juridiques, de sécurité ou éthiques, transmettez-les aux RH ou au canal approprié.',
      },
      {
        kind: 'example',
        title: 'Assumez votre rôle dans le message',
        instead: '« Écoutez, ça ne m’enchante pas non plus, mais la direction a tranché, alors on fait avec. »',
        tryThis: '« Ce n’était pas ma décision, et j’ai posé beaucoup de questions. Voici le raisonnement que l’on m’a donné, et voici où nous avons encore notre mot à dire sur la façon dont cela fonctionnera chez nous. »',
        why: 'Ce message est honnête sur votre rôle, partage le pourquoi et donne à l’équipe une vraie influence. Rejeter la faute sur la direction pousse l’équipe à résister plutôt qu’à façonner le changement.',
      },
      {
        kind: 'check',
        question: 'En réunion d’équipe, quelqu’un vous demande directement : « Est-ce que vous êtes vraiment d’accord avec ça ? » Vous aviez des réserves. Quelle est la meilleure réponse ?',
        options: [
          'Dire que vous êtes entièrement d’accord pour que l’équipe garde confiance dans le plan.',
          'Dire que vous aviez des questions, partager ce que vous avez appris et vous engager.',
          'Dire que vous préférez ne pas donner votre avis personnel pour rester neutre.',
          'Dire que vous comprenez leur frustration et que vous la partagez entièrement.',
        ],
        answer: 1,
        explain: 'Être honnête et engagé, c’est le juste milieu crédible. Feindre l’accord abîme la confiance, refuser de répondre paraît évasif, et rejoindre la frustration semble solidaire mais laisse entendre que le changement est facultatif.',
      },
      {
        kind: 'action',
        title: 'Préparez vos trois phrases',
        body: 'Pour un changement que vous n’avez pas choisi, écrivez trois phrases : ce qui a été décidé et pourquoi, ce que vous avez demandé ou remis en question, et où votre équipe a encore son mot à dire. Entraînez-vous à les dire à voix haute avant votre prochaine réunion d’équipe.',
      },
      {
        kind: 'takeaway',
        title: 'Honnête et engagé',
        bullets: [
          'Comprenez le pourquoi assez bien pour l’expliquer, même si vous avez des doutes.',
          'Faites remonter vos réserves ; portez l’engagement auprès de votre équipe.',
          'Montrez à votre équipe où elle peut encore façonner le changement.',
        ],
      },
    ],
  },
};

export default lesson;
