import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';

function NikeShoes() {
  const nikeShoes = products.filter((product) => product.brand === 'Nike');

  return (
    <>
      <Helmet>
        <title>Used Nike Sneakers | ReSole</title>
        <meta
          name="description"
          content="Explore second hand Nike Air Max, Pegasus, Dunk and more. SEO-friendly Nike product URLs for testing indexing and internal links."
        />
      </Helmet>

      <header className="page-header">
        <h1>Second hand Nike sneakers</h1>
        <p>
          A focused Nike category page that links into individual{' '}
          <strong>Nike product URLs</strong> for SEO testing.
        </p>
      </header>

      <div className="grid">
        {nikeShoes.map((product) => (
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
                View Nike product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default NikeShoes;

