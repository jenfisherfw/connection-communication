import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-12',
  week: 12,
  focus: 'communication',
  minutes: 4,
  title: 'Culture is what you model, reward, and tolerate',
  subtitle: 'Your team watches what you do more than what you say.',
  slides: [
    {
      kind: 'cover',
      title: 'The values on the wall',
      body: 'Your team has values written down, but people learn the real rules by watching. When what you say and what you allow do not match, the unwritten rules win.',
    },
    {
      kind: 'idea',
      title: 'What you model',
      body: 'People copy what leaders do, especially under pressure. If you say rest matters but send messages at midnight, your team learns that being always on is the real expectation. Small, visible habits teach more than any statement.',
      bullets: [
        'How you react to bad news.',
        'Whether you admit your own mistakes.',
        'Who you listen to in meetings.',
      ],
    },
    {
      kind: 'idea',
      title: 'What you reward',
      body: 'Recognition, praise, and the best assignments tell people what really counts. If you only celebrate fast results, you teach people to cut corners. Notice and name the behaviors you want more of, such as sharing credit, raising risks early, and helping a peer.',
    },
    {
      kind: 'idea',
      title: 'What you tolerate',
      body: 'The behavior you let slide becomes the standard. When a strong performer interrupts or dismisses others and nothing happens, everyone notices. Addressing it does not need to be harsh. A calm, private, specific conversation shows the team that the values apply to everyone. Serious conduct issues go to HR and company policy.',
    },
    {
      kind: 'example',
      title: 'Naming the behavior you want',
      instead: '"Great job this sprint, everyone."',
      tryThis: '"Sam flagged the data issue on day two, before it hit customers. That’s exactly the kind of early warning we need."',
      why: 'Generic praise tells people nothing about what matters. Naming a specific behavior and why it counts shows the team what to repeat.',
    },
    {
      kind: 'check',
      question: 'Your team says it values collaboration. Your top performer hits every target but often dismisses teammates’ ideas in meetings. What is the most effective step?',
      options: [
        'Leave it alone for now, since results matter most and the team is hitting its goals.',
        'Praise the whole team for great collaboration at your next meeting, so the message lands gently.',
        'Raise it privately with specific moments, and explain that collaboration is part of doing well.',
        'Put up a team values poster and remind everyone in writing how much collaboration matters.',
      ],
      answer: 2,
      explain: 'A private, specific conversation shows the value is real and applies to everyone. Group praise sounds supportive but avoids the issue, and the person may not see it as about them. Ignoring it or relying on posters teaches the team that results excuse behavior.',
    },
    {
      kind: 'action',
      title: 'Audit one week',
      body: 'Take five minutes to list what you modeled, praised, and let slide in the past week. Circle one item that does not match your team’s values. Choose one small, visible change you will make in the next few days.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'People learn culture by watching what leaders do.',
        'Praise the specific behaviors you want repeated.',
        'What you tolerate becomes the standard, so address it calmly and privately.',
      ],
    },
  ],
  es: {
    title: 'La cultura es lo que modelas, premias y toleras',
    subtitle: 'Tu equipo observa lo que haces más que lo que dices.',
    slides: [
      {
        kind: 'cover',
        title: 'Los valores en la pared',
        body: 'Tu equipo tiene valores por escrito, pero las personas aprenden las reglas reales observando. Cuando lo que dices y lo que permites no coinciden, ganan las reglas no escritas.',
      },
      {
        kind: 'idea',
        title: 'Lo que modelas',
        body: 'La gente copia lo que hacen sus líderes, sobre todo bajo presión. Si dices que el descanso importa, pero envías mensajes a medianoche, tu equipo aprende que estar siempre conectado es la expectativa real. Los hábitos pequeños y visibles enseñan más que cualquier declaración.',
        bullets: [
          'Cómo reaccionas ante las malas noticias.',
          'Si reconoces tus propios errores.',
          'A quién escuchas en las reuniones.',
        ],
      },
      {
        kind: 'idea',
        title: 'Lo que premias',
        body: 'El reconocimiento, los elogios y las mejores asignaciones le dicen a la gente qué cuenta de verdad. Si solo celebras resultados rápidos, enseñas a tomar atajos. Nota y nombra los comportamientos que quieres ver más, como compartir el mérito, avisar de riesgos a tiempo y ayudar a un colega.',
      },
      {
        kind: 'idea',
        title: 'Lo que toleras',
        body: 'El comportamiento que dejas pasar se convierte en la norma. Cuando alguien con buen desempeño interrumpe o desestima a otros y no pasa nada, todos lo notan. Abordarlo no tiene que ser duro. Una conversación tranquila, privada y específica muestra que los valores aplican a todos. Los problemas de conducta graves van a RR. HH. y a la política de la empresa.',
      },
      {
        kind: 'example',
        title: 'Nombrar el comportamiento que quieres',
        instead: '“Buen trabajo en este sprint, equipo.”',
        tryThis: '“Sam detectó el problema de datos el segundo día, antes de que afectara a los clientes. Ese es justo el tipo de alerta temprana que necesitamos.”',
        why: 'El elogio genérico no dice nada sobre lo que importa. Nombrar un comportamiento específico y por qué cuenta muestra al equipo qué repetir.',
      },
      {
        kind: 'check',
        question: 'Tu equipo dice valorar la colaboración. Tu persona con mejor desempeño cumple todas sus metas, pero a menudo desestima las ideas de sus colegas en las reuniones. ¿Cuál es el paso más eficaz?',
        options: [
          'Dejarlo pasar por ahora, ya que los resultados son lo principal y el equipo cumple sus metas.',
          'Elogiar a todo el equipo por su gran colaboración en la próxima reunión, para que el mensaje llegue con suavidad.',
          'Hablarlo en privado con momentos específicos y explicar que colaborar es parte de hacer bien el trabajo.',
          'Colgar un cartel con los valores del equipo y recordar a todos por escrito cuánto importa colaborar.',
        ],
        answer: 2,
        explain: 'Una conversación privada y específica muestra que el valor es real y aplica a todos. El elogio grupal suena alentador, pero evita el tema, y la persona puede no verlo como algo suyo. Ignorarlo o depender de carteles enseña al equipo que los resultados excusan el comportamiento.',
      },
      {
        kind: 'action',
        title: 'Revisa una semana',
        body: 'Dedica cinco minutos a anotar lo que modelaste, elogiaste y dejaste pasar la semana pasada. Marca un punto que no coincida con los valores de tu equipo. Elige un cambio pequeño y visible que harás en los próximos días.',
      },
      {
        kind: 'takeaway',
        title: 'Para recordar',
        bullets: [
          'Las personas aprenden la cultura observando lo que hacen sus líderes.',
          'Elogia los comportamientos específicos que quieres que se repitan.',
          'Lo que toleras se vuelve la norma, así que abórdalo con calma y en privado.',
        ],
      },
    ],
  },
  fr: {
    title: 'La culture, c’est ce que vous incarnez, récompensez et tolérez',
    subtitle: 'Votre équipe regarde ce que vous faites plus que ce que vous dites.',
    slides: [
      {
        kind: 'cover',
        title: 'Les valeurs affichées au mur',
        body: 'Votre équipe a des valeurs écrites, mais les gens apprennent les vraies règles en observant. Quand ce que vous dites et ce que vous laissez faire ne concordent pas, les règles non écrites l’emportent.',
      },
      {
        kind: 'idea',
        title: 'Ce que vous incarnez',
        body: 'Les gens imitent ce que font leurs responsables, surtout sous pression. Si vous dites que le repos compte mais envoyez des messages à minuit, votre équipe comprend qu’être toujours joignable est la vraie attente. De petites habitudes visibles enseignent plus que n’importe quelle déclaration.',
        bullets: [
          'Votre réaction face aux mauvaises nouvelles.',
          'Le fait de reconnaître vos propres erreurs.',
          'Les personnes que vous écoutez en réunion.',
        ],
      },
      {
        kind: 'idea',
        title: 'Ce que vous récompensez',
        body: 'La reconnaissance, les compliments et les meilleures missions disent aux gens ce qui compte vraiment. Si vous ne célébrez que les résultats rapides, vous apprenez à prendre des raccourcis. Remarquez et nommez les comportements que vous voulez voir davantage : partager le mérite, signaler tôt les risques, aider un collègue.',
      },
      {
        kind: 'idea',
        title: 'Ce que vous tolérez',
        body: 'Le comportement que vous laissez passer devient la norme. Quand une personne performante interrompt ou rabaisse les autres sans conséquence, tout le monde le remarque. En parler n’a pas besoin d’être dur. Une conversation calme, privée et précise montre que les valeurs s’appliquent à tous. Les problèmes de conduite graves relèvent des RH et de la politique de l’entreprise.',
      },
      {
        kind: 'example',
        title: 'Nommer le comportement souhaité',
        instead: '« Bravo à tous pour ce sprint. »',
        tryThis: '« Sam a repéré le problème de données dès le deuxième jour, avant qu’il ne touche les clients. C’est exactement le type d’alerte précoce dont nous avons besoin. »',
        why: 'Un compliment générique ne dit rien de ce qui compte. Nommer un comportement précis et dire pourquoi il compte montre à l’équipe quoi reproduire.',
      },
      {
        kind: 'check',
        question: 'Votre équipe dit valoriser la collaboration. Votre meilleur élément atteint tous ses objectifs mais écarte souvent les idées de ses collègues en réunion. Quelle est la démarche la plus efficace ?',
        options: [
          'Laisser faire pour l’instant, puisque les résultats priment et que l’équipe atteint ses objectifs.',
          'Féliciter toute l’équipe pour sa belle collaboration à la prochaine réunion, pour faire passer le message en douceur.',
          'En parler en privé avec des moments précis, et expliquer que la collaboration fait partie du travail bien fait.',
          'Afficher les valeurs de l’équipe et rappeler à tous par écrit combien la collaboration compte.',
        ],
        answer: 2,
        explain: 'Une conversation privée et précise montre que la valeur est réelle et s’applique à tous. Les félicitations collectives semblent encourageantes mais évitent le sujet, et la personne peut ne pas se sentir concernée. Ignorer ou miser sur des affiches apprend à l’équipe que les résultats excusent le comportement.',
      },
      {
        kind: 'action',
        title: 'Passez une semaine en revue',
        body: 'Prenez cinq minutes pour lister ce que vous avez incarné, félicité et laissé passer la semaine dernière. Entourez un élément qui ne correspond pas aux valeurs de votre équipe. Choisissez un petit changement visible à faire dans les prochains jours.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Les gens apprennent la culture en observant ce que font leurs responsables.',
          'Félicitez les comportements précis que vous voulez voir se répéter.',
          'Ce que vous tolérez devient la norme : abordez-le avec calme et en privé.',
        ],
      },
    ],
  },
};

export default lesson;
