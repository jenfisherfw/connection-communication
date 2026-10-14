import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-42',
  week: 42,
  focus: 'change',
  minutes: 4,
  title: 'Reversing course without losing trust',
  subtitle: 'How to undo a decision in the open and keep your credibility',
  slides: [
    {
      kind: 'cover',
      title: 'Reversing course without losing trust',
      body: 'You announced a change, and now the evidence says it was the wrong call. Backing out feels like losing face, but holding on to a bad decision costs far more trust.',
    },
    {
      kind: 'idea',
      title: 'Changing your mind is not the problem',
      body: 'People rarely lose trust because a leader changes direction. They lose trust when the reversal is hidden, spun, or arrives with no explanation. An honest reversal can show that you listen and that your reasons were real all along.',
      bullets: ['Name the decision plainly', 'Say what you learned', 'Say what happens next'],
    },
    {
      kind: 'idea',
      title: 'Explain the evidence, not just the outcome',
      body: 'Share what changed between the first decision and now. Was it new data, feedback from the team, or a cost you underestimated? When people can follow your reasoning, they can trust your next decision too.',
      bullets: ['What we expected', 'What we actually saw', 'Why that changes the call'],
    },
    {
      kind: 'idea',
      title: 'Own the cost people paid',
      body: 'Some people already adapted. They learned a new tool, changed a routine, or defended the change to their own peers. Acknowledge that effort directly, and tell them what you will do to make switching back as smooth as possible.',
    },
    {
      kind: 'example',
      title: 'Say it straight',
      instead: '"After further review, we’re pausing the rollout for now."',
      tryThis: '"I made a call in March that isn’t working. The pilot showed slower handoffs, not faster. We’re going back to the old process on Monday, and I know many of you already put real work into the switch."',
      why: 'It names the decision, the evidence, and the cost. Vague language invites people to fill the gap with worse stories.',
    },
    {
      kind: 'check',
      question: 'Your team spent two weeks moving to a new scheduling system that you chose. Now you need to reverse it. Which opening is best for the team meeting?',
      options: [
        'Thank everyone warmly for their flexibility, then move straight to the new plan so the meeting stays positive.',
        'Say plainly that your decision did not work, share the data you saw, and acknowledge the effort they put in.',
        'Explain that leadership decided to change direction, so the team understands this was out of your hands.',
        'Ask the team whether they think the old system was really better before you share your own view of it.',
      ],
      answer: 1,
      explain: 'Owning the call, showing the evidence, and naming their effort builds trust. Warm thanks without the why feels like spin, and pointing upward when it was your call erodes credibility. Asking for views is useful later, but first people need clarity on the decision.',
    },
    {
      kind: 'action',
      title: 'Draft your reversal in three lines',
      body: 'Think of one decision you have doubts about, or one you changed recently. In under 10 minutes, write three sentences: what we decided, what we learned, and what happens next. Read it aloud. If any line sounds vague, rewrite it until a new team member would understand it.',
    },
    {
      kind: 'takeaway',
      title: 'Reverse in the open',
      bullets: [
        'A clear reversal can build trust; a hidden one spends it.',
        'Share the evidence so people can follow your reasoning.',
        'Acknowledge the effort people already invested.',
      ],
    },
  ],
  es: {
    title: 'Cambiar de rumbo sin perder la confianza',
    subtitle: 'Cómo deshacer una decisión con transparencia y conservar tu credibilidad',
    slides: [
      {
        kind: 'cover',
        title: 'Cambiar de rumbo sin perder la confianza',
        body: 'Anunciaste un cambio y ahora la evidencia dice que fue un error. Echarte atrás se siente como quedar mal, pero sostener una mala decisión cuesta mucha más confianza.',
      },
      {
        kind: 'idea',
        title: 'Cambiar de opinión no es el problema',
        body: 'La gente rara vez pierde la confianza porque un líder cambia de dirección. La pierde cuando el cambio se esconde, se maquilla o llega sin explicación. Un cambio de rumbo honesto puede demostrar que escuchas y que tus razones siempre fueron reales.',
        bullets: ['Nombra la decisión con claridad', 'Di lo que aprendiste', 'Di lo que sigue'],
      },
      {
        kind: 'idea',
        title: 'Explica la evidencia, no solo el resultado',
        body: 'Comparte qué cambió entre la primera decisión y hoy. ¿Fueron datos nuevos, comentarios del equipo o un costo que subestimaste? Cuando la gente puede seguir tu razonamiento, también puede confiar en tu próxima decisión.',
        bullets: ['Lo que esperábamos', 'Lo que realmente vimos', 'Por qué eso cambia la decisión'],
      },
      {
        kind: 'idea',
        title: 'Reconoce lo que le costó a la gente',
        body: 'Algunas personas ya se adaptaron. Aprendieron una herramienta nueva, cambiaron una rutina o defendieron el cambio ante sus colegas. Reconoce ese esfuerzo de forma directa y diles qué harás para que el regreso sea lo más sencillo posible.',
      },
      {
        kind: 'example',
        title: 'Dilo sin rodeos',
        instead: '“Después de una revisión adicional, pausaremos la implementación por ahora.”',
        tryThis: '“En marzo tomé una decisión que no está funcionando. El piloto mostró entregas más lentas, no más rápidas. El lunes volvemos al proceso anterior, y sé que muchos de ustedes ya invirtieron un esfuerzo real en el cambio.”',
        why: 'Nombra la decisión, la evidencia y el costo. El lenguaje vago invita a la gente a llenar el vacío con historias peores.',
      },
      {
        kind: 'check',
        question: 'Tu equipo pasó dos semanas migrando a un nuevo sistema de horarios que tú elegiste. Ahora necesitas revertirlo. ¿Cuál es la mejor forma de abrir la reunión de equipo?',
        options: [
          'Agradecer con calidez la flexibilidad de todos y pasar directo al nuevo plan para mantener un tono positivo.',
          'Decir con claridad que tu decisión no funcionó, compartir los datos que viste y reconocer su esfuerzo.',
          'Explicar que la dirección decidió cambiar el rumbo, para que el equipo entienda que no dependía de ti.',
          'Preguntar al equipo si de verdad cree que el sistema anterior era mejor antes de dar tu propia opinión.',
        ],
        answer: 1,
        explain: 'Asumir la decisión, mostrar la evidencia y nombrar su esfuerzo genera confianza. Agradecer sin explicar el porqué suena a maquillaje, y señalar hacia arriba cuando la decisión fue tuya erosiona tu credibilidad. Pedir opiniones es útil después, pero primero la gente necesita claridad sobre la decisión.',
      },
      {
        kind: 'action',
        title: 'Redacta tu cambio de rumbo en tres líneas',
        body: 'Piensa en una decisión que te genera dudas o en una que cambiaste hace poco. En menos de 10 minutos, escribe tres oraciones: qué decidimos, qué aprendimos y qué sigue. Léelas en voz alta. Si alguna suena vaga, reescríbela hasta que alguien recién llegado al equipo la entienda.',
      },
      {
        kind: 'takeaway',
        title: 'Cambia de rumbo a la vista de todos',
        bullets: [
          'Un cambio de rumbo claro puede generar confianza; uno escondido la gasta.',
          'Comparte la evidencia para que la gente siga tu razonamiento.',
          'Reconoce el esfuerzo que la gente ya invirtió.',
        ],
      },
    ],
  },
  fr: {
    title: 'Faire marche arrière sans perdre la confiance',
    subtitle: 'Revenir sur une décision en toute transparence et garder votre crédibilité',
    slides: [
      {
        kind: 'cover',
        title: 'Faire marche arrière sans perdre la confiance',
        body: 'Vous avez annoncé un changement, et les faits montrent maintenant que c’était une erreur. Reculer donne l’impression de perdre la face, mais s’accrocher à une mauvaise décision coûte bien plus de confiance.',
      },
      {
        kind: 'idea',
        title: 'Changer d’avis n’est pas le problème',
        body: 'Les équipes perdent rarement confiance parce qu’un leader change de direction. Elles la perdent quand le revirement est caché, enjolivé ou arrive sans explication. Un revirement honnête peut montrer que vous écoutez et que vos raisons étaient sincères.',
        bullets: ['Nommez clairement la décision', 'Dites ce que vous avez appris', 'Dites ce qui se passe ensuite'],
      },
      {
        kind: 'idea',
        title: 'Expliquez les faits, pas seulement le résultat',
        body: 'Partagez ce qui a changé entre la première décision et aujourd’hui. De nouvelles données, des retours de l’équipe, un coût sous-estimé ? Quand les gens peuvent suivre votre raisonnement, ils peuvent aussi faire confiance à votre prochaine décision.',
        bullets: ['Ce que nous attendions', 'Ce que nous avons réellement constaté', 'Pourquoi cela change la décision'],
      },
      {
        kind: 'idea',
        title: 'Reconnaissez ce que cela a coûté',
        body: 'Certaines personnes se sont déjà adaptées. Elles ont appris un nouvel outil, changé une routine ou défendu le changement auprès de leurs collègues. Reconnaissez cet effort directement et dites ce que vous ferez pour faciliter le retour en arrière.',
      },
      {
        kind: 'example',
        title: 'Dites-le franchement',
        instead: '« Après un examen plus approfondi, nous suspendons le déploiement pour le moment. »',
        tryThis: '« En mars, j’ai pris une décision qui ne fonctionne pas. Le pilote a montré des transmissions plus lentes, pas plus rapides. Lundi, nous revenons à l’ancien processus, et je sais que beaucoup d’entre vous ont déjà beaucoup investi dans ce changement. »',
        why: 'Cette phrase nomme la décision, les faits et le coût. Le flou pousse les gens à combler le vide avec des histoires pires.',
      },
      {
        kind: 'check',
        question: 'Votre équipe a passé deux semaines à adopter un nouvel outil de planning que vous aviez choisi. Vous devez maintenant faire marche arrière. Quelle ouverture est la meilleure pour la réunion d’équipe ?',
        options: [
          'Remercier chaleureusement chacun pour sa souplesse, puis passer directement au nouveau plan pour rester positif.',
          'Dire clairement que votre décision n’a pas fonctionné, partager les données et reconnaître leurs efforts.',
          'Expliquer que la direction a décidé de changer de cap, pour que l’équipe comprenne que cela ne dépendait pas de vous.',
          'Demander à l’équipe si l’ancien outil était vraiment meilleur avant de donner votre propre point de vue.',
        ],
        answer: 1,
        explain: 'Assumer la décision, montrer les faits et nommer leurs efforts renforce la confiance. Des remerciements sans le pourquoi sonnent comme de l’enjolivement, et renvoyer vers la direction quand la décision était la vôtre érode votre crédibilité. Demander des avis est utile ensuite, mais il faut d’abord de la clarté sur la décision.',
      },
      {
        kind: 'action',
        title: 'Rédigez votre revirement en trois lignes',
        body: 'Pensez à une décision qui vous fait douter, ou à une que vous avez changée récemment. En moins de 10 minutes, écrivez trois phrases : ce que nous avons décidé, ce que nous avons appris, ce qui se passe ensuite. Lisez-les à voix haute. Si une ligne reste floue, réécrivez-la jusqu’à ce qu’un nouvel arrivant la comprenne.',
      },
      {
        kind: 'takeaway',
        title: 'Faites marche arrière ouvertement',
        bullets: [
          'Un revirement clair peut renforcer la confiance ; un revirement caché l’use.',
          'Partagez les faits pour que chacun suive votre raisonnement.',
          'Reconnaissez les efforts déjà fournis.',
        ],
      },
    ],
  },
};

export default lesson;
