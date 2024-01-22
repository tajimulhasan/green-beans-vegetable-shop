import React, { useEffect, useState } from 'react';
import SingleCart from './SingleCart';
import './Cart.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Cart = ({cart, setCart, handleRemoveItem}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    if(cart.length === 0){
        Swal.fire({
            title: "No item added",
            text: "You have not added any item",
            icon: "error"
          });
    }

    return (
        <div>
           {cart.length > 0 ?(
              <div>
              <div className="carts">
              {
                 cart.map(car => <SingleCart 
                     key={car.id}
                  car={car}
                  handleRemoveItem={handleRemoveItem}
                 ></SingleCart>)
               }
              </div>
              <h3 className='text-center mb-3'>Total Price: {totalPrice}</h3>
              <div className="proceed-btn">
                 <Link to='/proceedcheckout'><button>Proceed Checkout</button></Link>
              </div><br />
              </div>
           )
          :null}
          
        </div>
    );
};

export default Cart;