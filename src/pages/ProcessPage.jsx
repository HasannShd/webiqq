import { FiCheck } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, SectionHeader, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { processSteps } from '../data/webiqqContent.js';
import { SITE_URL } from '../data/seo.js';

const stepDetails = [
  {
    outputs: ['A shared understanding of your business and customers', 'Your goals in plain language', 'A review of your current online presence'],
  },
  {
    outputs: ['Page and feature map agreed before build', 'Content and SEO direction', 'A defined scope you can hold us to'],
  },
  {
    outputs: ['Design and development in milestones', 'Progress you can see, not status reports', 'SEO and performance built in — not bolted on'],
  },
  {
    outputs: ['Responsive checks on real devices', 'Forms, analytics, and integrations verified', 'Search Console and sitemap submission'],
  },
  {
    outputs: ['Maintenance and monitoring options', 'Content, SEO, and feature improvements', 'A partner who already knows your system'],
  },
];

const clientReceives = [
  'Full ownership of your domain, code, and hosting — registered in your name',
  'A handover of credentials and documentation',
  'A working, verified platform — forms tested, analytics connected',
  'Clear communication throughout, without technical jargon',
  'The option of ongoing support, never a lock-in',
];

export default function ProcessPage() {
  useReveal();

  return (
    <main id="main">
      <Seo
        title="Our Process | How Webiqq Delivers Projects"
        description="How Webiqq works: discover, plan, build, optimise, grow. A milestone-based development process with full client ownership of domain, code, and hosting."
        canonical={`${SITE_URL}/process`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Process', item: `${SITE_URL}/process` },
            ],
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
        eyebrow="Process"
        title={<>How We Turn Ideas Into <em>Working Systems</em></>}
        lead="Five stages, milestone-based delivery, and no surprises. You always know what is being built, why, and what happens next."
      />

      <section className="section-shell" aria-label="The five stages">
        <div className="process-detail reveal">
          {processSteps.map((step, i) => (
            <article className="process-detail-step" key={step.title}>
              <div className="process-detail-head">
                <span className="process-node-dot">{String(i + 1).padStart(2, '0')}</span>
                <h2>{step.title}</h2>
              </div>
              <p>{step.text}</p>
              <ul className="check-list">
                {stepDetails[i].outputs.map((output) => (
                  <li key={output}>
                    <FiCheck aria-hidden="true" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="receive-title">
        <SectionHeader
          eyebrow="Ownership"
          title={<>What Every Client <em>Receives</em></>}
          text="The most common fear when hiring a development company is losing control of your own website. Here is our position, in writing."
          id="receive-title"
        />
        <div className="detail-block detail-block--accent reveal">
          <ul className="check-list check-list--two-col">
            {clientReceives.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={<>See the Process in Action. <em>Start a Project.</em></>}
        text="The first step is a short conversation about your business — no commitment, no cost."
      />
    </main>
  );
}
