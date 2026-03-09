import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | ReSole</title>
        <meta
          name="description"
          content="The page you requested could not be found on ReSole."
        />
      </Helmet>

      <div className="not-found">
        <h1>Page not found</h1>
        <p>
          Try returning to the <Link to="/">home page</Link>, browsing{' '}
          <Link to="/shoes">all shoes</Link> or reading the <Link to="/blog">blog</Link>.
        </p>
      </div>
    </>
  );
}

export default NotFound;

