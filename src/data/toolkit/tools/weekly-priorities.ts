import type { Tool } from '../types';

const tool: Tool = {
  id: 'weekly-priorities',
  category: 'time',
  icon: 'target',
  minutes: 15,
  title: 'Weekly Priorities Planner',
  summary: 'Pick the few outcomes that matter most this week, decide what you will say no to, and block the time to get them done.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it at the start of each week, ideally Friday afternoon or Monday morning before you open your inbox. It takes about 15 minutes and turns a long to do list into three clear outcomes, a short “not this week” list, and protected time on your calendar.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Write outcomes, not tasks: “Budget proposal sent to finance,” not “Work on budget.”',
        'Stop at three. If everything is a priority, nothing is.',
        'For each outcome, ask: what happens if this slips a week? Keep the ones with real consequences.',
        'Name at least two things you will decline, delay, or hand off to make room.',
        'Book time blocks now, while your calendar still has space, and treat them like meetings.',
        'Share your top three with your manager or team so they know where your focus is.',
      ],
    },
    {
      heading: 'Weekly planner',
      template: `WEEKLY PRIORITIES
Week of: [date]

MY TOP 3 OUTCOMES
1. [Outcome]
   Done looks like: [specific result]
   Why it matters: [impact]
2. [Outcome]
   Done looks like: [specific result]
   Why it matters: [impact]
3. [Outcome]
   Done looks like: [specific result]
   Why it matters: [impact]

TIME FOR MY PEOPLE
• 1:1s this week: [names]
• Someone to recognize: [name, what they did]

NOT THIS WEEK (say no, delay, or hand off)
• [Item] → [decline / move to (date) / give to (name)]
• [Item] → [decline / move to (date) / give to (name)]

PROTECTED TIME BLOCKS
• [Day, time]: [Outcome 1]
• [Day, time]: [Outcome 2]
• [Day, time]: [Outcome 3]

FRIDAY CHECK
☐ Outcome 1 done
☐ Outcome 2 done
☐ Outcome 3 done
What got in the way: [notes]
What I’ll change next week: [notes]`,
    },
    {
      heading: 'Saying no with care',
      template: `“Thanks for thinking of me. This week I’m focused on [priority], so I can’t take this on well right now. I could [help on (date) / suggest (name) / give you 15 minutes of input]. Would that work?”`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Listing ten priorities and calling them three.',
        'Blocking time but giving it away to the first request that arrives.',
        'Leaving out time for your people, like 1:1s and coaching.',
        'Skipping the Friday check, so you never learn what keeps pulling you off track.',
      ],
    },
  ],
  es: {
    title: 'Planificador de prioridades semanales',
    summary: 'Elige los pocos resultados que más importan esta semana, decide a qué dirás que no y reserva el tiempo para lograrlos.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo al inicio de cada semana, idealmente el viernes por la tarde o el lunes por la mañana antes de abrir tu correo. Toma unos 15 minutos y convierte una larga lista de pendientes en tres resultados claros, una breve lista de “esta semana no” y tiempo protegido en tu calendario.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Escribe resultados, no tareas: “Propuesta de presupuesto enviada a finanzas”, no “Trabajar en el presupuesto”.',
          'Detente en tres. Si todo es prioridad, nada lo es.',
          'Para cada resultado, pregúntate: ¿qué pasa si se retrasa una semana? Quédate con los que tienen consecuencias reales.',
          'Nombra al menos dos cosas que vas a rechazar, posponer o delegar para hacer espacio.',
          'Reserva los bloques de tiempo ahora, mientras tu calendario aún tiene espacio, y trátalos como reuniones.',
          'Comparte tus tres prioridades con tu jefe o tu equipo para que sepan dónde está tu enfoque.',
        ],
      },
      {
        heading: 'Planificador semanal',
        template: `PRIORIDADES SEMANALES
Semana del: [fecha]

MIS 3 RESULTADOS PRINCIPALES
1. [Resultado]
   Terminado significa: [resultado concreto]
   Por qué importa: [impacto]
2. [Resultado]
   Terminado significa: [resultado concreto]
   Por qué importa: [impacto]
3. [Resultado]
   Terminado significa: [resultado concreto]
   Por qué importa: [impacto]

TIEMPO PARA MI GENTE
• 1:1 esta semana: [nombres]
• Alguien a quien reconocer: [nombre, qué hizo]

ESTA SEMANA NO (decir que no, posponer o delegar)
• [Tema] → [rechazar / mover al (fecha) / dar a (nombre)]
• [Tema] → [rechazar / mover al (fecha) / dar a (nombre)]

BLOQUES DE TIEMPO PROTEGIDOS
• [Día, hora]: [Resultado 1]
• [Día, hora]: [Resultado 2]
• [Día, hora]: [Resultado 3]

REVISIÓN DEL VIERNES
☐ Resultado 1 logrado
☐ Resultado 2 logrado
☐ Resultado 3 logrado
Qué se interpuso: [notas]
Qué cambiaré la próxima semana: [notas]`,
      },
      {
        heading: 'Decir que no con cuidado',
        template: `“Gracias por pensar en mí. Esta semana mi enfoque está en [prioridad], así que ahora no puedo hacerlo bien. Podría [ayudarte el (fecha) / sugerirte a (nombre) / darte 15 minutos de opinión]. ¿Te funciona?”`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Hacer una lista de diez prioridades y llamarlas tres.',
          'Bloquear tiempo pero cederlo a la primera solicitud que llega.',
          'Olvidar el tiempo para tu gente, como los 1:1 y el coaching.',
          'Saltarte la revisión del viernes y nunca aprender qué te sigue desviando.',
        ],
      },
    ],
  },
  fr: {
    title: 'Planificateur de priorités hebdomadaires',
    summary: 'Choisissez les quelques résultats qui comptent le plus cette semaine, décidez à quoi vous direz non et bloquez le temps pour y arriver.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le au début de chaque semaine, idéalement le vendredi après-midi ou le lundi matin avant d’ouvrir votre messagerie. Il prend environ 15 minutes et transforme une longue liste de tâches en trois résultats clairs, une courte liste « pas cette semaine » et du temps protégé dans votre agenda.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Écrivez des résultats, pas des tâches : « Proposition budgétaire envoyée aux finances », et non « Travailler sur le budget ».',
          'Arrêtez-vous à trois. Si tout est prioritaire, rien ne l’est.',
          'Pour chaque résultat, demandez-vous : que se passe-t-il s’il glisse d’une semaine ? Gardez ceux qui ont de vraies conséquences.',
          'Nommez au moins deux choses que vous refuserez, reporterez ou déléguerez pour faire de la place.',
          'Réservez les plages horaires maintenant, tant que votre agenda a de la place, et traitez-les comme des réunions.',
          'Partagez vos trois priorités avec votre responsable ou votre équipe pour qu’ils sachent où est votre attention.',
        ],
      },
      {
        heading: 'Planificateur de la semaine',
        template: `PRIORITÉS DE LA SEMAINE
Semaine du : [date]

MES 3 RÉSULTATS CLÉS
1. [Résultat]
   Terminé signifie : [résultat concret]
   Pourquoi c’est important : [impact]
2. [Résultat]
   Terminé signifie : [résultat concret]
   Pourquoi c’est important : [impact]
3. [Résultat]
   Terminé signifie : [résultat concret]
   Pourquoi c’est important : [impact]

DU TEMPS POUR MON ÉQUIPE
• Entretiens individuels cette semaine : [noms]
• Une personne à reconnaître : [nom, ce qu’elle a fait]

PAS CETTE SEMAINE (refuser, reporter ou déléguer)
• [Sujet] → [refuser / reporter au (date) / confier à (nom)]
• [Sujet] → [refuser / reporter au (date) / confier à (nom)]

PLAGES PROTÉGÉES
• [Jour, heure] : [Résultat 1]
• [Jour, heure] : [Résultat 2]
• [Jour, heure] : [Résultat 3]

BILAN DU VENDREDI
☐ Résultat 1 atteint
☐ Résultat 2 atteint
☐ Résultat 3 atteint
Ce qui m’a freiné : [notes]
Ce que je changerai la semaine prochaine : [notes]`,
      },
      {
        heading: 'Dire non avec égard',
        template: `« Merci d’avoir pensé à moi. Cette semaine, je me concentre sur [priorité], donc je ne peux pas m’en occuper correctement pour l’instant. Je pourrais [vous aider le (date) / vous suggérer (nom) / vous donner 15 minutes d’avis]. Est-ce que cela vous conviendrait ? »`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Lister dix priorités et les appeler trois.',
          'Bloquer du temps, puis le céder à la première demande qui arrive.',
          'Oublier le temps pour votre équipe, comme les entretiens individuels et le coaching.',
          'Sauter le bilan du vendredi, et ne jamais comprendre ce qui vous détourne.',
        ],
      },
    ],
  },
};

export default tool;
