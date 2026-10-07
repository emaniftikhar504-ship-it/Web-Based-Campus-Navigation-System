import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login system will be connected to the backend soon.");
  };

  return (
    <section className="login-page">
      <div className="login-card">

        <div className="login-icon">
          📍
        </div>

        <span className="section-label">
          WELCOME BACK
        </span>

        <h1>Login to CampusNav</h1>

        <p className="login-description">
          Access personalized campus navigation and services.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot-password">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="primary-btn login-submit"
          >
            Login →
          </button>

        </form>

        <div className="login-divider">
          <span>CampusNav</span>
        </div>

        <p className="login-note">
          Student or administrator? Use your registered account.
        </p>

      </div>
    </section>
  );
}

export default Login;