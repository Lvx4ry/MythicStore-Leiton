import "./styles.css";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid justify-content-end">
        <a
          className="navbar-brand ps-2 text-light col-lg-3 col-12 text-center text-lg-start"
          href="#"
        >
          Mythic Store
        </a>
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
              <a className="nav-link text-light" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Vender
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Ingresar
              </a>
            </li>
            <li className="nav-item">
              <CartWidget numberOfProducts={3} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
