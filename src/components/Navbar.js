import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> 
          <span className="logo-text">RBXCUYY</span>  {/* Teks nama toko */}
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/owner">Owner</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;