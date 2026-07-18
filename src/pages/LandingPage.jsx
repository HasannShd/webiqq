import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { getLandingPage } from '../data/landingPages.js';
import { getService } from '../data/services.js';
import { SITE_URL } from '../data/seo.js';

const List = ({ items }) => <ul className="check-list">{items.map((item) => <li key={item}><FiCheck aria-hidden="true" /><span>{item}</span></li>)}</ul>;

export default function LandingPage() {
  const { slug } = useParams();
  const page = getLandingPage(slug);
  if (!page) return <Navigate to="/services" replace />;
  const service = getService(page.service);
  const canonical = `${SITE_URL}/solutions/${page.slug}`;
  const areaServed = page.market
    ? { '@type': 'Country', name: page.market }
    : [{ '@type': 'Place', name: 'GCC' }, 'Worldwide'];
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: page.title,
      serviceType: service.title,
      description: page.metaDescription ?? page.solution,
      provider: { '@id': `${SITE_URL}/#professional-service` },
      areaServed,
      url: canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: page.title, item: canonical },
      ],
    },
  ];

  if (page.faq?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return <main id="main">
    <Seo
      title={page.metaTitle ?? `${page.title} | WebiQQ`}
      description={page.metaDescription ?? `${page.solution} Suitable for ${page.audience.toLowerCase()}`}
      canonical={canonical}
      jsonLd={jsonLd}
    />
    <PageIntro breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: page.title }]} eyebrow={page.eyebrow ?? 'Specialist solution'} title={page.title} lead={page.audience}>
      <div className="hero-actions"><Link className="primary-button" to="/contact" state={{ service: page.title }}>Start a Project <FiArrowRight aria-hidden="true" /></Link><Link className="secondary-button" to={`/services/${service.slug}`}>Explore {service.shortTitle}</Link></div>
    </PageIntro>
    <section className="section-shell service-detail"><div className="service-detail-grid reveal is-visible">
      <article className="detail-block detail-block--wide"><h2>The common problem</h2><p>{page.problem}</p></article>
      <article className="detail-block detail-block--wide detail-block--accent"><h2>WebiQQ&rsquo;s approach</h2><p>{page.solution}</p></article>
      <article className="detail-block"><h2>Main deliverables</h2><List items={page.deliverables} /></article>
      <article className="detail-block"><h2>Expected outcomes</h2><List items={page.outcomes} /></article>
    </div></section>
    {page.details?.length ? (
      <section className="section-shell service-detail" aria-labelledby="solution-details-title">
        <div className="section-heading reveal is-visible">
          <p className="eyebrow">What the work covers</p>
          <h2 id="solution-details-title">A Practical Approach for <em>{page.market ?? 'Your Market'}</em></h2>
        </div>
        <div className="service-detail-grid reveal is-visible">
          {page.details.map((detail) => (
            <article className="detail-block" key={detail.title}>
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </article>
          ))}
        </div>
      </section>
    ) : null}
    {page.faq?.length ? (
      <section className="section-shell service-detail" aria-labelledby="solution-faq-title">
        <div className="section-heading reveal is-visible">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="solution-faq-title">Clear Answers Before You <em>Start</em></h2>
        </div>
        <div className="solution-faq reveal is-visible">
          {page.faq.map((item) => (
            <details className="solution-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    ) : null}
    <CtaBand title={<>Build the Right System for <em>Your Market.</em></>} text="Tell us what the business needs to achieve. We will recommend a practical scope and clear next step." />
  </main>;
}
