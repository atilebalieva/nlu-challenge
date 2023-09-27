import React from "react";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Navigation() {
  return (
      <header className="header">
        <nav>
          <ul className="navigation">
            <li>  
              <Link to=""><img src={logo} alt="Logo"/></Link>
            </li>
            <li>
              <Link to="/capabilities" className="link">Capabilities</Link>
            </li>
            <li>
              <Link to="/flavors" className="link">Flavors</Link>
            </li>
            <li>
              <Link to="/about-us" className="link">About Us</Link>
            </li>
            <li>
             <Link to="/contact-us" className="link">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navigation