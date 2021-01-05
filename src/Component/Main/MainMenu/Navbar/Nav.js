import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div className="black-nav-container">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <h4>
        <Link to="/product/trademark">Trademarks</Link>
      </h4>
    </div>
  );
}
