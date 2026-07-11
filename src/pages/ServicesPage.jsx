import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiGlobe, FiSearch, FiTool, FiZap } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { serviceLines } from '../data/services.js';
import { SITE_URL } from '../data/seo.js';

const serviceIcons = {
  'websites-and-ecommerce': FiGlobe,
  'business-software': FiCode,
  'seo-and-digital-growth': FiSearch,
  'ai-and-automation': FiZap,
  'maintenance-and-support': FiTool,
};

export default function ServicesPage() {
  useReveal();

  return (
    <main id="main">
      <Seo
        title="Services | Websites, Software, SEO & Automation | Webiqq"
        description="Explore Webiqq's five service lines: websites and e-commerce, business software and dashboards, SEO and digital growth, AI and workflow automation, and maintenance with ongoing support."
        canonical={`${SITE_URL}/services`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            ],
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Services"
        title={<>Everything a Business Needs to <em>Operate and Grow Online</em></>}
        lead="Five connected service lines cover the full digital system — the website that presents you, the software that runs you, the SEO that makes you discoverable, the automation that saves your team time, and the support that keeps it all healthy."
      />

      <section className="section-shell services-index" aria-label="Webiqq service lines">
        <div className="services-index-list reveal">
          {serviceLines.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? FiSearch;
            return (
              <Link className="service-row" to={`/services/${service.slug}`} key={service.slug}>
                <span className="service-row-num" aria-hidden="true">0{i + 1}</span>
                <div className="service-row-icon"><Icon aria-hidden="true" /></div>
                <div className="service-row-main">
                  <h2>{service.title}</h2>
                  <p>{service.tagline}</p>
                </div>
                <div className="service-row-points">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <span className="service-row-arrow" aria-hidden="true">
                  <FiArrowRight />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBand
        title={<>Not Sure Which Service Fits? <em>Describe the Problem.</em></>}
        text="Tell us what your business is trying to achieve and we will recommend the right scope — usually within one conversation."
        secondaryLabel="See how we work"
        secondaryTo="/process"
      />
    </main>
  );
}
