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
      title: 'Logga in på ditt konto',
      subtitle: 'Välj en leverantör att logga in med',
      emailPlaceholder: 'namn@example.com',
      signinWithEmail: 'Logga in med e-post',
      or: 'ELLER FORTSÄTT MED',
      continue: 'Genom att klicka på Fortsätt godkänner du våra',
      terms: 'Användarvillkor',
      and: 'och',
      privacy: 'Integritetspolicy',
      quote: 'E-posterna behövde en förändring, så jag gjorde det.',
      author: 'Nathan Brodin',
    },
    signout: 'Logga ut',
  },
  home: {
    title: 'Hem',
  },
  newUser: {
    title: 'Välkommen ombord',
    subtitle:
      'Säg adjö till e-postkaoset och hej till enkelheten. Din e-postupplevelse är på väg att få en stor uppgradering.',
    explore: 'Utforska Nu',
  },
  discover: {
    nav: {
      navigation: [
        {
          name: 'Funktioner',
          href: '#funktioner',
        },
        {
          name: 'Integritet',
          href: '/upptäck/integritet',
        },
        {
          name: 'Om',
          href: '/upptäck/om',
        },
      ],
      openMainMenu: 'Öppna huvudmenyn',
      closeMainMenu: 'Stäng menyn',
      signIn: 'Logga in',
    },
    hero: {
      title1: 'Omdefiniera din',
      title2: 'Inkorg',
      title3: 'Upplevelse',
      subtitle:
        'Förbättra din e-postupplevelse med ett nytt perspektiv. Omdefiniera hur du hanterar meddelanden, prioriterar och svarar med intuitiv enkelhet.',
      getStarted: 'Kom igång',
      learnMore: 'Läs Mer',
    },
    stats: {
      users: 'Användare',
      mailsSend: 'E-postmeddelanden Skickade',
      mailsReceived: 'E-postmeddelanden Mottagna',
    },
    features: {
      mainIntro: 'E-post, omdefinierad.',
      mainTitle: 'En bättre arbetsflöde',
      mainSubtitle:
        'E-post är en modern e-postklient som syftar till att erbjuda ett bättre arbetsflöde för hantering av dina e-postmeddelanden. Upptäck ett nytt sätt att hantera dina e-postmeddelanden, ett sätt som är effektivare, mer intuitivt och mer njutbart.',
      intro: 'E-post, förfinad.',
      title: 'Effektiv E-posthantering',
      subtitle:
        'Dagens e-posttjänster har fortfarande gränssnitt från årtionden sedan. Eftersom användarbehoven har utvecklats bör också verktygen de använder det.',
      description:
        'Upplev ett förfinat tillvägagångssätt för e-posthantering med Mail. Säg adjö till röriga inkorgar och välkommen till strömlinjeformade arbetsflöden som gör hanteringen av dina e-postmeddelanden till en fröjd.',
      mainFeatures: [
        {
          name: 'Uppgiftsorienterad Inkorg',
          description:
            'Förenkla din e-posthantering med vår Uppgiftsorienterade Inkorg. Prioriter enkelt e-postmeddelanden, spåra svar och hantera viktiga meddelanden i ett intuitivt gränssnitt.',
          icon: ClipboardDocumentCheckIcon,
        },
        {
          name: 'Smidig E-postprioritering',
          description:
            'Definiera hur du vill kategorisera dina e-postmeddelanden baserat på brådska och viktighet, så att du kan fokusera på det som är viktigast. Tillbringa mindre tid på att sålla igenom röran och mer tid på att ta itu med dina prioriteringar.',
          icon: Square3Stack3DIcon,
        },
        {
          name: 'Förbättrad E-postkomposition',
          description:
            'Skapa sömlöst fantastiska e-postmeddelanden med stöd för Markdown och HTML. Från enkel textformatering till rikt innehåll, uttryck dig utan ansträngning i dina e-postmeddelanden.',
          icon: SparklesIcon,
        },
        {
          name: 'Personliga Anpassningsalternativ',
          description:
            'Gör din inkorg till din egen. Anpassa färger, layouter och kategorier för att skräddarsy din e-postupplevelse efter dina unika preferenser.',
          icon: SwatchIcon,
        },
      ],
      features: [
        {
          title: 'Sömlös Integration',
          description:
            'Anslut Mail till dina favorit e-posttjänster, inklusive Gmail, Outlook och Yahoo Mail. Ingen anledning att växla mellan flera e-postklienter.',
          icon: LinkIcon,
        },
        {
          title: 'Helt Öppen Källkod.',
          description:
            'Hela projektet är öppen källkod, vilket innebär att du kan se koden och bidra till den.',
          icon: UserGroupIcon,
        },
        {
          title: 'Privat, av naturen.',
          description:
            'Mail får direkt åtkomst till dina e-postservrar, inget e-postinnehåll lagras någonstans.',
          icon: LockClosedIcon,
        },
      ],
      outro: 'Din integritet är viktig. Upptäck hur vi håller dina data säkra.',
      learnMore: 'Läs mer',
      title2: 'Fortfarande inte övertygad?',
      description2:
        'Mail är helt gratis och kommer alltid att vara det. Inga annonser, ingen spårning, ingen datagrävning - bara en bättre e-postklient.',
    },
    testimonials: {
      title: 'Vittnesmål',
      subtitle: 'Vad folk säger om Mail.',
      testimonials: [
        {
          author: 'Vanessa',
          position: 'Min mamma',
          body: 'Jag älskar Mail! Kanske bara för att min son gjorde det, men jag älskar det ändå.',
        },
        {
          author: 'Sophie',
          position: 'Bara en vän',
          body: 'Även jag, personen som en gång kämpade med att slå på en dator, fann Mail vara en bris! Det är som en digital kram från min inkorg. Tack till din son, Vanessa!',
        },
        {
          author: 'Pascal',
          position: 'Min farbror',
          body: 'Jag föredrar vanligtvis brevduvor, men din Mail-tjänst har konverterat mig! Det är snabbare, mindre rörigt och kräver ingen rengöring av fågelburen. Tummen upp från den här old school-entusiasten!',
        },
        {
          author: 'Victor',
          position: 'Min farfar',
          body: 'Men vad är det här för något, var ska jag trycka för att få det att fungera?',
        },
      ],
    },
    footer: {
      rights: '2024 Brodin Mail. Alla rättigheter förbehållna.',
      navigation: [
        { name: 'Funktioner', href: '#funktioner' },
        { name: 'Integritet', href: '/upptäck/integritet' },
        { name: 'Om', href: '/upptäck/om' },
        { name: 'Användarvillkor', href: '/upptäck/användarvillkor' },
        { name: 'Integritetspolicy', href: '/upptäck/integritetspolicy' },
        { name: 'Kontakt', href: '/upptäck/kontakt' },
      ],
    },
  },
};
