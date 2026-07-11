// The five core service lines shown in navigation, on /services, and as
// individual detail pages at /services/:slug. Content here is the single
// source of truth — pages render straight from this file.

export const serviceLines = [
  {
    slug: 'websites-and-ecommerce',
    title: 'Websites & E-commerce',
    shortTitle: 'Websites',
    tagline: 'High-performance business websites and product platforms built to win enquiries.',
    metaTitle: 'Website & E-commerce Development in Bahrain | Webiqq',
    metaDescription:
      'Webiqq builds responsive business websites, corporate sites, product catalogues, and e-commerce platforms for companies in Bahrain, Saudi Arabia, Germany, and worldwide — fast, SEO-ready, and built to convert.',
    summary:
      'Modern, responsive websites and e-commerce platforms — from corporate sites and service pages to product catalogues, ordering flows, and customer accounts.',
    audience: [
      'Businesses that need a professional online presence that earns trust',
      'Companies whose current website looks dated or fails to generate enquiries',
      'Product and B2B businesses that need catalogues, ordering, or quotation flows',
      'New ventures launching their first serious digital presence',
    ],
    problem:
      'Most business websites fail quietly: slow loading, unclear services, weak mobile experience, and no path from visitor to enquiry. A website should work as a sales surface — presenting the business clearly and turning attention into contact.',
    deliverables: [
      'Custom-designed responsive website — no rigid templates',
      'Clear service and product page architecture',
      'Conversion-focused contact and enquiry flows',
      'Technical SEO foundation: metadata, schema, sitemap, clean URLs',
      'Fast loading performance on mobile and desktop',
      'E-commerce features where needed: categories, carts, accounts, order history',
      'B2B options: RFQ capture, inquiry-based ordering, document uploads',
    ],
    process: [
      { title: 'Discover', text: 'We learn your business, customers, and what the website has to achieve.' },
      { title: 'Structure', text: 'We map pages, content hierarchy, and the enquiry paths before designing.' },
      { title: 'Design & build', text: 'We design and develop the site with SEO and performance built in from the start.' },
      { title: 'Launch & refine', text: 'We deploy, verify forms and analytics, and refine based on real usage.' },
    ],
    included: [
      'Domain and hosting setup guidance',
      'Contact forms with structured email delivery',
      'WhatsApp and Google Maps integration',
      'Multilingual support where required',
      'Google Search Console and sitemap submission',
    ],
    clientProvides: [
      'Business information, services, and any existing branding',
      'Photos or product data where available — we advise on the rest',
      'A point of contact for feedback during the build',
    ],
    afterLaunch:
      'Your website is delivered ready to run, with the domain, code, and hosting in your ownership. Most clients continue with our maintenance and SEO support so the site keeps improving after launch.',
    relatedWork: ['viel-gebaeudeservice', 'peak-elite', 'albourshaid-global'],
  },
  {
    slug: 'business-software',
    title: 'Business Software & Dashboards',
    shortTitle: 'Software',
    tagline: 'Custom systems built around how your business actually operates.',
    metaTitle: 'Custom Business Software & Dashboard Development | Webiqq',
    metaDescription:
      'Webiqq develops custom business software: admin dashboards, customer and staff portals, RFQ and quotation systems, CRMs, and database-backed internal tools for companies in Bahrain, Saudi Arabia, Germany, and internationally.',
    summary:
      'Admin dashboards, customer and staff portals, RFQ and quotation workflows, CRMs, and database-backed tools that replace spreadsheets and manual follow-ups.',
    audience: [
      'Companies managing enquiries, quotations, orders, or records manually',
      'Teams that have outgrown spreadsheets and disconnected apps',
      'B2B businesses that need customer or staff portals',
      'Operations that need role-based access, reporting, and structured data',
    ],
    problem:
      'Growing companies waste hours copying data between tools, chasing updates by phone, and fitting real operations into generic software. Custom software matches the system to the workflow — not the other way round.',
    deliverables: [
      'Admin dashboards for content, leads, products, users, and reports',
      'Multi-role portals: separate customer, staff, and admin access',
      'RFQ and quotation systems with structured lead delivery',
      'Database design, imports/exports, and backup flows',
      'Messaging, notifications, and reporting built into the system',
      'Full-stack architecture connected to your public website',
    ],
    process: [
      { title: 'Map operations', text: 'We document how work actually flows through your team today.' },
      { title: 'Scope the system', text: 'We define roles, records, screens, and workflows — agreed before build.' },
      { title: 'Build in stages', text: 'We deliver working modules in milestones so you see progress early.' },
      { title: 'Train & hand over', text: 'Your team gets a working system, training, and documented handover.' },
    ],
    included: [
      'Role-based authentication and access control',
      'Data export and backup infrastructure',
      'Integration with your website enquiry flows',
      'Deployment and server setup',
    ],
    clientProvides: [
      'A walkthrough of your current process and pain points',
      'Sample records or data to structure the system around',
      'Availability for milestone reviews',
    ],
    afterLaunch:
      'Custom software is quoted per project after a scoping conversation — no generic pricing. After launch we support the system with maintenance, monitoring, and staged improvements as your operation evolves.',
    relatedWork: ['leading-trading-est'],
  },
  {
    slug: 'seo-and-digital-growth',
    title: 'SEO & Digital Growth',
    shortTitle: 'SEO & Growth',
    tagline: 'Search visibility systems that bring qualified enquiries — not just traffic.',
    metaTitle: 'SEO & Digital Growth Services in Bahrain | Webiqq',
    metaDescription:
      'Technical SEO, local SEO, Google Business Profile setup, structured data, and content systems from Webiqq — built for businesses in Bahrain, the GCC, and international markets.',
    summary:
      'Technical SEO, local search, Google Business Profile setup, structured data, and content direction — engineered into the website rather than bolted on.',
    audience: [
      'Businesses that are invisible on Google for the services they sell',
      'Companies relying entirely on word of mouth and paid ads',
      'Local Bahrain businesses that need to appear in Maps and local results',
      'Websites that look fine but receive no organic enquiries',
    ],
    problem:
      'A website without search visibility is a brochure nobody opens. Ranking is not luck — it is structure: technical foundations, local signals, useful content, and consistency over time.',
    deliverables: [
      'Technical SEO: metadata, schema markup, sitemaps, heading structure, page speed',
      'Local SEO: Google Business Profile setup, verification, and optimisation',
      'Keyword-focused page structure aligned with what customers actually search',
      'Structured data for services, articles, FAQs, and organisation identity',
      'Internal linking and content architecture',
      'Social media and content direction that supports the same positioning',
    ],
    process: [
      { title: 'Audit', text: 'We review your current visibility, technical health, and competitor landscape.' },
      { title: 'Fix foundations', text: 'Technical SEO issues are corrected first — speed, structure, metadata, schema.' },
      { title: 'Build signals', text: 'Google Business Profile, local relevance, content, and internal links.' },
      { title: 'Measure & iterate', text: 'Search Console data guides the next round of improvements.' },
    ],
    included: [
      'Google Search Console setup and sitemap submission',
      'Google Business Profile creation and optimisation',
      'On-page optimisation for existing pages',
      'Reporting on indexing and search performance',
    ],
    clientProvides: [
      'Access to your website and Google accounts (or we set them up)',
      'Accurate business details for local listings',
      'Input on your priority services and customers',
    ],
    afterLaunch:
      'SEO compounds. After the foundations are in place, ongoing work focuses on content, reviews, and links — we set a realistic cadence with you rather than promising overnight rankings.',
    relatedWork: ['leading-trading-est', 'viel-gebaeudeservice'],
  },
  {
    slug: 'ai-and-automation',
    title: 'AI & Workflow Automation',
    shortTitle: 'Automation',
    tagline: 'Practical automation that removes repetitive work — no hype.',
    metaTitle: 'AI & Workflow Automation for Business | Webiqq',
    metaDescription:
      'Webiqq builds practical AI and workflow automation: chatbots for first response, smart forms, lead routing, and internal tools that reduce manual work for businesses in Bahrain, Saudi Arabia, Germany, and worldwide.',
    summary:
      'Chatbots for first-response handling, smart forms, lead routing, and internal tools that cut manual admin — connected to your real business process.',
    audience: [
      'Teams spending hours on repetitive questions and manual follow-ups',
      'Businesses that want faster first response to enquiries',
      'Companies with structured workflows ready to be automated',
      'Operations drowning in copy-paste admin between tools',
    ],
    problem:
      'Most AI projects fail because they start with technology instead of a bottleneck. Useful automation targets specific repetitive work: answering common questions, qualifying leads, routing requests, and structuring data.',
    deliverables: [
      'AI chat assistants for first-response and common questions',
      'Smart forms that qualify and organise enquiries automatically',
      'Lead routing and follow-up workflows',
      'Internal tools that summarise, structure, or process records',
      'Integrations connecting your forms, database, and team workflow',
    ],
    process: [
      { title: 'Find the bottleneck', text: 'We identify where repetitive work actually costs your team time.' },
      { title: 'Design the workflow', text: 'Automation is mapped into your existing process, not beside it.' },
      { title: 'Build & test', text: 'We build the automation and test it against real cases before launch.' },
      { title: 'Monitor & tune', text: 'Live behaviour is reviewed and adjusted so quality stays high.' },
    ],
    included: [
      'Integration with your website and enquiry flows',
      'Clear fallbacks to a human when automation should hand over',
      'Documentation of what the automation does and how to adjust it',
    ],
    clientProvides: [
      'Examples of the repetitive work you want reduced',
      'Access to the tools and channels involved',
      'Feedback during the testing phase',
    ],
    afterLaunch:
      'Automation is quoted per project based on scope. After launch we monitor behaviour, tune responses, and extend the workflow as your team finds new uses.',
    relatedWork: ['leading-trading-est'],
  },
  {
    slug: 'maintenance-and-support',
    title: 'Maintenance & Ongoing Support',
    shortTitle: 'Support',
    tagline: 'Your website and systems stay fast, secure, and improving after launch.',
    metaTitle: 'Website Maintenance & Technical Support | Webiqq',
    metaDescription:
      'Webiqq provides post-launch website and software maintenance: updates, monitoring, deployments, backups, content changes, and ongoing technical support for businesses in Bahrain, Saudi Arabia, Germany, and worldwide.',
    summary:
      'Updates, monitoring, deployments, backups, content changes, and structured improvement work — so what you built keeps performing.',
    audience: [
      'Businesses with a live website or system and nobody maintaining it',
      'Companies that need reliable technical support without hiring in-house',
      'Platforms that must stay online, fast, and secure',
      'Teams that want a partner for continuous small improvements',
    ],
    problem:
      'Websites and software degrade without care: forms silently break, pages slow down, and small issues become business problems. Proactive maintenance catches failures before customers do.',
    deliverables: [
      'Regular updates and dependency maintenance',
      'Uptime and form monitoring',
      'Deployment handling and server management',
      'Database checks and backup verification',
      'Content updates and small feature improvements',
      'Performance and SEO health reviews',
    ],
    process: [
      { title: 'Assess', text: 'We review the current state of your site or system — even if we didn’t build it.' },
      { title: 'Stabilise', text: 'Urgent issues, updates, and monitoring are handled first.' },
      { title: 'Maintain', text: 'A regular cadence of updates, checks, and fixes keeps everything healthy.' },
      { title: 'Improve', text: 'Spare capacity goes into structured improvements, not just upkeep.' },
    ],
    included: [
      'Response to technical issues and outages',
      'A clear record of work performed',
      'Advice on hosting, domains, and infrastructure costs',
    ],
    clientProvides: [
      'Access to hosting, domain, and code (or we help you recover it)',
      'A channel for reporting issues and requesting changes',
    ],
    afterLaunch:
      'Support is arranged as a simple ongoing agreement scoped to your platform. You always retain ownership of your domain, code, and hosting — our job is keeping it healthy, not locking you in.',
    relatedWork: ['leading-trading-est', 'peak-elite'],
  },
];

export const getService = (slug) => serviceLines.find((s) => s.slug === slug);
