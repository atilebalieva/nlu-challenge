import React, { useEffect, useRef, useState } from "react";
import "../Navigation/Navigation.css";
import NavElements from "./NavElements";
import {FaSearch} from "react-icons/fa";
import "../../css/media.css";

function Navigation() {
  const elementRef = useRef();
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const element = elementRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        if(rect.top < 0) {
          setFixed(true);
        } else if (scrollTop === 0) {
          setFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={elementRef} className={`header container ${isFixed ? 'fixed' : ''}`}>
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