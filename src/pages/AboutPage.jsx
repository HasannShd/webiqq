import { Link } from 'react-router-dom';
import { FiActivity, FiArrowRight, FiBriefcase, FiCpu, FiLayers, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiTrendingUp } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { team } from '../data/webiqqContent.js';
import { SITE_URL } from '../data/seo.js';
import { OFFICE_MAP_URL } from '../data/contact.js';

const teamIcons = [FiLayers, FiCpu, FiBriefcase, FiActivity, FiTrendingUp];

export default function AboutPage() {
  useReveal();

  return (
    <main id="main">
      <Seo
        title="About WebiQQ | Technology Division of Leading Trading Est."
        description="WebiQQ is the web and software development division of Leading Trading Est., building and operating websites, software, and digital systems from Bahrain for the GCC and worldwide."
        canonical={`${SITE_URL}/about`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
            ],
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About WebiQQ"
        title={<>The Web &amp; Software Development Division of <em>Leading Trading Est.</em></>}
        lead="WebiQQ was built inside Leading Trading Est. to develop and operate the company’s digital platform and internal systems. Today, that same hands-on technology team builds websites, software, and automated systems for companies across the GCC and worldwide."
      />

      <section className="section-shell about-section" aria-labelledby="about-story-title">
        <SectionHeader
          eyebrow="Who we are"
          title={<>Experience Earned by <em>Running Live Platforms</em></>}
          id="about-story-title"
        />
        <div className="about-grid reveal">
          <article className="about-card">
            <h3>What WebiQQ does</h3>
            <p>
              We build business websites, e-commerce platforms, custom software, admin dashboards, SEO systems, and
              practical automation — plus the backend infrastructure that keeps those systems running after launch.
            </p>
          </article>
          <article className="about-card">
            <h3>Where we work</h3>
            <p>
              WebiQQ is based in Bahrain and operates across the GCC and worldwide. Our delivered work spans service
              industries, B2B operations, and international corporate groups.
            </p>
          </article>
          <article className="about-card">
            <h3>Built within Leading Trading Est.</h3>
            <p>
              WebiQQ is the web and software development division of{' '}
              <a href="https://www.lte-bh.com" target="_blank" rel="noopener noreferrer">Leading Trading Est.</a>, an
              established Bahrain medical and industrial supply company. We built and operate LTE&rsquo;s full digital
              platform in-house — running a real business system daily shapes how we build for clients.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell" id="team" aria-labelledby="team-title">
        <SectionHeader
          eyebrow="Capabilities"
          title={<>The Expertise Behind <em>Every Project</em></>}
          text="Cross-functional capability covering every layer of digital delivery — engineering, AI, strategy, and marketing, working as one team."
          id="team-title"
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

      <section className="section-shell service-detail" aria-label="How WebiQQ works">
        <div className="service-detail-grid reveal">
          <article className="detail-block">
            <h2>How we work</h2>
            <p>
              Every project follows a clear, milestone-based process: discover, plan, build, optimise, grow. You see
              working progress instead of status reports, and scope is agreed in writing before development starts.
            </p>
            <Link className="text-arrow-link" to="/process">
              Our process in detail <FiArrowRight aria-hidden="true" />
            </Link>
          </article>
          <article className="detail-block">
            <h2>What you own</h2>
            <p>
              Your domain, code, and hosting are registered in your name and handed over with documentation. We believe
              a client who is free to leave is a client who stays for the right reasons.
            </p>
            <Link className="text-arrow-link" to="/process">
              What every client receives <FiArrowRight aria-hidden="true" />
            </Link>
          </article>
          <article className="detail-block detail-block--wide detail-block--accent">
            <h2>Long-term support</h2>
            <p>
              Launch is the start of a platform&rsquo;s life, not the end of ours. We maintain, monitor, and improve the
              systems we build — the same way we run the Leading Trading Est. platform every day. Maintenance and
              support are available as a simple ongoing arrangement, never a requirement.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell" aria-label="Contact details">
        <div className="about-contact-strip reveal">
          <div>
            <p className="eyebrow">Direct contact</p>
            <h2>Talk to us directly</h2>
            <p>Email, WhatsApp, or the project form — whichever suits you. We reply within 24 hours.</p>
          </div>
          <div className="about-contact-links">
            <a href="mailto:contact@webiqq.com"><FiMail aria-hidden="true" /> contact@webiqq.com</a>
            <a href="https://wa.me/97333290109" target="_blank" rel="noopener noreferrer"><FiMessageCircle aria-hidden="true" /> WhatsApp +973 3329 0109</a>
            <a href="tel:+4917680715502"><FiPhone aria-hidden="true" /> Germany +49 176 80715502</a>
            <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer"><FiMapPin aria-hidden="true" /> Open Sitra office in Google Maps</a>
            <Link className="about-contact-primary" to="/contact">Start a Project <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Work With a Team That <em>Runs What It Builds</em></>}
        text="Tell us about your business — we will tell you honestly what we would build, and why."
      />
    </main>
  );
}
