import type { Tool } from '../types';

const tool: Tool = {
  id: 'new-hire-30-60-90',
  category: 'team',
  icon: 'calendar',
  minutes: 25,
  title: 'New Team Member 30 60 90 Day Plan',
  summary: 'Welcome a new team member well and use check ins at 30, 60, and 90 days to build trust and clear expectations.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use this before a new person starts and through their first three months. It works for new hires and for people moving onto your team from elsewhere in the company.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Share the plan on day one so they know what to expect.',
        'Put all three check ins on the calendar during week one.',
        'Ask more than you tell; their fresh eyes are valuable.',
        'Write down what success looks like and revisit it together.',
        'If concerns come up about performance or conduct, talk with HR early.',
      ],
    },
    {
      heading: 'Week one welcome',
      template: `WEEK ONE WELCOME
Name: [name]  Start date: [date]

☐ Equipment, access, and logins ready before day one
☐ Welcome message sent to the team
☐ First day lunch or coffee: [who]
☐ Buddy assigned: [name]
☐ 1:1 to share the role, goals, and this plan
☐ Introductions to key people: [names]
☐ First small task to finish this week: [task]
☐ 30, 60, and 90 day check ins scheduled`,
    },
    {
      heading: 'Check in conversations',
      template: `DAY 30: LEARN
• What has surprised you so far?
• What is clearer now, and what is still confusing?
• Who has been most helpful? Who should you meet next?
• How do you like to get feedback?
Success looks like: [knows the team, tools, and priorities]

DAY 60: CONTRIBUTE
• What are you most proud of so far?
• Where do you feel stuck or slowed down?
• What would you change if you could?
• What support do you need from me?
Success looks like: [owns tasks with light guidance]

DAY 90: OWN
• What are you ready to own fully?
• What goals do you want for the next quarter?
• How is working with me going? What should I do differently?
• Do you feel part of the team?
Success looks like: [works independently, builds relationships]

Notes and next steps: [ ]`,
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Letting week one become a pile of reading with no real people.',
        'Skipping check ins when things seem fine.',
        'Waiting until day 90 to share that expectations were not clear.',
      ],
    },
  ],
  es: {
    title: 'Plan de 30, 60 y 90 días para una nueva persona',
    summary: 'Da una buena bienvenida a una nueva persona del equipo y usa conversaciones a los 30, 60 y 90 días para generar confianza y expectativas claras.',
    sections: [
      {
        heading: 'Cuándo usarlo',
        body: 'Úsalo antes de que la persona empiece y durante sus primeros tres meses. Sirve para nuevas contrataciones y para quienes llegan a tu equipo desde otra área de la empresa.',
      },
      {
        heading: 'Cómo usarlo',
        bullets: [
          'Comparte el plan el primer día para que sepa qué esperar.',
          'Agenda las tres conversaciones durante la primera semana.',
          'Pregunta más de lo que dices; su mirada nueva es valiosa.',
          'Escribe cómo se ve el éxito y revísenlo juntos.',
          'Si surgen dudas sobre desempeño o conducta, habla pronto con RR. HH.',
        ],
      },
      {
        heading: 'Bienvenida en la primera semana',
        template: `BIENVENIDA EN LA PRIMERA SEMANA
Nombre: [nombre]  Fecha de inicio: [fecha]

☐ Equipo, accesos y contraseñas listos antes del primer día
☐ Mensaje de bienvenida enviado al equipo
☐ Almuerzo o café del primer día: [con quién]
☐ Compañero de apoyo asignado: [nombre]
☐ Reunión 1:1 para hablar del rol, las metas y este plan
☐ Presentaciones a personas clave: [nombres]
☐ Primera tarea pequeña para esta semana: [tarea]
☐ Conversaciones de 30, 60 y 90 días agendadas`,
      },
      {
        heading: 'Conversaciones de seguimiento',
        template: `DÍA 30: APRENDER
• ¿Qué te ha sorprendido hasta ahora?
• ¿Qué tienes más claro y qué sigue siendo confuso?
• ¿Quién te ha ayudado más? ¿A quién deberías conocer ahora?
• ¿Cómo prefieres recibir comentarios?
El éxito se ve así: [conoce al equipo, las herramientas y las prioridades]

DÍA 60: APORTAR
• ¿De qué te sientes más orgulloso hasta ahora?
• ¿Dónde te sientes atascado o frenado?
• ¿Qué cambiarías si pudieras?
• ¿Qué apoyo necesitas de mí?
El éxito se ve así: [asume tareas con poca guía]

DÍA 90: ASUMIR
• ¿Qué estás listo para asumir por completo?
• ¿Qué metas quieres para el próximo trimestre?
• ¿Cómo va el trabajo conmigo? ¿Qué debería hacer diferente?
• ¿Te sientes parte del equipo?
El éxito se ve así: [trabaja con autonomía, construye relaciones]

Notas y próximos pasos: [ ]`,
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Convertir la primera semana en un montón de lecturas sin contacto con personas.',
          'Saltarse las conversaciones cuando todo parece ir bien.',
          'Esperar al día 90 para decir que las expectativas no estaban claras.',
        ],
      },
    ],
  },
  fr: {
    title: 'Plan 30, 60, 90 jours pour un nouveau membre',
    summary: 'Accueillez bien un nouveau membre de l’équipe et appuyez-vous sur des points à 30, 60 et 90 jours pour bâtir la confiance et clarifier les attentes.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-le avant l’arrivée de la personne et pendant ses trois premiers mois. Il convient aux nouvelles recrues comme aux personnes qui rejoignent votre équipe depuis un autre service.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Partagez le plan dès le premier jour pour qu’elle sache à quoi s’attendre.',
          'Planifiez les trois points dès la première semaine.',
          'Posez plus de questions que vous ne donnez de réponses ; son regard neuf est précieux.',
          'Écrivez ce qui définit la réussite et revoyez-le ensemble.',
          'Si des inquiétudes apparaissent sur la performance ou le comportement, parlez-en tôt aux RH.',
        ],
      },
      {
        heading: 'Accueil de la première semaine',
        template: `ACCUEIL DE LA PREMIÈRE SEMAINE
Nom : [nom]  Date d’arrivée : [date]

☐ Matériel, accès et identifiants prêts avant le premier jour
☐ Message de bienvenue envoyé à l’équipe
☐ Déjeuner ou café le premier jour : [avec qui]
☐ Parrain ou marraine désigné : [nom]
☐ Entretien individuel sur le rôle, les objectifs et ce plan
☐ Présentations aux personnes clés : [noms]
☐ Première petite tâche à finir cette semaine : [tâche]
☐ Points à 30, 60 et 90 jours planifiés`,
      },
      {
        heading: 'Points de suivi',
        template: `JOUR 30 : APPRENDRE
• Qu’est-ce qui vous a surpris jusqu’ici ?
• Qu’est-ce qui est plus clair maintenant, et qu’est-ce qui reste flou ?
• Qui vous a le plus aidé ? Qui devriez-vous rencontrer ensuite ?
• Comment préférez-vous recevoir du feedback ?
La réussite ressemble à : [connaît l’équipe, les outils et les priorités]

JOUR 60 : CONTRIBUER
• De quoi êtes-vous le plus fier jusqu’ici ?
• Où vous sentez-vous bloqué ou ralenti ?
• Que changeriez-vous si vous le pouviez ?
• De quel soutien avez-vous besoin de ma part ?
La réussite ressemble à : [prend des tâches en charge avec peu d’accompagnement]

JOUR 90 : PRENDRE EN MAIN
• Qu’êtes-vous prêt à prendre entièrement en charge ?
• Quels objectifs voulez-vous pour le prochain trimestre ?
• Comment se passe notre collaboration ? Que devrais-je faire autrement ?
• Vous sentez-vous membre de l’équipe ?
La réussite ressemble à : [travaille en autonomie, crée des relations]

Notes et prochaines étapes : [ ]`,
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Faire de la première semaine une pile de lectures sans vrais échanges.',
          'Sauter les points quand tout semble bien aller.',
          'Attendre le jour 90 pour dire que les attentes n’étaient pas claires.',
        ],
      },
    ],
  },
};

export default tool;
