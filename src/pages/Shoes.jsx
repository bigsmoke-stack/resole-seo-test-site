import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';

function Shoes() {
  return (
    <>
      <Helmet>
        <title>All Second Hand Sneakers | ReSole</title>
        <meta
          name="description"
          content="Browse all second hand sneakers on ReSole, including Nike, Adidas, Puma, New Balance and more. 100+ SEO-friendly product URLs for testing."
        />
      </Helmet>

      <header className="page-header">
        <h1>All second hand sneakers</h1>
        <p>
          This page lists every product in the dataset so crawlers can easily discover all{' '}
          <strong>product URLs</strong>.
        </p>
      </header>

      <div className="grid">
        {products.map((product) => (
          <article key={product.slug} className="card">
            <div className="card-image">
              <img
                src={product.image}
                alt={`Second hand ${product.name} sneakers for sale`}
                loading="lazy"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-meta">{product.brand}</p>
              <p className="card-price">${product.price}</p>
              <Link to={`/product/${product.slug}`} className="card-link">
                View product details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Shoes;

