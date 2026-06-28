import './App.css';
import { useEffect, useRef, useState } from 'react';
import { FiActivity, FiArrowRight, FiBarChart2, FiBriefcase, FiCode, FiCpu, FiDatabase, FiExternalLink, FiGlobe, FiGrid, FiInstagram, FiLayers, FiLinkedin, FiMapPin, FiMenu, FiSearch, FiServer, FiShoppingCart, FiTarget, FiTrendingUp, FiX, FiZap } from 'react-icons/fi';

const WHATSAPP_NUMBER = '97333290109';
import BackToTop from './components/Common/BackToTop.jsx';
import Seo from './components/Common/Seo.jsx';
import {
  businessWebsiteProjects,
  caseStudyFeatures,
  contactDetails,
  navLinks,
  passionProjects,
  processSteps,
  projectTypes,
  reasons,
  serviceOptions,
  services,
  socialLinks,
  team,
  valueCards,
} from './data/webiqqContent.js';
import { SITE_DESCRIPTION, SITE_URL, faqItems, seoKeywords, siteSchemas } from './data/seo.js';

const socialIconMap = { instagram: FiInstagram, linkedin: FiLinkedin };

const scrollToSection = (event, href, closeMenu) => {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  closeMenu?.();
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="nav-logo" href="#home" onClick={(event) => scrollToSection(event, '#home')}>
        <span>W</span>
        Webiqq
      </a>

      <button className="mobile-menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(event) => scrollToSection(event, link.href, () => setOpen(false))}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={(event) => scrollToSection(event, '#contact', () => setOpen(false))}>
          Start a Project
        </a>
      </nav>
    </header>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Abstract Webiqq dashboard mockup with website, SEO, AI, and business cards">
      <div className="mock-window website-preview">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-hero">
          <div className="preview-nav">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-copy">
            <span className="preview-kicker">Digital system</span>
            <strong>Growth-ready website</strong>
            <small>SEO, AI workflows, dashboard and lead capture in one clean build.</small>
          </div>
          <div className="preview-stats">
            <span>SEO</span>
            <span>Leads</span>
            <span>AI</span>
          </div>
        </div>
        <div className="preview-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="mock-card seo-card">
        <FiBarChart2 aria-hidden="true" />
        <div>
          <strong>SEO Growth</strong>
          <span className="chart-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <div className="mock-card ai-card">
        <FiCpu aria-hidden="true" />
        <div>
          <strong>AI Automation</strong>
          <small>Lead routing ready</small>
        </div>
      </div>
      <div className="mock-card dashboard-card">
        <FiGrid aria-hidden="true" />
        <div>
          <strong>Dashboard</strong>
          <small>Projects, leads, reports</small>
        </div>
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
          <span>Remote worldwide</span>
        </div>
        <p className="eyebrow">Website developers · Business software · SEO</p>
        <h1>Website Developers for Business Websites, Software, SEO & AI Automation</h1>
        <p className="hero-subtitle">
          Webiqq is a remote freelance website development team working with clients globally. We build modern
          business websites, custom business software, databases, server deployments, AI automation, SEO systems,
          e-commerce structures, and digital marketing foundations that help companies grow.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#showcase" onClick={(event) => scrollToSection(event, '#showcase')}>
            View Showcase
            <FiArrowRight aria-hidden="true" />
          </a>
          <a className="secondary-button" href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>
            Start a Project
          </a>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="section-shell value-strip" aria-labelledby="value-title">
      <div className="value-intro reveal">
        <p className="eyebrow">Digital growth systems</p>
        <h2 id="value-title">More Than a Website. A Smarter Business System.</h2>
        <p>
          We design and build digital systems that help businesses present themselves professionally, attract customers
          online, and improve daily operations. From website development and SEO to admin dashboards, automation, databases,
          and marketing support — Webiqq brings the technical and growth side together.
        </p>
      </div>
      <div className="value-pillars reveal" style={{transitionDelay:'120ms'}}>
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

function FeaturedCaseStudy() {
  return (
    <section className="section-shell case-study" id="showcase" aria-labelledby="case-title">
      <div className="case-copy">
        <div className="case-eyebrow-row">
          <p className="eyebrow">Featured Showcase</p>
          {['React 19', 'Node.js', 'MongoDB', 'SEO', 'PWA'].map((t) => (
            <span className="case-tech-tag" key={t}>{t}</span>
          ))}
        </div>
        <h2 id="case-title">Leading Trading Est. — Complete Business Platform</h2>
        <p className="section-lead">
          A full digital platform for a Bahrain medical and industrial supply company — public SEO website, product catalogue, RFQ lead capture, customer ordering, staff field operations, and admin office system, all in one connected build.
        </p>
        <div className="case-points">
          <article className="case-point case-point--problem">
            <h3>Challenge</h3>
            <p>
              The business needed more than a website — a professional online presence, a way to capture RFQ leads from clients, support customer ordering, and manage internal team operations from one connected platform.
            </p>
          </article>
          <article className="case-point case-point--solution">
            <h3>Build</h3>
            <p>
              Webiqq delivered a full-stack platform: a public SEO site with product catalogue, RFQ and quote capture, customer ordering, a staff field-operations portal, and a complete admin office management system — all running through one API.
            </p>
          </article>
          <article className="case-point case-point--result">
            <h3>Outcome</h3>
            <p>
              A live business platform that handles digital presentation, lead generation, ordering, internal operations, messaging, exports, and backup infrastructure — searchable, scalable, and built to grow.
            </p>
          </article>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="https://www.lte-bh.com" target="_blank" rel="noopener noreferrer">
            View Live Site
            <FiExternalLink aria-hidden="true" />
          </a>
          <a className="secondary-button" href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>
            Start Your Project
          </a>
        </div>
      </div>

      <div className="case-visual" aria-label="Leading Trading Est. platform feature mockup">
        <div className="case-browser-wrap">
          <div className="case-browser">
            <div className="case-browser-bar">
              <div className="window-dots"><span /><span /><span /></div>
              <div className="case-url-bar">
                <FiGlobe aria-hidden="true" />
                <span>lte-bh.com</span>
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
          {caseStudyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ShowcaseProjects() {
  const projectGroups = [
    {
      title: 'Business Websites',
      subtitle: 'Live client website work built for presentation, service discovery, SEO, and lead generation.',
      accent: 'business',
      projects: businessWebsiteProjects,
    },
    {
      title: 'Passion Projects',
      subtitle: 'Independent full-stack builds showing product thinking, authentication flows, databases, and interactive app logic.',
      accent: 'passion',
      projects: passionProjects,
    },
  ];

  return (
    <section className="section-shell" aria-labelledby="showcase-projects-title">
      <div className="showcase-intro">
        <p className="eyebrow">More Showcase Work</p>
        <h2 id="showcase-projects-title">Business Work & Passion Projects</h2>
        <p>Client projects are separated from independent product builds so each type of work is clear.</p>
      </div>
      <div className="showcase-groups reveal">
        {projectGroups.map((group) => (
          <div className="showcase-group" key={group.title}>
            <div className="showcase-category-header">
              <div className={`showcase-category-rule accent-rule--${group.accent}`} />
              <div className="showcase-category-meta">
                <span className={`showcase-category-badge accent-badge--${group.accent}`}>{group.title}</span>
                <span className="showcase-category-count">{group.projects.length} project{group.projects.length !== 1 ? 's' : ''}</span>
              </div>
              <p className="showcase-category-desc">{group.subtitle}</p>
            </div>
            <div className="showcase-project-grid">
              {group.projects.map((project, projectIndex) => (
                <article className={`project-card project-card--${group.accent}`} key={project.title}>
                  <div className="project-card-top">
                    <span className={`project-type-badge badge--${group.accent}`}>{project.label}</span>
                    <span className="project-number">0{projectIndex + 1}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.text}</p>
                  <div className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                  {project.href ? (
                    <a className={`project-cta project-cta--${group.accent}`} href={project.href} target="_blank" rel="noopener noreferrer">
                      <span>View Live Site</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="project-cta project-cta--muted">
                      <span>In Development</span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const serviceIcons = {
  'Website Development': FiGlobe,
  'Business Software': FiCode,
  'SEO Optimization': FiSearch,
  'AI Automation': FiZap,
  'E-Commerce & Ordering': FiShoppingCart,
  'RFQ & Lead Capture': FiActivity,
  'Customer & Staff Portals': FiBriefcase,
  'Database Management': FiDatabase,
  'Digital Marketing': FiTarget,
  'Server & Maintenance': FiServer,
  'Social Media Management': FiInstagram,
  'Google Business Profile Setup': FiMapPin,
};

function ServicesSection() {
  return (
    <section className="section-shell" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="Search-ready services"
        title="Website Development, Business Software, SEO, Social Media, Google Business & AI"
        text="From business websites to smart internal systems, social media management, Google Business Profile setup, databases, server handling, and maintenance — we build and manage the digital presence that search engines and customers rely on."
      />
      <div className="services-matrix reveal">
        {services.map((service) => {
          const Icon = serviceIcons[service.title] ?? FiSearch;
          return (
            <div className="service-tile" key={service.title}>
              <div className="service-tile-icon"><Icon aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="section-shell capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-head">
        <SectionHeader
          eyebrow="What we can provide"
          title="Full-Service Digital Build Capabilities"
          text="Webiqq helps businesses move from a basic online presence to a complete digital foundation with searchable pages, practical software, automation, and post-launch support."
        />
      </div>
      <div className="capabilities-tiles reveal">
        {projectTypes.map((pt) => (
          <div className="capability-tile" key={pt.title}>
            <span className="capability-tile-tag">{pt.tag}</span>
            <h3>{pt.title}</h3>
            <p>{pt.text}</p>
          </div>
        ))}
      </div>
      <div className="capabilities-bottom reveal" style={{transitionDelay:'120ms'}}>
        <div className="keyword-panel" aria-label="SEO keyword focus">
          <span>SEO focus</span>
          <div>
            {seoKeywords.map((keyword) => (
              <strong key={keyword}>{keyword}</strong>
            ))}
          </div>
        </div>
        <div className="reasons-panel">
          <h3>Why businesses choose Webiqq</h3>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const teamIcons = [FiLayers, FiCpu, FiBriefcase, FiActivity, FiTrendingUp];

function TeamSection() {
  return (
    <section className="section-shell" id="team" aria-labelledby="team-title">
      <SectionHeader
        eyebrow="Our Team"
        title="The Expertise Behind Every Project."
        text="A cross-functional team of specialists covering every layer of digital delivery — engineering, AI, strategy, and marketing, working as one."
      />
      <div className="team-list reveal">
        {team.map((member, i) => {
          const Icon = teamIcons[i];
          return (
            <div className="team-row" key={member.role}>
              <div className="team-row-icon"><Icon aria-hidden="true" /></div>
              <div className="team-row-main">
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </div>
              <div className="team-row-skills">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


function ProcessSection() {
  return (
    <section className="section-shell" id="process" aria-labelledby="process-title">
      <SectionHeader title="How We Turn Ideas Into Digital Systems" />
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
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-shell final-cta" aria-labelledby="cta-title">
      <p className="eyebrow">Remote · Worldwide · Ready</p>
      <h2 id="cta-title">Let's Build Something Great — Wherever You Are.</h2>
      <p>
        Whether you need a professional website, SEO, AI automation, or a full digital system — our remote team is
        ready to work with you. We can also help with database management, server handling, and maintenance after launch.
      </p>
      <div className="hero-actions">
        <a className="primary-button" href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>
          Start a Project
          <FiArrowRight aria-hidden="true" />
        </a>
        <a className="secondary-button" href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>
          Get in Touch
        </a>
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
        title="Questions Businesses Search Before Hiring Website Developers"
        text="Clear answers for companies comparing website developers, business software teams, SEO support, and automation partners."
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

function ContactSection() {
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });
  const isSubmitting = formStatus.type === 'submitting';

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setFormStatus({ type: 'submitting', message: 'Sending your request...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Unable to send your request right now.');
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Your request was sent. We will reply within 24 hours.',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message || 'Unable to send your request right now.',
      });
    }
  };

  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let's Build Something Great Together</h2>
        <p>
          We work remotely with clients worldwide. Tell us about your project and we'll get back to you within 24 hours
          — no matter where you are.
        </p>
        <div className="contact-details">
          {contactDetails.map((detail) => (
            <div key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>
        <div className="contact-socials">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <Icon aria-hidden="true" />
                {link.handle}
              </a>
            );
          })}
        </div>
      </div>
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <label className="honeypot" aria-hidden="true">
          Website
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone" placeholder="+1 (or your country code)" autoComplete="tel" />
        </label>
        <label>
          Business name
          <input type="text" name="business" placeholder="Company or brand name" autoComplete="organization" />
        </label>
        <label className="full-field">
          Service needed
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="full-field">
          Message
          <textarea name="message" rows="5" placeholder="Tell us what you want to build." required />
        </label>
        <button className="primary-button full-field" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Project Request'}
          <FiArrowRight aria-hidden="true" />
        </button>
        {formStatus.message ? (
          <p className={`form-status full-field ${formStatus.type === 'error' ? 'is-error' : ''}`} role="status">
            {formStatus.message}
          </p>
        ) : null}
      </form>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.87L0 24l6.29-1.515A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.032-1.388l-.36-.214-3.733.899.934-3.622-.235-.372A9.792 9.792 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    </a>
  );
}

function LegalModal({ type, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => { if (e.target === overlayRef.current) onClose(); };

  const isPrivacy = type === 'privacy';

  return (
    <div className="legal-overlay" ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
      <div className="legal-modal">
        <div className="legal-modal-header">
          <h2 id="legal-modal-title">{isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}</h2>
          <button className="legal-close" type="button" aria-label="Close" onClick={onClose}><FiX aria-hidden="true" /></button>
        </div>
        <div className="legal-modal-body">
          {isPrivacy ? (
            <>
              <p><strong>Last updated: June 2026</strong></p>
              <h3>1. Information We Collect</h3>
              <p>When you submit our contact form, we collect your name, email address, phone number (optional), business name (optional), and the message you provide. We do not collect any information automatically beyond standard server logs.</p>
              <h3>2. How We Use Your Information</h3>
              <p>We use the information you submit solely to respond to your project enquiry. We do not sell, rent, or share your personal data with third parties. Your details are used only for communication related to your request.</p>
              <h3>3. Data Storage</h3>
              <p>Contact form submissions are sent directly to our business email and are not stored in any third-party database. We retain correspondence only for as long as necessary to fulfil your request or maintain business records.</p>
              <h3>4. Cookies</h3>
              <p>This website does not use tracking or advertising cookies. We may use essential session-related cookies required for the site to function correctly.</p>
              <h3>5. Third-Party Services</h3>
              <p>Our website is hosted on Vercel. Standard server and access logs may be maintained by our hosting provider in accordance with their own privacy policy.</p>
              <h3>6. Your Rights</h3>
              <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:webbiqq@gmail.com">webbiqq@gmail.com</a>.</p>
              <h3>7. Contact</h3>
              <p>For any privacy-related questions, email us at <a href="mailto:webbiqq@gmail.com">webbiqq@gmail.com</a>.</p>
            </>
          ) : (
            <>
              <p><strong>Last updated: June 2026</strong></p>
              <h3>1. Services</h3>
              <p>Webiqq provides website development, business software, SEO, AI automation, and digital marketing services to clients on a project or retainer basis. All work is defined by a separate project agreement or proposal agreed upon before work begins.</p>
              <h3>2. Enquiries & Proposals</h3>
              <p>Submitting a contact form or enquiry does not constitute a binding agreement. Work only begins after both parties have agreed to a formal proposal, scope of work, and payment terms in writing.</p>
              <h3>3. Intellectual Property</h3>
              <p>Upon full payment, the client receives full ownership of the deliverables specified in the agreed project scope. Webiqq retains the right to display completed work in its portfolio unless otherwise agreed in writing.</p>
              <h3>4. Payment</h3>
              <p>Payment terms are outlined in the project proposal. Work may be paused or terminated if payments are not made in accordance with agreed terms. Deposits are non-refundable once work has commenced.</p>
              <h3>5. Revisions</h3>
              <p>The number of revision rounds is defined in each project agreement. Requests outside the agreed scope may incur additional charges.</p>
              <h3>6. Limitation of Liability</h3>
              <p>Webiqq is not liable for indirect, incidental, or consequential damages arising from the use of delivered work. Our total liability is limited to the amount paid for the specific service in question.</p>
              <h3>7. Governing Law</h3>
              <p>These terms are governed by applicable laws. Disputes will be resolved through good-faith negotiation before any formal proceedings.</p>
              <h3>8. Contact</h3>
              <p>Questions about these terms? Email us at <a href="mailto:webbiqq@gmail.com">webbiqq@gmail.com</a>.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer({ onPrivacy, onTerms }) {
  return (
    <footer className="footer">
      <div>
        <a className="nav-logo" href="#home" onClick={(event) => scrollToSection(event, '#home')}>
          <span>W</span>
          Webiqq
        </a>
        <p>Smart Websites, SEO & AI Growth</p>
        <p className="footer-remote">Remote-first · Available worldwide</p>
        <div className="footer-social">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Quick links</h3>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(event) => scrollToSection(event, link.href)}>
            {link.label}
          </a>
        ))}
      </div>
      <div>
        <h3>Services</h3>
        {['Websites', 'Software', 'SEO', 'AI', 'Social Media', 'Google Business', 'Databases', 'Servers'].map((service) => (
          <a key={service} href="#services" onClick={(event) => scrollToSection(event, '#services')}>{service}</a>
        ))}
      </div>
      <p className="copyright">
        © 2026 Webiqq. All rights reserved. · Remote freelance team, available worldwide.
        {' · '}
        <button type="button" className="footer-legal-btn" onClick={onPrivacy}>Privacy Policy</button>
        {' · '}
        <button type="button" className="footer-legal-btn" onClick={onTerms}>Terms & Conditions</button>
      </p>
    </footer>
  );
}

export default function App() {
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="app-orb app-orb--1" aria-hidden="true" />
      <div className="app-orb app-orb--2" aria-hidden="true" />
      <div className="app-orb app-orb--3" aria-hidden="true" />
      <Seo
        title="Webiqq | Website Developers, Business Software, SEO & AI Automation"
        description={SITE_DESCRIPTION}
        canonical={`${SITE_URL}/`}
        image={`${SITE_URL}/webiqq-logo.svg`}
        jsonLd={siteSchemas}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ValueStrip />
        <ServicesSection />
        <ProcessSection />
        <CapabilitiesSection />
        <FeaturedCaseStudy />
        <ShowcaseProjects />
        <FaqSection />
        <TeamSection />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer onPrivacy={() => setLegalModal('privacy')} onTerms={() => setLegalModal('terms')} />
      <BackToTop />
      <WhatsAppButton />
      {legalModal && <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />}
    </div>
  );
}
