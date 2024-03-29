import React, { useEffect, useState } from "react";
import './SingleCart.css';
const SingleCart = ({ car, handleRemoveItem}) => {
  const [quantity, setQuantity] = useState(1);
  const [singleTotalPrice, setSingleTotalPrice] = useState(car.price);
  useEffect(() => {
    setSingleTotalPrice((car.price * quantity).toFixed(2))
  }, [quantity, car.price])

  const handlePlus = () =>{
    setQuantity(quantity + 1)
  }
   const hadleMinus = () =>{
         if(quantity > 1){
           setQuantity(quantity - 1);
         }
   }

  const { picture, body, price, name} = car;
  return (
    <div className="d-flex align-items-center justify-content-between cart rounded-2" style={{margin:'20px auto'}}>
     <div className="img-details d-flex align-items-center">
     <div className="img">
        <img src={picture} alt="" />
      </div>
      <div className="des ms-2">
        <h4>{name}</h4>
        <p>{body}</p>
      </div>
     </div>
      <div className="price">
        <h3>${singleTotalPrice}</h3>
      </div>
      <div className="quantity">
        <button onClick={hadleMinus} style={{border: 'none', backgroundColor: 'transparent'}}>-</button>
        <input style={{width: '39px', height: '24px', overflow: 'auto'}} type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} min="1" />
        <button onClick={handlePlus} style={{border: 'none', backgroundColor: 'transparent'}}>+</button>
      </div>
      <div className="delete-btn">
      <svg onClick={() => handleRemoveItem(car)} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#191919" viewBox="0 0 256 256"><path d="M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"></path></svg>
      </div>
    </div>
  );
};

export default SingleCart;
