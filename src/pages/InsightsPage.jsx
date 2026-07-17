import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import Seo from '../components/Common/Seo.jsx';
import { PageIntro, CtaBand } from '../components/Common/PagePrimitives.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { blogPosts } from '../data/blogContent.js';
import { SITE_URL } from '../data/seo.js';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function InsightsPage() {
  useReveal();
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main id="main">
      <Seo
        title="Insights | Website, SEO & Growth Guides for Businesses | WebiQQ"
        description="Practical guides from WebiQQ on website development, SEO, Google Business Profile, e-commerce, automation, and maintenance — written for businesses in Bahrain and the GCC."
        canonical={`${SITE_URL}/insights`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': `${SITE_URL}/insights#blog`,
            name: 'WebiQQ Insights',
            url: `${SITE_URL}/insights`,
            publisher: { '@id': `${SITE_URL}/#organization` },
            blogPost: posts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: `${SITE_URL}/blog/${post.slug}`,
              datePublished: post.date,
            })),
          },
        ]}
      />
      <PageIntro
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        eyebrow="Insights"
        title={<>Practical Guides for <em>Growing Online</em></>}
        lead="Website development, SEO, Google Business Profile, e-commerce, automation, and maintenance — explained in plain language for businesses in Bahrain and the GCC."
      />

      <section className="section-shell" aria-label="All articles">
        <div className="insights-grid reveal">
          {posts.map((post) => (
            <Link key={post.slug} className="blog-card" to={`/blog/${post.slug}`}>
              <span className="blog-card-cat">{post.category}</span>
              <h2 className="insights-card-title">{post.title}</h2>
              <p>{post.description}</p>
              <span className="insights-card-meta">
                <span><FiCalendar aria-hidden="true" />{formatDate(post.date)}</span>
                <span><FiClock aria-hidden="true" />{post.readTime}</span>
              </span>
              <span className="blog-card-read">
                Read article
                <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={<>Done Reading? <em>Let&rsquo;s Apply It to Your Business.</em></>}
        text="Every guide here reflects how we actually build. Tell us what you need and we will recommend the right starting point."
      />
    </main>
  );
}
