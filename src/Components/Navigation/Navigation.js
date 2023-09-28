import React from "react";
import "../Navigation/Navigation.css";
import NavElements from "./NavElements";
import {FaSearch} from "react-icons/fa";
import "../../css/media.css";

function Navigation() {
  return (
      <header className="header container">
        <div className="desktop-nav">
          <NavElements/>
          <div className="nav_search">
             <input type="text" name="search" placeholder="Find your favorite Flavor" />
             <FaSearch className="search_icon"/>
           </div>
       
        </div>
      </header>
  )
}

export default Navigation;