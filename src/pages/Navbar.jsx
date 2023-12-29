import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{ listStyle: "none", display: "flex", justifyContent: "center" }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
