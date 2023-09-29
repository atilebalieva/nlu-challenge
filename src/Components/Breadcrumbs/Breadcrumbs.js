import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Breadcrumbs/breadcrumbs.css';

function Breadcrumbs() {
   const location = useLocation();
   let currentLink = '';

   const crumbs = location.pathname.split('/')
   .filter(crumb => crumb !== 0)
   .map(crumb=>{
      currentLink += `/${crumb}`;
      return (<div className="crumb" key={crumb}>
         <Link to={currentLink}>{crumb}</Link>
      </div>)
   })

   console.log(crumbs)
  return (
    <div className="breadcrumps container">
      {crumbs}
    </div>
  )
}

export default Breadcrumbs;