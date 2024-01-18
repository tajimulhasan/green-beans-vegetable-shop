import React from 'react';

const Tuber = ({tuber}) => {
    const { picture, body, name, price } = tuber;
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

export default Tuber;