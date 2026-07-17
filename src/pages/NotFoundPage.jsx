import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';

export default function NotFoundPage() {
  return (
    <main id="main">
      <Seo title="Page Not Found | WebiQQ" description="The page you are looking for could not be found." robots="noindex,follow" />
      <section className="section-shell page-intro not-found">
        <p className="eyebrow">404</p>
        <h1>This Page Doesn&rsquo;t <em>Exist</em></h1>
        <p className="page-lead">The page may have moved, or the link may be incorrect. Here is where you probably wanted to go:</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/">
            Back to Home
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className="secondary-button" to="/work">
            View Our Work
          </Link>
          <Link className="secondary-button" to="/contact">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
