import { Link, useParams, Navigate } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { blogPosts } from '../data/blogContent.js';
import Seo from '../components/Common/Seo.jsx';
import { Breadcrumbs } from '../components/Common/PagePrimitives.jsx';
import { SITE_URL } from '../data/seo.js';
import '../blog.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main id="main" key={post.slug}>
      <Seo
        title={`${post.title} | Webiqq`}
        description={post.description}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        image={`${SITE_URL}/webiqq-logo.svg`}
        keywords={post.keywords}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${SITE_URL}/blog/${post.slug}#article`,
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            keywords: post.keywords,
            author: { '@type': 'Organization', name: 'Webiqq', url: SITE_URL },
            publisher: {
              '@type': 'Organization',
              name: 'Webiqq',
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/webiqq-logo.svg` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
            url: `${SITE_URL}/blog/${post.slug}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Webiqq', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          },
        ]}
      />
      <div className="blog-main">
        <article className="blog-article">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: post.category }]} />
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
            <p>Webiqq is a web and software development company based in Bahrain, operating in Bahrain, Saudi Arabia, and Germany. Get in touch to discuss your project.</p>
            <Link className="blog-cta-btn" to="/contact">
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
      </div>
    </main>
  );
}
