import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts.js';

function Blog() {
  const featured = blogPosts.slice(0, 5);
  const rest = blogPosts.slice(5);

  return (
    <>
      <Helmet>
        <title>Sneaker Care & Buying Guides | ReSole Blog</title>
        <meta
          name="description"
          content="Read 50+ blog posts about cleaning, restoring and buying second hand sneakers. Designed to test SEO crawling and internal links."
        />
      </Helmet>

      <header className="page-header">
        <h1>ReSole sneaker blog</h1>
        <p>
          Long-form sneaker content with internal links to product pages, ideal for
          indexing tests and Search Console experiments.
        </p>
      </header>

      <div className="blog-layout">
        <section aria-label="Blog articles">
          <div className="section-heading">
            <h2>Featured guides</h2>
          </div>
          <div className="grid">
            {featured.map((post) => (
              <article key={post.slug} className="card">
                <div className="card-body">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-meta">{post.metaDescription}</p>
                  <Link to={`/blog/${post.slug}`} className="card-link">
                    Read guide
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {rest.length > 0 && (
            <>
              <div className="section-heading" style={{ marginTop: '2.5rem' }}>
                <h2>More sneaker articles</h2>
              </div>
              <div className="grid">
                {rest.map((post) => (
                  <article key={post.slug} className="card">
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-meta">{post.metaDescription}</p>
                      <Link to={`/blog/${post.slug}`} className="card-link">
                        Read article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <aside className="blog-sidebar">
          <h3>Popular topics</h3>
          <p className="muted">
            Use these deep links to test how internal linking impacts crawling and ranking.
          </p>
          <ul>
            <li>
              <Link to="/blog/how-to-clean-sneakers">How to clean sneakers</Link>
            </li>
            <li>
              <Link to="/blog/best-running-shoes-on-a-budget">Best running shoes</Link>
            </li>
            <li>
              <Link to="/blog/how-to-spot-fake-sneakers">How to spot fake sneakers</Link>
            </li>
            <li>
              <Link to="/blog/sneaker-care-guide">Sneaker care guide</Link>
            </li>
            <li>
              <Link to="/blog/sustainable-fashion-guide">Sustainable fashion guide</Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Blog;

