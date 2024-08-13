import "../HomeComponents/WelcomeHeroSection.css";

function WelcomeHeroSection() {
  return (
    <section className="whs-container" id="home">
      <nav className="whs-nav">
        <div className="whs-logo">
          <span className="my-text">MGS </span>
          <span className="logo-text">R-Portal</span>
        </div>

        <ul className="whs-nav-links">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#login">
              <i className="fas fa-sign-in-alt"></i> Login
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fas fa-info-circle"></i>About
            </a>
          </li>
          <li>
            <a href="#statistics">
              <i className="fas fa-chart-bar"></i> Statistics
            </a>
          </li>

          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="whs-inner">
        <h2 className="whs-title animate-title">
          We’re not just filling positions <br /> we’re building empires!
        </h2>
        <p className="whs-subtitle animate-subtitle">
          Recruiting is not just about filling jobs; it's about creating futures
        </p>
      </div>
    </section>
  );
}

export default WelcomeHeroSection;
