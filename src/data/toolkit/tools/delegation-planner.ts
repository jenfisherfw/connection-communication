import type { Tool } from '../types';

const tool: Tool = {
  id: 'delegation-planner',
  category: 'time',
  icon: 'share-2',
  minutes: 20,
  title: 'Delegation Planner',
  summary: 'Plan what to hand off, to whom, with how much authority, and how you will check in, so the work gets done and your people grow.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it when you notice you are the bottleneck, when someone on your team is ready to stretch, or before time off. Good delegation hands over a result and the authority to reach it, not just a list of steps.',
    },
    {
      heading: 'Choose the level of authority',
      bullets: [
        'Level 1, Look into it: gather facts and bring them to me. I decide.',
        'Level 2, Recommend: bring options and your recommendation. I decide.',
        'Level 3, Decide after a check: tell me what you plan to do, then go ahead unless I object.',
        'Level 4, Do it and tell me after: act, then keep me informed.',
        'Level 5, Fully yours: no need to report back unless something changes.',
      ],
    },
    {
      heading: 'How to use it',
      bullets: [
        'Pick work someone else can do at 80 percent of your quality, or work that would help them grow.',
        'Match the person to the task based on skill, interest, and current workload. Ask before assigning.',
        'Say the authority level out loud so nobody guesses.',
        'Agree on what success looks like and when you will check in, then step back between check ins.',
        'Start lower on authority with new tasks, and raise it as trust builds.',
      ],
    },
    {
      heading: 'Delegation plan',
      template: `DELEGATION PLAN

TASK OR OUTCOME: [what needs to happen]
HANDED TO: [name]
WHY THEM: [growth goal, strength, interest]

AUTHORITY LEVEL (pick one)
☐ 1. Look into it, I decide
☐ 2. Recommend, I decide
☐ 3. Tell me your plan, then go ahead
☐ 4. Do it and tell me after
☐ 5. Fully yours

SUCCESS LOOKS LIKE
• [result]
• [quality bar or standard]
• Due: [date]

WHAT THEY NEED
• Resources and access: [list]
• People to involve: [names]
• Limits: [budget, scope, what not to change]

CHECK IN POINTS
• [date]: [what we’ll review]
• [date]: [what we’ll review]

HOW I’LL SUPPORT
• Available for questions: [how and when]
• I’ll share credit by: [how]`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Handing off only the boring work and keeping every interesting decision.',
        'Not naming the authority level, then overriding choices later.',
        'Checking in so often that it feels like watching over their shoulder.',
        'Taking the work back the first time it is done differently than you would.',
      ],
    },
  ],
  es: {
    title: 'Planificador de delegación',
    summary: 'Planifica qué delegar, a quién, con cuánta autoridad y cómo harás seguimiento, para que el trabajo se haga y tu gente crezca.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo cuando notes que eres el cuello de botella, cuando alguien de tu equipo esté listo para un reto, o antes de tomarte días libres. Delegar bien es entregar un resultado y la autoridad para lograrlo, no solo una lista de pasos.',
      },
      {
        heading: 'Elige el nivel de autoridad',
        bullets: [
          'Nivel 1, Investígalo: reúne datos y tráemelos. Yo decido.',
          'Nivel 2, Recomienda: trae opciones y tu recomendación. Yo decido.',
          'Nivel 3, Decide tras consultar: cuéntame qué planeas hacer y adelante, salvo que yo objete.',
          'Nivel 4, Hazlo y cuéntame después: actúa y luego mantenme informado.',
          'Nivel 5, Es todo tuyo: no hace falta reportar, salvo que algo cambie.',
        ],
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Elige trabajo que otra persona pueda hacer al 80 por ciento de tu calidad, o trabajo que la ayude a crecer.',
          'Asigna según habilidad, interés y carga actual. Pregunta antes de asignar.',
          'Di el nivel de autoridad en voz alta para que nadie tenga que adivinar.',
          'Acuerden cómo se ve el éxito y cuándo harán seguimiento, y luego da espacio entre cada revisión.',
          'Empieza con menos autoridad en tareas nuevas y auméntala a medida que crece la confianza.',
        ],
      },
      {
        heading: 'Plan de delegación',
        template: `PLAN DE DELEGACIÓN

TAREA O RESULTADO: [qué debe lograrse]
ENTREGADO A: [nombre]
POR QUÉ ESTA PERSONA: [meta de desarrollo, fortaleza, interés]

NIVEL DE AUTORIDAD (elige uno)
☐ 1. Investígalo, yo decido
☐ 2. Recomienda, yo decido
☐ 3. Cuéntame tu plan y adelante
☐ 4. Hazlo y cuéntame después
☐ 5. Es todo tuyo

EL ÉXITO SE VE ASÍ
• [resultado]
• [nivel de calidad o estándar]
• Fecha límite: [fecha]

LO QUE NECESITA
• Recursos y accesos: [lista]
• Personas a involucrar: [nombres]
• Límites: [presupuesto, alcance, qué no cambiar]

PUNTOS DE SEGUIMIENTO
• [fecha]: [qué revisaremos]
• [fecha]: [qué revisaremos]

CÓMO LA APOYARÉ
• Disponible para preguntas: [cómo y cuándo]
• Daré el crédito así: [cómo]`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Delegar solo el trabajo aburrido y quedarte con todas las decisiones interesantes.',
          'No decir el nivel de autoridad y luego anular decisiones.',
          'Hacer seguimiento tan seguido que se siente como vigilancia.',
          'Retomar el trabajo la primera vez que se hace distinto a como tú lo harías.',
        ],
      },
    ],
  },
  fr: {
    title: 'Planificateur de délégation',
    summary: 'Planifiez quoi confier, à qui, avec quel niveau d’autorité et comment vous ferez le point, pour que le travail avance et que votre équipe progresse.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le quand vous remarquez que tout passe par vous, quand une personne de votre équipe est prête pour un défi, ou avant un congé. Bien déléguer, c’est confier un résultat et l’autorité pour l’atteindre, pas seulement une liste d’étapes.',
      },
      {
        heading: 'Choisir le niveau d’autorité',
        bullets: [
          'Niveau 1, Renseignez-vous : rassemblez les faits et apportez-les-moi. Je décide.',
          'Niveau 2, Recommandez : apportez des options et votre recommandation. Je décide.',
          'Niveau 3, Décidez après validation : dites-moi ce que vous prévoyez, puis allez-y sauf objection de ma part.',
          'Niveau 4, Faites et informez-moi ensuite : agissez, puis tenez-moi au courant.',
          'Niveau 5, C’est à vous : pas besoin de me rendre compte, sauf si quelque chose change.',
        ],
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Choisissez un travail qu’une autre personne peut faire à 80 pour cent de votre qualité, ou qui l’aidera à grandir.',
          'Choisissez la personne selon ses compétences, son intérêt et sa charge actuelle. Demandez avant d’attribuer.',
          'Annoncez clairement le niveau d’autorité pour que personne n’ait à deviner.',
          'Convenez de ce qu’est la réussite et des points d’étape, puis laissez de l’espace entre deux points.',
          'Commencez avec moins d’autorité sur une tâche nouvelle, et augmentez-la à mesure que la confiance grandit.',
        ],
      },
      {
        heading: 'Plan de délégation',
        template: `PLAN DE DÉLÉGATION

TÂCHE OU RÉSULTAT : [ce qui doit être accompli]
CONFIÉ À : [nom]
POURQUOI CETTE PERSONNE : [objectif de développement, force, intérêt]

NIVEAU D’AUTORITÉ (choisir un)
☐ 1. Renseignez-vous, je décide
☐ 2. Recommandez, je décide
☐ 3. Dites-moi votre plan, puis allez-y
☐ 4. Faites et informez-moi ensuite
☐ 5. C’est à vous

LA RÉUSSITE, C’EST
• [résultat]
• [niveau de qualité ou norme]
• Échéance : [date]

CE DONT LA PERSONNE A BESOIN
• Ressources et accès : [liste]
• Personnes à impliquer : [noms]
• Limites : [budget, périmètre, ce qu’il ne faut pas changer]

POINTS D’ÉTAPE
• [date] : [ce que nous examinerons]
• [date] : [ce que nous examinerons]

COMMENT JE VAIS SOUTENIR
• Disponible pour les questions : [comment et quand]
• Je reconnaîtrai son travail en : [comment]`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Ne confier que le travail ennuyeux et garder toutes les décisions intéressantes.',
          'Ne pas annoncer le niveau d’autorité, puis revenir sur les choix.',
          'Faire le point si souvent que cela ressemble à de la surveillance.',
          'Reprendre le travail dès la première fois qu’il est fait autrement que vous l’auriez fait.',
        ],
      },
    ],
  },
};

export default tool;
