import "./styles.css";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-between">
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-row justify-content-center justify-content-md-start">
            <Link
              to="/"
              className="navbar-brand px-2 text-light text-center text-lg-start "
            >
              Mythic Store
            </Link>
          </div>
          <SearchBar />
          <button
            className="navbar-toggler col-3 col-md-2  my-2 border border-black"
            type="button"
            data-bs-toggle=""
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex col-3 justify-content-start justify-content-lg-end "
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2 ms-4 ms-2-lg">
              <li className="nav-item">
                <NavLink
                  to="/category/staffs"
                  className="nav-link text-light  "
                >
                  Staffs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/swords"
                  className="nav-link text-light  "
                >
                  Swords
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/shields"
                  className="nav-link text-light  "
                >
                  Shields
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
