import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export function SectionHeader({ eyebrow, title, text, id }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.to && i < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageIntro({ breadcrumbs, eyebrow, title, lead, children }) {
  return (
    <section className="section-shell page-intro">
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {lead ? <p className="page-lead">{lead}</p> : null}
      {children}
    </section>
  );
}

export function CtaBand({
  title = <>Ready when you are. <em>Tell us about your project.</em></>,
  text = 'Write to us the way you’d explain it to a colleague — a person reads it and replies within 24 hours with a clear next step. No obligation.',
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryTo = '/work',
}) {
  return (
    <section className="section-shell final-cta" aria-label="Start a project with Webiqq">
      <p className="eyebrow">Operating in Bahrain · Saudi Arabia · Germany</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="hero-actions">
        <Link className="primary-button" to={primaryTo}>
          {primaryLabel}
          <FiArrowRight aria-hidden="true" />
        </Link>
        {secondaryLabel ? (
          <Link className="secondary-button" to={secondaryTo}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
