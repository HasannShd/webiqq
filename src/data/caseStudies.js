// Case studies rendered at /work and /work/:slug. Every fact here comes from
// verified project information already published in this repository — no
// invented results, testimonials, or metrics.

export const caseStudies = [
  {
    slug: 'leading-trading-est',
    client: 'Leading Trading Est.',
    industry: 'Medical & industrial supply',
    location: 'Manama, Bahrain',
    flagship: true,
    label: 'Full Business Platform',
    liveUrl: 'https://www.lte-bh.com',
    liveHost: 'lte-bh.com',
    summary:
      'A complete digital platform for a Bahrain medical and industrial supply company — public SEO website, product catalogue, RFQ lead capture, customer ordering, staff field operations, and admin office system in one connected build.',
    problem:
      'The business needed more than a website: a professional online presence, a way to capture RFQ leads from clients, support for customer ordering, and a system for managing internal team operations — all connected rather than scattered across disconnected tools.',
    objectives: [
      'Present an extensive medical and industrial product catalogue professionally',
      'Capture structured RFQ and quotation leads from the website',
      'Support customer sign-in and ordering',
      'Give staff and office admin their own operational tools',
      'Build an SEO architecture that makes products discoverable on Google',
    ],
    solution:
      'Webiqq delivered a full-stack platform running through one API: a public SEO site with a searchable product catalogue and category pages, RFQ and quote capture, customer ordering with sign-in, a staff field-operations portal, and a complete admin office management system — with messaging, notifications, data exports, and backup infrastructure supporting daily operations.',
    services: ['Business Software & Dashboards', 'Websites & E-commerce', 'SEO & Digital Growth', 'Maintenance & Ongoing Support'],
    features: [
      'SEO product & category pages',
      'Searchable product catalogue',
      'RFQ and quote capture flow',
      'Customer sign-in and ordering',
      'Staff field operations portal',
      'Admin office management system',
      'Role-based auth (3 user types)',
      'Messaging and notifications',
      'Data exports and backup infrastructure',
      'Scalable full-stack architecture',
    ],
    stats: [
      { value: '200+', label: 'Products' },
      { value: '12+', label: 'Categories' },
      { value: '3', label: 'User roles' },
    ],
    outcome:
      'A live operational platform that handles digital presentation, lead generation, ordering, and internal operations for the business — maintained and extended by Webiqq on an ongoing basis. LTE is evidence that Webiqq builds working business systems, not only brochure websites.',
    relatedServices: ['business-software', 'websites-and-ecommerce', 'seo-and-digital-growth'],
  },
  {
    slug: 'viel-gebaeudeservice',
    client: 'VIEL Gebäudeservice',
    industry: 'Facility services',
    location: 'Berlin, Germany',
    label: 'Business Website',
    liveUrl: 'https://www.viel-gs.de',
    liveHost: 'viel-gs.de',
    summary:
      'A polished German-language business website for a Berlin facilities service company, presenting cleaning, winter service, and security services with clear lead-generation paths.',
    problem:
      'The company needed a professional German-language web presence that presents its cleaning, winter service, and security offerings clearly and converts visitors into quote requests.',
    objectives: [
      'Present each service line on its own clear page',
      'Give visitors an instant way to estimate and request a quote',
      'Build a search-ready structure for the German market',
    ],
    solution:
      'Webiqq built a responsive German website with dedicated pages for cleaning, winter service, and security, an instant quote calculator, contact and newsletter forms, SEO metadata with structured data, and optimised service imagery.',
    services: ['Websites & E-commerce', 'SEO & Digital Growth'],
    features: [
      'Responsive German-language website',
      'Cleaning, winter service, and security pages',
      'Instant quote calculator',
      'Contact and newsletter forms',
      'SEO metadata and structured data',
      'Optimised service imagery',
    ],
    outcome:
      'A live client website serving the Berlin market with clear service presentation and direct lead-generation paths.',
    relatedServices: ['websites-and-ecommerce', 'seo-and-digital-growth'],
  },
  {
    slug: 'peak-elite',
    client: 'PEAK ELITE W.L.L.',
    industry: 'Facility support & hospitality',
    location: 'Bahrain',
    label: 'Business Website',
    liveUrl: 'https://www.peakelitebh.com',
    liveHost: 'peakelitebh.com',
    summary:
      'A premium service website for a Bahrain facility support and hospitality company, built to present its services clearly and turn visitors into direct enquiries.',
    problem:
      'The company needed a credible online presence that presents facility, cleaning, hospitality, and event support services professionally — and makes enquiring effortless for Bahrain customers.',
    objectives: [
      'Present cleaning, facility, hospitality, and event services clearly',
      'Make WhatsApp the primary, frictionless enquiry channel',
      'Anchor the business locally with maps and service messaging',
    ],
    solution:
      'Webiqq built a responsive React website with dedicated service pages, a WhatsApp enquiry flow, Google Maps location integration, and SEO metadata with service-focused messaging.',
    services: ['Websites & E-commerce', 'SEO & Digital Growth', 'Maintenance & Ongoing Support'],
    features: [
      'Responsive React website',
      'Cleaning and facility service pages',
      'Hospitality and event support presentation',
      'WhatsApp enquiry flow',
      'Google Maps location integration',
      'SEO metadata and service messaging',
    ],
    outcome:
      'A live website giving the company a professional presence in the Bahrain market with direct WhatsApp enquiry paths.',
    relatedServices: ['websites-and-ecommerce', 'seo-and-digital-growth'],
  },
  {
    slug: 'albourshaid-global',
    client: 'AlBourshaid Global Establishment',
    industry: 'International holding group',
    location: 'Bahrain',
    label: 'Multilingual Corporate Site',
    liveUrl: 'https://www.albourshaid.com',
    liveHost: 'albourshaid.com',
    summary:
      'A multilingual corporate website for a Bahrain international holding group established in 1974, covering nine business verticals including trading, travel, hospitality, investment, and consultancy.',
    problem:
      'A holding group with nine distinct business verticals and an international audience needed one coherent corporate site that presents every vertical clearly — in four languages.',
    objectives: [
      'Present nine business verticals under one corporate brand system',
      'Serve English, Arabic, French, and Chinese audiences',
      'Manage rich corporate media efficiently',
    ],
    solution:
      'Webiqq built a multilingual React Router multi-page website (EN / AR / FR / ZH) with a corporate brand system, nine service verticals, Cloudinary media management, and structured data with full SEO metadata.',
    services: ['Websites & E-commerce', 'SEO & Digital Growth'],
    features: [
      'Multilingual: EN / AR / FR / ZH',
      'Nine service verticals',
      'Cloudinary media management',
      'React Router multi-page build',
      'Structured data & SEO metadata',
      'Corporate brand system',
    ],
    outcome:
      'A live multilingual corporate presence representing the group’s verticals to local and international audiences.',
    relatedServices: ['websites-and-ecommerce', 'seo-and-digital-growth'],
  },
];

// Independent product builds — shown on /work in their own section to keep
// client work clearly separated from internal builds.
export const independentBuilds = [
  {
    title: 'Evently Event Platform',
    summary:
      'A full-stack event management platform where users sign up, create events, browse details, join or leave attendance lists, and manage their own posts.',
    features: ['React + Vite frontend', 'Node/Express API', 'MongoDB data models', 'JWT authentication', 'Event attendance flow'],
  },
  {
    title: 'Engineering Toolbox',
    summary:
      'A MERN platform for engineers and students with calculator tools, formulas, calculation history, community posts, comments, profiles, and private messaging.',
    features: ['Formula calculator system', 'Calculation history', 'Posts and comments', 'Private chat', 'Profile management'],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const nextCaseStudy = (slug) => {
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) return null;
  return caseStudies[(index + 1) % caseStudies.length];
};
