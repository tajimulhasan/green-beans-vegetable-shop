import React, { useEffect, useState } from 'react';
import LeVegetable from './LeVegetable';
import './LeafyVegetable.css';

const LeafyVegetable = ({cart, setCart, handleClick}) => {  
    const [leafys, setLeafys] = useState([]);
  
    useEffect(() => {
        fetch('leafyvegetables.json')
        .then(ref => ref.json())
        .then(data => setLeafys(data))
    }, [])


    return (
        <div className="full">
            <div className='for-grid'>
            {
                leafys.map(leafy => <LeVegetable key={leafy.id} 
                leafy={leafy} 
                cart={cart}
                setCart={setCart}
                handleClick={handleClick}
                ></LeVegetable>)      
            }
            
        </div>
        </div>
    );
};

export default LeafyVegetable;