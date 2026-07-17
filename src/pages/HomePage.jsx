import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { serviceLines } from '../data/services.js';
import { caseStudies } from '../data/caseStudies.js';
import { valueCards, processSteps } from '../data/webiqqContent.js';
import { SITE_DESCRIPTION, SITE_URL, faqItems, seoKeywords, siteSchemas } from '../data/seo.js';
import { blogPosts } from '../data/blogContent.js';
import { WHATSAPP_URL } from '../layout/SiteLayout.jsx';

const serviceIcons = {
  'websites-and-ecommerce': FiGlobe,
  'business-software': FiCode,
  'seo-and-digital-growth': FiSearch,
  'automation-and-integrations': FiZap,
  'multilingual-website-systems': FiGlobe,
  'care-hosting-and-support': FiTool,
};

function ClientBoard() {
  return (
    <div className="client-board" aria-label="Selected client work by WebiQQ">
      <div className="client-board-header">
        <span>Selected Work</span>
        <Link className="client-board-more" to="/work">
          All projects <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
      <div className="client-board-list">
        {caseStudies.map((project) => (
          <Link className="client-board-row" to={`/work/${project.slug}`} key={project.slug}>
            <div className="client-board-info">
              <strong>{project.client}</strong>
              <span>
                <FiMapPin aria-hidden="true" />
                {project.location}
              </span>
            </div>
            <span className={`client-board-tag ${project.flagship ? 'tag--featured' : 'tag--done'}`}>{project.label}</span>
          </Link>
        ))}
      </div>
      <div className="client-board-footer">
        <span>
          <FiGlobe aria-hidden="true" />
          GCC &amp; worldwide
        </span>
        <span className="client-board-note">& more projects delivered</span>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-content">
        <div className="hero-available">
          <span className="hero-available-dot" aria-hidden="true" />
          <span>Available for new projects</span>
          <span className="hero-available-sep" aria-hidden="true">·</span>
          <span>Operating across the GCC and worldwide</span>
        </div>
        <p className="eyebrow">Web &amp; software development company</p>
        <h1>High-Performance Websites, Software and <em>Automated Systems</em></h1>
        <p className="hero-subtitle">
          WebiQQ builds high-performance websites, business software and automated systems for ambitious companies
          across the GCC and beyond. Digital systems that generate leads and simplify business operations.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/contact">
            Start a Project
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="secondary-button" to="/work">
            View Our Work
          </Link>
        </div>
        <a className="hero-consult-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Or book a free consultation on WhatsApp <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <ClientBoard />
    </section>
  );
}

