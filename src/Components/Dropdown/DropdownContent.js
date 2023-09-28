import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css";

function DropdownContent({items, onMouseLeave}) {
  const menuId = items.link.includes("capabilities") ? "capabilities" : "flavors";

  return (
    <div>
        <ul className="dropdown-content" id={menuId} onClick={onMouseLeave}>
        {items.categories.map((item) => {
          return <li className="dropdown-item" key={item.categoryId}>
          <Link to={items.link + item.categoryId}>{item.name}</Link>
        </li>;
        })}
        </ul>
    </div>
  )
}

export default DropdownContent;
