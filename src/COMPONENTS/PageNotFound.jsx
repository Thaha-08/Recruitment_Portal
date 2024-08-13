import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="not-found-submessage">
          It might have been moved or deleted. Please check the URL or return to
          the home page.
        </p>
        <a href="/" className="not-found-home-link">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
