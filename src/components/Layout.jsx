import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            ReSole
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link to="/shoes">All Shoes</Link>
            <Link to="/nike-shoes">Nike</Link>
            <Link to="/adidas-shoes">Adidas</Link>
            <Link to="/puma-shoes">Puma</Link>
            <Link to="/sell-your-shoes">Sell</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} ReSole. Built for SEO testing.</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/shoes">Shoes</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/sell-your-shoes">Sell your shoes</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

