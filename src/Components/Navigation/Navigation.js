import React, { useEffect, useRef, useState } from "react";
import "../Navigation/navigation.css";
import NavElements from "./NavElements";
import {FaSearch} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import "../../media.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function Navigation() {
  const elementRef = useRef();
  const [isFixed, setFixed] = useState(false);
  const [isOpenNav, setOpenNav] = useState(false);

  function handleMenu(){
    setOpenNav((prev)=> prev ? false : true );
  }

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
    <div className={`desktop-nav container ${isOpenNav ? 'show' : ''}`}>
          <NavElements/>
          <div className="nav_search">
             <input type="search" name="search" placeholder="Find your favorite Flavor" />
             <button className="search-button">
               <FaSearch className="search_icon"/>
             </button>
          </div>
    </div>
    <Breadcrumbs/>
    <FaBars className="burger_icon" onClick={handleMenu}/>
      </header>
  )
}

export default Navigation;