import React, { useEffect, useState } from 'react';
import Fruit from './Fruit/Fruit';

const FruitVegetable = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('fruitvegetables.json')
        .then(ref => ref.json())
        .then(data => setFruits(data))
    }, [])
    return (
      <div className="full">
          <div className='for-grid'>
            {
                fruits.map(fruit => <Fruit
                key={fruit.id}
                fruit={fruit}
                ></Fruit>)
            }
        </div>
      </div>
    );
};

export default FruitVegetable;