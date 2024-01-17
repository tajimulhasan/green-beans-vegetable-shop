import React from 'react';
import banner from '../../img/big banner green5.jpg';
import './Home.css';
const Home = () => {
    return (
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
    );
};

export default Home;