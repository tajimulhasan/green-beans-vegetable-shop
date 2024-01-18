import React from 'react';

const Bulb = ({bulb}) => {
    const { picture, body, name, price } = bulb;
    return (
     
        <div className="main">
          <div className="inside">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{body}</p>
            <h3>${price}</h3>
          </div>
        </div>
    );
};

export default Bulb;