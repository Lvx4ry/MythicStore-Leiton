import "./styles.css";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-end">
          <div className="col-lg-3 col-12">
            <Link
              to="/"
              className="navbar-brand px-2 text-light text-center text-lg-start"
            >
              Mythic Store
            </Link>
          </div>
          <SearchBar />
          <button
            className="navbar-toggler col-12 my-2"
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
            className="collapse navbar-collapse d-flex pe-2 col-4 justify-content-start px-3 justify-content-lg-end "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/category/staffs" className="nav-link text-light">
                  Staffs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/swords" className="nav-link text-light">
                  Swords
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/shields" className="nav-link text-light">
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
