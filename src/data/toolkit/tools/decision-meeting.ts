import type { Tool } from '../types';

const tool: Tool = {
  id: 'decision-meeting',
  category: 'meetings',
  icon: 'git-branch',
  minutes: 20,
  title: 'Decision Meeting Template',
  summary: 'Run a meeting that ends in a clear decision, with options weighed, roles agreed, dissent heard, and a plan to share the outcome.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it when a choice affects several people or teams, when a decision has stalled across many meetings, or when people disagree. Fill in the top half before the meeting and share it with attendees, so the time together goes to weighing options, not explaining them.',
    },
    {
      heading: 'Agree on how the decision gets made',
      bullets: [
        'Decide: one person makes the call after hearing input. Fast and clear.',
        'Consult: the decider asks specific people for their view first, then decides.',
        'Agree: the group must reach a choice everyone can support. Slower, but builds buy in.',
        'Say which approach you are using at the start, and who the decider is.',
      ],
    },
    {
      heading: 'How to run it',
      bullets: [
        'Start by reading the decision question aloud and checking everyone understands it the same way.',
        'Agree on the criteria before discussing options, so the debate stays focused.',
        'Ask for concerns directly: “What would make this fail?” Invite quieter voices first.',
        'Write down dissent in the notes. Disagreeing and then committing is healthy.',
        'If the decision touches performance, conduct, pay, or legal matters, involve HR before the meeting.',
      ],
    },
    {
      heading: 'Decision template',
      template: `DECISION MEETING
[Date], [time], [place or link]

THE DECISION
We need to decide: [one clear question]
Decide by: [date]
Why now: [context, cost of waiting]

WHO DECIDES AND HOW
Decider: [name]
Approach: ☐ Decide ☐ Consult ☐ Agree
Input from: [names]
Kept informed: [names or groups]

CRITERIA (what a good choice must do)
1. [criterion]
2. [criterion]
3. [criterion]

OPTIONS
A. [option]
   Pros: [list]
   Cons and risks: [list]
B. [option]
   Pros: [list]
   Cons and risks: [list]
C. [option]
   Pros: [list]
   Cons and risks: [list]

DECISION
We chose: [option]
Because: [reason, tied to criteria]

DISSENT AND CONCERNS
• [name or role]: [concern], how we’ll address it: [step]

COMMUNICATING IT
• Who needs to hear: [people or teams]
• Who tells them: [name]
• How and when: [channel, date]
• Key message: [one or two sentences]

NEXT STEPS
☐ [Action], [owner], [date]
☐ [Action], [owner], [date]
Revisit on: [date, if needed]`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Leaving without saying the decision out loud, so people walk away with different versions.',
        'Asking for input on a decision that is already made. Be honest about what is open.',
        'Treating silence as agreement.',
        'Forgetting to tell the people affected, who then hear about it secondhand.',
      ],
    },
  ],
  es: {
    title: 'Plantilla de reunión de decisión',
    summary: 'Dirige una reunión que termine en una decisión clara, con opciones evaluadas, roles acordados, desacuerdos escuchados y un plan para comunicar el resultado.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo cuando una decisión afecta a varias personas o equipos, cuando una decisión lleva varias reuniones estancada, o cuando hay desacuerdo. Completa la primera mitad antes de la reunión y compártela con los participantes, para que el tiempo juntos se use en evaluar opciones, no en explicarlas.',
      },
      {
        heading: 'Acuerden cómo se toma la decisión',
        bullets: [
          'Decidir: una persona decide después de escuchar aportes. Rápido y claro.',
          'Consultar: quien decide pide primero la opinión de personas concretas y luego decide.',
          'Acordar: el grupo debe llegar a una opción que todos puedan apoyar. Más lento, pero genera compromiso.',
          'Di al inicio qué enfoque usarán y quién decide.',
        ],
      },
      {
        heading: 'Cómo dirigirla',
        bullets: [
          'Empieza leyendo la pregunta de decisión en voz alta y verifica que todos la entiendan igual.',
          'Acuerden los criterios antes de hablar de opciones, para que el debate se mantenga enfocado.',
          'Pide las preocupaciones de forma directa: “¿Qué haría que esto fracase?”. Invita primero a quienes hablan menos.',
          'Anota los desacuerdos en las notas. Discrepar y luego comprometerse es sano.',
          'Si la decisión toca desempeño, conducta, salario o temas legales, involucra a Recursos Humanos antes de la reunión.',
        ],
      },
      {
        heading: 'Plantilla de decisión',
        template: `REUNIÓN DE DECISIÓN
[Fecha], [hora], [lugar o enlace]

LA DECISIÓN
Necesitamos decidir: [una pregunta clara]
Decidir para el: [fecha]
Por qué ahora: [contexto, costo de esperar]

QUIÉN DECIDE Y CÓMO
Decide: [nombre]
Enfoque: ☐ Decidir ☐ Consultar ☐ Acordar
Aportes de: [nombres]
Se mantiene informados a: [nombres o grupos]

CRITERIOS (lo que debe lograr una buena opción)
1. [criterio]
2. [criterio]
3. [criterio]

OPCIONES
A. [opción]
   A favor: [lista]
   En contra y riesgos: [lista]
B. [opción]
   A favor: [lista]
   En contra y riesgos: [lista]
C. [opción]
   A favor: [lista]
   En contra y riesgos: [lista]

DECISIÓN
Elegimos: [opción]
Porque: [razón, ligada a los criterios]

DESACUERDOS Y PREOCUPACIONES
• [nombre o rol]: [preocupación], cómo la atenderemos: [paso]

CÓMO LO COMUNICAREMOS
• Quién debe saberlo: [personas o equipos]
• Quién se lo dirá: [nombre]
• Cómo y cuándo: [canal, fecha]
• Mensaje clave: [una o dos oraciones]

PRÓXIMOS PASOS
☐ [Acción], [responsable], [fecha]
☐ [Acción], [responsable], [fecha]
Revisar de nuevo el: [fecha, si hace falta]`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Terminar sin decir la decisión en voz alta, y que cada quien se lleve una versión distinta.',
          'Pedir aportes sobre una decisión que ya está tomada. Deja claro qué está abierto.',
          'Tomar el silencio como acuerdo.',
          'Olvidar avisar a las personas afectadas, que luego se enteran por terceros.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle de réunion de décision',
    summary: 'Animez une réunion qui aboutit à une décision claire, avec des options pesées, des rôles convenus, des désaccords entendus et un plan pour communiquer le résultat.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le quand un choix touche plusieurs personnes ou équipes, quand une décision est bloquée depuis plusieurs réunions, ou quand les avis divergent. Remplissez la première moitié avant la réunion et partagez-la avec les participants, pour que le temps ensemble serve à peser les options, pas à les expliquer.',
      },
      {
        heading: 'Convenir de la façon de décider',
        bullets: [
          'Décider : une personne tranche après avoir écouté les avis. Rapide et clair.',
          'Consulter : la personne qui décide demande d’abord l’avis de personnes précises, puis décide.',
          'S’accorder : le groupe doit arriver à un choix que chacun peut soutenir. Plus lent, mais renforce l’adhésion.',
          'Annoncez dès le début l’approche choisie et qui décide.',
        ],
      },
      {
        heading: 'Comment l’animer',
        bullets: [
          'Commencez par lire la question à trancher à voix haute et vérifiez que tout le monde la comprend de la même façon.',
          'Convenez des critères avant de discuter des options, pour garder un débat ciblé.',
          'Demandez directement les réserves : « Qu’est-ce qui pourrait faire échouer ceci ? » Invitez d’abord les personnes plus discrètes.',
          'Notez les désaccords dans le compte rendu. Exprimer un désaccord puis s’engager, c’est sain.',
          'Si la décision touche la performance, le comportement, la rémunération ou des questions juridiques, impliquez les RH avant la réunion.',
        ],
      },
      {
        heading: 'Modèle de décision',
        template: `RÉUNION DE DÉCISION
[Date], [heure], [lieu ou lien]

LA DÉCISION
Nous devons décider : [une question claire]
À décider avant le : [date]
Pourquoi maintenant : [contexte, coût de l’attente]

QUI DÉCIDE ET COMMENT
Décideur : [nom]
Approche : ☐ Décider ☐ Consulter ☐ S’accorder
Avis de : [noms]
Tenus informés : [noms ou groupes]

CRITÈRES (ce qu’un bon choix doit permettre)
1. [critère]
2. [critère]
3. [critère]

OPTIONS
A. [option]
   Avantages : [liste]
   Inconvénients et risques : [liste]
B. [option]
   Avantages : [liste]
   Inconvénients et risques : [liste]
C. [option]
   Avantages : [liste]
   Inconvénients et risques : [liste]

DÉCISION
Nous avons choisi : [option]
Parce que : [raison, liée aux critères]

DÉSACCORDS ET RÉSERVES
• [nom ou rôle] : [réserve], comment nous y répondrons : [étape]

COMMUNICATION
• Qui doit être informé : [personnes ou équipes]
• Qui l’annonce : [nom]
• Comment et quand : [canal, date]
• Message clé : [une ou deux phrases]

PROCHAINES ÉTAPES
☐ [Action], [responsable], [date]
☐ [Action], [responsable], [date]
À revoir le : [date, si besoin]`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Partir sans énoncer la décision à voix haute, si bien que chacun repart avec sa propre version.',
          'Demander des avis sur une décision déjà prise. Dites clairement ce qui reste ouvert.',
          'Prendre le silence pour un accord.',
          'Oublier d’informer les personnes concernées, qui l’apprennent alors par d’autres.',
        ],
      },
    ],
  },
};

export default tool;
