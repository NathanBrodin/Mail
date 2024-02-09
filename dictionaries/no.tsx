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
      title: 'Logg inn på kontoen din',
      subtitle: 'Velg en leverandør å logge inn med',
      emailPlaceholder: 'navn@example.com',
      signinWithEmail: 'Logg inn med e-post',
      or: 'ELLER FORTSETT MED',
      continue: 'Ved å klikke fortsett, godtar du våre',
      terms: 'Vilkår for bruk',
      and: 'og',
      privacy: 'Personvernregler',
      quote: 'E-postene trengte en endring, så jeg gjorde det.',
      author: 'Nathan Brodin',
    },
    signout: 'Logg ut',
  },
  home: {
    title: 'Hjem',
  },
  newUser: {
    title: 'Velkommen om bord',
    subtitle:
      'Si farvel til e-postkaoset og hei til enkelhet. Din e-postopplevelse er i ferd med å få en stor oppgradering.',
    explore: 'Utforsk nå',
  },
  discover: {
    nav: {
      navigation: [
        {
          name: 'Funksjoner',
          href: '#features',
        },
        {
          name: 'Personvern',
          href: '/oppdag/personvern',
        },
        {
          name: 'Om',
          href: '/oppdag/om',
        },
      ],
      openMainMenu: 'Åpne hovedmenyen',
      closeMainMenu: 'Lukk menyen',
      signIn: 'Logg inn',
    },
    hero: {
      title1: 'Omdefiner din',
      title2: 'Innboks',
      title3: 'Opplevelse',
      subtitle:
        'Forbedre din e-postopplevelse med et nytt perspektiv. Omdefiner hvordan du håndterer meldinger, og prioriter og svar med intuitiv enkelhet.',
      getStarted: 'Kom i gang',
      learnMore: 'Lær mer',
    },
    stats: {
      users: 'Brukere',
      mailsSend: 'E-poster Sendt',
      mailsReceived: 'E-poster Mottatt',
    },
    features: {
      mainIntro: 'E-post, redefinert.',
      mainTitle: 'En bedre arbeidsflyt',
      mainSubtitle:
        'E-post er en moderne e-postklient som tar sikte på å tilby en bedre arbeidsflyt for håndtering av e-postene dine. Møt en ny måte å administrere e-postene dine på, en måte som er mer effektiv, mer intuitiv og mer gledelig.',
      intro: 'E-post, forbedret.',
      title: 'Strømlinjeformet e-postbehandling',
      subtitle:
        'Dagens e-posttjenester har fortsatt grensesnitt fra flere tiår siden. Som brukernes behov har utviklet seg, bør også verktøyene de bruker det.',
      description:
        'Opplev en forbedret tilnærming til e-postbehandling med Mail. Si farvel til rotete innbokser og hei til strømlinjeformede arbeidsflyter som gjør håndtering av e-postene dine til en lek.',
      mainFeatures: [
        {
          name: 'Oppgaveorientert Innboks',
          description:
            'Forenkle e-postbehandlingen med vår Oppgaveorienterte Innboks. Prioriter enkelt e-poster, spore svar og administrere viktige meldinger i ett intuitivt grensesnitt.',
          icon: ClipboardDocumentCheckIcon,
        },
        {
          name: 'Mühelose E-postprioriterung',
          description:
            'Definieren Sie, wie Sie Ihre E-Mails basierend auf Dringlichkeit und Wichtigkeit kategorisieren möchten, damit Sie sich auf das konzentrieren können, was am wichtigsten ist. Verbringen Sie weniger Zeit damit, sich durch Unordnung zu wühlen, und mehr Zeit damit, Ihre Prioritäten zu bewältigen.',
          icon: Square3Stack3DIcon,
        },
        {
          name: 'Forbedret e-postkomposisjon',
          description:
            'Lag sømløst fantastiske e-poster med støtte for Markdown og HTML. Fra enkel tekstformatering til rikt innhold, uttrykk deg selv ubesværet i e-postene dine.',
          icon: SparklesIcon,
        },
        {
          name: 'Personlig tilpasning',
          description:
            'Gjør innboksen din til din egen. Tilpass farger, layouter og kategorier for å tilpasse e-postopplevelsen din til dine unike preferanser.',
          icon: SwatchIcon,
        },
      ],
      features: [
        {
          title: 'Sømløs integrasjon',
          description:
            'Koble Mail til dine favoritt e-posttjenester, inkludert Gmail, Outlook og Yahoo Mail. Det er ikke nødvendig å bytte mellom flere e-postklienter.',
          icon: LinkIcon,
        },
        {
          title: 'Fullstendig åpen kildekode.',
          description:
            'Hele prosjektet er åpen kildekode, noe som betyr at du kan se koden og bidra til den.',
          icon: UserGroupIcon,
        },
        {
          title: 'Privat, av natur.',
          description:
            'Mail får direkte tilgang til e-postserverne dine, ingen e-postinnhold lagres noe sted.',
          icon: LockClosedIcon,
        },
      ],
      outro:
        'Ditt personvern er viktig. Oppdag hvordan vi holder dataene dine trygge.',
      learnMore: 'Lær mer',
      title2: 'Fortsatt ikke overbevist?',
      description2:
        'Mail er helt gratis og vil alltid være det. Ingen annonser, ingen sporing, ingen datagruvedrift - bare en bedre e-postklient.',
    },
    testimonials: {
      title: 'Kundeanmeldelser',
      subtitle: 'Hva folk sier om Mail.',
      testimonials: [
        {
          author: 'Vanessa',
          position: 'Min mor',
          body: 'Jeg elsker Mail! Kanskje bare fordi sønnen min laget det, men jeg elsker det likevel.',
        },
        {
          author: 'Sophie',
          position: 'Bare en venn',
          body: 'Selv jeg, personen som en gang slet med å slå på en datamaskin, fant Mail å være en lek! Det er som en digital klem fra innboksen min. Takk til sønnen din, Vanessa!',
        },
        {
          author: 'Pascal',
          position: 'Min onkel',
          body: 'Jeg foretrekker vanligvis brevduer, men din Mail-tjeneste har konvertert meg! Det er raskere, mindre rotete og krever ikke rengjøring av fugleburet. Tommel opp fra denne old school-entusiasten!',
        },
        {
          author: 'Victor',
          position: 'Bestefar',
          body: 'Men hva er denne greia, hvor må jeg trykke for at det skal fungere?',
        },
      ],
    },
    footer: {
      rights: '2024 Brodin Mail. Alle rettigheter reservert.',
      navigation: [
        { name: 'Funksjoner', href: '#features' },
        { name: 'Personvern', href: '/oppdag/personvern' },
        { name: 'Om', href: '/oppdag/om' },
        { name: 'Bruksvilkår', href: '/oppdag/brukervilkar' },
        { name: 'Personvernerklæring', href: '/oppdag/personvernerklæring' },
        { name: 'Kontakt', href: '/oppdag/kontakt' },
      ],
    },
  },
};
