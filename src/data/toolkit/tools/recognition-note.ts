import type { Tool } from '../types';

const tool: Tool = {
  id: 'recognition-note',
  category: 'team',
  icon: 'award',
  minutes: 5,
  title: 'Recognition Note Template',
  summary: 'Write a specific thank you that names what someone did, why it mattered, and the strength it showed.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it any time someone’s effort made a difference: a project shipped, a customer saved, a colleague helped, or a quiet habit that keeps the team running. Specific recognition tells people what to keep doing. A generic “great job” is forgotten by lunch.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Send it soon, ideally within a day or two of what they did.',
        'Name the exact action, not just the outcome.',
        'Connect it to the impact on customers, the team, or the goal.',
        'Name the quality it showed, such as care, courage, or judgment.',
        'Ask each person how they like to be recognized. Some love a public shout out; others would much rather get a private note.',
      ],
    },
    {
      heading: 'Recognition note template',
      template: `Hi [name],

I want to thank you for [what they did, specifically].

Because of that, [the impact on the team, customer, or goal].

It showed real [quality, such as care, initiative, or clear thinking], and it did not go unnoticed.

Thank you,
[Your name]`,
    },
    {
      heading: 'Public recognition example',
      template: `Shout out to [name] for [what they did].

Thanks to that, [the impact].

This is a great example of [quality or team value]. Thank you, [name]!`,
    },
    {
      heading: 'Private recognition example',
      body: 'Hi Sam, thank you for staying calm and walking the new vendor through our process step by step on Monday. Because of that, their first delivery arrived on time and correct. It showed real patience and clear thinking. I noticed, and I am grateful.',
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Praising only results and never the effort or behavior behind them.',
        'Recognizing the same few people while others go unseen.',
        'Mixing recognition with a request or a correction.',
        'Making someone take a public spotlight they did not want.',
      ],
    },
  ],
  es: {
    title: 'Plantilla de nota de reconocimiento',
    summary: 'Escribe un agradecimiento específico que nombre lo que alguien hizo, por qué importó y la fortaleza que demostró.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala cada vez que el esfuerzo de alguien marque la diferencia: un proyecto entregado, un cliente recuperado, un compañero ayudado o un hábito discreto que mantiene al equipo funcionando. El reconocimiento específico dice a las personas qué seguir haciendo. Un “buen trabajo” genérico se olvida antes del almuerzo.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Envíala pronto, idealmente uno o dos días después de lo que hizo.',
          'Nombra la acción exacta, no solo el resultado.',
          'Conéctala con el impacto en los clientes, el equipo o el objetivo.',
          'Nombra la cualidad que demostró, como cuidado, valentía o buen criterio.',
          'Pregunta a cada persona cómo le gusta que la reconozcan. A algunas les encanta un reconocimiento público; otras prefieren mucho más una nota privada.',
        ],
      },
      {
        heading: 'Plantilla de nota de reconocimiento',
        template: `Hola, [nombre]:

Quiero darte las gracias por [lo que hizo, de forma específica].

Gracias a eso, [el impacto en el equipo, el cliente o el objetivo].

Demostró verdadero [cualidad, como cuidado, iniciativa o claridad], y no pasó desapercibido.

Gracias,
[Tu nombre]`,
      },
      {
        heading: 'Ejemplo de reconocimiento público',
        template: `Un reconocimiento para [nombre] por [lo que hizo].

Gracias a eso, [el impacto].

Es un gran ejemplo de [cualidad o valor del equipo]. ¡Gracias, [nombre]!`,
      },
      {
        heading: 'Ejemplo de reconocimiento privado',
        body: 'Hola, Sam: gracias por mantener la calma y guiar al nuevo proveedor por nuestro proceso paso a paso el lunes. Gracias a eso, su primera entrega llegó a tiempo y sin errores. Demostró verdadera paciencia y claridad. Lo noté y te lo agradezco.',
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Elogiar solo los resultados y nunca el esfuerzo o la conducta detrás de ellos.',
          'Reconocer siempre a las mismas personas mientras otras pasan desapercibidas.',
          'Mezclar el reconocimiento con una petición o una corrección.',
          'Poner a alguien en un foco público que no quería.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle de message de reconnaissance',
    summary: 'Rédigez un remerciement précis qui nomme ce que la personne a fait, pourquoi cela a compté et la qualité qu’elle a montrée.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le chaque fois que l’effort de quelqu’un a fait la différence : un projet livré, un client retenu, un collègue aidé, ou une habitude discrète qui fait tourner l’équipe. Une reconnaissance précise indique ce qu’il faut continuer à faire. Un « bon travail » générique est oublié avant midi.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Envoyez-le vite, idéalement dans les un ou deux jours qui suivent.',
          'Nommez l’action exacte, pas seulement le résultat.',
          'Reliez-la à l’impact sur les clients, l’équipe ou l’objectif.',
          'Nommez la qualité montrée, comme l’attention, le courage ou le discernement.',
          'Demandez à chacun comment il aime être reconnu. Certains adorent être cités en public ; d’autres préfèrent de loin un message privé.',
        ],
      },
      {
        heading: 'Modèle de message de reconnaissance',
        template: `Bonjour [nom],

Je tiens à vous remercier pour [ce que la personne a fait, précisément].

Grâce à cela, [l’impact sur l’équipe, le client ou l’objectif].

Cela a montré une vraie [qualité, comme l’attention, l’initiative ou la clarté], et cela n’est pas passé inaperçu.

Merci,
[Votre nom]`,
      },
      {
        heading: 'Exemple de reconnaissance publique',
        template: `Un grand merci à [nom] pour [ce que la personne a fait].

Grâce à cela, [l’impact].

C’est un très bel exemple de [qualité ou valeur de l’équipe]. Merci, [nom] !`,
      },
      {
        heading: 'Exemple de reconnaissance privée',
        body: 'Bonjour Sam, merci d’être resté calme et d’avoir guidé le nouveau fournisseur pas à pas dans notre processus lundi. Grâce à cela, sa première livraison est arrivée à l’heure et sans erreur. Cela a montré une vraie patience et une grande clarté. Je l’ai remarqué et je vous en suis reconnaissant.',
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Saluer uniquement les résultats, jamais l’effort ou le comportement qui les a permis.',
          'Reconnaître toujours les mêmes personnes pendant que d’autres restent invisibles.',
          'Mêler la reconnaissance à une demande ou à une correction.',
          'Exposer quelqu’un publiquement alors qu’il ne le souhaitait pas.',
        ],
      },
    ],
  },
};

export default tool;
