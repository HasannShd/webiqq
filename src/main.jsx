/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const AboutPage = lazy(() => import('./components/About/AboutPage.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:slug" element={
          <Suspense fallback={<div style={{minHeight:'100svh',background:'#09090b'}} />}>
            <BlogPost />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<div style={{minHeight:'100svh',background:'#09090b'}} />}>
            <AboutPage />
          </Suspense>
        } />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
