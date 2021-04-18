import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../picture/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const { searchText, handleChange, countCartItems } = props;

  return (
    <div className="Header">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light py-0 shadow header"
          style={{ backgroundColor: "#7AD6EC" }}
        >
          <div className="container-xxl">
          <NavLink to="/"><img src={logo} alt="logo" width="74" height="74" /></NavLink>
            <form className="d-flex ms-auto" style={{ position: "relative" }}>
              <input
                style={{ marginLeft: 5, borderRadius: "9999px", width: "300px"}}
                type="text"
                placeholder="  search..."
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
              <div
                className="btn py-0 pt-1"
                type="search"
                style={{ position: "absolute", right: "1px" }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </form>
            <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
              <li className="nav-item" style={{ display: "inline",}}>
                <NavLink to="/" className="navlink">Home</NavLink>
              </li>
              <li className="nav-item" style={{ display: "inline",}}>
                <NavLink to="/contact" className="navlink">Contact</NavLink>
              </li>
              <li className="nav-item" style={{ display: "inline",}}>
                <NavLink to="/cart" className="navlink">
                  Cart{" "}
                  <button className="btn shopping-cart p-0">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                  {countCartItems ? (
                    <button className="badge bg-light text-dark">{countCartItems}</button>
                  ) : (
                    ""
                  )}{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
