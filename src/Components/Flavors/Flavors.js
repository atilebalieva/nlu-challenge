import React, { useEffect, useState } from "react";
import flavorImg from "../../images/flavors.png";
import "./flavors.css";
import { useNavigate } from "react-router-dom";

function Flavors() {
  const [flavors, setFlavors] = useState();
  const navigate = useNavigate();

  const getFlavors = () => {
    fetch('http://localhost:3000/categories')
    .then((response) => response.json())
    .then((data) => setFlavors(data))
  };

  useEffect(() => {
    getFlavors();
  },[]);
  
  return (
      <div className="flavors-container container">
        {flavors?.map((category) => {
          return ( 
            <div key={category.id} onClick={()=>{navigate(`/flavors/${category.id}`)}} className="flavor_cards">
              <div className="">
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
