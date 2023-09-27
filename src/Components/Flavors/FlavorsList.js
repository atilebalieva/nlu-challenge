import React from 'react'
import { useParams } from 'react-router-dom';
import jsonData from '../../db/db.json';
import { v4 as uuidv4 } from "uuid";

function FlavorsList() {
   const params = useParams();
   const listOfFlavors = jsonData.flavors.filter(category=>{
      return category.categoryId === params.id;
   });
  return (
    <div className="container border">
      <input type="text" id="search" placeholder="Search for a flavor"></input>
      <h3>{listOfFlavors[0].name}</h3>
      <ul>
         {listOfFlavors[0].list.map(item=>{
          return (
             <li key={uuidv4()}>{item}</li>
         )
      })}
      </ul>
    </div>
  )
}

export default FlavorsList