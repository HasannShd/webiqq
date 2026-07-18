import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { caseStudies, independentBuilds, industryShowcases } from '../data/caseStudies.js';
import { SITE_URL } from '../data/seo.js';

export default function WorkPage() {
  useReveal();
  const flagship = caseStudies.find((c) => c.flagship);
  const clientWork = caseStudies.filter((c) => !c.flagship);

  return (
    <main id="main">
      <Seo
        title="Work & Case Studies | Live Websites, Software & AI | WebiQQ"
        description="Explore live WebiQQ work across business platforms, websites, multilingual systems, booking journeys, and an AI nutrition product serving Bahrain, the GCC, Germany, and global users."
        canonical={`${SITE_URL}/work`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
            ],
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Work' }]}
        eyebrow="Work"
        title={<>Live Projects for <em>Real Businesses</em></>}
        lead="Everything below is live and in use today — from business websites in Bahrain and Germany to operational software and a global AI product. And it is only the public side: admin panels, staff portals, and internal tools stay behind logins, where they belong."
      />

      {flagship && (
        <section className="section-shell" aria-labelledby="flagship-title">
          <Link className="flagship-card reveal" to={`/work/${flagship.slug}`}>
            <div className="flagship-card-copy">
              <span className="flagship-badge">Flagship Case Study</span>
              <h2 id="flagship-title">{flagship.client}</h2>
              <p className="flagship-meta">
                <FiMapPin aria-hidden="true" />
                {flagship.location} · {flagship.industry}
              </p>
              <p>{flagship.summary}</p>
              <span className="work-card-read">
                Read the full case study <FiArrowRight aria-hidden="true" />
              </span>
            </div>
            <div className="flagship-card-stats" aria-hidden="true">
              {flagship.stats.map((stat) => (
                <div className="flagship-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Link>
        </section>
      )}

      <section className="section-shell" aria-labelledby="client-work-title">
        <SectionHeader
          eyebrow="Live Websites & Products"
          title={<>Real Projects, <em>Delivered and Live</em></>}
          text="Client websites and WebiQQ-built products with real public destinations. Open each case study to see the business problem, delivered functionality, and live result."
          id="client-work-title"
        />
        <div className="work-strip reveal">
          {clientWork.map((project, index) => (
            <Link className="work-card" to={`/work/${project.slug}`} key={project.slug}>
              <div className="work-card-top">
                <div className="work-card-identity">
                  <span className="work-card-index">P{String(index + 2).padStart(2, '0')}</span>
                  <span className="work-card-label">{project.label}</span>
                </div>
                <span className="work-card-host">{project.liveHost}</span>
              </div>
              <h3>{project.client}</h3>
              <p>{project.summary}</p>
              <span className="work-card-meta">
                <FiMapPin aria-hidden="true" />
                {project.location} · {project.industry}
              </span>
              <span className="work-card-read">
                View case study <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="concept-showcases-title">
        <SectionHeader
          eyebrow="Industry Concept Showcases"
          title={<>Five Industries, <em>Five Distinct Directions</em></>}
          text="Fictional brands created by WebiQQ to demonstrate how strategy, visual identity, and customer journeys change by industry. These are live concept builds, presented separately from client work."
          id="concept-showcases-title"
        />
        <div className="showcase-project-grid reveal">
          {industryShowcases.map((showcase, index) => (
            <article className="project-card project-card--business" key={showcase.title}>
              <div className="project-card-top">
                <span className="project-type-badge badge--business">{showcase.label}</span>
                <span className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="project-card-title">{showcase.title}</h3>
              <p className="work-card-meta">
                <FiMapPin aria-hidden="true" />
                {showcase.market}
              </p>
              <p className="project-card-desc">{showcase.summary}</p>
              <div className="project-highlights">
                {showcase.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <a
                className="project-cta project-cta--business"
                href={showcase.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'Open the live ' + showcase.title + ' concept showcase'}
              >
                Open live showcase <FiArrowRight aria-hidden="true" />
              </a>
              <span className="concept-showcase-host">{showcase.liveHost}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="independent-title">
        <SectionHeader
          eyebrow="Independent Builds"
          title={<>Product Engineering, <em>In-House</em></>}
          text="Full-stack platforms built independently by the WebiQQ team — shown separately from client work, as evidence of product thinking, authentication flows, databases, and app logic."
          id="independent-title"
        />
        <div className="work-strip reveal">
          {independentBuilds.map((build) => (
            <article className="work-card work-card--static" key={build.title}>
              <div className="work-card-top">
                <span className="work-card-label">Internal Build</span>
              </div>
              <h3>{build.title}</h3>
              <p>{build.summary}</p>
              <div className="project-highlights">
                {build.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title={<>Want Yours on This Page? <em>Start a Project.</em></>}
        text="Tell us about your business and what you need built — we reply within 24 hours."
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </main>
  );
}
