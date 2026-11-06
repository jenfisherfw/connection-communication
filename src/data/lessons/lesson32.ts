import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-32',
  week: 32,
  focus: 'communication',
  minutes: 4,
  title: 'Close the loop: you said, we did',
  subtitle: 'Show people what happened to their input',
  slides: [
    {
      kind: 'cover',
      title: 'Close the loop: you said, we did',
      body: 'Teams stop sharing ideas and concerns when their input seems to vanish. The problem is often not inaction. It is that nobody told them what happened.',
    },
    {
      kind: 'idea',
      title: 'Silence reads as "nobody cared"',
      body: 'When people raise an issue and hear nothing back, they fill the gap with the least generous story. Even when you acted, the effort is invisible unless you say so. Closing the loop is how input turns into trust.',
    },
    {
      kind: 'idea',
      title: 'Use a simple three part update',
      body: 'Keep it short and concrete. Link each piece of input to what happened, including the things you could not do.',
      bullets: [
        'You said: the concern or idea, in their words',
        'We did: the action taken, or what is in progress',
        'We could not: what did not change, and why',
      ],
    },
    {
      kind: 'idea',
      title: 'Be honest about the "no"',
      body: 'Not every request can be met. A clear "we looked at this and here is why it is not changing" earns more respect than quiet avoidance. People can accept a no. What wears them down is never hearing an answer at all.',
    },
    {
      kind: 'example',
      title: 'After a team survey',
      instead: '"Thanks for filling out the survey. We are reviewing the results."',
      tryThis: '"You said handoffs were confusing, so we added a shared checklist. You asked for fewer meetings; we cut one. Flexible Fridays are not possible this year, and here is why."',
      why: 'Specific links between input and action prove the survey mattered. Naming the no keeps your word credible.',
    },
    {
      kind: 'check',
      question: 'Last month your team raised three issues. You fixed one, one is in progress, and one was declined by senior leaders. What is the best way to update them?',
      options: [
        'Celebrate the fix in a team message and let the other two wait',
        'Share all three: what you did, what is underway, and why one is a no',
        'Thank everyone for caring so much and say leadership is listening',
        'Wait to update until all three are resolved, to avoid confusion',
      ],
      answer: 1,
      explain: 'A full, honest update shows every piece of input was taken seriously. Thanking people and saying leadership is listening feels warm, but without specifics it sounds like the input disappeared.',
    },
    {
      kind: 'action',
      title: 'Try it this week',
      body: 'List three things your team raised in the last two months. For each, write one line: what you did, what is in progress, or why it is not changing. Share the list at your next team meeting or in your team channel.',
    },
    {
      kind: 'takeaway',
      title: 'Remember',
      bullets: [
        'Input with no visible follow up feels ignored, even when you acted.',
        'Use "you said, we did, we could not" to keep updates clear.',
        'An honest no builds more trust than silence.',
      ],
    },
  ],
  es: {
    title: 'Cierra el ciclo: ustedes dijeron, nosotros hicimos',
    subtitle: 'Muestra a la gente qué pasó con sus aportes',
    slides: [
      {
        kind: 'cover',
        title: 'Cierra el ciclo: ustedes dijeron, nosotros hicimos',
        body: 'Los equipos dejan de compartir ideas y preocupaciones cuando sus aportes parecen desaparecer. Muchas veces el problema no es la falta de acción. Es que nadie les contó qué pasó.',
      },
      {
        kind: 'idea',
        title: 'El silencio se lee como “a nadie le importó”',
        body: 'Cuando alguien plantea un tema y no recibe respuesta, llena el vacío con la historia menos generosa. Aunque hayas actuado, el esfuerzo es invisible si no lo dices. Cerrar el ciclo es la forma en que los aportes se convierten en confianza.',
      },
      {
        kind: 'idea',
        title: 'Usa una actualización simple de tres partes',
        body: 'Que sea breve y concreta. Conecta cada aporte con lo que ocurrió, incluidas las cosas que no pudiste hacer.',
        bullets: [
          'Ustedes dijeron: la preocupación o idea, con sus palabras',
          'Nosotros hicimos: la acción tomada o lo que está en curso',
          'No pudimos: lo que no cambió y por qué',
        ],
      },
      {
        kind: 'idea',
        title: 'Sé honesto con el “no”',
        body: 'No todas las peticiones se pueden atender. Un “lo revisamos y esta es la razón por la que no cambia” genera más respeto que evitar el tema en silencio. La gente puede aceptar un no. Lo que la desgasta es no recibir nunca una respuesta.',
      },
      {
        kind: 'example',
        title: 'Después de una encuesta al equipo',
        instead: '“Gracias por responder la encuesta. Estamos revisando los resultados.”',
        tryThis: '“Dijeron que las entregas eran confusas, así que creamos una lista de verificación compartida. Pidieron menos reuniones; quitamos una. Los viernes flexibles no son posibles este año, y esta es la razón.”',
        why: 'Los vínculos concretos entre aportes y acciones demuestran que la encuesta importó. Nombrar el no mantiene creíble tu palabra.',
      },
      {
        kind: 'check',
        question: 'El mes pasado tu equipo planteó tres temas. Resolviste uno, otro está en curso y la alta dirección rechazó el tercero. ¿Cuál es la mejor manera de informarles?',
        options: [
          'Celebrar la solución en un mensaje al equipo y dejar los otros dos para después',
          'Compartir los tres: lo que hiciste, lo que avanza y por qué uno es un no',
          'Agradecer a todos por implicarse tanto y decir que la dirección está escuchando',
          'Esperar a que los tres estén resueltos para informar y así evitar confusión',
        ],
        answer: 1,
        explain: 'Una actualización completa y honesta muestra que cada aporte se tomó en serio. Agradecer y decir que la dirección escucha se siente cálido, pero sin detalles suena a que los aportes desaparecieron.',
      },
      {
        kind: 'action',
        title: 'Pruébalo esta semana',
        body: 'Haz una lista de tres cosas que tu equipo planteó en los últimos dos meses. Para cada una, escribe una línea: lo que hiciste, lo que está en curso o por qué no cambia. Comparte la lista en tu próxima reunión de equipo o en el canal del equipo.',
      },
      {
        kind: 'takeaway',
        title: 'Recuerda',
        bullets: [
          'Un aporte sin seguimiento visible se siente ignorado, aunque hayas actuado.',
          'Usa “ustedes dijeron, hicimos, no pudimos” para que las actualizaciones sean claras.',
          'Un no honesto genera más confianza que el silencio.',
        ],
      },
    ],
  },
  fr: {
    title: 'Boucler la boucle : vous avez dit, nous avons fait',
    subtitle: 'Montrer à chacun ce que sont devenues ses contributions',
    slides: [
      {
        kind: 'cover',
        title: 'Boucler la boucle : vous avez dit, nous avons fait',
        body: 'Les équipes cessent de partager idées et inquiétudes quand leurs contributions semblent disparaître. Le problème n’est souvent pas l’inaction. C’est que personne ne leur a dit ce qui s’est passé.',
      },
      {
        kind: 'idea',
        title: 'Le silence se lit comme « personne ne s’en soucie »',
        body: 'Quand quelqu’un soulève un sujet et n’entend rien en retour, il comble le vide avec l’histoire la moins généreuse. Même si vous avez agi, l’effort reste invisible tant que vous ne le dites pas. Boucler la boucle, c’est transformer les contributions en confiance.',
      },
      {
        kind: 'idea',
        title: 'Utilisez un point en trois parties',
        body: 'Restez bref et concret. Reliez chaque contribution à ce qui s’est passé, y compris ce que vous n’avez pas pu faire.',
        bullets: [
          'Vous avez dit : la préoccupation ou l’idée, avec leurs mots',
          'Nous avons fait : l’action menée, ou ce qui est en cours',
          'Nous n’avons pas pu : ce qui n’a pas changé, et pourquoi',
        ],
      },
      {
        kind: 'idea',
        title: 'Soyez honnête sur le « non »',
        body: 'Toutes les demandes ne peuvent pas être satisfaites. Un clair « nous avons étudié la question et voici pourquoi cela ne change pas » inspire plus de respect qu’un évitement silencieux. On peut accepter un non. Ce qui use, c’est de ne jamais recevoir de réponse.',
      },
      {
        kind: 'example',
        title: 'Après une enquête d’équipe',
        instead: '« Merci d’avoir répondu à l’enquête. Nous analysons les résultats. »',
        tryThis: '« Vous avez dit que les passations étaient confuses, nous avons donc créé une checklist partagée. Vous vouliez moins de réunions ; nous en avons supprimé une. Les vendredis flexibles ne sont pas possibles cette année, et voici pourquoi. »',
        why: 'Des liens précis entre contributions et actions prouvent que l’enquête a compté. Nommer le non préserve la crédibilité de votre parole.',
      },
      {
        kind: 'check',
        question: 'Le mois dernier, votre équipe a soulevé trois sujets. Vous en avez réglé un, un autre est en cours et la direction a refusé le troisième. Quelle est la meilleure façon de les informer ?',
        options: [
          'Célébrer la solution dans un message d’équipe et laisser les deux autres attendre',
          'Partager les trois : ce que vous avez fait, ce qui avance et pourquoi l’un est un non',
          'Remercier chacun pour son implication et dire que la direction est à l’écoute',
          'Attendre que les trois soient réglés avant d’informer, pour éviter la confusion',
        ],
        answer: 1,
        explain: 'Un point complet et honnête montre que chaque contribution a été prise au sérieux. Remercier et dire que la direction écoute paraît chaleureux, mais sans détails cela donne l’impression que les contributions ont disparu.',
      },
      {
        kind: 'action',
        title: 'À essayer cette semaine',
        body: 'Listez trois sujets que votre équipe a soulevés ces deux derniers mois. Pour chacun, écrivez une ligne : ce que vous avez fait, ce qui est en cours ou pourquoi cela ne change pas. Partagez la liste lors de votre prochaine réunion d’équipe ou dans le canal de l’équipe.',
      },
      {
        kind: 'takeaway',
        title: 'À retenir',
        bullets: [
          'Une contribution sans suivi visible paraît ignorée, même si vous avez agi.',
          'Utilisez « vous avez dit, nous avons fait, nous n’avons pas pu » pour des points clairs.',
          'Un non honnête crée plus de confiance que le silence.',
        ],
      },
    ],
  },
};

export default lesson;
