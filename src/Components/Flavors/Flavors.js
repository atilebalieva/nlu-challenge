import React, { useEffect, useState } from "react";
import flavorImg from "../../images/flavors.png";
import "./Flavors.css";
import jsonData from '../../db/db.json'
import { useNavigate } from "react-router-dom";


function Flavors() {
  const navigate = useNavigate();
  return (
      <div className="flavors-container container">
        {jsonData?.categories.map((category) => {
          return ( 
            <div key={category.id} onClick={()=>{navigate(`/flavors/${category.id}`)}} className="flavor_cards">
              <div>
              <img src={flavorImg} alt="flavor" />
              </div>
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
  );
}

export default Flavors;
