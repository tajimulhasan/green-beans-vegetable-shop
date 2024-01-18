import React, { useEffect, useState } from 'react';
import Bulb from './Bulb/Bulb';

const BulbVegetable = () => {
    const [bulbs, setBulbs] = useState([]);
    useEffect(() => {
        fetch('bulbvegetable.json')
        .then(ref => ref.json())
        .then(data => setBulbs(data))
    }, [])
    return (
      <div className="full">
          <div className='for-grid'>
            {
                bulbs.map(bulb => <Bulb
                key={bulb.id}
                bulb={bulb}
                ></Bulb>)
            }
        </div>
      </div>
    );
};

export default BulbVegetable;