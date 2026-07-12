import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import SiteLayout from './layout/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import ProcessPage from './pages/ProcessPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import BlogPost from './pages/BlogPost.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/solutions/:slug" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}
