export const SITE_URL = 'https://collab-chi-three.vercel.app';
export const SITE_NAME = 'Webiqq';
export const SITE_DESCRIPTION =
  'Webiqq builds business websites, custom business software, SEO systems, AI automation, e-commerce structures, databases, server setup, maintenance, and digital marketing for growing companies.';

export const seoKeywords = [
  'website developers',
  'website development services',
  'business website development',
  'custom business software',
  'business software developers',
  'admin dashboard development',
  'SEO optimization services',
  'AI automation for business',
  'e-commerce website setup',
  'database management',
  'server deployment',
  'website maintenance',
  'digital marketing support',
  'remote freelance web development team',
];

export const faqItems = [
  {
    question: 'Does Webiqq build business websites?',
    answer:
      'Yes. Webiqq builds responsive business websites with service pages, lead capture, SEO structure, contact flows, analytics-ready content, and fast deployment.',
  },
  {
    question: 'Can Webiqq build custom business software?',
    answer:
      'Yes. Webiqq can build business software such as admin dashboards, booking systems, inquiry workflows, product catalogues, internal tools, database-backed systems, and reporting panels.',
  },
  {
    question: 'Do you provide SEO optimization?',
    answer:
      'Yes. Webiqq handles technical SEO, metadata, structured data, sitemap and robots setup, keyword-focused page structure, content direction, and index-ready website foundations.',
  },
  {
    question: 'Can Webiqq help with AI automation?',
    answer:
      'Yes. Webiqq can add AI chatbots, smart forms, lead routing, workflow automation, AI-assisted content tools, and integrations that reduce manual work.',
  },
  {
    question: 'Do you work with clients outside your location?',
    answer:
      'Yes. Webiqq is remote-first and works with businesses worldwide on websites, software, SEO, automation, databases, server setup, and maintenance.',
  },
];

const serviceNames = [
  'Website Development',
  'Business Software',
  'SEO Optimization',
  'AI Automation',
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
    email: 'webbiqq@gmail.com',
    sameAs: ['https://www.instagram.com/webiqq.build/', 'https://www.linkedin.com/company/webiqq'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professional-service`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: 'webbiqq@gmail.com',
    areaServed: 'Worldwide',
    serviceType: serviceNames,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website development, business software, SEO, and automation services',
      itemListElement: serviceNames.map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
          provider: {
            '@id': `${SITE_URL}/#organization`,
          },
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
