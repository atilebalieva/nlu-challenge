import React from "react";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Dropdown from '../Dropdown/Dropdown';

function Navigation() {
  const capabilities = {
    name: "Capability",
    link: "/capabilities",
    categories: ["design", "production", "certification"]
  }
  
  const flavors = {
    name: "Flavors",
    link: "/flavors",
    categories: ["soft-fruits", "citrus", "tropical"]
  }

  return (
      <header className="header">
        <Link to=""><img src={logo} alt="Logo"/></Link>
        <nav>
          <ul className="navigation">
            <li>
              <Dropdown items = {capabilities}/>
            </li>
            <li>
              <Dropdown items = {flavors}/>
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

export default Navigation;