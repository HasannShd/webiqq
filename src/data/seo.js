export const SITE_URL = 'https://www.webiqq.com';
export const SITE_NAME = 'WebiQQ';
export const SITE_DESCRIPTION =
  'WebiQQ builds high-performance websites, business software and automated systems for ambitious companies across the GCC and beyond — generating leads and simplifying business operations.';

const BAHRAIN_ADDRESS = {
  '@type': 'PostalAddress',
  addressCountry: 'BH',
};

export const seoKeywords = [
  'WebiQQ',
  'WebiQQ Bahrain',
  'WebiQQ Middle East',
  'WebiQQ global services',
  'WebiQQ website development',
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
    question: 'Does WebiQQ build business websites in Bahrain?',
    answer:
      'Yes. WebiQQ builds responsive business websites, corporate websites, service websites, landing pages, and custom website development projects for businesses in Bahrain, the GCC, and internationally.',
  },
  {
    question: 'Can WebiQQ build custom business software?',
    answer:
      'Yes. WebiQQ builds custom business software including admin dashboards, booking systems, inquiry workflows, product catalogues, internal tools, database-backed systems, and reporting panels.',
  },
  {
    question: 'Do you provide SEO optimization in Bahrain?',
    answer:
      'Yes. WebiQQ provides SEO optimization for businesses in Bahrain and the GCC. We handle technical SEO, metadata, structured data, sitemap setup, keyword-focused page structure, and index-ready website foundations.',
  },
  {
    question: 'Can WebiQQ set up Google Business Profile?',
    answer:
      'Yes. WebiQQ sets up and optimizes Google Business Profiles for Bahrain businesses — verified listing, category setup, service descriptions, photos, and local SEO signals so customers find you on Google Maps and Search.',
  },
  {
    question: 'Can WebiQQ help with social media management?',
    answer:
      'Yes. WebiQQ provides social media management including content planning, post creation, scheduling, caption writing, and consistent brand presence across suitable social platforms.',
  },
  {
    question: 'Can WebiQQ help with AI automation?',
    answer:
      'Yes. WebiQQ can add AI chatbots, smart forms, lead routing, workflow automation, AI-assisted content tools, and integrations that reduce manual work.',
  },
  {
    question: 'Where is WebiQQ based?',
    answer:
      'WebiQQ is based in Bahrain and operates across the GCC and worldwide.',
  },
  {
    question: 'Is WebiQQ part of a larger company?',
    answer:
      'Yes. WebiQQ is the web and software development division of Leading Trading Est., an established Bahrain medical and industrial supply company. WebiQQ builds and operates the Leading Trading Est. digital platform and internal systems in-house, bringing that practical technology experience to every client project.',
  },
];

const serviceNames = ['Websites', 'Business Software', 'SEO, Google and Digital Growth', 'Automation and Integrations', 'Multilingual Website Systems', 'Care, Hosting and Support'];

const serviceSchemaPages = [
  {
    name: 'Websites',
    description: 'Responsive business website development for companies in Bahrain, the Middle East, and international markets.',
  },
  {
    name: 'Business Software',
    description: 'Custom software development including dashboards, portals, CRMs, RFQ workflows, and internal business systems.',
  },
  {
    name: 'SEO, Google and Digital Growth',
    description: 'Technical SEO, on-page optimization, structured data, content strategy, and search visibility systems.',
  },
  {
    name: 'Automation and Integrations',
    description: 'CRM, messaging, booking, payment, reporting, email marketing, lead routing, and approved third-party workflow integrations.',
  },
  {
    name: 'Multilingual Website Systems',
    description: 'Language-aware websites with localised URLs and metadata, hreflang, translatable interfaces, and intentional RTL and LTR layouts.',
  },
  {
    name: 'Care, Hosting and Support',
    description: 'Maintenance subscriptions, content updates, domains, hosting, SSL, backups, monitoring, technical updates, performance and priority support.',
  },
];

export const siteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'WebiQQ',
    alternateName: ['WebiQQ', 'WebiQQ Bahrain', 'WebiQQ Middle East'],
    url: SITE_URL,
    logo: `${SITE_URL}/webiqq-logo.svg`,
    description: SITE_DESCRIPTION,
    disambiguatingDescription:
      'WebiQQ is the web and software development division of Leading Trading Est., based in Bahrain and operating across the GCC and worldwide.',
    email: 'contact@webiqq.com',
    telephone: '+97333290109',
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+97333290109', contactType: 'sales', areaServed: 'GCC' },
      { '@type': 'ContactPoint', telephone: '+4917680715502', contactType: 'sales', areaServed: 'DE' },
    ],
    address: BAHRAIN_ADDRESS,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Leading Trading Est.',
      url: 'https://www.lte-bh.com',
      address: BAHRAIN_ADDRESS,
    },
    knowsAbout: serviceNames,
    sameAs: ['https://www.instagram.com/webiqq.build/', 'https://www.lte-bh.com'],
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
    slogan: 'Operating across the GCC and worldwide.',
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
    name: `${service.name} by WebiQQ`,
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
