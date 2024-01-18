import React, { useEffect, useState } from 'react';
import Tuber from './Tuber/Tuber';

const TuberVegetable = () => {
    const [tubers, setTubers] = useState([]);
    useEffect(() => {
        fetch('tubervegetables.json')
        .then(ref => ref.json())
        .then(data => setTubers(data))
    }, [])
    return (
      <div className="full">
          <div className='for-grid'>
            {
                tubers.map(tuber=> <Tuber
                 key={tuber.id}
                 tuber={tuber}
                ></Tuber>)
            }
        </div>
      </div>
    );
};

export default TuberVegetable;