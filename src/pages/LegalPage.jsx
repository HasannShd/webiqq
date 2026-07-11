import Seo from '../components/Common/Seo.jsx';
import { Breadcrumbs } from '../components/Common/PagePrimitives.jsx';
import { SITE_URL } from '../data/seo.js';

function PrivacyContent() {
  return (
    <>
      <p><strong>Last updated: July 2026</strong></p>
      <h2>1. Information We Collect</h2>
      <p>When you submit our contact form, we collect your name, email address, and the details you choose to provide — such as phone number, company name, budget range, and project description. We do not collect any information automatically beyond standard server logs.</p>
      <h2>2. How We Use Your Information</h2>
      <p>We use the information you submit solely to respond to your project enquiry. We do not sell, rent, or share your personal data with third parties. Your details are used only for communication related to your request.</p>
      <h2>3. Data Storage</h2>
      <p>Contact form submissions are sent directly to our business email and are not stored in any third-party database. We retain correspondence only for as long as necessary to fulfil your request or maintain business records.</p>
      <h2>4. Cookies</h2>
      <p>This website does not use tracking or advertising cookies. We may use essential session-related cookies required for the site to function correctly.</p>
      <h2>5. Third-Party Services</h2>
      <p>Our website is hosted on Vercel. Standard server and access logs may be maintained by our hosting provider in accordance with their own privacy policy.</p>
      <h2>6. Your Rights</h2>
      <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
      <h2>7. Contact</h2>
      <p>For any privacy-related questions, email us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p><strong>Last updated: July 2026</strong></p>
      <h2>1. Services</h2>
      <p>Webiqq provides website development, business software, SEO, AI automation, and digital marketing services to clients on a project or retainer basis. All work is defined by a separate project agreement or proposal agreed upon before work begins.</p>
      <h2>2. Enquiries &amp; Proposals</h2>
      <p>Submitting a contact form or enquiry does not constitute a binding agreement. Work only begins after both parties have agreed to a formal proposal, scope of work, and payment terms in writing.</p>
      <h2>3. Intellectual Property</h2>
      <p>Upon full payment, the client receives full ownership of the deliverables specified in the agreed project scope. Webiqq retains the right to display completed work in its portfolio unless otherwise agreed in writing.</p>
      <h2>4. Payment</h2>
      <p>Payment terms are outlined in the project proposal. Work may be paused or terminated if payments are not made in accordance with agreed terms. Deposits are non-refundable once work has commenced.</p>
      <h2>5. Revisions</h2>
      <p>The number of revision rounds is defined in each project agreement. Requests outside the agreed scope may incur additional charges.</p>
      <h2>6. Limitation of Liability</h2>
      <p>Webiqq is not liable for indirect, incidental, or consequential damages arising from the use of delivered work. Our total liability is limited to the amount paid for the specific service in question.</p>
      <h2>7. Governing Law</h2>
      <p>These terms are governed by applicable laws. Disputes will be resolved through good-faith negotiation before any formal proceedings.</p>
      <h2>8. Contact</h2>
      <p>Questions about these terms? Email us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
    </>
  );
}

export default function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const path = isPrivacy ? '/privacy' : '/terms';

  return (
    <main id="main" key={type}>
      <Seo
        title={`${title} | Webiqq`}
        description={
          isPrivacy
            ? 'How Webiqq collects, uses, and protects the information you share through our website.'
            : 'The terms and conditions governing Webiqq services, proposals, payments, and intellectual property.'
        }
        canonical={`${SITE_URL}${path}`}
        robots="index,follow"
      />
      <section className="section-shell page-intro legal-page">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: title }]} />
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <div className="legal-body">{isPrivacy ? <PrivacyContent /> : <TermsContent />}</div>
      </section>
    </main>
  );
}
