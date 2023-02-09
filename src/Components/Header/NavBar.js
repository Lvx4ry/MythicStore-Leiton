import "./styles.css";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  let [visibleNav, setVisibleNav] = useState(false);

  const handleNavButton = () => {
    setVisibleNav(!visibleNav);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light py-">
        <div className="container-fluid justify-content-between justify-content-md-evenly ">
          <div className="col-lg-3 col-md-4 col-12 d-flex flex-row justify-content-center justify-content-lg-start">
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
            onClick={handleNavButton}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              visibleNav ? "d-flex" : "d-none"
            } collapse navbar-collapse col-3 justify-content-center justify-content-lg-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2 justify-content-center col-10 col-lg-10 justify-content-lg-end">
              <li className="nav-item">
                <NavLink
                  to="/category/staves"
                  className="nav-link text-light  "
                >
                  Staves
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
              <li className="nav-item">
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
