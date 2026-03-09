import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';

function PumaShoes() {
  const pumaShoes = products.filter((product) => product.brand === 'Puma');

  return (
    <>
      <Helmet>
        <title>Used Puma Sneakers | ReSole</title>
        <meta
          name="description"
          content="Browse second hand Puma running and lifestyle sneakers like RS-X and Suede Classic for SEO testing."
        />
      </Helmet>

      <header className="page-header">
        <h1>Second hand Puma sneakers</h1>
        <p>
          A Puma-specific landing page that links into{' '}
          <strong>Puma product detail URLs</strong>.
        </p>
      </header>

      <div className="grid">
        {pumaShoes.map((product) => (
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
              <p className="card-price">${product.price}</p>
              <Link to={`/product/${product.slug}`} className="card-link">
                View Puma product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default PumaShoes;

