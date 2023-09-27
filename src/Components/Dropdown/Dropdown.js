import React from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css";
import { FaAngleDown } from 'react-icons/fa';


function Dropdown({items}) {
  return (
    <div className="dropdown">
        <Link to={items.link} className="link dropdown_btn">{items.name}<FaAngleDown className="dropdown_arrow"/></Link> 
        <ul className="dropdown_content">
        {items.categories.map((item) => {
          return <li className="dropdown_item">
          <Link to={"/" + item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
        </li>;
        })}
        </ul>
    </div>
  )
}

export default Dropdown;
