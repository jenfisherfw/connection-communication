import type { Tool } from '../types';

const tool: Tool = {
  id: 'weekly-team-update',
  category: 'team',
  icon: 'send',
  minutes: 15,
  title: 'Weekly Team Update Template',
  summary: 'Send a short weekly note that celebrates wins, keeps priorities clear, and surfaces blockers early.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use this at the same time each week, such as Friday afternoon or Monday morning. A steady, short update cuts down on status meetings and helps people who missed a conversation stay in the loop.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Keep it short enough to read in two minutes.',
        'Name people in shout outs and say what they did.',
        'Limit priorities to three so they stay meaningful.',
        'Ask for help clearly: who, what, and by when.',
        'Send it on the same day and time every week.',
      ],
    },
    {
      heading: 'Update template',
      template: `Subject: Team update, week of [date]

Hi team,

WINS AND SHOUT OUTS
• [Name] [what they did and why it mattered]
• [Win]

TOP PRIORITIES THIS WEEK
1. [Priority]
2. [Priority]
3. [Priority]

CHANGES AND DECISIONS
• [What changed or was decided, and why]

BLOCKERS AND ASKS
• [Blocker]: need [what] from [who] by [date]

COMING UP
• [Date]: [event, deadline, or milestone]

Questions? Reply here or bring them to [meeting].

Thanks,
[Your name]`,
    },
    {
      heading: 'Example',
      body: 'Wins: Priya closed the vendor contract two days early, which saved our launch date. Priorities: finish testing, train support, and confirm the launch plan. Decision: we moved the launch to the 18th to give support more time. Ask: we need final copy from Marketing by Wednesday.',
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Turning the update into a long list of every task.',
        'Thanking “everyone” instead of naming specific people.',
        'Burying an urgent ask at the bottom.',
      ],
    },
  ],
  es: {
    title: 'Plantilla de novedades semanales del equipo',
    summary: 'Envía una nota semanal breve que celebre los logros, mantenga claras las prioridades y saque a la luz los obstáculos a tiempo.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala a la misma hora cada semana, por ejemplo el viernes por la tarde o el lunes por la mañana. Unas novedades breves y constantes reducen las reuniones de seguimiento y ayudan a quien se perdió una conversación a estar al día.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Hazla tan breve que se lea en dos minutos.',
          'Nombra a las personas en los reconocimientos y di qué hicieron.',
          'Limita las prioridades a tres para que tengan peso.',
          'Pide ayuda con claridad: quién, qué y para cuándo.',
          'Envíala el mismo día y a la misma hora cada semana.',
        ],
      },
      {
        heading: 'Plantilla',
        template: `Asunto: Novedades del equipo, semana del [fecha]

Hola, equipo:

LOGROS Y RECONOCIMIENTOS
• [Nombre] [qué hizo y por qué importó]
• [Logro]

PRIORIDADES DE ESTA SEMANA
1. [Prioridad]
2. [Prioridad]
3. [Prioridad]

CAMBIOS Y DECISIONES
• [Qué cambió o se decidió, y por qué]

OBSTÁCULOS Y PEDIDOS
• [Obstáculo]: necesitamos [qué] de [quién] para el [fecha]

PRÓXIMAMENTE
• [Fecha]: [evento, plazo o hito]

¿Preguntas? Responde aquí o tráelas a [reunión].

Gracias,
[Tu nombre]`,
      },
      {
        heading: 'Ejemplo',
        body: 'Logros: Priya cerró el contrato con el proveedor dos días antes, lo que salvó nuestra fecha de lanzamiento. Prioridades: terminar las pruebas, capacitar a soporte y confirmar el plan de lanzamiento. Decisión: movimos el lanzamiento al día 18 para dar más tiempo a soporte. Pedido: necesitamos los textos finales de Marketing para el miércoles.',
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Convertir las novedades en una larga lista de todas las tareas.',
          'Agradecer a “todos” en lugar de nombrar a personas concretas.',
          'Esconder un pedido urgente al final.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle de point hebdomadaire d’équipe',
    summary: 'Envoyez chaque semaine une note courte qui célèbre les réussites, clarifie les priorités et fait remonter tôt les blocages.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le au même moment chaque semaine, par exemple le vendredi après-midi ou le lundi matin. Un point court et régulier réduit les réunions de suivi et aide ceux qui ont manqué une discussion à rester informés.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Restez assez bref pour une lecture en deux minutes.',
          'Nommez les personnes dans les remerciements et dites ce qu’elles ont fait.',
          'Limitez-vous à trois priorités pour qu’elles gardent leur sens.',
          'Demandez de l’aide clairement : qui, quoi et pour quand.',
          'Envoyez-le le même jour et à la même heure chaque semaine.',
        ],
      },
      {
        heading: 'Modèle',
        template: `Objet : Point d’équipe, semaine du [date]

Bonjour à tous,

RÉUSSITES ET REMERCIEMENTS
• [Nom] [ce qu’il ou elle a fait et pourquoi c’est important]
• [Réussite]

PRIORITÉS DE LA SEMAINE
1. [Priorité]
2. [Priorité]
3. [Priorité]

CHANGEMENTS ET DÉCISIONS
• [Ce qui a changé ou été décidé, et pourquoi]

BLOCAGES ET DEMANDES
• [Blocage] : besoin de [quoi] de la part de [qui] d’ici le [date]

À VENIR
• [Date] : [événement, échéance ou étape]

Des questions ? Répondez ici ou apportez-les à [réunion].

Merci,
[Votre nom]`,
      },
      {
        heading: 'Exemple',
        body: 'Réussites : Priya a conclu le contrat fournisseur avec deux jours d’avance, ce qui a sauvé notre date de lancement. Priorités : terminer les tests, former le support et confirmer le plan de lancement. Décision : nous avons décalé le lancement au 18 pour laisser plus de temps au support. Demande : il nous faut les textes définitifs du Marketing d’ici mercredi.',
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Transformer le point en longue liste de toutes les tâches.',
          'Remercier « tout le monde » au lieu de nommer des personnes précises.',
          'Cacher une demande urgente tout en bas.',
        ],
      },
    ],
  },
};

export default tool;
