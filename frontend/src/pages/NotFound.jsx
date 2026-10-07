function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">

        <span className="error-number">
          404
        </span>

        <span className="section-label">
          PAGE NOT FOUND
        </span>

        <h1>
          Oops! This Page
          <br />
          Doesn't Exist.
        </h1>

        <p>
          The page you're looking for may have been
          moved, deleted, or the address may be incorrect.
        </p>

        <div className="not-found-actions">

          <a
            href="/"
            className="primary-btn"
          >
            ← Back to Home
          </a>

          <a
            href="/search"
            className="secondary-btn"
          >
            Search Campus
          </a>

        </div>

      </div>
    </section>
  );
}

export default NotFound;