function ServicesMarquee() {
  const items = serviceLines.map((service) => service.title);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function SelectedWork() {
  const featured = caseStudies.filter((c) => !c.flagship);

  return (
    <section className="section-shell" aria-labelledby="selected-work-title">
      <SectionHeader
        eyebrow="Selected Work"
        title={<>Some of our work is public. <em>The rest runs behind logins.</em></>}
        text="A few of the client websites we can show openly — live in Bahrain, Germany, and beyond. The catalogues, dashboards, and internal tools we build stay private to the businesses running on them."
        id="selected-work-title"
      />
      <div className="work-strip reveal">
        {featured.map((project) => (
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
  );
}

function ServicesOverview() {
  return (
    <section className="section-shell" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="What We Do"
        title={<>One team for the whole job</>}
        text="Websites, e-commerce, custom software, SEO, automation, and the support that comes after — you talk directly to the people building it, not an account manager passing notes."
        id="services-title"
      />
      <div className="services-matrix reveal">
        {serviceLines.map((service) => {
          const Icon = serviceIcons[service.slug] ?? FiSearch;
          return (
            <Link className="service-tile service-tile--link" to={`/services/${service.slug}`} key={service.slug}>
              <div className="service-tile-icon"><Icon aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="service-tile-more">
                Explore service <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          );
        })}
        <div className="service-tile service-tile--cta">
          <h3>Not sure what you need?</h3>
          <p>Describe the problem — we will recommend the right scope in one conversation.</p>
          <Link className="primary-button" to="/contact">
            Get a Recommendation
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="section-shell value-strip" aria-labelledby="value-title">
      <div className="value-intro reveal">
        <p className="eyebrow">Business outcomes</p>
        <h2 id="value-title">Built to Do a Job — <em>Not Just to Look Good.</em></h2>
        <p>
          Every WebiQQ build is designed around a business outcome: presenting the company professionally, being found
          on Google, converting attention into enquiries, and reducing manual work inside the business.
        </p>
      </div>
      <div className="value-pillars reveal" style={{ transitionDelay: '120ms' }}>
        {valueCards.map((card, i) => (
          <div className="value-pillar" key={card.title}>
            <span className="value-pillar-num" aria-hidden="true">0{i + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessPreview() {
  return (
    <section className="section-shell" id="process" aria-labelledby="process-title">
      <SectionHeader
        eyebrow="Our Process"
        title={<>A Clear Path From <em>Idea to Live System</em></>}
        id="process-title"
      />
      <div className="process-timeline reveal">
        {processSteps.map((step, i) => (
          <div className="process-node" key={step.title}>
            <div className="process-node-head">
              <div className="process-node-dot">{String(i + 1).padStart(2, '0')}</div>
              {i < processSteps.length - 1 && <div className="process-node-line" />}
            </div>
            <div className="process-node-body">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section-foot-link reveal">
        <Link className="secondary-button" to="/process">
          How we work, in detail
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function LeadingConnection() {
  return (
    <section className="section-shell parent-connection reveal" aria-labelledby="parent-connection-title">
      <div className="parent-connection-copy">
        <p className="eyebrow">Built within a real Bahrain business</p>
        <h2 id="parent-connection-title">
          WebiQQ is the web and software development division of{' '}
          <a href="https://www.lte-bh.com" target="_blank" rel="noopener noreferrer">
            Leading Trading Est.
          </a>
        </h2>
        <p>
          Leading Trading Est. is our parent company—not simply a client or partner. WebiQQ was built from inside the
          business to create and operate its websites, catalogue, quotation workflows, staff tools, and internal
          systems. That daily operational responsibility shapes how we build dependable systems for every client.
        </p>
      </div>
      <div className="parent-connection-actions">
        <Link className="primary-button" to="/about">
          About WebiQQ
          <FiArrowRight aria-hidden="true" />
        </Link>
        <Link className="text-arrow-link" to="/work/leading-trading-est">
          View the Leading Trading Est. case study
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

const trustPoints = [
  {
    title: 'You own everything',
    text: 'Domain, code, and hosting are registered in your name. No lock-in, no hostage websites.',
  },
  {
    title: 'Real operational systems',
    text: 'WebiQQ runs live business platforms — catalogues, ordering, portals — not just landing pages.',
  },
  {
    title: 'SEO built in from day one',
    text: 'Metadata, schema, sitemaps, and page structure ship with every build, not as an upsell.',
  },
  {
    title: 'Support after launch',
    text: 'Maintenance, monitoring, and improvements keep your platform healthy long after go-live.',
  },
];

function TrustSection() {
  return (
    <section className="section-shell" aria-labelledby="trust-title">
      <SectionHeader
        eyebrow="Why WebiQQ"
        title={<>A Development Partner, <em>Not a Template Seller</em></>}
        id="trust-title"
      />
      <div className="trust-grid reveal">
        {trustPoints.map((point) => (
          <article className="trust-card" key={point.title}>
            <FiCheckCircle aria-hidden="true" />
            <div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-shell faq-section" id="faq" aria-labelledby="faq-title">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions Businesses Ask Before Hiring a Web Development Company"
        text="Clear answers for companies comparing website developers, business software teams, SEO support, and automation partners."
        id="faq-title"
      />
      <div className="faq-accordion reveal">
        {faqItems.map((item, i) => (
          <div className={`faq-item${openIndex === i ? ' is-open' : ''}`} key={item.question}>
            <button
              className="faq-trigger"
              type="button"
              aria-expanded={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.question}</span>
              <FiArrowRight className="faq-arrow" aria-hidden="true" />
            </button>
            <div className="faq-body">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightsPreview() {
  const latest = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section className="section-shell" aria-labelledby="blog-title">
      <SectionHeader
        eyebrow="Insights"
        title={<>Things we end up explaining to every client — <em>written down properly</em></>}
        text="Guides on websites, SEO, and growing online, written for business owners in Bahrain and the GCC."
        id="blog-title"
      />
      <div className="blog-cards reveal">
        {latest.map((post) => (
          <Link key={post.slug} className="blog-card" to={`/blog/${post.slug}`}>
            <span className="blog-card-cat">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span className="blog-card-read">
              Read article
              <FiArrowRight aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <div className="section-foot-link reveal">
        <Link className="secondary-button" to="/insights">
          All insights
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  useReveal();

  return (
    <main id="main">
      <Seo
        title="WebiQQ | Websites, Business Software & Automation"
        description={SITE_DESCRIPTION}
        canonical={`${SITE_URL}/`}
        image={`${SITE_URL}/webiqq-logo.svg`}
        keywords={seoKeywords.join(', ')}
        jsonLd={siteSchemas}
      />
      <HeroSection />
      <ServicesMarquee />
      <SelectedWork />
      <ServicesOverview />
      <OutcomesSection />
      <ProcessPreview />
      <LeadingConnection />
      <TrustSection />
      <FaqSection />
      <InsightsPreview />
      <CtaBand />
    </main>
  );
}
