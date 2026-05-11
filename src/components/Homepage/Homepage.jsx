import { Link } from 'react-router-dom';
import Seo from '../Common/Seo.jsx';
import { useAppConfig } from '../../hooks/useAppConfig.js';

export default function Homepage() {
  const { productName } = useAppConfig();

  return (
    <>
      <Seo title={`${productName} | Project Workspace`} />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Project workspace</p>
          <h1>{productName}</h1>
          <p>
            A clean React foundation with the same kind of route shell, shared services, context layer, and component
            folders used in the Leading Trading frontend.
          </p>
          <div className="hero-actions">
            <Link className="button-link" to="/contact">
              Start a request
            </Link>
            <Link className="text-link" to="/about">
              View structure
            </Link>
          </div>
        </div>
      </section>
      <section className="page-section feature-grid">
        <article>
          <span>01</span>
          <h2>Routes</h2>
          <p>Public pages are lazy-loaded through one central App shell.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Services</h2>
          <p>API calls live outside components so backend wiring stays predictable.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Context</h2>
          <p>Shared app state is exposed through providers instead of page-level globals.</p>
        </article>
      </section>
    </>
  );
}
