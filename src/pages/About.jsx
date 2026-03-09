import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About ReSole | SEO Test Sneaker Store</title>
        <meta
          name="description"
          content="ReSole is a fictional second hand sneaker marketplace created to test SEO strategies and Google Search Console tooling."
        />
      </Helmet>

      <header className="page-header">
        <h1>About ReSole</h1>
        <p>
          ReSole is a fully featured, but entirely fictional, second hand sneaker store
          built specifically for SEO experiments.
        </p>
      </header>

      <div className="stack">
        <p>
          This project gives you a safe environment to test structured internal linking,
          large product catalogs, blog content and technical SEO changes without risking a
          real brand or revenue.
        </p>
        <p>
          Because every product and blog post is generated from simple data files, you can
          easily modify URLs, copy and linking structures to see how search engines respond.
        </p>
      </div>
    </>
  );
}

export default About;

