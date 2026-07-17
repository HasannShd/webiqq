import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { serviceLines } from '../src/data/services.js';
import { caseStudies } from '../src/data/caseStudies.js';
import { landingPages } from '../src/data/landingPages.js';
import { blogPosts } from '../src/data/blogContent.js';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const ssr = resolve(root, 'dist-ssr/entry-server.js');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const { render } = await import(ssr);
const site = 'https://www.webiqq.com';

const base = [
  ['/', 'WebiQQ | Websites, Business Software & Automation', 'WebiQQ builds high-performance websites, business software and automated systems for ambitious companies across the GCC and beyond.'],
  ['/services', 'Services | Websites, Software, SEO & Automation | WebiQQ', 'Explore WebiQQ services for websites, business software, SEO and Google growth, automation, multilingual systems, hosting and ongoing support.'],
  ['/work', 'Selected Web Development & Software Work | WebiQQ', 'Explore verified WebiQQ website and software projects for businesses in Bahrain, Germany, and international markets.'],
  ['/process', 'How WebiQQ Projects Work | WebiQQ', 'A clear project process from discovery and scope through design, development, launch, training, and ongoing improvement.'],
  ['/about', 'About WebiQQ | Technology Division of Leading Trading Est.', 'WebiQQ is the web and software development division of Leading Trading Est., based in Bahrain and operating across the GCC and worldwide.'],
  ['/insights', 'Web Development, SEO & Software Insights | WebiQQ', 'Practical guidance about websites, software, SEO, automation, e-commerce, Google visibility, and digital operations.'],
  ['/contact', 'Start a Project | Contact WebiQQ', 'Tell WebiQQ about your website, software, SEO, multilingual, automation, or support project.'],
  ['/privacy', 'Privacy Policy | WebiQQ', 'How WebiQQ handles information submitted through this website.'],
  ['/terms', 'Terms and Conditions | WebiQQ', 'Terms governing use of the WebiQQ website and project enquiries.'],
];

const routes = [
  ...base,
  ...serviceLines.map((item) => [`/services/${item.slug}`, item.metaTitle, item.metaDescription]),
  ...caseStudies.map((item) => [`/work/${item.slug}`, `${item.client} Case Study | WebiQQ`, item.summary]),
  ...landingPages.map((item) => [`/solutions/${item.slug}`, `${item.title} | WebiQQ`, item.solution]),
  ...blogPosts.map((item) => [`/blog/${item.slug}`, item.title, item.description]),
];

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const [path, title, description] of routes) {
  const canonical = `${site}${path === '/' ? '/' : path}`;
  const type = path.startsWith('/services/') || path.startsWith('/solutions/')
    ? 'Service'
    : path.startsWith('/blog/') || path.startsWith('/work/')
      ? 'Article'
      : 'WebPage';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: canonical,
    ...(type === 'Service' ? { provider: { '@id': `${site}/#organization` }, areaServed: [{ '@type': 'Place', name: 'GCC' }, 'Worldwide'] } : {}),
    ...(type === 'Article' ? { publisher: { '@id': `${site}/#organization` }, mainEntityOfPage: canonical } : {}),
  };
  let html = template
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/, '')
    .replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${escape(description)}" />`)
    .replace('</head>', `    <script type="application/ld+json">${JSON.stringify(pageSchema).replaceAll('<', '\\u003c')}</script>\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);

  if (path === '/') {
    await writeFile(resolve(dist, 'index.html'), html);
  } else {
    const directory = resolve(dist, path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, 'index.html'), html);
  }
}

await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} public routes.`);
