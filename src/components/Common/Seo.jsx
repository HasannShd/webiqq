import { useEffect } from 'react';

const DEFAULT_TITLE = 'Webiqq | Websites, SEO, Software & AI Automation';
const DEFAULT_DESCRIPTION =
  'Webiqq is a web and software development company based in Bahrain, serving businesses in Bahrain and clients internationally with business websites, custom software, SEO systems, AI automation, e-commerce platforms, databases, server setup, and digital marketing.';

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  canonical,
  image,
  keywords,
  type = 'website',
  jsonLd = [],
}) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }

      return tag;
    };

    const ensurePropertyMeta = (property) => {
      let tag = document.head.querySelector(`meta[property="${property}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }

      return tag;
    };

    const ensureLink = (rel) => {
      let tag = document.head.querySelector(`link[rel="${rel}"]`);

      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }

      return tag;
    };

    ensureMeta('description').setAttribute('content', description);
    ensureMeta('robots').setAttribute('content', robots);
    if (keywords) ensureMeta('keywords').setAttribute('content', keywords);
    ensureMeta('twitter:card').setAttribute('content', 'summary_large_image');
    ensureMeta('twitter:title').setAttribute('content', title);
    ensureMeta('twitter:description').setAttribute('content', description);

    ensurePropertyMeta('og:title').setAttribute('content', title);
    ensurePropertyMeta('og:description').setAttribute('content', description);
    ensurePropertyMeta('og:type').setAttribute('content', type);

    if (canonical) {
      ensureLink('canonical').setAttribute('href', canonical);
      ensurePropertyMeta('og:url').setAttribute('content', canonical);
    }

    if (image) {
      ensureMeta('twitter:image').setAttribute('content', image);
      ensurePropertyMeta('og:image').setAttribute('content', image);
    }

    document.head.querySelectorAll('script[data-seo-json-ld="true"]').forEach((script) => script.remove());

    jsonLd.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonLd = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [canonical, description, image, jsonLd, keywords, robots, title, type]);

  return null;
}
