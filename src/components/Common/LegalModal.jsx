import { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';

export default function LegalModal({ type, onClose }) {
  const overlayRef = useRef(null);
  const isPrivacy = type === 'privacy';

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="legal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="legal-modal">
        <div className="legal-modal-header">
          <h2 id="legal-modal-title">{isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}</h2>
          <button className="legal-close" type="button" aria-label="Close" onClick={onClose}>
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="legal-modal-body">
          {isPrivacy ? (
            <>
              <p><strong>Last updated: July 2026</strong></p>
              <h3>1. Information We Collect</h3>
              <p>When you submit our contact form, we collect your name, email address, phone number (optional), business name (optional), and the message you provide. We do not collect any information automatically beyond standard server logs.</p>
              <h3>2. How We Use Your Information</h3>
              <p>We use the information you submit solely to respond to your project enquiry. We do not sell, rent, or share your personal data with third parties. Your details are used only for communication related to your request.</p>
              <h3>3. Data Storage</h3>
              <p>Contact form submissions are sent directly to our business email and are not stored in any third-party database. We retain correspondence only for as long as necessary to fulfil your request or maintain business records.</p>
              <h3>4. Cookies</h3>
              <p>This website does not use tracking or advertising cookies. We may use essential session-related cookies required for the site to function correctly.</p>
              <h3>5. Third-Party Services</h3>
              <p>Our website is hosted on Vercel. Standard server and access logs may be maintained by our hosting provider in accordance with their own privacy policy.</p>
              <h3>6. Your Rights</h3>
              <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
              <h3>7. Contact</h3>
              <p>For any privacy-related questions, email us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
            </>
          ) : (
            <>
              <p><strong>Last updated: July 2026</strong></p>
              <h3>1. Services</h3>
              <p>Webiqq provides website development, business software, SEO, AI automation, and digital marketing services to clients on a project or retainer basis. All work is defined by a separate project agreement or proposal agreed upon before work begins.</p>
              <h3>2. Enquiries & Proposals</h3>
              <p>Submitting a contact form or enquiry does not constitute a binding agreement. Work only begins after both parties have agreed to a formal proposal, scope of work, and payment terms in writing.</p>
              <h3>3. Intellectual Property</h3>
              <p>Upon full payment, the client receives full ownership of the deliverables specified in the agreed project scope. Webiqq retains the right to display completed work in its portfolio unless otherwise agreed in writing.</p>
              <h3>4. Payment</h3>
              <p>Payment terms are outlined in the project proposal. Work may be paused or terminated if payments are not made in accordance with agreed terms. Deposits are non-refundable once work has commenced.</p>
              <h3>5. Revisions</h3>
              <p>The number of revision rounds is defined in each project agreement. Requests outside the agreed scope may incur additional charges.</p>
              <h3>6. Limitation of Liability</h3>
              <p>Webiqq is not liable for indirect, incidental, or consequential damages arising from the use of delivered work. Our total liability is limited to the amount paid for the specific service in question.</p>
              <h3>7. Governing Law</h3>
              <p>These terms are governed by applicable laws. Disputes will be resolved through good-faith negotiation before any formal proceedings.</p>
              <h3>8. Contact</h3>
              <p>Questions about these terms? Email us at <a href="mailto:contact@webiqq.com">contact@webiqq.com</a>.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
