import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

function FlavorsList() {
   const [flavor, setFlavor] = useState();
   const params = useParams();
   const getFlavor = () => {
     fetch(`http://localhost:3000/flavors/${params.id}`)
     .then((response) => response.json())
     .then(data => setFlavor(data));
   };
 
   useEffect(() => {
     getFlavor();
   },[]);

  return (
    <div className="container border">
      <input type="text" id="search" placeholder="Search for a flavor"></input>
      <h3>{flavor?.name}</h3>
      <ul>
         {flavor?.list?.map(item=>{
          return (
             <li key={uuidv4()}>{item}</li>
         )
      })}
      </ul>
    </div>
  )
}
export default FlavorsList