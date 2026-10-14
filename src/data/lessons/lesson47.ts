import type { MicroLesson } from './types';

const lesson: MicroLesson = {
  id: 'lesson-47',
  week: 47,
  focus: 'change',
  minutes: 4,
  title: 'Crisis communication: the first hour',
  subtitle: 'Safety first, then steady, honest updates within your company’s plan',
  slides: [
    {
      kind: 'cover',
      title: 'Crisis communication: the first hour',
      body: 'Something serious has happened, and people are looking at you. You feel pressure to say something right away, but the first hour is about safety, facts, and following your company’s plan.',
    },
    {
      kind: 'idea',
      title: 'Safety comes before every message',
      body: 'If anyone may be in danger, your first job is to make sure people are safe and that emergency services are called when needed. Follow your company’s emergency procedures exactly. Communication comes second, and it should support safety, never slow it down.',
      bullets: ['Call emergency services if anyone is at risk', 'Follow your site’s emergency plan', 'Alert the contacts your policy names, such as security or HR'],
    },
    {
      kind: 'idea',
      title: 'Know your role in the plan',
      body: 'Most organizations have an emergency and communications policy that says who speaks, to whom, and when. As a people leader, your role is usually to support your team and pass on approved information, not to talk to media or make official statements.',
      bullets: ['Route media and outside questions to the designated team', 'Share only confirmed, approved information', 'Escalate early; don’t wait for certainty'],
    },
    {
      kind: 'idea',
      title: 'What you know, what you don’t, and when you’ll update',
      body: 'Silence fills with rumor. Even when details are limited, a short, honest update helps people feel steadier. Avoid guessing about causes, blame, or who was involved; privacy matters and speculation can cause real harm. Then keep your promise about the next update.',
    },
    {
      kind: 'example',
      title: 'Steady, not silent',
      instead: '"I don’t know anything yet, so I can’t really say much."',
      tryThis: '"Everyone on our floor is safe. Here’s what we know so far, and what we don’t. Please follow the instructions from security. I’ll update you by 2 p.m., even if there’s no news."',
      why: 'It leads with safety, separates facts from unknowns, and sets a time for the next update. That steadiness matters more than having every answer.',
    },
    {
      kind: 'check',
      question: 'There has been an incident at another site. A reporter calls your cell asking for comment, and your team is asking what happened. What should you do?',
      options: [
        'Give the reporter a brief, factual comment so the company does not appear to be hiding anything.',
        'Tell your team everything you have heard so far, so they do not feel left out of the loop.',
        'Refer the reporter to the designated team, then share only confirmed updates with your team.',
        'Decline to talk with anyone at all until the full investigation is completely finished.',
      ],
      answer: 2,
      explain: 'Company policy usually routes media to a designated spokesperson, and your team needs confirmed facts, not rumors. A quick comment to the reporter can spread errors and break policy. Passing on everything you heard spreads speculation, and going silent leaves your team anxious.',
    },
    {
      kind: 'action',
      title: 'Find your crisis contacts now',
      body: 'Take 10 minutes this week to locate your company’s emergency procedures and crisis communication policy. Save the key contacts in your phone: security, HR, and the communications team. Note where your team gathers in an emergency and who you report to.',
    },
    {
      kind: 'takeaway',
      title: 'In a crisis, safety first',
      bullets: [
        'Make sure people are safe and follow your emergency plan.',
        'Follow company policy on who speaks and what is shared.',
        'Share what you know, what you don’t, and when you’ll update.',
      ],
    },
  ],
  es: {
    title: 'Comunicación en crisis: la primera hora',
    subtitle: 'Primero la seguridad, luego actualizaciones serenas y honestas dentro del plan de tu empresa',
    slides: [
      {
        kind: 'cover',
        title: 'Comunicación en crisis: la primera hora',
        body: 'Pasó algo grave y la gente te está mirando. Sientes presión por decir algo de inmediato, pero la primera hora se trata de seguridad, de hechos y de seguir el plan de tu empresa.',
      },
      {
        kind: 'idea',
        title: 'La seguridad va antes que cualquier mensaje',
        body: 'Si alguien puede estar en peligro, tu primera tarea es asegurarte de que las personas estén a salvo y de que se llame a los servicios de emergencia cuando haga falta. Sigue al pie de la letra los procedimientos de emergencia de tu empresa. La comunicación va en segundo lugar y debe apoyar la seguridad, nunca retrasarla.',
        bullets: ['Llama a los servicios de emergencia si alguien está en riesgo', 'Sigue el plan de emergencia de tu sede', 'Avisa a los contactos que indica tu política, como seguridad o RR. HH.'],
      },
      {
        kind: 'idea',
        title: 'Conoce tu rol en el plan',
        body: 'La mayoría de las organizaciones tiene una política de emergencias y comunicación que define quién habla, con quién y cuándo. Como líder de personas, tu rol suele ser apoyar a tu equipo y transmitir información aprobada, no hablar con los medios ni dar declaraciones oficiales.',
        bullets: ['Deriva a los medios y consultas externas al equipo designado', 'Comparte solo información confirmada y aprobada', 'Escala pronto; no esperes a tener certeza'],
      },
      {
        kind: 'idea',
        title: 'Lo que sabes, lo que no y cuándo actualizarás',
        body: 'El silencio se llena de rumores. Aunque haya pocos detalles, una actualización breve y honesta ayuda a la gente a sentirse más estable. Evita especular sobre causas, culpables o personas involucradas; la privacidad importa y las suposiciones pueden causar daño real. Luego cumple tu promesa de la próxima actualización.',
      },
      {
        kind: 'example',
        title: 'Sereno, no en silencio',
        instead: '“Todavía no sé nada, así que no puedo decir mucho.”',
        tryThis: '“Todas las personas de nuestro piso están a salvo. Esto es lo que sabemos hasta ahora y lo que todavía no sabemos. Sigan las instrucciones de seguridad. Les daré una actualización antes de las 2 p. m., aunque no haya novedades.”',
        why: 'Empieza por la seguridad, separa los hechos de lo desconocido y fija la hora de la próxima actualización. Esa serenidad importa más que tener todas las respuestas.',
      },
      {
        kind: 'check',
        question: 'Hubo un incidente en otra sede. Un periodista te llama al celular para pedirte un comentario y tu equipo pregunta qué pasó. ¿Qué deberías hacer?',
        options: [
          'Darle al periodista un comentario breve y factual para que no parezca que la empresa oculta algo.',
          'Contarle a tu equipo todo lo que has escuchado hasta ahora, para que no se sienta excluido.',
          'Derivar al periodista al equipo designado y compartir con tu equipo solo novedades confirmadas.',
          'Negarte a hablar con cualquier persona hasta que la investigación haya terminado por completo.',
        ],
        answer: 2,
        explain: 'La política de la empresa suele derivar a los medios a un vocero designado, y tu equipo necesita hechos confirmados, no rumores. Un comentario rápido al periodista puede difundir errores e incumplir la política. Transmitir todo lo que escuchaste propaga especulaciones, y guardar silencio deja a tu equipo con ansiedad.',
      },
      {
        kind: 'action',
        title: 'Ubica hoy tus contactos de crisis',
        body: 'Dedica 10 minutos esta semana a ubicar los procedimientos de emergencia y la política de comunicación de crisis de tu empresa. Guarda en tu teléfono los contactos clave: seguridad, RR. HH. y el equipo de comunicación. Anota dónde se reúne tu equipo en una emergencia y a quién le reportas.',
      },
      {
        kind: 'takeaway',
        title: 'En una crisis, primero la seguridad',
        bullets: [
          'Asegúrate de que las personas estén a salvo y sigue el plan de emergencia.',
          'Sigue la política de la empresa sobre quién habla y qué se comparte.',
          'Comparte lo que sabes, lo que no y cuándo darás la próxima actualización.',
        ],
      },
    ],
  },
  fr: {
    title: 'Communication de crise : la première heure',
    subtitle: 'La sécurité d’abord, puis des points calmes et honnêtes dans le cadre du plan de votre entreprise',
    slides: [
      {
        kind: 'cover',
        title: 'Communication de crise : la première heure',
        body: 'Un événement grave vient de se produire, et tout le monde vous regarde. Vous ressentez la pression de parler tout de suite, mais la première heure est consacrée à la sécurité, aux faits et au plan de votre entreprise.',
      },
      {
        kind: 'idea',
        title: 'La sécurité passe avant tout message',
        body: 'Si quelqu’un est peut-être en danger, votre première mission est de vous assurer que chacun est en sécurité et que les secours sont appelés si nécessaire. Suivez à la lettre les procédures d’urgence de votre entreprise. La communication vient ensuite, et elle doit servir la sécurité, jamais la ralentir.',
        bullets: ['Appelez les secours si quelqu’un est en danger', 'Suivez le plan d’urgence de votre site', 'Prévenez les contacts prévus par votre politique, comme la sûreté ou les RH'],
      },
      {
        kind: 'idea',
        title: 'Connaissez votre rôle dans le plan',
        body: 'La plupart des organisations ont une politique d’urgence et de communication qui précise qui parle, à qui et quand. En tant que manager, votre rôle est généralement de soutenir votre équipe et de relayer les informations validées, pas de parler aux médias ni de faire des déclarations officielles.',
        bullets: ['Orientez les médias et les questions externes vers l’équipe désignée', 'Ne partagez que des informations confirmées et validées', 'Faites remonter tôt ; n’attendez pas d’avoir des certitudes'],
      },
      {
        kind: 'idea',
        title: 'Ce que vous savez, ce que vous ignorez, et le prochain point',
        body: 'Le silence se remplit de rumeurs. Même avec peu de détails, un point court et honnête aide chacun à se sentir plus stable. Évitez les hypothèses sur les causes, les responsabilités ou les personnes concernées ; la confidentialité compte et les spéculations peuvent faire de vrais dégâts. Puis tenez votre promesse pour le prochain point.',
      },
      {
        kind: 'example',
        title: 'Calme, pas silencieux',
        instead: '« Je ne sais encore rien, donc je ne peux pas vraiment en dire plus. »',
        tryThis: '« Tout le monde à notre étage est en sécurité. Voici ce que nous savons, et ce que nous ne savons pas encore. Merci de suivre les consignes de la sûreté. Je vous fais un point avant 14 h, même s’il n’y a rien de nouveau. »',
        why: 'Cette annonce commence par la sécurité, distingue les faits des inconnues et fixe l’heure du prochain point. Ce calme compte plus que d’avoir toutes les réponses.',
      },
      {
        kind: 'check',
        question: 'Un incident a eu lieu sur un autre site. Un journaliste vous appelle sur votre portable pour un commentaire, et votre équipe demande ce qui s’est passé. Que faites-vous ?',
        options: [
          'Donner au journaliste un bref commentaire factuel pour que l’entreprise ne semble rien cacher.',
          'Raconter à votre équipe tout ce que vous avez entendu, pour qu’elle ne se sente pas tenue à l’écart.',
          'Orienter le journaliste vers l’équipe désignée, puis ne partager que des faits confirmés avec l’équipe.',
          'Refuser de parler à qui que ce soit tant que l’enquête n’est pas entièrement terminée.',
        ],
        answer: 2,
        explain: 'La politique de l’entreprise oriente généralement les médias vers un porte-parole désigné, et votre équipe a besoin de faits confirmés, pas de rumeurs. Un commentaire rapide au journaliste peut diffuser des erreurs et enfreindre la politique. Tout relayer propage des spéculations, et le silence laisse votre équipe dans l’inquiétude.',
      },
      {
        kind: 'action',
        title: 'Repérez dès maintenant vos contacts de crise',
        body: 'Prenez 10 minutes cette semaine pour retrouver les procédures d’urgence et la politique de communication de crise de votre entreprise. Enregistrez les contacts clés dans votre téléphone : sûreté, RH et équipe communication. Notez le point de rassemblement de votre équipe et la personne à qui vous rendez compte.',
      },
      {
        kind: 'takeaway',
        title: 'En situation de crise, la sécurité d’abord',
        bullets: [
          'Assurez la sécurité de chacun et suivez le plan d’urgence.',
          'Respectez la politique de l’entreprise sur qui parle et ce qui est partagé.',
          'Dites ce que vous savez, ce que vous ignorez et quand vous ferez le prochain point.',
        ],
      },
    ],
  },
};

export default lesson;
