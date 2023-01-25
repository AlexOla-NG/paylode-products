import { Link } from "react-router-dom";

// TODO: stopped here
// finish navbar layout

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">MoviesHub</Link>

        <button className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
