import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { getService, serviceLines } from '../data/services.js';
import { getCaseStudy } from '../data/caseStudies.js';
import { SITE_URL } from '../data/seo.js';

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <FiCheck aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);
  useReveal();

  if (!service) return <Navigate to="/services" replace />;

  const related = (service.relatedWork ?? []).map(getCaseStudy).filter(Boolean);
  const otherServices = serviceLines.filter((s) => s.slug !== service.slug);

  return (
    <main id="main" key={service.slug}>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`${SITE_URL}/services/${service.slug}`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${SITE_URL}/services/${service.slug}#service`,
            name: `${service.title} by WebiQQ`,
            serviceType: service.title,
            description: service.metaDescription,
            provider: { '@id': `${SITE_URL}/#organization` },
            areaServed: [
              { '@type': 'Country', name: 'Bahrain' },
              { '@type': 'Place', name: 'Middle East' },
              'Worldwide',
            ],
            url: `${SITE_URL}/services/${service.slug}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
              { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${SITE_URL}/services/${service.slug}#faq`,
            mainEntity: service.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
        eyebrow="Service"
        title={service.title}
        lead={service.tagline}
      >
        <div className="hero-actions">
          <Link className="primary-button" to="/contact" state={{ service: service.title }}>
            Start a Project
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="secondary-button" to="/work">
            See Related Work
          </Link>
        </div>
      </PageIntro>

      <section className="section-shell service-detail" aria-label={`${service.title} details`}>
        <div className="service-detail-grid reveal">
          <article className="detail-block detail-block--wide">
            <h2>The problem this solves</h2>
            <p>{service.problem}</p>
          </article>
          <article className="detail-block">
            <h2>Who it&rsquo;s for</h2>
            <CheckList items={service.audience} />
          </article>
          <article className="detail-block">
            <h2>What WebiQQ delivers</h2>
            <CheckList items={service.deliverables} />
          </article>
          <article className="detail-block">
            <h2>Optional additions</h2>
            <CheckList items={service.optionalAdditions} />
          </article>
          <article className="detail-block">
            <h2>Expected business outcomes</h2>
            <CheckList items={service.outcomes} />
          </article>
        </div>
      </section>

      <section className="section-shell" aria-labelledby={`process-${service.slug}`}>
        <SectionHeader eyebrow="How it works" title={<>The Working <em>Process</em></>} id={`process-${service.slug}`} />
        <div className="process-timeline reveal">
          {service.process.map((step, i) => (
            <div className="process-node" key={step.title}>
              <div className="process-node-head">
                <div className="process-node-dot">{String(i + 1).padStart(2, '0')}</div>
                {i < service.process.length - 1 && <div className="process-node-line" />}
              </div>
              <div className="process-node-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell service-detail" aria-label="Scope and expectations">
        <div className="service-detail-grid reveal">
          <article className="detail-block">
            <h2>What may be included</h2>
            <CheckList items={service.included} />
          </article>
          <article className="detail-block">
            <h2>What you provide</h2>
            <CheckList items={service.clientProvides} />
          </article>
          <article className="detail-block detail-block--wide detail-block--accent">
            <h2>After launch</h2>
            <p>{service.afterLaunch}</p>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-shell" aria-labelledby={`related-work-${service.slug}`}>
          <SectionHeader eyebrow="Proof" title={<>Related <em>Work</em></>} id={`related-work-${service.slug}`} />
          <div className="work-strip reveal">
            {related.map((project) => (
              <Link className="work-card" to={`/work/${project.slug}`} key={project.slug}>
                <div className="work-card-top">
                  <span className="work-card-label">{project.label}</span>
                  <span className="work-card-host">{project.liveHost}</span>
                </div>
                <h3>{project.client}</h3>
                <p>{project.summary}</p>
                <span className="work-card-read">
                  View case study <FiArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section-shell" aria-labelledby={`faq-${service.slug}`}>
        <SectionHeader
          eyebrow="Service FAQ"
          title={<>Questions About <em>{service.shortTitle}</em></>}
          text={`Straight answers about WebiQQ's ${service.title.toLowerCase()} service for businesses in Bahrain and international markets.`}
          id={`faq-${service.slug}`}
        />
        <div className="solution-faq reveal">
          {service.faq.map((item) => (
            <details className="solution-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-label="Other services">
        <div className="other-services reveal">
          <span className="other-services-label">Other services:</span>
          {otherServices.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={<>Start With a Conversation, <em>Not a Contract.</em></>}
        text="Tell us what you need — we reply within 24 hours with questions, a recommendation, and a clear next step."
      />
    </main>
  );
}
