import React, { useEffect, useState } from 'react';
import LeVegetable from './LeVegetable';
import './LeafyVegetable.css';

const LeafyVegetable = ({cart, setCart, handleClick}) => {  
    const [leafys, setLeafys] = useState([]);
    const [filterItems, setFilteredItems] = useState([]);
    useEffect(() => {
        fetch('leafyvegetables.json')
        .then(ref => ref.json())
        .then(data => {
            setLeafys(data);
             setFilteredItems(data.filter(item => item.category === 'leafy'));
        });
    }, [])

    const filterItem = categoryItem =>{
        const updatedItems = leafys.filter((currentItem) => {
            return currentItem.category === categoryItem;
        })
        setFilteredItems(updatedItems);
    }

    return (
        <div className="full">
            <div className="links">
           <button onClick={() => filterItem('leafy')}>Leafy</button>
           <button onClick={() => filterItem('tuber')}>Tuber</button>
           <button onClick={() => filterItem('bulb')}>Bulb</button>
           <button onClick={() => filterItem('fruit')}>Fruit</button>
             </div>
            <div className='for-grid mt-4'>
            {
                filterItems.map(leafy => <LeVegetable key={leafy.id} 
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


