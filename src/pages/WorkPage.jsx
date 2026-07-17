import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { caseStudies, independentBuilds } from '../data/caseStudies.js';
import { SITE_URL } from '../data/seo.js';

export default function WorkPage() {
  useReveal();
  const flagship = caseStudies.find((c) => c.flagship);
  const clientWork = caseStudies.filter((c) => !c.flagship);

  return (
    <main id="main">
      <Seo
        title="Work & Case Studies | Live Client Projects | WebiQQ"
        description="Real client projects by WebiQQ: a full business platform for Leading Trading Est. in Bahrain, business websites in Germany and Bahrain, and a multilingual corporate site — all live today."
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
        lead="Everything below is live and in use today — built for companies in Bahrain, Germany, and international markets. And it's only the public side: the admin panels, staff portals, and internal tools we build stay behind logins, where they belong."
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
          eyebrow="Client Websites"
          title={<>Business Websites, <em>Delivered and Live</em></>}
          id="client-work-title"
        />
        <div className="work-strip reveal">
          {clientWork.map((project) => (
            <Link className="work-card" to={`/work/${project.slug}`} key={project.slug}>
              <div className="work-card-top">
                <span className="work-card-label">{project.label}</span>
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
