import Seo from '../Common/Seo.jsx';

export default function AboutPage() {
  return (
    <>
      <Seo title="About | Collab" description="How the Collab project is organized." />
      <section className="page-section compact-page">
        <p className="eyebrow">File flow</p>
        <h1>Built around the same frontend shape.</h1>
        <p>
          Pages sit under feature folders, shared UI lives in Common, app-level state lives in context, API wrappers
          live in services, and small behavior helpers live in hooks and utils.
        </p>
      </section>
    </>
  );
}
