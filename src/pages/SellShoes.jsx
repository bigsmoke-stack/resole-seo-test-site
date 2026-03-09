import { Helmet } from 'react-helmet-async';

function SellShoes() {
  return (
    <>
      <Helmet>
        <title>Sell Your Sneakers | ReSole</title>
        <meta
          name="description"
          content="Learn how to sell your second hand sneakers on ReSole. This demo page is designed for SEO and Google Search Console testing."
        />
      </Helmet>

      <header className="page-header">
        <h1>Sell your sneakers to ReSole</h1>
        <p>
          This page describes a fictional selling flow. You can use it to test how contact
          and form-style content ranks and appears in search.
        </p>
      </header>

      <div className="two-column">
        <section className="stack" aria-label="How selling works">
          <h2>How the (fictional) selling process works</h2>
          <p>
            ReSole is a demo site only, but the steps below mimic what a real sneaker
            reseller might ask from you. Use them to create realistic content for search
            engines to crawl.
          </p>
          <ul className="stack" style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
            <li>Describe the sneakers you want to sell in as much detail as possible.</li>
            <li>Mention the brand, model, size, condition and original purchase date.</li>
            <li>Include links to clear photos of the uppers, midsoles and outsoles.</li>
            <li>Note any flaws such as heel drag, creasing or discoloration.</li>
          </ul>
        </section>

        <aside aria-label="Example request form">
          <h2>Example sneaker sell form</h2>
          <p className="muted">
            This form does not submit anywhere — it simply provides realistic copy for SEO
            testing.
          </p>
          <form className="stack">
            <label>
              Sneaker details
              <textarea rows={3} placeholder="Nike Air Max 90, size 10, worn lightly" />
            </label>
            <label>
              Condition notes
              <textarea rows={3} placeholder="Small scuffs on toe box, no sole separation" />
            </label>
            <label>
              Links to photos
              <input type="url" placeholder="https://…" />
            </label>
          </form>
        </aside>
      </div>
    </>
  );
}

export default SellShoes;

