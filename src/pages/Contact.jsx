import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact ReSole | SEO Demo Store</title>
        <meta
          name="description"
          content="Contact the creators of ReSole, a demo second hand sneaker store built for SEO experiments and Google Search Console testing."
        />
      </Helmet>

      <header className="page-header">
        <h1>Contact ReSole</h1>
        <p>
          This page mimics a contact form page type, which you can use to test how support
          or contact URLs behave in search.
        </p>
      </header>

      <div className="two-column">
        <section className="stack">
          <h2>Send a (fictional) message</h2>
          <p className="muted">
            The form below does not submit anywhere — it only exists to generate realistic
            HTML for crawlers.
          </p>
          <form className="stack">
            <label>
              Your name
              <input type="text" placeholder="Jane Doe" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea rows={4} placeholder="Questions about ReSole or SEO experiments…" />
            </label>
          </form>
        </section>

        <aside className="stack">
          <h2>Why this page exists</h2>
          <p>
            Many sites have &quot;Contact&quot; URLs. Adding this page lets you experiment
            with patterns like <code>/contact</code> and see how quickly they are indexed,
            how they appear in search and whether they trigger any special treatments.
          </p>
        </aside>
      </div>
    </>
  );
}

export default Contact;

