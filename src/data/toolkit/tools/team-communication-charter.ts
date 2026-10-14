import type { Tool } from '../types';

const tool: Tool = {
  id: 'team-communication-charter',
  category: 'team',
  icon: 'message-square',
  minutes: 30,
  title: 'Team Communication Charter',
  summary: 'Agree as a team on which channel to use for what, how fast to reply, and how to flag what is urgent.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use this when messages get lost, people feel they must answer at all hours, or the team is new, growing, or working across locations. Build it together in one meeting, then revisit it every few months.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Draft it together; norms people help write are norms people follow.',
        'Keep it to one page so it is easy to remember.',
        'Model it yourself, especially the after hours norms.',
        'Share it with every new team member in week one.',
        'Review it each quarter and change what is not working.',
      ],
    },
    {
      heading: 'Charter',
      template: `TEAM COMMUNICATION CHARTER
Team: [name]  Agreed on: [date]

WHICH CHANNEL FOR WHAT
• Chat: [quick questions, daily updates]
• Email: [external partners, formal updates]
• Meetings: [decisions, planning, sensitive topics]
• Calls: [anything urgent or easily misread]

RESPONSE TIMES
• Chat: [within 4 working hours]
• Email: [within 1 working day]
• Urgent: [within 1 hour]

AFTER HOURS
• Working hours: [hours and time zones]
• After hours messages: [no reply expected until next workday]
• Use scheduled send when you can: [yes or no]

DECISIONS
• Where we record them: [shared doc, channel, tool]
• Who records them: [meeting owner]
• How we share them: [recap within 1 day]

URGENT ISSUES
• What counts as urgent: [customer impact, safety, deadline today]
• How to flag it: [call, then message with “URGENT”]
• Who to contact if I am out: [name]

Review date: [date]`,
    },
    {
      heading: 'Questions to discuss together',
      bullets: [
        'What message habits help us, and which ones wear us out?',
        'When did something important get missed, and why?',
        'What does “urgent” really mean for our work?',
        'What do we each need to protect focus time?',
      ],
    },
    {
      heading: 'A note on safety and conduct',
      body: 'This charter covers everyday communication. Safety concerns, harassment, and conduct issues follow company policy and go to HR or the right contact, not a team chat thread.',
    },
  ],
  es: {
    title: 'Acuerdo de comunicación del equipo',
    summary: 'Acuerden en equipo qué canal usar para cada cosa, en cuánto tiempo responder y cómo señalar lo urgente.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo cuando los mensajes se pierden, las personas sienten que deben responder a cualquier hora o el equipo es nuevo, está creciendo o trabaja desde distintos lugares. Constrúyanlo juntos en una reunión y revísenlo cada pocos meses.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Redáctenlo juntos; las normas que las personas ayudan a escribir son las que se cumplen.',
          'Mantenlo en una página para que sea fácil de recordar.',
          'Da el ejemplo, sobre todo con las normas fuera del horario.',
          'Compártelo con cada persona nueva en su primera semana.',
          'Revísenlo cada trimestre y cambien lo que no funcione.',
        ],
      },
      {
        heading: 'Acuerdo',
        template: `ACUERDO DE COMUNICACIÓN DEL EQUIPO
Equipo: [nombre]  Acordado el: [fecha]

QUÉ CANAL PARA QUÉ
• Chat: [preguntas rápidas, novedades del día]
• Correo: [socios externos, comunicaciones formales]
• Reuniones: [decisiones, planificación, temas delicados]
• Llamadas: [todo lo urgente o fácil de malinterpretar]

TIEMPOS DE RESPUESTA
• Chat: [en menos de 4 horas laborables]
• Correo: [en menos de 1 día laborable]
• Urgente: [en menos de 1 hora]

FUERA DEL HORARIO
• Horario de trabajo: [horas y zonas horarias]
• Mensajes fuera del horario: [no se espera respuesta hasta el siguiente día laborable]
• Usar envío programado cuando se pueda: [sí o no]

DECISIONES
• Dónde las registramos: [documento compartido, canal, herramienta]
• Quién las registra: [responsable de la reunión]
• Cómo las compartimos: [resumen en menos de 1 día]

TEMAS URGENTES
• Qué es urgente: [impacto en clientes, seguridad, plazo hoy]
• Cómo señalarlo: [llamar y luego escribir con “URGENTE”]
• A quién contactar si no estoy: [nombre]

Fecha de revisión: [fecha]`,
      },
      {
        heading: 'Preguntas para conversar juntos',
        bullets: [
          '¿Qué hábitos con los mensajes nos ayudan y cuáles nos agotan?',
          '¿Cuándo se nos pasó algo importante y por qué?',
          '¿Qué significa de verdad “urgente” en nuestro trabajo?',
          '¿Qué necesita cada uno para proteger su tiempo de concentración?',
        ],
      },
      {
        heading: 'Una nota sobre seguridad y conducta',
        body: 'Este acuerdo trata la comunicación del día a día. Los temas de seguridad, acoso y conducta siguen la política de la empresa y se llevan a RR. HH. o al contacto adecuado, no a un hilo del chat del equipo.',
      },
    ],
  },
  fr: {
    title: 'Charte de communication d’équipe',
    summary: 'Convenez en équipe du canal à utiliser pour chaque chose, des délais de réponse et de la façon de signaler l’urgence.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-la quand des messages se perdent, quand chacun se sent obligé de répondre à toute heure, ou quand l’équipe est nouvelle, grandit ou travaille sur plusieurs sites. Construisez-la ensemble en une réunion, puis revoyez-la tous les quelques mois.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Rédigez-la ensemble ; on respecte mieux les règles qu’on a écrites.',
          'Tenez-la sur une page pour qu’elle soit facile à retenir.',
          'Montrez l’exemple, surtout pour les règles hors horaires.',
          'Partagez-la avec chaque nouveau membre dès sa première semaine.',
          'Revoyez-la chaque trimestre et changez ce qui ne fonctionne pas.',
        ],
      },
      {
        heading: 'Charte',
        template: `CHARTE DE COMMUNICATION D’ÉQUIPE
Équipe : [nom]  Adoptée le : [date]

QUEL CANAL POUR QUOI
• Messagerie : [questions rapides, nouvelles du jour]
• Courriel : [partenaires externes, informations officielles]
• Réunions : [décisions, planification, sujets délicats]
• Appels : [tout ce qui est urgent ou facile à mal comprendre]

DÉLAIS DE RÉPONSE
• Messagerie : [sous 4 heures ouvrées]
• Courriel : [sous 1 jour ouvré]
• Urgent : [sous 1 heure]

HORS HORAIRES
• Horaires de travail : [heures et fuseaux horaires]
• Messages hors horaires : [pas de réponse attendue avant le jour ouvré suivant]
• Utiliser l’envoi programmé si possible : [oui ou non]

DÉCISIONS
• Où nous les consignons : [document partagé, canal, outil]
• Qui les consigne : [responsable de la réunion]
• Comment nous les partageons : [compte rendu sous 1 jour]

SUJETS URGENTS
• Ce qui est urgent : [impact client, sécurité, échéance du jour]
• Comment le signaler : [appeler, puis écrire avec « URGENT »]
• Qui contacter en mon absence : [nom]

Date de révision : [date]`,
      },
      {
        heading: 'Questions à discuter ensemble',
        bullets: [
          'Quelles habitudes de messagerie nous aident, et lesquelles nous épuisent ?',
          'Quand avons-nous manqué quelque chose d’important, et pourquoi ?',
          'Que veut vraiment dire « urgent » dans notre travail ?',
          'De quoi chacun a-t-il besoin pour protéger son temps de concentration ?',
        ],
      },
      {
        heading: 'Une remarque sur la sécurité et le comportement',
        body: 'Cette charte concerne la communication au quotidien. Les questions de sécurité, de harcèlement et de comportement suivent la politique de l’entreprise et vont aux RH ou au bon interlocuteur, pas dans un fil de discussion d’équipe.',
      },
    ],
  },
};

export default tool;
