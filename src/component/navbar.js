import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navActive, setNavActive] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <header>
        <nav className={`navbar ${navActive ? "nav-active" : ""}`}>
          <div className="logo">
            <a href="/">TVDB</a>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Filmler</Link>
            </li>
            <li>
              <Link to="/diziler">Diziler</Link>
            </li>
            <li>
              <Link to="/kisiler">Kişiler</Link>
            </li>
            <li>
              <Link to="/daha-fazla">Daha fazla</Link>
            </li>
          </ul>
          <div className="box">
            <form name="search">
              <input
                type="text"
                className="input"
                name="txt"
                onMouseOut={(e) => {
                  e.target.value = "";
                  e.target.blur();
                }}
              />
            </form>
            <i className="fas fa-search"></i>
          </div>
          <div
            className={`burger ${navActive ? "close" : ""}`}
            onClick={toggleNav}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
