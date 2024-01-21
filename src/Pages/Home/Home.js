import React from 'react';
import banner from '../../img/big banner green5.jpg';
import mobBanner from '../../img/mob-banner.jpg';
import './Home.css';
import LeafyVegetable from './Leafy-vegetable/LeafyVegetable';

import Doc from './Doc/Doc';
const Home = ({cart, setCart, handleClick}) => {
    return (
       <div className="home-container">
      <div className="for-mobile">
      <img src={mobBanner} alt="" />
      </div>
         <div className='banner'>
            <div className="tag">
            <h2>Your Neighborhood Vegetable Haven!</h2>
            </div>
            <div className="input">
              <div className="for-button">
              <input className='rounded-input' type="text" placeholder='Search here' name="" id="" />
              <button className='search-button'>Search</button>
              </div>
            </div>
               <img src={banner} alt="" />  
        </div>
             <br /><br />
            <div className="leafy">
            <LeafyVegetable cart={cart} setCart={setCart} handleClick={handleClick}></LeafyVegetable>
            </div>
             <br />   
        <div className="dov mt-3">
          <Doc></Doc>
        </div><br /><br />
       </div>
    );
};

export default Home;


