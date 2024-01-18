import React from "react";
import "./Levegetable.css";
const LeVegetable = ({ leafy }) => {
  const { picture, body, name, price } = leafy;
  return (
   
      <div className="main">
        <div className="inside">
          <img src={picture} alt="" />
          <h4>{name}</h4>
          <p>{body}</p>
          <h3>${price}</h3>
        </div>
      </div>
   
  );
};

export default LeVegetable;
