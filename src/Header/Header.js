import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../img/green-beans2.png';
const Header = ({cart}) => {
    return (
        <div className='nav-container'>
           <nav>
           <div className="logo">
              <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="elements">
                <Link to='/cart'><div className="cart-btn">
                 <div className="abso">
                 <p>{cart.length}</p>
                 </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#080808" viewBox="0 0 256 256"><path d="M100,216a20,20,0,1,1-20-20A20,20,0,0,1,100,216Zm84-20a20,20,0,1,0,20,20A20,20,0,0,0,184,196ZM235.47,75.53l-27.29,88.7A27.87,27.87,0,0,1,181.41,184H82.93A28.13,28.13,0,0,1,56,163.69L21.81,44H12a12,12,0,0,1,0-24H24.82A20.08,20.08,0,0,1,44.05,34.51L51.34,60H224a12,12,0,0,1,11.47,15.53ZM207.75,84H58.19l20.89,73.1a4,4,0,0,0,3.85,2.9h98.48a4,4,0,0,0,3.83-2.82Z"></path></svg>
                    </div></Link>
               <Link className='text-decoration-none text-dark' to='/login'>Login</Link>
               <Link className='button text-decoration-none' to='/signin'>Signin</Link>
            </div> 
           </nav>
        </div>
    );
};

export default Header;