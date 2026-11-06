import type { Tool } from '../types';

const tool: Tool = {
  id: 'hard-conversation-prep',
  category: 'conversations',
  icon: 'shield',
  minutes: 20,
  title: 'Hard Conversation Prep Sheet',
  summary: 'Prepare for a difficult conversation so you can stay clear, calm, and fair when emotions run high.',
  sections: [
    {
      heading: 'When to use it',
      body: 'Use it before a conversation you are tempted to avoid: pushing back on a peer, addressing tension on the team, saying no to a request, or sharing news someone will not like. Twenty minutes of preparation helps you separate facts from feelings and choose your words before the pressure is on.',
    },
    {
      heading: 'How to use it',
      bullets: [
        'Write your goal for them and for you. If you cannot name both, wait.',
        'Separate what anyone could verify from the story you are telling yourself.',
        'Write your opening line word for word. The first sentence is the hardest.',
        'Plan for two or three likely reactions, and keep your responses calm.',
        'Know what is not up for negotiation before you walk in.',
        'End with a clear next step, even if it is “let’s both think and meet Thursday.”',
      ],
    },
    {
      heading: 'Prep sheet',
      template: `Conversation with: [name]
When and where: [private time and place]

1. My goal
For them: [what I hope they gain]
For me: [what I need]
For us: [the relationship I want after]

2. Facts vs. my story
Facts: [what happened, verifiable]
My story: [what I am assuming]

3. Opening line
“[I’d like to talk about … because …]”

4. Likely reactions and my response
• If they [react], I will [respond]
• If they [react], I will [respond]

5. Not negotiable
[What will not change]

6. Next step
[Action, owner, date]

HR check
☐ Talk with HR first if this involves performance, conduct, harassment, safety, or a legal question.`,
    },
    {
      heading: 'When HR must be involved',
      body: 'This sheet helps you communicate, not make HR decisions. Talk with HR and follow company policy before the conversation if it touches ongoing performance problems, possible discipline, misconduct, harassment or discrimination, safety, health or accommodation needs, or anything with legal risk. If someone shares something serious during the talk, listen, do not promise confidentiality, and take it to HR the same day.',
    },
    {
      heading: 'Common mistakes',
      bullets: [
        'Opening with small talk that delays the real topic and raises anxiety.',
        'Treating your story as fact and arguing for it.',
        'Filling every silence instead of letting them think.',
        'Leaving without an agreed next step.',
      ],
    },
  ],
  es: {
    title: 'Hoja de preparación para conversaciones difíciles',
    summary: 'Prepárate para una conversación difícil y mantente claro, tranquilo y justo cuando las emociones suban.',
    sections: [
      {
        heading: 'Cuándo usarla',
        body: 'Úsala antes de una conversación que te tienta evitar: contradecir a un colega, abordar tensiones en el equipo, decir que no a una petición o dar una noticia que no gustará. Veinte minutos de preparación te ayudan a separar hechos de sentimientos y a elegir tus palabras antes de sentir la presión.',
      },
      {
        heading: 'Cómo usarla',
        bullets: [
          'Escribe tu objetivo para la otra persona y para ti. Si no puedes nombrar ambos, espera.',
          'Separa lo que cualquiera podría comprobar de la historia que te estás contando.',
          'Escribe tu frase de apertura palabra por palabra. La primera frase es la más difícil.',
          'Prevé dos o tres reacciones probables y mantén la calma en tus respuestas.',
          'Ten claro qué no se negocia antes de entrar.',
          'Termina con un siguiente paso claro, aunque sea “pensémoslo y hablamos el jueves”.',
        ],
      },
      {
        heading: 'Hoja de preparación',
        template: `Conversación con: [nombre]
Cuándo y dónde: [momento y lugar privados]

1. Mi objetivo
Para la otra persona: [lo que espero que gane]
Para mí: [lo que necesito]
Para ambos: [la relación que quiero después]

2. Hechos frente a mi historia
Hechos: [lo que pasó, comprobable]
Mi historia: [lo que estoy suponiendo]

3. Frase de apertura
“[Quiero hablar de … porque …]”

4. Reacciones probables y mi respuesta
• Si [reacciona así], yo [responderé así]
• Si [reacciona así], yo [responderé así]

5. No negociable
[Lo que no va a cambiar]

6. Siguiente paso
[Acción, responsable, fecha]

Consulta con RR. HH.
☐ Habla primero con RR. HH. si se trata de desempeño, conducta, acoso, seguridad o un tema legal.`,
      },
      {
        heading: 'Cuándo debe intervenir RR. HH.',
        body: 'Esta hoja te ayuda a comunicar, no a tomar decisiones de RR. HH. Habla con RR. HH. y sigue la política de la empresa antes de la conversación si afecta a problemas continuos de desempeño, posibles medidas disciplinarias, mala conducta, acoso o discriminación, seguridad, salud o adaptaciones, o cualquier cosa con riesgo legal. Si alguien comparte algo grave durante la charla, escucha, no prometas confidencialidad y llévalo a RR. HH. ese mismo día.',
      },
      {
        heading: 'Errores comunes',
        bullets: [
          'Empezar con charla trivial que retrasa el tema real y aumenta la ansiedad.',
          'Tratar tu historia como un hecho y defenderla.',
          'Llenar cada silencio en lugar de dejar que la otra persona piense.',
          'Terminar sin un siguiente paso acordado.',
        ],
      },
    ],
  },
  fr: {
    title: 'Fiche de préparation aux conversations difficiles',
    summary: 'Préparez une conversation difficile pour rester clair, calme et juste quand l’émotion monte.',
    sections: [
      {
        heading: 'Quand l’utiliser',
        body: 'Utilisez-la avant une conversation que vous êtes tenté d’éviter : contredire un pair, aborder une tension dans l’équipe, refuser une demande ou annoncer une nouvelle qui déplaira. Vingt minutes de préparation vous aident à distinguer les faits des ressentis et à choisir vos mots avant que la pression ne monte.',
      },
      {
        heading: 'Comment l’utiliser',
        bullets: [
          'Écrivez votre objectif pour l’autre et pour vous. Si vous ne pouvez pas nommer les deux, attendez.',
          'Séparez ce que chacun pourrait vérifier de l’histoire que vous vous racontez.',
          'Écrivez votre phrase d’ouverture mot pour mot. La première phrase est la plus difficile.',
          'Anticipez deux ou trois réactions probables et gardez des réponses calmes.',
          'Sachez ce qui n’est pas négociable avant d’entrer.',
          'Terminez par une prochaine étape claire, même si c’est « réfléchissons chacun et revoyons-nous jeudi ».',
        ],
      },
      {
        heading: 'Fiche de préparation',
        template: `Conversation avec : [nom]
Quand et où : [moment et lieu privés]

1. Mon objectif
Pour l’autre : [ce que j’espère qu’il ou elle y gagne]
Pour moi : [ce dont j’ai besoin]
Pour nous : [la relation que je souhaite ensuite]

2. Faits ou interprétation
Faits : [ce qui s’est passé, vérifiable]
Mon histoire : [ce que je suppose]

3. Phrase d’ouverture
« [J’aimerais parler de … parce que …] »

4. Réactions probables et ma réponse
• S’il ou elle [réagit ainsi], je [répondrai ainsi]
• S’il ou elle [réagit ainsi], je [répondrai ainsi]

5. Non négociable
[Ce qui ne changera pas]

6. Prochaine étape
[Action, responsable, date]

Vérification RH
☐ Parlez d’abord aux RH s’il s’agit de performance, de comportement, de harcèlement, de sécurité ou d’une question juridique.`,
      },
      {
        heading: 'Quand impliquer les RH',
        body: 'Cette fiche vous aide à communiquer, pas à prendre des décisions RH. Parlez aux RH et suivez la politique de l’entreprise avant l’échange s’il touche à des problèmes de performance persistants, une éventuelle sanction, une faute, du harcèlement ou de la discrimination, la sécurité, la santé ou des aménagements, ou tout sujet présentant un risque juridique. Si quelqu’un révèle quelque chose de grave pendant l’échange, écoutez, ne promettez pas la confidentialité et informez les RH le jour même.',
      },
      {
        heading: 'Erreurs fréquentes',
        bullets: [
          'Commencer par des banalités qui retardent le vrai sujet et augmentent l’anxiété.',
          'Prendre votre interprétation pour un fait et la défendre.',
          'Combler chaque silence au lieu de laisser l’autre réfléchir.',
          'Repartir sans prochaine étape convenue.',
        ],
      },
    ],
  },
};

export default tool;
