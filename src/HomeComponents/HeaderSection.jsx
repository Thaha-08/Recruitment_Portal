import "../HomeComponents/HeaderSection.css";

function HeaderSection() {
  return (
    <header className="header-section">
      <h6>header</h6>
      <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              list<span>race</span>
            </a>
          </div>
          <div
            className="navbar-collapse menu-ui-design collapse"
            id="navbar-menu"
          >
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="scroll active">
                <a href="#home">home</a>
              </li>
              <li className="scroll">
                <a href="#works">how it works</a>
              </li>
              <li className="scroll">
                <a href="#explore">explore</a>
              </li>
              <li className="scroll">
                <a href="#reviews">review</a>
              </li>
              <li className="scroll">
                <a href="#blog">blog</a>
              </li>
              <li className="scroll">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderSection;
