import '../../App.css';
import Seo from '../Common/Seo.jsx';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Webiqq | Software, SEO, Websites & Digital Growth"
        description="Learn about Webiqq, a Middle East based software and web development company serving Bahrain and international clients with websites, SEO, custom software, AI automation, and digital growth systems."
      />
      <section className="section-shell about-page">
        <p className="eyebrow">About Webiqq</p>
        <h1>Webiqq builds software, websites, SEO systems, and digital growth infrastructure.</h1>
        <p>
          Webiqq is a software and web development company based in the Middle East, working with businesses in Bahrain
          and clients internationally. We build business websites, custom software, admin dashboards, SEO systems, AI
          automation, e-commerce flows, databases, and ongoing digital support systems.
        </p>
        <p>
          Webiqq operates independently as its own brand and service business. It is also connected to Leading Trading
          Est., which is part of the company background, but Webiqq itself is the brand clients should find, search,
          and recognize directly.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/">
            Back to Home
          </Link>
          <a className="secondary-button" href="mailto:contact@webiqq.com">
            Contact Webiqq
          </a>
        </div>
      </section>
    </>
  );
}
