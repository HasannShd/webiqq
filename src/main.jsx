/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SiteLayout from './layout/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';

const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage.jsx'));
const WorkPage = lazy(() => import('./pages/WorkPage.jsx'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage.jsx'));
const ProcessPage = lazy(() => import('./pages/ProcessPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const InsightsPage = lazy(() => import('./pages/InsightsPage.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));

const rootElement = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
