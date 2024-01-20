import React from 'react';
import facebook from '../../../img/facebook.png';
import google from '../../../img/google.png';
import gitbub from '../../../img/github.png';
import './Social.css';
const Social = () => {
    return (
        <div>
            <div className="google d-flex align-items-center justify-content-center mb-2">
                <img src={google} alt="" />
                <p>Continue with Google</p>
            </div>
            <div className="google d-flex align-items-center justify-content-center mb-2">
                <img src={facebook} alt="" />
                <p>Continue with Facebook</p>
            </div>
            <div className="google d-flex align-items-center justify-content-center mb-2">
                <img src={gitbub} alt="" />
                <p>Continue with Github</p>
            </div>
        </div>
    );
};

export default Social;