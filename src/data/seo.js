export const SITE_URL = 'https://www.webiqq.com';
export const SITE_NAME = 'Webiqq';
export const SITE_DESCRIPTION =
  'Webiqq is a web and software development company based in Bahrain, serving businesses in Bahrain and clients internationally with business websites, custom website development, SEO systems, AI automation, e-commerce platforms, databases, server setup, and digital marketing.';

const BAHRAIN_ADDRESS = {
  '@type': 'PostalAddress',
  addressCountry: 'BH',
};

export const seoKeywords = [
  'Webiqq',
  'Webiqq Bahrain',
  'Webiqq Middle East',
  'Webiqq global services',
  'Webiqq website development',
  'website developers Bahrain',
  'website development company',
  'web development agency Bahrain',
  'global web development agency',
  'website development services',
  'custom website development',
  'business website development Bahrain',
  'international website development company',
  'custom software development company',
  'web development agency Germany',
  'website developer Berlin',
  'custom business software',
  'business software developers',
  'AI automation agency',
  'admin dashboard development',
  'SEO optimization services Bahrain',
  'international SEO agency',
  'AI automation for business',
  'ecommerce development company',
  'e-commerce website setup',
  'Google Business Profile setup Bahrain',
  'social media management company',
  'social media management Bahrain',
  'database development services',
  'database management',
  'server maintenance company',
  'server deployment',
  'website maintenance',
  'digital marketing Bahrain',
  'Middle East web development agency',
  'international web development agency',
];

export const faqItems = [
  {
    question: 'Does Webiqq build business websites in Bahrain?',
    answer:
      'Yes. Webiqq builds responsive business websites, corporate websites, service websites, landing pages, and custom website development projects for businesses in Bahrain, the GCC, and internationally.',
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
      'Webiqq is based in Bahrain and serves businesses across Bahrain, Saudi Arabia, UAE, Kuwait, and international markets.',
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

const serviceSchemaPages = [
  {
    name: 'Website Development',
    description: 'Responsive business website development for companies in Bahrain, the Middle East, and international markets.',
  },
  {
    name: 'Business Software',
    description: 'Custom software development including dashboards, portals, CRMs, RFQ workflows, and internal business systems.',
  },
  {
    name: 'SEO Optimization',
    description: 'Technical SEO, on-page optimization, structured data, content strategy, and search visibility systems.',
  },
  {
    name: 'AI Automation',
    description: 'AI automation, chatbots, smart routing, workflow automation, and AI-assisted business systems.',
  },
  {
    name: 'Social Media Management',
    description: 'Social media strategy, content planning, publishing systems, and brand visibility support.',
  },
  {
    name: 'Google Business Profile Setup',
    description: 'Google Business Profile setup and optimization for stronger local visibility and map presence.',
  },
  {
    name: 'Digital Marketing',
    description: 'Digital marketing support across websites, search, content, campaigns, and conversion systems.',
  },
  {
    name: 'E-Commerce Setup',
    description: 'E-commerce website setup, ordering flows, carts, product pages, and account systems.',
  },
  {
    name: 'Database Management',
    description: 'Database planning, content structure, export systems, backups, and operational data flows.',
  },
  {
    name: 'Server & Maintenance',
    description: 'Server deployment, maintenance, monitoring, updates, and post-launch technical support.',
  },
];

export const siteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'Webiqq',
    alternateName: ['Webiqq Bahrain', 'Webiqq Middle East'],
    url: SITE_URL,
    logo: `${SITE_URL}/webiqq-logo.svg`,
    description: SITE_DESCRIPTION,
    email: 'contact@webiqq.com',
    telephone: '+97333290109',
    address: BAHRAIN_ADDRESS,
    knowsAbout: serviceNames,
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
    slogan: 'Based in Bahrain. Working internationally.',
    areaServed: [
      { '@type': 'Place', name: 'Middle East' },
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
    about: {
      '@id': `${SITE_URL}/#professional-service`,
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
  ...serviceSchemaPages.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#${service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: `${service.name} by Webiqq`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Place', name: 'Middle East' },
      { '@type': 'Country', name: 'Bahrain' },
      'Worldwide',
    ],
    description: service.description,
    serviceType: service.name,
    url: SITE_URL,
  })),
];
