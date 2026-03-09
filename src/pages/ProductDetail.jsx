import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';
import { blogPosts } from '../data/blogPosts.js';

function getRelatedProducts(product) {
  const sameBrand = products.filter(
    (p) => p.brand === product.brand && p.slug !== product.slug
  );
  if (sameBrand.length >= 4) {
    return sameBrand.slice(0, 4);
  }
  const others = products.filter((p) => p.slug !== product.slug);
  return [...sameBrand, ...others].slice(0, 4);
}

function getRelatedPosts(product) {
  const byBrand = blogPosts.filter(
    (post) => post.brandFocus && post.brandFocus === product.brand
  );
  if (byBrand.length >= 3) {
    return byBrand.slice(0, 3);
  }
  return blogPosts.slice(0, 3);
}

function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product not found | ReSole</title>
          <meta
            name="description"
            content="The sneaker you requested could not be found on ReSole."
          />
        </Helmet>
        <div className="not-found">
          <h1>Product not found</h1>
          <p>
            We couldn&apos;t find that sneaker. Go back to{' '}
            <Link to="/shoes">all shoes</Link>.
          </p>
        </div>
      </>
    );
  }

  const relatedProducts = getRelatedProducts(product);
  const relatedPosts = getRelatedPosts(product);

  return (
    <>
      <Helmet>
        <title>
          {product.name} | Second Hand {product.brand} Sneakers | ReSole
        </title>
        <meta
          name="description"
          content={`Buy second hand ${product.name} by ${product.brand} on ReSole. Cleaned, quality checked sneakers ideal for SEO testing and demo purposes.`}
        />
      </Helmet>

      <div className="two-column">
        <section aria-labelledby="product-heading">
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div className="card-image">
              <img
                src={product.image}
                alt={`Second hand ${product.name} sneakers for sale`}
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <p className="pill">{product.brand}</p>
              <h1 id="product-heading" style={{ marginTop: '0.5rem' }}>
                {product.name}
              </h1>
              <p className="card-price" style={{ fontSize: '1.2rem' }}>
                ${product.price}
              </p>
              <p>{product.description}</p>
              <p className="muted">
                This is a fictional listing used purely to generate realistic ecommerce SEO
                URLs for Google Search Console testing.
              </p>
            </div>
          </div>
        </section>

        <aside aria-label="Related links" className="stack">
          <section>
            <h2>Related sneaker guides</h2>
            <p className="muted">Blog posts that mention this brand or similar models.</p>
            <ul className="stack" style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>More {product.brand} sneakers</h2>
            <div className="grid">
              {relatedProducts.map((item) => (
                <article key={item.slug} className="card">
                  <div className="card-image">
                    <img
                      src={item.image}
                      alt={`Second hand ${item.name} sneakers for sale`}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-price">${item.price}</p>
                    <Link to={`/product/${item.slug}`} className="card-link">
                      View product
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

export default ProductDetail;

