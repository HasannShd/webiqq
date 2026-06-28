export const SITE_URL = 'https://www.webiqq.com';
export const SITE_NAME = 'Webiqq';
export const SITE_DESCRIPTION =
  'Webiqq is a web development agency based in Bahrain that builds business websites, custom software, SEO systems, AI automation, e-commerce, databases, server setup, and digital marketing for companies worldwide.';

const BAHRAIN_ADDRESS = {
  '@type': 'PostalAddress',
  addressCountry: 'BH',
  addressLocality: 'Manama',
  addressRegion: 'Capital Governorate',
};

const PARENT_ORG = {
  '@type': 'Organization',
  name: 'Leading Trading Est.',
  url: 'https://www.lte-bh.com',
};

export const seoKeywords = [
  'website developers Bahrain',
  'web development agency Bahrain',
  'website development services',
  'business website development Bahrain',
  'web development agency Germany',
  'website developer Berlin',
  'custom business software',
  'business software developers',
  'admin dashboard development',
  'SEO optimization services Bahrain',
  'AI automation for business',
  'e-commerce website setup',
  'Google Business Profile setup Bahrain',
  'social media management Bahrain',
  'database management',
  'server deployment',
  'website maintenance',
  'digital marketing Bahrain',
  'international web development agency',
];

export const faqItems = [
  {
    question: 'Does Webiqq build business websites in Bahrain?',
    answer:
      'Yes. Webiqq is a web development agency based in Bahrain. We build responsive business websites with service pages, lead capture, SEO structure, contact flows, and fast deployment for businesses in Bahrain, the GCC, and worldwide.',
  },
  {
    question: 'Can Webiqq build custom business software?',
    answer:
      'Yes. Webiqq builds custom business software including admin dashboards, booking systems, inquiry workflows, product catalogues, internal tools, database-backed systems, and reporting panels.',
  },
  {
    question: 'Do you provide SEO optimization in Bahrain?',
    answer:
      'Yes. Webiqq provides SEO optimization for businesses in Bahrain and the GCC. We handle technical SEO, metadata, structured data, sitemap setup, keyword-focused page structure, and index-ready website foundations.',
  },
  {
    question: 'Can Webiqq set up Google Business Profile?',
    answer:
      'Yes. Webiqq sets up and optimizes Google Business Profiles for Bahrain businesses — verified listing, category setup, service descriptions, photos, and local SEO signals so customers find you on Google Maps and Search.',
  },
  {
    question: 'Can Webiqq help with social media management?',
    answer:
      'Yes. Webiqq provides social media management including content planning, post creation, scheduling, caption writing, and consistent brand presence across Instagram, LinkedIn, and other platforms.',
  },
  {
    question: 'Can Webiqq help with AI automation?',
    answer:
      'Yes. Webiqq can add AI chatbots, smart forms, lead routing, workflow automation, AI-assisted content tools, and integrations that reduce manual work.',
  },
  {
    question: 'Where is Webiqq based?',
    answer:
      'Webiqq is a web development agency based in Bahrain, established under Leading Trading Est. We work with businesses across Bahrain, Saudi Arabia, UAE, Kuwait, and internationally.',
  },
];

const serviceNames = [
  'Website Development',
  'Business Software',
  'SEO Optimization',
  'AI Automation',
  'Social Media Management',
  'Google Business Profile Setup',
  'Digital Marketing',
  'E-Commerce Setup',
  'Database Management',
  'Server & Maintenance',
];

export const siteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/webiqq-logo.svg`,
    description: SITE_DESCRIPTION,
    email: 'contact@webiqq.com',
    telephone: '+97333290109',
    address: BAHRAIN_ADDRESS,
    parentOrganization: PARENT_ORG,
    sameAs: ['https://www.instagram.com/webiqq.build/', 'https://www.linkedin.com/company/webiqq'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professional-service`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: 'contact@webiqq.com',
    telephone: '+97333290109',
    address: BAHRAIN_ADDRESS,
    parentOrganization: PARENT_ORG,
    areaServed: [
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'France' },
      'Worldwide',
    ],
    serviceType: serviceNames,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website development, business software, SEO, and automation services',
      itemListElement: serviceNames.map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
          provider: { '@id': `${SITE_URL}/#organization` },
        },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];
