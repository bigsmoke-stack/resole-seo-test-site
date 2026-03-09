import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';
import { blogPosts } from '../data/blogPosts.js';

function Home() {
  const featuredProducts = products.slice(0, 6);
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>ReSole | Second Hand Sneakers Marketplace</title>
        <meta
          name="description"
          content="ReSole is a demo ecommerce site for buying and selling premium second hand sneakers — built for SEO and Google Search Console testing."
        />
      </Helmet>

      <section className="hero" aria-labelledby="hero-heading">
        <div>
          <p className="pill">SEO Test Store · ReSole</p>
          <h1 id="hero-heading">Second hand sneakers, first class SEO.</h1>
          <p>
            ReSole is a realistic sneaker resell storefront created purely for SEO crawler
            testing. Browse used Nike, Adidas, Puma and more with fully linked product and
            blog pages.
          </p>
          <div className="hero-cta">
            <Link to="/shoes" className="btn btn-primary">
              Browse all shoes
            </Link>
            <Link to="/blog" className="btn btn-outline">
              Read sneaker guides
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/featured/?sneaker,collection"
            alt="A curated collection of second hand sneakers on display"
            loading="lazy"
          />
        </div>
      </section>

      <section aria-labelledby="featured-heading">
        <div className="section-heading">
          <h2 id="featured-heading">Featured second hand sneakers</h2>
          <p>Explore a sample of 100+ SEO-friendly product pages.</p>
        </div>
        <div className="grid">
          {featuredProducts.map((product) => (
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
                <p className="card-price">${product.price}</p>
                <Link to={`/product/${product.slug}`} className="card-link">
                  View product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="blog-heading" style={{ marginTop: '3rem' }}>
        <div className="section-heading">
          <h2 id="blog-heading">Latest sneaker care guides</h2>
          <p>Internal links between guides and products help test crawling behavior.</p>
        </div>
        <div className="grid">
          {latestPosts.map((post) => (
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
      </section>
    </>
  );
}

export default Home;

