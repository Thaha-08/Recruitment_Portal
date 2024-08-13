import "../HomeComponents/FooterSection.css";

function FooterSection() {
  return (
    <div>
      {" "}
      <footer className="fs-container">
        <div className="fs-inner">
          <div className="fs-copyright">
            <p>&copy; All Dummy rights reserved.</p>
          </div>

          <div className="fs-social">
            <a href="#" className="fs-social-link">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="fs-social-link">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="fs-social-link">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="fs-social-link">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="fs-contact">
            <p>
              <i className="fa fa-phone" /> +91-9843904043
            </p>
            <p>
              <i className="fa fa-envelope" />
              hariharaan123@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
