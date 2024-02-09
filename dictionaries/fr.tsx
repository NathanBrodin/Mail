import {
  ClipboardDocumentCheckIcon,
  LinkIcon,
  LockClosedIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  SwatchIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: {
    signin: {
      title: 'Connectez-vous à votre compte',
      subtitle: 'Choisissez un fournisseur pour vous connecter',
      emailPlaceholder: 'nom@example.com',
      signinWithEmail: 'Se connecter avec email',
      or: 'OU CONTINUER AVEC',
      continue: 'En cliquant sur continuer, vous acceptez nos',
      terms: "Conditions d'utilisation",
      and: 'et',
      privacy: 'Politique de confidentialité',
      quote: "Les mails avaient besoin d'un changement, alors je l'ai fait.",
      author: 'Nathan Brodin',
    },
    signout: 'Se déconnecter',
  },
  home: {
    title: 'Accueil',
  },
  newUser: {
    title: 'Bienvenue à bord',
    subtitle:
      "Dites au revoir au chaos des emails et bonjour à la simplicité. Votre expérience email est sur le point de bénéficier d'une mise à niveau majeure.",
    explore: 'Explorer maintenant',
  },
  discover: {
    nav: {
      navigation: [
        {
          name: 'Fonctionnalités',
          href: '#features',
        },
        {
          name: 'Confidentialité',
          href: '/discover/confidentialite',
        },
        {
          name: 'À propos',
          href: '/discover/a-propos',
        },
      ],
      openMainMenu: 'Ouvrir le menu principal',
      closeMainMenu: 'Fermer le menu',
      signIn: 'Se connecter',
    },
    hero: {
      title1: 'Redéfinir votre',
      title2: 'Boîte de réception',
      title3: 'Expérience',
      subtitle:
        'Rehaussez votre expérience email avec une perspective fraîche. Redéfinissez la façon dont vous gérez les messages, en priorisant et en répondant avec une simplicité intuitive.',
      getStarted: 'Commencer',
      learnMore: 'En savoir plus',
    },
    stats: {
      users: 'Utilisateurs',
      mailsSend: 'Emails Envoyés',
      mailsReceived: 'Emails Reçus',
    },
    features: {
      mainIntro: 'Mail, réinventé.',
      mainTitle: 'Un meilleur flux de travail',
      mainSubtitle:
        'Mail est un client email moderne qui vise à fournir un meilleur flux de travail pour la gestion de vos emails. Découvrez une nouvelle façon de gérer vos emails, une façon qui est plus efficace, plus intuitive et plus agréable.',
      intro: 'Mail, affiné.',
      title: "Gestion de l'email simplifiée",
      subtitle:
        "Les services email d'aujourd'hui ont encore des interfaces datant de plusieurs décennies. Comme les besoins des utilisateurs ont évolué, les outils qu'ils utilisent devraient aussi évoluer.",
      description:
        "Découvrez une approche affinée de la gestion de l'email avec Mail. Dites adieu aux boîtes de réception encombrées et bonjour aux flux de travail simplifiés qui rendent la gestion de vos emails un jeu d'enfant.",
      mainFeatures: [
        {
          name: 'Boîte de réception orientée tâche',
          description:
            'Simplifiez la gestion de vos emails avec notre boîte de réception orientée tâche. Priorisez facilement les emails, suivez les réponses et gérez les messages importants dans une interface intuitive.',
          icon: ClipboardDocumentCheckIcon,
        },
        {
          name: 'Priorisation des emails sans effort',
          description:
            "Définissez comment catégoriser vos emails en fonction de l'urgence et de l'importance, ce qui vous permet de vous concentrer sur ce qui est le plus important. Passez moins de temps à trier le désordre et plus de temps à aborder vos priorités.",
          icon: Square3Stack3DIcon,
        },
        {
          name: "Composition d'email améliorée",
          description:
            'Créez facilement des emails étonnants avec prise en charge de Markdown et HTML. De la simple mise en forme de texte au contenu enrichi, exprimez-vous facilement dans vos emails.',
          icon: SparklesIcon,
        },
        {
          name: 'Options de personnalisation personnalisées',
          description:
            'Faites de votre boîte de réception la vôtre. Personnalisez les couleurs, les mises en page et les catégories pour adapter votre expérience email à vos préférences uniques.',
          icon: SwatchIcon,
        },
      ],
      features: [
        {
          title: 'Intégration transparente',
          description:
            'Connectez Mail à vos services email préférés, y compris Gmail, Outlook et Yahoo Mail. Pas besoin de passer entre plusieurs clients email.',
          icon: LinkIcon,
        },
        {
          title: 'Entièrement open source.',
          description:
            "L'ensemble du projet est open source, ce qui signifie que vous pouvez voir le code et y contribuer.",
          icon: UserGroupIcon,
        },
        {
          title: 'Privé, par nature.',
          description:
            "Mail accède directement à vos serveurs email, aucun contenu email n'est stocké nulle part.",
          icon: LockClosedIcon,
        },
      ],
      outro:
        'Votre vie privée est importante. Découvrez comment nous protégeons vos données.',
      learnMore: 'En savoir plus',
      title2: 'Pas encore convaincu ?',
      description2:
        'Mail est totalement gratuit et le restera toujours. Pas de publicité, pas de suivi, pas de collecte de données - juste un meilleur client email.',
    },
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Ce que les gens disent à propos de Mail.',
      testimonials: [
        {
          author: 'Vanessa',
          position: 'Ma maman',
          body: "J'adore Mail ! Peut-être seulement parce que mon fils l'a fait, mais je l'aime quand même.",
        },
        {
          author: 'Sophie',
          position: 'Juste une amie',
          body: "Même moi, la personne qui a autrefois eu du mal à allumer un ordinateur, j'ai trouvé que Mail était un jeu d'enfant ! C'est comme un câlin numérique de ma boîte de réception. Bravo à votre fils, Vanessa !",
        },
        {
          author: 'Pascal',
          position: 'Mon oncle',
          body: "Je préfère généralement les pigeons voyageurs, mais votre service Mail m'a converti ! C'est plus rapide, moins salissant et ne nécessite pas de nettoyage de cage à oiseaux. Bravo à cet enthousiaste de l'ancienne école !",
        },
        {
          author: 'Victor',
          position: 'Mon grand-père',
          body: "Mais qu'est-ce que c'est que ça, où dois-je appuyer pour que ça fonctionne ?",
        },
      ],
    },
    footer: {
      rights: '2024 Brodin Mail. Tous droits réservés.',
      navigation: [
        { name: 'Fonctionnalités', href: '#features' },
        { name: 'Confidentialité', href: '/discover/confidentialite' },
        { name: 'À propos', href: '/discover/a-propos' },
        {
          name: "Conditions d'utilisation",
          href: '/discover/conditions-d-utilisation',
        },
        {
          name: 'Politique de confidentialité',
          href: '/discover/politique-de-confidentialite',
        },
        { name: 'Contact', href: '/discover/contact' },
      ],
    },
  },
};
