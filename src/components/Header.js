import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { searchText, handleChange, countCartItems } = props;

  return (
    <div>
      <header>
        <div>
          Search{" "}
          <input
            style={{ marginLeft: 5 }}
            type="text"
            placeholder="search..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <nav>
          <ul>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/cart">
                Cart{" "}
                {countCartItems ? (
                  <button className="badge">{countCartItems}</button>
                ) : (
                  ""
                )}{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
