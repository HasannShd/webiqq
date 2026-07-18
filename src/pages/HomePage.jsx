import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiGlobe,
  FiLayers,
  FiSearch,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { serviceLines } from '../data/services.js';
import { industryShowcases } from '../data/caseStudies.js';
import { valueCards, processSteps } from '../data/webiqqContent.js';
import { SITE_DESCRIPTION, SITE_URL, faqItems, seoKeywords, siteSchemas } from '../data/seo.js';
import { blogPosts } from '../data/blogContent.js';
import { WHATSAPP_URL } from '../layout/SiteLayout.jsx';

const serviceIcons = {
  'websites-and-ecommerce': FiGlobe,
  'business-software': FiCode,
  'seo-and-digital-growth': FiSearch,
  'automation-and-integrations': FiZap,
  'multilingual-website-systems': FiLayers,
  'care-hosting-and-support': FiTool,
};

const nicheNames = ['Construction', 'Real estate', 'Cafés & restaurants', 'Design studios', 'Beauty salons'];

function NichePanel() {
  return (
    <aside className="nv-niche-panel" aria-labelledby="niche-panel-title">
      <div className="nv-niche-panel-head">
        <span>Industry-focused design</span>
        <h2 id="niche-panel-title">Built around how your customers choose.</h2>
        <p>One development standard, with a different experience for every business model.</p>
      </div>
      <div className="nv-niche-list">
        {nicheNames.map((niche, index) => (
          <a href="#niches" key={niche}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{niche}</strong>
            <FiArrowRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}

function HeroSection() {
  return (
    <section className="nv-hero section-shell" id="home">
      <div>
        <p className="eyebrow">Web development company in Bahrain</p>
        <h1>
          Websites, software and automation — <em>built as one system.</em>
        </h1>
        <p className="nv-hero-sub">
          WebiQQ is the development division of Leading Trading Est., building fast websites, business platforms and
          automated workflows for companies in Bahrain, Germany and worldwide — planned clearly, built properly, and
          supported after launch.
        </p>
        <div className="nv-hero-actions">
          <Link className="primary-button" to="/contact">
            Start a Project
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="secondary-button" to="/services">
            Explore Services
          </Link>
        </div>
        <a className="hero-consult-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Or book a free consultation on WhatsApp <FiArrowUpRight aria-hidden="true" />
        </a>
        <div className="nv-hero-metrics" aria-label="How WebiQQ works with clients">
          <span>
            <strong>&lt;24h</strong> first response
          </span>
          <span>
            <strong>100%</strong> code &amp; domain ownership
          </span>
          <span>
            <strong>GCC·EU</strong> markets served
          </span>
        </div>
      </div>
      <NichePanel />
    </section>
  );
}

/* ─── Capability strip ─── */

function CapabilityStrip() {
  const items = serviceLines.map((service) => service.title);

  return (
    <div className="nv-ticker" aria-hidden="true">
      <div className="nv-ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Services ─── */

function ServicesSection() {
  const [feature, ...rest] = serviceLines;
  const FeatureIcon = serviceIcons[feature.slug] ?? FiGlobe;

  return (
    <section className="section-shell" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="01 — What we do"
        title={
          <>
            One team for <em>the whole job.</em>
          </>
        }
        text="Websites, e-commerce, custom software, SEO, automation, and the support that comes after — you talk directly to the people building it."
        id="services-title"
      />
      <div className="nv-grid reveal">
        <Link className="nv-cell nv-cell--feature" to={`/services/${feature.slug}`}>
          <span className="nv-cell-num">01</span>
          <span className="nv-cell-icon">
            <FeatureIcon aria-hidden="true" />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.summary}</p>
          <span className="nv-cell-more">
            Explore service <FiArrowRight aria-hidden="true" />
          </span>
        </Link>
        {rest.map((service, i) => {
          const Icon = serviceIcons[service.slug] ?? FiSearch;
          return (
            <Link className="nv-cell" to={`/services/${service.slug}`} key={service.slug}>
              <span className="nv-cell-num">{String(i + 2).padStart(2, '0')}</span>
              <span className="nv-cell-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="nv-cell-more">
                Explore service <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function WorkCta() {
  return (
    <div className="nv-band nv-band--ink">
      <section className="section-shell nv-work-cta reveal" aria-labelledby="work-title">
        <div>
          <p className="eyebrow">03 — Live work</p>
          <h2 id="work-title">Want the proof? <em>See what is already live.</em></h2>
          <p>Explore public client platforms, case studies and the systems we are able to show openly.</p>
        </div>
        <Link className="primary-button" to="/work">
          View live work <FiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}

/* ─── Concept showcase rail — sand band ─── */

function ShowcaseRail() {
  return (
    <div className="nv-band nv-band--sand">
      <section className="section-shell" id="niches" aria-labelledby="showcase-title">
        <SectionHeader
          eyebrow="02 — Industry showcases"
          title={
            <>
              Five business niches. <em>Designed differently.</em>
            </>
          }
          text="Construction, property, hospitality, design and beauty each need a different customer journey. These fictional concept brands show the direction clearly without being presented as client work."
          id="showcase-title"
        />
        <p className="nv-rail-note">Concept demos · fictional brands · open in a new tab</p>
        <div className="nv-rail reveal">
          {industryShowcases.map((concept) => (
            <a
              className="nv-rail-card"
              href={concept.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={concept.title}
            >
              <span className="nv-rail-top">
                <span className="nv-rail-label">{concept.label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </span>
              <h3>{concept.title}</h3>
              <span className="nv-rail-market">{concept.market}</span>
              <p>{concept.summary}</p>
              <span className="nv-rail-chips">
                {concept.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Outcomes ─── */

function OutcomesSection() {
  return (
    <div className="nv-band nv-band--ink">
      <section className="section-shell nv-outcomes" aria-labelledby="value-title">
        <div className="nv-outcomes-intro">
          <p className="eyebrow">04 — What you gain</p>
          <h2 id="value-title">A digital system that <em>earns its place</em> in the business.</h2>
          <p>Every layer is connected to a practical outcome: better trust, stronger visibility, less repetitive work and room to grow.</p>
        </div>
        <div className="nv-values reveal">
          {valueCards.map((card, i) => (
            <div className="nv-value" key={card.title}>
              <i aria-hidden="true">0{i + 1}</i>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Process ─── */

function ProcessSection() {
  return (
    <section className="section-shell" id="process" aria-labelledby="process-title">
      <SectionHeader
        eyebrow="05 — How we work"
        title={
          <>
            A clear path from <em>idea to live system.</em>
          </>
        }
        id="process-title"
      />
      <div className="nv-process reveal">
        {processSteps.map((step, i) => (
          <div className="nv-step" key={step.title}>
            <i aria-hidden="true">STEP 0{i + 1}</i>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
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

/* ─── Parent company ─── */

function ParentSection() {
  return (
    <section className="section-shell" aria-labelledby="parent-title">
      <div className="nv-parent reveal">
        <div className="nv-parent-copy">
          <p className="eyebrow">Built within a real business</p>
          <h2 id="parent-title">
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
        <div className="nv-parent-actions">
          <Link className="primary-button" to="/about">
            About WebiQQ
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="text-arrow-link" to="/process">
            See how WebiQQ projects work
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-shell faq-section" id="faq" aria-labelledby="faq-title">
      <SectionHeader
        eyebrow="06 — FAQ"
        title="Questions businesses ask before hiring a web development company"
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

/* ─── Insights ─── */

function InsightsPreview() {
  const latest = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section className="section-shell" aria-labelledby="blog-title">
      <SectionHeader
        eyebrow="07 — Insights"
        title={
          <>
            Things we explain to every client — <em>written down properly.</em>
          </>
        }
        text="Guides on websites, SEO, and growing online, written for business owners in Bahrain, the GCC, and beyond."
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
        title="Web Development Company Bahrain | Websites & Software | WebiQQ"
        description={SITE_DESCRIPTION}
        canonical={`${SITE_URL}/`}
        image={`${SITE_URL}/webiqq-logo.svg`}
        keywords={seoKeywords.join(', ')}
        jsonLd={siteSchemas}
      />
      <HeroSection />
      <CapabilityStrip />
      <ServicesSection />
      <ShowcaseRail />
      <WorkCta />
      <OutcomesSection />
      <ProcessSection />
      <ParentSection />
      <FaqSection />
      <InsightsPreview />
      <CtaBand />
    </main>
  );
}
