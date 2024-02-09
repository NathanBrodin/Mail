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
      title: 'Sign in to your account',
      subtitle: 'Choose a provider to sign in with',
      emailPlaceholder: 'name@example.com',
      signinWithEmail: 'Sign in with email',
      or: 'OR CONTINUE WITH',
      continue: 'By clicking continue, you agree to our',
      terms: 'Terms of Service',
      and: 'and',
      privacy: 'Privacy Policy',
      quote: 'Mails needed a change, so I made it.',
      author: 'Nathan Brodin',
    },
    signout: 'Sign out',
  },
  home: {
    title: 'Home',
  },
  newUser: {
    title: 'Welcome aboard',
    subtitle:
      'Say goodbye to email chaos and hello to simplicity. Your email experience is about to get a major upgrade.',
    explore: 'Explore Now',
  },
  discover: {
    nav: {
      navigation: [
        {
          name: 'Features',
          href: '#features',
        },
        {
          name: 'Privacy',
          href: '/discover/privacy',
        },
        {
          name: 'About',
          href: '/discover/about',
        },
      ],
      openMainMenu: 'Open main menu',
      closeMainMenu: 'Close menu',
      signIn: 'Sign in',
    },
    hero: {
      title1: 'Redefining Your',
      title2: 'Inbox',
      title3: 'Experience',
      subtitle:
        'Elevate your email experience with a fresh perspective. Redefine how you manage messages, effortlessly prioritizing and responding with intuitive simplicity.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
    },
    stats: {
      users: 'Users',
      mailsSend: 'Mails Send',
      mailsReceived: 'Mails Received',
    },
    features: {
      mainIntro: 'Mail, reinvented.',
      mainTitle: 'A better workflow',
      mainSubtitle:
        'Mail is a modern email client that aims to provide a better workflow for managing your emails. Meet a new way to manage your emails, a way that is more efficient, more intuitive, and more enjoyable.',
      intro: 'Mail, refined.',
      title: 'Streamlined Email Management',
      subtitle:
        'Todays email services still have interfaces from decades ago. As user needs have evolved, so should the tools they use.',
      description:
        'Experience a refined approach to email management with Mail. Say goodbye to cluttered inboxes and hello to streamlined workflows that make managing your emails a breeze.',
      mainFeatures: [
        {
          name: 'Task-Oriented Inbox',
          description:
            'Simplify your email management with our Task-Oriented Inbox. Easily prioritize emails, track responses, and manage important messages in one intuitive interface.',
          icon: ClipboardDocumentCheckIcon,
        },
        {
          name: 'Effortless Email Prioritization',
          description:
            'Define how to categorize your emails based on urgency and importance, allowing you to focus on what matters most. Spend less time sifting through clutter and more time tackling your priorities.',
          icon: Square3Stack3DIcon,
        },
        {
          name: 'Enhanced Email Composition',
          description:
            'Seamlessly craft stunning emails with support for Markdown and HTML. From simple text formatting to rich content, express yourself effortlessly in your emails.',
          icon: SparklesIcon,
        },
        {
          name: 'Personalized Customization Options',
          description:
            'Make your inbox your own. Customize colors, layouts, and categories to tailor your email experience to your unique preferences.',
          icon: SwatchIcon,
        },
      ],
      features: [
        {
          title: 'Seamless Integration',
          description:
            'Connect Mail with your favorite email services, including Gmail, Outlook, and Yahoo Mail. No need to switch between multiple email clients.',
          icon: LinkIcon,
        },
        {
          title: 'Fully Open Source.',
          description:
            'Then entire project is open source, meaning you can see the code and contribute to it.',
          icon: UserGroupIcon,
        },
        {
          title: 'Private, by nature.',
          description:
            'Mail access directly your email servers, no email content is stored anywhere.',
          icon: LockClosedIcon,
        },
      ],
      outro: 'Your privacy matters. Discover how we keep your data safe.',
      learnMore: 'Learn more',
      title2: 'Still not convinced?',
      description2:
        'Mail is completely free and always will be. No ads, no tracking, no data mining - just a better email client.',
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What people are saying about Mail.',
      testimonials: [
        {
          author: 'Vanessa',
          position: 'My mom',
          body: "I love Mail! Maybe it's only because my son did it, but still love it.",
        },
        {
          author: 'Sophie',
          position: 'Just a friend',
          body: "Even I, the person who once struggled to turn on a computer, found Mail to be a breeze! It's like a digital hug from my inbox. Kudos to your son, Vanessa!",
        },
        {
          author: 'Pascal',
          position: 'My uncle',
          body: "I usually prefer carrier pigeons, but your Mail service has converted me! It's faster, less messy, and doesn't require a birdcage cleanup. Thumbs up from this old-school enthusiast!",
        },
        {
          author: 'Victor',
          position: 'My grandpa',
          body: 'But what is this thing, where do I have to press to make it work?',
        },
      ],
    },
    footer: {
      rights: '2024 Brodin Mail. All rights reserved.',
      navigation: [
        { name: 'Features', href: '#features' },
        { name: 'Privacy', href: '/discover/privacy' },
        { name: 'About', href: '/discover/about' },
        { name: 'Terms of service', href: '/discover/terms-of-service' },
        { name: 'Privacy policy', href: '/discover/privacy-policy' },
        { name: 'Contact', href: '/discover/contact' },
      ],
    },
  },
};
