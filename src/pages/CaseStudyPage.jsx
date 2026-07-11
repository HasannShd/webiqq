import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiExternalLink, FiGlobe, FiMapPin } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { Breadcrumbs, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { getCaseStudy, nextCaseStudy } from '../data/caseStudies.js';
import { getService } from '../data/services.js';
import { SITE_URL } from '../data/seo.js';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  useReveal();

  if (!study) return <Navigate to="/work" replace />;

  const next = nextCaseStudy(slug);
  const relatedServices = (study.relatedServices ?? []).map(getService).filter(Boolean);

  return (
    <main id="main" key={study.slug}>
      <Seo
        title={`${study.client} Case Study | ${study.label} | Webiqq`}
        description={study.summary}
        canonical={`${SITE_URL}/work/${study.slug}`}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${SITE_URL}/work/${study.slug}#case-study`,
            headline: `${study.client} — ${study.label}`,
            description: study.summary,
            author: { '@type': 'Organization', name: 'Webiqq', url: SITE_URL },
            publisher: { '@id': `${SITE_URL}/#organization` },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/work/${study.slug}` },
            url: `${SITE_URL}/work/${study.slug}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
              { '@type': 'ListItem', position: 3, name: study.client, item: `${SITE_URL}/work/${study.slug}` },
            ],
          },
        ]}
      />

      <section className="section-shell page-intro case-intro">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Work', to: '/work' }, { label: study.client }]} />
        <div className="case-intro-grid">
          <div>
            <p className="eyebrow">{study.flagship ? 'Flagship Case Study' : 'Case Study'}</p>
            <h1>{study.client}</h1>
            <p className="page-lead">{study.summary}</p>
            {study.parentNote ? <p className="parent-note">{study.parentNote}</p> : null}
            <div className="case-fact-row">
              <span className="case-fact">
                <FiMapPin aria-hidden="true" />
                {study.location}
              </span>
              <span className="case-fact">{study.industry}</span>
              <span className="case-fact case-fact--type">{study.label}</span>
            </div>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View the live ${study.client} website`}
              >
                View Live Site
                <FiExternalLink aria-hidden="true" />
              </a>
              <Link className="secondary-button" to="/contact">
                Start a Similar Project
              </Link>
            </div>
          </div>
          <aside className="case-services-panel" aria-label="Services delivered">
            <h2>Services delivered</h2>
            <ul>
              {study.services.map((service) => (
                <li key={service}>
                  <FiCheck aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
            <a className="case-live-chip" href={study.liveUrl} target="_blank" rel="noopener noreferrer">
              <FiGlobe aria-hidden="true" />
              <span>{study.liveHost}</span>
              <span className="case-url-live">Live</span>
            </a>
          </aside>
        </div>
      </section>

      {study.stats?.length ? (
        <section className="section-shell" aria-label="Platform scale">
          <div className="case-stats-band reveal">
            {study.stats.map((stat) => (
              <div className="flagship-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell service-detail" aria-label="Challenge and solution">
        <div className="service-detail-grid reveal">
          <article className="detail-block detail-block--wide">
            <h2>The challenge</h2>
            <p>{study.problem}</p>
          </article>
          <article className="detail-block">
            <h2>Objectives</h2>
            <ul className="check-list">
              {study.objectives.map((objective) => (
                <li key={objective}>
                  <FiCheck aria-hidden="true" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="detail-block">
            <h2>The solution</h2>
            <p>{study.solution}</p>
          </article>
          <article className="detail-block detail-block--wide detail-block--accent">
            <h2>Where it stands today</h2>
            <p>{study.outcome}</p>
          </article>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="features-title">
        <SectionHeader eyebrow="Delivered functionality" title={<>What Was <em>Built</em></>} id="features-title" />
        <ul className="feature-list feature-list--page reveal">
          {study.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      {relatedServices.length > 0 && (
        <section className="section-shell" aria-label="Related services">
          <div className="other-services reveal">
            <span className="other-services-label">Related services:</span>
            {relatedServices.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {next && next.slug !== study.slug && (
        <section className="section-shell" aria-label="Next project">
          <Link className="next-project reveal" to={`/work/${next.slug}`}>
            <span className="eyebrow">Next project</span>
            <span className="next-project-title">
              {next.client}
              <FiArrowRight aria-hidden="true" />
            </span>
            <span className="next-project-sub">{next.label} · {next.location}</span>
          </Link>
        </section>
      )}

      <CtaBand
        title={<>Need Something Like This? <em>Let&rsquo;s Scope It.</em></>}
        text="Describe your business and what you want to achieve — we reply within 24 hours with a clear recommendation."
      />
    </main>
  );
}
