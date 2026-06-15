import './App.css';
import { useState } from 'react';
import { FiActivity, FiArrowRight, FiBarChart2, FiBriefcase, FiCode, FiCpu, FiDatabase, FiExternalLink, FiGlobe, FiGrid, FiInstagram, FiLayers, FiLinkedin, FiMenu, FiSearch, FiServer, FiShoppingCart, FiTarget, FiTrendingUp, FiX, FiZap } from 'react-icons/fi';
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
        <p className="service-tags">Website developers • Business software • SEO optimization • AI automation • E-commerce • Databases • Servers • Marketing</p>
      </div>
      <HeroVisual />
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="section-shell value-strip" aria-labelledby="value-title">
      <div>
        <p className="eyebrow">Digital growth systems</p>
        <h2 id="value-title">More Than a Website. A Smarter Business System.</h2>
        <p>
          We design and build digital systems that help businesses present themselves professionally, attract customers
          online, and improve daily operations. From website development and SEO optimization to admin dashboards,
          automation, databases, server setup, and marketing support, Webiqq brings the technical and growth side together.
        </p>
      </div>
      <div className="value-grid">
        {valueCards.map((card) => (
          <article className="compact-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedCaseStudy() {
  return (
    <section className="section-shell case-study" id="showcase" aria-labelledby="case-title">
      <div className="case-copy">
        <p className="eyebrow">Featured Showcase</p>
        <h2 id="case-title">Leading Trading Est. Digital Platform</h2>
        <p className="section-lead">
          A complete digital platform concept for a Bahrain-based medical and industrial supply company.
        </p>
        <p>
          For Leading Trading Est., we developed a professional digital platform designed to strengthen the company's
          online presence, organize its product categories, support customer inquiries, and prepare the business for
          future e-commerce and internal management features.
        </p>
        <div className="case-points">
          <article>
            <h3>Problem</h3>
            <p>
              The business needed a stronger digital presence, a cleaner way to present products and services, and a
              platform that could support future digital expansion.
            </p>
          </article>
          <article>
            <h3>Solution</h3>
            <p>
              Webiqq created a responsive business platform structure with company pages, product/category organization,
              customer inquiry flow, and a scalable foundation for admin, database, server, and e-commerce features.
            </p>
          </article>
          <article>
            <h3>Result</h3>
            <p>
              The project created a stronger digital foundation for the business, improving presentation, customer
              communication, and readiness for future online growth.
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
        <div className="case-browser">
          <div className="case-browser-bar">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="case-url-bar">
              <FiGlobe aria-hidden="true" />
              <span>lte-bh.com</span>
              <span className="case-url-live">Live</span>
            </div>
          </div>
          <div className="case-screen">
            <div className="case-screen-header">
              <strong>Business website</strong>
              <span>SEO-ready</span>
            </div>
            <div className="case-screen-grid">
              {['Product categories', 'Inquiry form', 'Admin panel concept', 'SEO-ready structure'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
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
      <div className="showcase-groups">
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
  'Digital Marketing': FiTarget,
  'E-Commerce Setup': FiShoppingCart,
  'Database Management': FiDatabase,
  'Server & Maintenance': FiServer,
};

function ServicesSection() {
  return (
    <section className="section-shell" id="services" aria-labelledby="services-title">
      <SectionHeader
        eyebrow="Search-ready services"
        title="Website Development, Business Software, SEO, AI & Digital Growth"
        text="From business websites to smart internal systems, databases, server handling, and maintenance, we create digital tools that search engines can understand and customers can act on."
      />
      <div className="services-grid">
        {services.map((service) => {
          const Icon = serviceIcons[service.title] ?? FiSearch;
          return (
            <article className="service-card" key={service.title}>
              <Icon aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
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
        <div className="keyword-panel" aria-label="SEO keyword focus">
          <span>SEO focus</span>
          <div>
            {seoKeywords.map((keyword) => (
              <strong key={keyword}>{keyword}</strong>
            ))}
          </div>
        </div>
      </div>
      <div className="capability-grid">
        {projectTypes.map((project) => (
          <article className="capability-card" key={project.title}>
            <span>{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
      <div className="reasons-panel">
        <h3>Why businesses choose Webiqq</h3>
        <ul>
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
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
      <div className="team-grid">
        {team.map((member, index) => {
          const Icon = teamIcons[index];
          return (
            <article className="team-card" key={member.role}>
              <div className="team-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
              <div className="team-skills">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
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
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
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
  return (
    <section className="section-shell faq-section" id="faq" aria-labelledby="faq-title">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions Businesses Search Before Hiring Website Developers"
        text="Clear answers for companies comparing website developers, business software teams, SEO support, and automation partners."
      />
      <div className="faq-grid">
        {faqItems.map((item) => (
          <article className="faq-card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
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

function Footer() {
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
        {['Websites', 'Software', 'SEO', 'AI', 'Databases', 'Servers'].map((service) => (
          <span key={service}>{service}</span>
        ))}
      </div>
      <p className="copyright">© 2026 Webiqq. All rights reserved. · Remote freelance team, available worldwide.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
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
      <Footer />
      <BackToTop />
    </div>
  );
}
