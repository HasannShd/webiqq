import { useEffect } from 'react';

const DEFAULT_TITLE = 'WebiQQ | Websites, Business Software & Automation';
const DEFAULT_DESCRIPTION =
  'WebiQQ builds high-performance websites, business software and automated systems for ambitious companies across the GCC and beyond.';
const DEFAULT_ALTERNATES = [];

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  canonical,
  image,
  keywords,
  type = 'website',
  jsonLd = [],
  language = 'en',
  alternates = DEFAULT_ALTERNATES,
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
    ensurePropertyMeta('og:locale').setAttribute('content', language === 'ar' ? 'ar_BH' : 'en_GB');
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    if (canonical) {
      ensureLink('canonical').setAttribute('href', canonical);
      ensurePropertyMeta('og:url').setAttribute('content', canonical);
    }

    if (image) {
      ensureMeta('twitter:image').setAttribute('content', image);
      ensurePropertyMeta('og:image').setAttribute('content', image);
    }

    document.head.querySelectorAll('link[data-seo-alternate="true"]').forEach((link) => link.remove());
    alternates.forEach(({ hrefLang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hrefLang;
      link.href = href;
      link.dataset.seoAlternate = 'true';
      document.head.appendChild(link);
    });

    document.head
      .querySelectorAll('script[data-seo-json-ld="true"], script[data-prerender-json-ld="true"]')
      .forEach((script) => script.remove());

    jsonLd.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonLd = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [alternates, canonical, description, image, jsonLd, keywords, language, robots, title, type]);

  return null;
}
