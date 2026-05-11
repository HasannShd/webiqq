import { Link } from 'react-router-dom';
import Seo from './Common/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found | Collab" description="The requested Collab page could not be found." />
      <section className="page-section compact-page">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page may have moved or the link may be incorrect.</p>
        <Link className="button-link" to="/">
          Back home
        </Link>
      </section>
    </>
  );
}
