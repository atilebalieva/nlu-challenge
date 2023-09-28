import React from 'react'
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom'
import "../Navigation/Navigation.css";
import jsonData from "../../db/db.json";

function NavElements() {
  const capabilities = {
    name: "Capability",
    link: "/capabilities/",
    categories: [{categoryId: "design", name: "Design"}, {categoryId: "production", name: "Production"}, {categoryId: "certification", name: "Certification"}]
  }

  const flavors = {
    name: "Flavors",
    link: "/flavors/",
    categories: jsonData.flavors
  }

  return (
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
  )
}

export default NavElements