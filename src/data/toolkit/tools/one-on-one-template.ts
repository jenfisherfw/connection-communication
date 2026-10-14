import type { Tool } from '../types';

const tool: Tool = {
  id: 'one-on-one-template',
  category: 'conversations',
  icon: 'users',
  minutes: 15,
  title: '1:1 Meeting Template',
  summary: 'Run regular one on ones that put their agenda first and end with clear commitments on both sides.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it for your regular one on ones with each direct report, weekly or every other week. This time belongs to them: it is where you hear what is really going on, remove blockers, and support their growth. Status updates can live somewhere else.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Share the template ahead of time and invite them to add their topics first.',
        'Start with their agenda, even if yours feels urgent. Your items go last.',
        'Ask “How can I help?” and then wait. Silence gives them room to think.',
        'Ask for feedback on yourself, not only give it. Thank them when they do.',
        'Write down commitments from both of you and review them next time.',
        'Protect the time. If you must move it, reschedule rather than cancel.',
      ],
    },
    {
      heading: '1:1 agenda template',
      template: `1:1: [their name] and [your name]
Date: [date]

1. Their topics (first)
• [Topic]
• [Topic]

2. Wins since last time
• [What went well]

3. Challenges
• [What is hard or stuck]

4. How can I help?
• [Support, decision, or blocker to remove]

5. Growth
• [Skill, goal, or opportunity they are working on]

6. Feedback both ways
• For them: [one specific observation]
• For me: “What could I do differently?”

7. Commitments
☐ They will: [action], by [date]
☐ I will: [action], by [date]`,
    },
    {
      heading: 'Running notes format',
      body: 'Keep one shared document per person with the newest meeting at the top. Over time it becomes a record of their wins and growth, which makes reviews easier and fairer.',
      template: `[Date]
Their topics: [notes]
Wins: [notes]
Challenges: [notes]
Help needed: [notes]
Growth: [notes]
Feedback: [notes]
Commitments:
☐ [Owner]: [action], by [date]
Carry over: [open items for next time]

[Previous date]
...`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Turning the 1:1 into a status meeting about projects.',
        'Doing most of the talking.',
        'Canceling whenever things get busy, which signals they are not a priority.',
        'Saving feedback for annual reviews instead of sharing it in the moment.',
      ],
    },
  ],
  es: {
    title: 'Plantilla para reuniones 1:1',
    summary: 'Lleva reuniones uno a uno regulares que pongan primero su agenda y terminen con compromisos claros de ambas partes.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala en tus reuniones uno a uno regulares con cada persona a tu cargo, cada semana o cada dos semanas. Este tiempo es suyo: es donde escuchas lo que de verdad está pasando, quitas obstáculos y apoyas su desarrollo. Las actualizaciones de estado pueden ir en otro lugar.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Comparte la plantilla con antelación e invítale a añadir sus temas primero.',
          'Empieza por su agenda, aunque la tuya parezca urgente. Tus temas van al final.',
          'Pregunta “¿Cómo puedo ayudarte?” y espera. El silencio le da espacio para pensar.',
          'Pide retroalimentación sobre ti, no solo la des. Agradécela cuando llegue.',
          'Anota los compromisos de ambos y revísalos la próxima vez.',
          'Protege ese tiempo. Si tienes que moverlo, reprográmalo en lugar de cancelarlo.',
        ],
      },
      {
        heading: 'Plantilla de agenda 1:1',
        template: `1:1: [su nombre] y [tu nombre]
Fecha: [fecha]

1. Sus temas (primero)
• [Tema]
• [Tema]

2. Logros desde la última vez
• [Lo que salió bien]

3. Retos
• [Lo que cuesta o está bloqueado]

4. ¿Cómo puedo ayudarte?
• [Apoyo, decisión u obstáculo que quitar]

5. Desarrollo
• [Habilidad, meta u oportunidad en la que trabaja]

6. Retroalimentación en ambos sentidos
• Para esa persona: [una observación específica]
• Para mí: “¿Qué podría hacer diferente?”

7. Compromisos
☐ Esa persona: [acción], antes del [fecha]
☐ Yo: [acción], antes del [fecha]`,
      },
      {
        heading: 'Formato de notas continuas',
        body: 'Mantén un documento compartido por persona, con la reunión más reciente arriba. Con el tiempo se convierte en un registro de sus logros y su crecimiento, lo que hace las evaluaciones más fáciles y justas.',
        template: `[Fecha]
Sus temas: [notas]
Logros: [notas]
Retos: [notas]
Ayuda necesaria: [notas]
Desarrollo: [notas]
Retroalimentación: [notas]
Compromisos:
☐ [Responsable]: [acción], antes del [fecha]
Pendiente: [temas abiertos para la próxima vez]

[Fecha anterior]
...`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Convertir la 1:1 en una reunión de estado de proyectos.',
          'Hablar tú la mayor parte del tiempo.',
          'Cancelar cada vez que hay mucho trabajo, lo que indica que no es una prioridad.',
          'Guardar la retroalimentación para la evaluación anual en lugar de darla en el momento.',
        ],
      },
    ],
  },
  fr: {
    title: 'Modèle de réunion 1:1',
    summary: 'Menez des entretiens individuels réguliers qui placent leur ordre du jour en premier et se terminent par des engagements clairs des deux côtés.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le pour vos 1:1 réguliers avec chaque collaborateur direct, chaque semaine ou toutes les deux semaines. Ce temps lui appartient : c’est là que vous entendez ce qui se passe vraiment, levez les obstacles et soutenez son développement. Les points d’avancement peuvent se faire ailleurs.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Partagez le modèle à l’avance et invitez la personne à ajouter ses sujets en premier.',
          'Commencez par son ordre du jour, même si le vôtre semble urgent. Vos points passent en dernier.',
          'Demandez « Comment puis-je vous aider ? » puis attendez. Le silence lui laisse le temps de réfléchir.',
          'Demandez du feedback sur vous, pas seulement en donner. Remerciez quand il arrive.',
          'Notez les engagements de chacun et revoyez-les la fois suivante.',
          'Protégez ce créneau. Si vous devez le déplacer, reprogrammez plutôt que d’annuler.',
        ],
      },
      {
        heading: 'Modèle d’ordre du jour 1:1',
        template: `1:1 : [son nom] et [votre nom]
Date : [date]

1. Ses sujets (en premier)
• [Sujet]
• [Sujet]

2. Réussites depuis la dernière fois
• [Ce qui s’est bien passé]

3. Difficultés
• [Ce qui est difficile ou bloqué]

4. Comment puis-je aider ?
• [Soutien, décision ou obstacle à lever]

5. Développement
• [Compétence, objectif ou opportunité en cours]

6. Feedback dans les deux sens
• Pour la personne : [une observation précise]
• Pour moi : « Que pourrais-je faire autrement ? »

7. Engagements
☐ La personne : [action], pour le [date]
☐ Moi : [action], pour le [date]`,
      },
      {
        heading: 'Format de notes suivies',
        body: 'Gardez un document partagé par personne, avec la réunion la plus récente en haut. Avec le temps, il devient une trace de ses réussites et de sa progression, ce qui rend les entretiens annuels plus simples et plus justes.',
        template: `[Date]
Ses sujets : [notes]
Réussites : [notes]
Difficultés : [notes]
Aide demandée : [notes]
Développement : [notes]
Feedback : [notes]
Engagements :
☐ [Responsable] : [action], pour le [date]
À reporter : [points ouverts pour la prochaine fois]

[Date précédente]
...`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Transformer le 1:1 en point d’avancement sur les projets.',
          'Parler vous-même la plupart du temps.',
          'Annuler dès que la charge augmente, ce qui signale que la personne n’est pas une priorité.',
          'Garder le feedback pour l’entretien annuel au lieu de le partager sur le moment.',
        ],
      },
    ],
  },
};

export default tool;
