import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <span>&larr;</span> Home
      </Link>
    </div>
  );
}

export default Header;
