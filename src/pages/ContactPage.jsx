import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { Breadcrumbs } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { serviceLines } from '../data/services.js';
import { SITE_URL } from '../data/seo.js';
import { GERMANY_PHONE_DISPLAY, GERMANY_PHONE_NUMBER, WHATSAPP_URL } from '../layout/SiteLayout.jsx';

const projectTypes = [
  'New website',
  'Website redesign',
  'E-commerce or product catalogue',
  'Custom software or dashboard',
  'SEO and digital growth',
  'AI or workflow automation',
  'Maintenance and support',
  'Something else',
];

const budgetRanges = ['Under BHD 500', 'BHD 500 – 1,500', 'BHD 1,500 – 5,000', 'BHD 5,000+', 'Not sure yet'];

const timelines = ['As soon as possible', 'Within 1–3 months', '3+ months', 'Just exploring'];
const markets = ['Bahrain', 'Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Oman', 'Germany', 'United Kingdom', 'Other / international'];

const serviceOptions = [...serviceLines.map((s) => s.title), 'Full Digital Package', 'Not sure yet'];
const OFFICE_ADDRESS = 'Office 109, Building 658, Road 16, Block 616, Warehousing World, Um Al-Baidh, Sitra, Bahrain';
const OFFICE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const OFFICE_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&z=16&output=embed`;

export default function ContactPage() {
  useReveal();
  const location = useLocation();
  const preselectedService = location.state?.service;
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });
  const isSubmitting = formStatus.type === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setFormStatus({ type: 'submitting', message: 'Sending your request…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Unable to send your request right now.');
      }

      form.reset();
      window.dispatchEvent(new CustomEvent('webiqq:conversion', { detail: { type: 'project_request', service: payload.service } }));
      setFormStatus({
        type: 'success',
        message: 'Your request was sent. We will reply within 24 hours.',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message || 'Unable to send your request right now. You can also email contact@webiqq.com or message us on WhatsApp.',
      });
    }
  };

  return (
    <main id="main">
      <Seo
        title="Start a Project | Contact WebiQQ"
        description="Start a project with WebiQQ. Tell us about your website, software, SEO, or automation needs — we reply within 24 hours. Operating across the GCC and worldwide."
        canonical={`${SITE_URL}/contact`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': `${SITE_URL}/contact#contact-page`,
            name: 'Contact WebiQQ',
            url: `${SITE_URL}/contact`,
            about: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Place',
            '@id': `${SITE_URL}/contact#office`,
            name: 'WebiQQ at Leading Trading Est.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Office 109, Building 658, Road 16, Block 616, Warehousing World, Um Al-Baidh',
              addressLocality: 'Sitra',
              addressCountry: 'BH',
            },
            hasMap: OFFICE_MAP_URL,
          },
        ]}
      />

      <section className="section-shell page-intro">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        <p className="eyebrow">Start a Project</p>
        <h1>Tell Us What You Want to <em>Build</em></h1>
        <p className="page-lead">
          A few details are enough — we reply within 24 hours with questions, a recommendation, and a clear next step.
          No obligation, no generated quotes; real pricing comes after a real conversation.
        </p>
      </section>

      <section className="section-shell contact-section contact-section--page" aria-label="Contact WebiQQ">
        <div className="contact-copy">
          <h2>Prefer to talk first?</h2>
          <p>Skip the form — a short conversation is often the fastest way to scope a project.</p>

          <div className="contact-channels">
            <a className="contact-channel" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <FiMessageCircle aria-hidden="true" />
              <div>
                <strong>WhatsApp consultation</strong>
                <span>+973 3329 0109 — usually the fastest reply</span>
              </div>
            </a>
            <a className="contact-channel" href="mailto:contact@webiqq.com">
              <FiMail aria-hidden="true" />
              <div>
                <strong>Email</strong>
                <span>contact@webiqq.com</span>
              </div>
            </a>
            <a className="contact-channel" href={`tel:${GERMANY_PHONE_NUMBER}`}>
              <FiPhone aria-hidden="true" />
              <div>
                <strong>Germany</strong>
                <span>{GERMANY_PHONE_DISPLAY}</span>
              </div>
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>Operating in</span>
              <strong>GCC &amp; worldwide</strong>
            </div>
            <div>
              <span>Response time</span>
              <strong>Within 24 hours</strong>
            </div>
          </div>

          <div className="office-location" id="office">
            <div className="office-location-heading">
              <FiMapPin aria-hidden="true" />
              <div>
                <span>WebiQQ at Leading Trading Est.</span>
                <strong>Sitra, Bahrain office</strong>
              </div>
            </div>
            <address>{OFFICE_ADDRESS}</address>
            <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer">
              Open office location in Google Maps <FiArrowRight aria-hidden="true" />
            </a>
            <iframe
              className="office-map"
              src={OFFICE_MAP_EMBED_URL}
              title="WebiQQ office at Leading Trading Est. in Sitra, Bahrain"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-socials">
            <a href="https://www.instagram.com/webiqq.build/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram aria-hidden="true" />
              @webiqq.build
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          <label className="honeypot" aria-hidden="true">
            Website
            <input type="text" name="website" tabIndex="-1" autoComplete="off" />
          </label>
          <label>
            Name *
            <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Company
            <input type="text" name="business" placeholder="Company or brand name" autoComplete="organization" />
          </label>
          <label>
            Email *
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            Phone / WhatsApp
            <input type="tel" name="phone" placeholder="+973 …" autoComplete="tel" />
          </label>
          <label>
            Service needed *
            <select name="service" defaultValue={preselectedService ?? ''} required>
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
          <label>
            Project type
            <select name="projectType" defaultValue="">
              <option value="">Select if known</option>
              {projectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="">
              <option value="">Optional</option>
              {budgetRanges.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Preferred timeline
            <select name="timeline" defaultValue="">
              <option value="">Optional</option>
              {timelines.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Country or market
            <select name="market" defaultValue="">
              <option value="">Select market</option>
              {markets.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label>
            Preferred website language(s)
            <input name="languages" placeholder="For example: English and Arabic" autoComplete="off" />
          </label>
          <label className="full-field">
            Existing website (if any)
            <input type="text" name="existingWebsite" placeholder="https://…" inputMode="url" />
          </label>
          <label className="full-field">
            Project description *
            <textarea
              name="message"
              rows="5"
              placeholder="What does your business do, and what should this project achieve?"
              required
            />
          </label>
          <fieldset className="contact-method-field full-field">
            <legend>Preferred contact method</legend>
            <div className="contact-method-options">
              {['Email', 'WhatsApp', 'Phone call'].map((method) => (
                <label key={method} className="contact-method-option">
                  <input type="radio" name="contactMethod" value={method} defaultChecked={method === 'Email'} />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button className="primary-button full-field" type="submit" disabled={isSubmitting} data-event="project_request_submit">
            {isSubmitting ? 'Sending…' : 'Send Project Request'}
            <FiArrowRight aria-hidden="true" />
          </button>
          <p className="form-note full-field">Goes straight to our inbox — no ticket queue, no autoresponder.</p>
          {formStatus.message ? (
            <p
              className={`form-status full-field ${formStatus.type === 'error' ? 'is-error' : ''}`}
              role={formStatus.type === 'error' ? 'alert' : 'status'}
            >
              {formStatus.message}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
