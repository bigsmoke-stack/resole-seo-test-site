import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products.js';

function AdidasShoes() {
  const adidasShoes = products.filter((product) => product.brand === 'Adidas');

  return (
    <>
      <Helmet>
        <title>Used Adidas Sneakers | ReSole</title>
        <meta
          name="description"
          content="Explore second hand Adidas Ultraboost, NMD and classic silhouettes. Category page built for SEO and internal linking tests."
        />
      </Helmet>

      <header className="page-header">
        <h1>Second hand Adidas sneakers</h1>
        <p>
          This Adidas category page links out to Ultraboost, NMD and other{' '}
          <strong>Adidas product URLs</strong>.
        </p>
      </header>

      <div className="grid">
        {adidasShoes.map((product) => (
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
                View Adidas product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default AdidasShoes;

