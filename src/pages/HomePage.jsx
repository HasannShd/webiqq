import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiMapPin,
  FiSearch,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { serviceLines } from '../data/services.js';
import { caseStudies, getCaseStudy } from '../data/caseStudies.js';
import { valueCards, processSteps } from '../data/webiqqContent.js';
import { SITE_DESCRIPTION, SITE_URL, faqItems, seoKeywords, siteSchemas } from '../data/seo.js';
import { blogPosts } from '../data/blogContent.js';
import { WHATSAPP_URL } from '../layout/SiteLayout.jsx';

const serviceIcons = {
  'websites-and-ecommerce': FiGlobe,
  'business-software': FiCode,
  'seo-and-digital-growth': FiSearch,
  'ai-and-automation': FiZap,
  'maintenance-and-support': FiTool,
};

function ClientBoard() {
  return (
    <div className="client-board" aria-label="Selected client work by Webiqq">
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
          Bahrain · Germany · Worldwide
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
          <span>Based in Bahrain · Working internationally</span>
        </div>
        <p className="eyebrow">Web &amp; software development company</p>
        <h1>Websites and Digital Systems Built for <em>Business Growth</em></h1>
        <p className="hero-subtitle">
          Webiqq designs and develops high-performance business websites, custom software, SEO systems, and practical
          automation for businesses in Bahrain and worldwide — built to help companies operate and grow.
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
        title={<>Real Websites. Real Businesses. <em>Live Today.</em></>}
        text="Client projects delivered by Webiqq for companies in Bahrain, Germany, and international markets."
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
      <div className="section-foot-link reveal">
        <Link className="secondary-button" to="/work">
          Explore all work
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="section-shell" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="What We Do"
        title={<>Five Service Lines. <em>One Connected Team.</em></>}
        text="From business website development and e-commerce to custom software, SEO, automation, and long-term support — Webiqq covers the full digital system, not just the homepage."
        id="services-title"
      />
      <div className="services-matrix services-matrix--five reveal">
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
          Every Webiqq build is designed around a business outcome: presenting the company professionally, being found
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

function FeaturedCaseStudy() {
  const lte = getCaseStudy('leading-trading-est');

  return (
    <section className="section-shell case-study" id="showcase" aria-labelledby="case-title">
      <div className="case-copy">
        <div className="case-eyebrow-row">
          <p className="eyebrow">Flagship Case Study</p>
        </div>
        <h2 id="case-title">Leading Trading Est. — <em>Complete Business Platform</em></h2>
        <p className="section-lead">{lte.summary}</p>
        <div className="case-points">
          <article className="case-point case-point--problem">
            <h3>Challenge</h3>
            <p>{lte.problem}</p>
          </article>
          <article className="case-point case-point--solution">
            <h3>Build</h3>
            <p>{lte.solution}</p>
          </article>
          <article className="case-point case-point--result">
            <h3>Outcome</h3>
            <p>{lte.outcome}</p>
          </article>
        </div>
        <div className="hero-actions">
          <Link className="primary-button" to="/work/leading-trading-est">
            Read the Case Study
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a
            className="secondary-button"
            href={lte.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the live Leading Trading Est. website"
          >
            View Live Site
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="case-visual" aria-label="Leading Trading Est. platform overview">
        <div className="case-browser-wrap">
          <div className="case-browser">
            <div className="case-browser-bar">
              <div className="window-dots"><span /><span /><span /></div>
              <div className="case-url-bar">
                <FiGlobe aria-hidden="true" />
                <span>{lte.liveHost}</span>
                <span className="case-url-live">Live</span>
              </div>
            </div>
            <div className="case-screen">
              <div className="case-mini-hero">
                <div className="case-mini-nav">
                  <span /><span /><span />
                  <div className="case-mini-nav-cta" />
                </div>
                <div className="case-mini-copy">
                  <div className="case-skel case-skel--tag" />
                  <div className="case-skel case-skel--h1" />
                  <div className="case-skel case-skel--p" />
                  <div className="case-skel case-skel--p case-skel--short" />
                </div>
              </div>
              <div className="case-mini-cats">
                {['Medical', 'Dental', 'Lab', 'Safety', 'Industrial', 'PPE'].map((cat) => (
                  <span key={cat}>{cat}</span>
                ))}
              </div>
              <div className="case-mini-products">
                {[1, 2, 3].map((i) => (
                  <div className="case-mini-product" key={i}>
                    <div className="case-mini-product-img" />
                    <div className="case-skel case-skel--line" />
                    <div className="case-skel case-skel--line case-skel--short" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="case-stat case-stat--products" aria-hidden="true">
            <FiDatabase aria-hidden="true" />
            <div><strong>200+</strong><span>Products</span></div>
          </div>
          <div className="case-stat case-stat--cats" aria-hidden="true">
            <FiGrid aria-hidden="true" />
            <div><strong>12+</strong><span>Categories</span></div>
          </div>
          <div className="case-stat case-stat--admin" aria-hidden="true">
            <FiLayers aria-hidden="true" />
            <div><strong>3</strong><span>Auth Roles</span></div>
          </div>
        </div>

        <ul className="feature-list">
          {lte.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
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
    text: 'Webiqq runs live business platforms — catalogues, ordering, portals — not just landing pages.',
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
        eyebrow="Why Webiqq"
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
        title={<>Practical Guides on <em>Websites, SEO &amp; Growth</em></>}
        text="Written for businesses in Bahrain and the GCC — no jargon, no fluff."
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
        title="Webiqq | Websites, SEO, Software & AI Automation"
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
      <FeaturedCaseStudy />
      <TrustSection />
      <FaqSection />
      <InsightsPreview />
      <CtaBand />
    </main>
  );
}
