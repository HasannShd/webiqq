import '../App.css';
import '../pages.css';
import '../nova.css';
import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiMenu, FiX } from 'react-icons/fi';
import BackToTop from '../components/Common/BackToTop.jsx';
import { socialLinks } from '../data/webiqqContent.js';
import { serviceLines } from '../data/services.js';
import { OFFICE_ADDRESS, OFFICE_MAP_EMBED_URL, OFFICE_MAP_URL } from '../data/contact.js';

export const WHATSAPP_NUMBER = '97333290109';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const GERMANY_PHONE_NUMBER = '+4917680715502';
export const GERMANY_PHONE_DISPLAY = '+49 176 80715502';

const socialIconMap = { instagram: FiInstagram };

const primaryNav = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/process' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="nav-brand">
        <Link className="nav-logo" to="/" aria-label="WebiQQ home">
          <span>W</span>
          WebiQQ
        </Link>
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/contact" onClick={closeMenu}>
          Start a Project
        </Link>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="nav-logo" to="/">
            <span>W</span>
            WebiQQ
          </Link>
          <p className="footer-brand-line">Websites, software and growth systems built for serious businesses.</p>
          <span className="footer-base">Bahrain · Germany · Worldwide</span>
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
        <div className="footer-links">
          <h3>Company</h3>
          <Link to="/work">Live work</Link>
          <Link to="/process">Process</Link>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links footer-services">
          <h3>Services</h3>
          {serviceLines.slice(0, 4).map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
          <Link to="/services">View all services</Link>
          <Link to="/solutions/web-development-bahrain">Web development Bahrain</Link>
          <Link to="/solutions/seo-services-bahrain">SEO services Bahrain</Link>
          <Link to="/solutions/web-development-gcc">Web development GCC</Link>
        </div>
        <div className="footer-map-card">
          <iframe
            src={OFFICE_MAP_EMBED_URL}
            title="WebiQQ office location in Sitra, Bahrain"
            width="600"
            height="180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="footer-map-copy">
            <div>
              <span>WebiQQ office</span>
              <strong>Sitra, Bahrain</strong>
            </div>
            <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Open ${OFFICE_ADDRESS} in Google Maps`}>
              Open in Google Maps <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2026 WebiQQ · Web and software development across the GCC and worldwide.
        <span className="copyright-links">
          <Link className="footer-legal-btn" to="/privacy">Privacy Policy</Link>
          <Link className="footer-legal-btn" to="/terms">Terms &amp; Conditions</Link>
        </span>
      </p>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WebiQQ on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.87L0 24l6.29-1.515A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.032-1.388l-.36-.214-3.733.899.934-3.622-.235-.372A9.792 9.792 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    </a>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frame;
    const moveGlow = (event) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', moveGlow, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', moveGlow);
    };
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      <div className="cursor-glow" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <Suspense fallback={<div style={{ minHeight: '100svh' }} aria-hidden="true" />}>
        <Outlet />
      </Suspense>
      <SiteFooter />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
