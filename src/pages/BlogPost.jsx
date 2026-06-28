import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { blogPosts } from '../data/blogContent.js';
import Seo from '../components/Common/Seo.jsx';
import { SITE_URL } from '../data/seo.js';
import '../blog.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Seo
        title={`${post.title} | Webiqq`}
        description={post.description}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        image={`${SITE_URL}/webiqq-logo.svg`}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Webiqq', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'Webiqq', logo: `${SITE_URL}/webiqq-logo.svg` },
          url: `${SITE_URL}/blog/${post.slug}`,
        }]}
      />
      <div className="blog-shell">
        <header className="blog-navbar">
          <Link className="blog-logo" to="/">
            <span>W</span>Webiqq
          </Link>
          <Link className="blog-back" to="/#contact">
            <FiArrowLeft aria-hidden="true" />
            Start a Project
          </Link>
        </header>

        <main className="blog-main">
          <article className="blog-article">
            <div className="blog-meta-row">
              <span className="blog-category">{post.category}</span>
              <span className="blog-meta-item"><FiCalendar aria-hidden="true" />{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="blog-meta-item"><FiClock aria-hidden="true" />{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-lead">{post.description}</p>
            <div className="blog-body">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </section>
              ))}
            </div>
            <div className="blog-cta-box">
              <h3>Ready to grow your business online?</h3>
              <p>Webiqq is a web development agency based in Bahrain, working with clients worldwide. Get in touch to discuss your project.</p>
              <Link className="blog-cta-btn" to="/#contact">
                Start a Project
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>

          {others.length > 0 && (
            <aside className="blog-related">
              <h2>More from Webiqq</h2>
              <div className="blog-related-grid">
                {others.map((p) => (
                  <Link key={p.slug} className="blog-related-card" to={`/blog/${p.slug}`}>
                    <span className="blog-related-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <span className="blog-related-read">Read article <FiArrowRight aria-hidden="true" /></span>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </main>

        <footer className="blog-footer">
          <span>© 2026 Webiqq. Web development agency based in Bahrain, serving clients worldwide.</span>
          <Link to="/">webiqq.com</Link>
        </footer>
      </div>
    </>
  );
}
