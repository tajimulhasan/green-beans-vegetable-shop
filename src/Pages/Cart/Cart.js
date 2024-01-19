import React from 'react';
import SingleCart from './SingleCart';
import './Cart.css';
import Swal from 'sweetalert2';
const Cart = ({cart, setCart, handleRemoveItem}) => {
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
              <div className="proceed-btn">
                 <button>Proceed Checkout</button>
              </div><br />
              </div>
           )
          :null}
        </div>
    );
};

export default Cart;