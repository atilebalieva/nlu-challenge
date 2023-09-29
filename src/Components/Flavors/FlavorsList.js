import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import UserForm from "../UserForm/UserForm";
import {FaPagelines} from "react-icons/fa";

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
    <div className="flavors-list_container main_content container">
      <div className="flavors-list_block">
        <h3>{flavor?.name}</h3>
          <FaPagelines className="flavors-list_icon"/>
          <ul className="flavors-list">
         {flavor?.list?.map(item=>{
          return (
             <li key={uuidv4()}>{item}</li>
         )
      })}
      </ul>
      </div>
      <UserForm/>
      
      
    </div>
  )
}
export default FlavorsList