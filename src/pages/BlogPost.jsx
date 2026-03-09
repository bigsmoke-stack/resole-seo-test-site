import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts.js';
import { products } from '../data/products.js';

function getRelatedProducts(brandFocus) {
  if (!brandFocus || brandFocus === 'General') {
    return products.slice(0, 4);
  }

  const byBrand = products.filter((product) => product.brand === brandFocus);
  if (byBrand.length >= 4) {
    return byBrand.slice(0, 4);
  }

  return [...byBrand, ...products.slice(0, 4)].slice(0, 4);
}

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Blog post not found | ReSole</title>
          <meta
            name="description"
            content="The blog post you requested could not be found on ReSole."
          />
        </Helmet>
        <div className="not-found">
          <h1>Blog post not found</h1>
          <p>
            We couldn&apos;t find that guide. Go back to the{' '}
            <Link to="/blog">ReSole blog</Link>.
          </p>
        </div>
      </>
    );
  }

  const relatedProducts = getRelatedProducts(post.brandFocus);

  return (
    <>
      <Helmet>
        <title>{post.title} | ReSole Blog</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>

      <div className="blog-layout">
        <article className="blog-post">
          {post.brandFocus && post.brandFocus !== 'General' && (
            <div className="badge">{post.brandFocus} focus</div>
          )}
          <h1>{post.title}</h1>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <section aria-labelledby="blog-related-products-heading" style={{ marginTop: '2rem' }}>
            <h2 id="blog-related-products-heading">Sneakers mentioned in this guide</h2>
            <p className="muted">
              Explore second hand sneakers that work well with the tips from this article.
            </p>
            <div className="grid">
              {relatedProducts.map((product) => (
                <article key={product.slug} className="card">
                  <div className="card-image">
                    <img
                      src={product.image}
                      alt={`Second hand ${product.name} sneakers for sale`}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-meta">{product.brand}</p>
                    <Link to={`/product/${product.slug}`} className="card-link">
                      View product
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </article>

        <aside className="blog-sidebar" aria-label="More sneaker guides">
          <h3>More sneaker guides</h3>
          <ul>
            {blogPosts.slice(0, 8).map((other) => (
              <li key={other.slug}>
                <Link to={`/blog/${other.slug}`}>{other.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

export default BlogPost;

