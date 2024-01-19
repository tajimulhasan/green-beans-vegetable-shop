import React from 'react';
import banner from '../../img/big banner green5.jpg';
import './Home.css';
import LeafyVegetable from './Leafy-vegetable/LeafyVegetable';
import FruitVegetable from './FruitVegetable/FruitVegetable';
import BulbVegetable from './BulbVegetable/BulbVegetable';
import TuberVegetable from './TuberVegetable/TuberVegetable';
import Doc from './Doc/Doc';
const Home = ({cart, setCart, handleClick}) => {
    return (
       <div className="home-container">
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
        <div className="links">
         
            {/* <Link to='/bulb'>Bulb</Link>
            <Link to='/tuber'>Tuber</Link>
            <Link to='/fruit'>Fruit</Link>  */}
           {/* <div className="leafy m-5">
              <h3 className='text-center mb-2'>Bulb Vegetable</h3>
              <BulbVegetable></BulbVegetable>
            </div> 
            <div className="leafy m-5">
              <h3 className='text-center mb-2'>Fruit Vegetable</h3>
              <FruitVegetable></FruitVegetable>
            </div>
            <div className="leafy m-5">
              <h3 className='text-center mb-2'>Tuber Vegetable</h3>
              <TuberVegetable></TuberVegetable> 
            </div> */}
            <div className="leafy m-5">
              <h3 className='text-center mb-2'>Leafy Vegetable</h3>
            <LeafyVegetable cart={cart} setCart={setCart} handleClick={handleClick}></LeafyVegetable>
            </div>
             <br />   
        </div>
        <div className="dov">
          <Doc></Doc>
        </div><br /><br />
       </div>
    );
};

export default Home;


