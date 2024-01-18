import React from 'react';
import logo from '../img/white-logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="first-section d-flex justify-content-between">
                <div className="logo w-25">
                    <img src={logo} alt="" />
                </div>
                <div className="context d-flex justify-content-around w-50">
                    <div className="part">
                        <p>About online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to delivery</p>
                        <p>Add your restaurent</p>
                    </div>
                    <div className="part">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurent near me</p>
                    </div>
                </div>
            </div>
            <div className="second-section d-flex justify-content-between align-items-center">
                  <div className="co">
                <p><small className='copyright'>Copyright © 2024 Green Beans</small></p>
                  </div>
                  <div className="term d-flex justify-content-around w-25">
                    <p>Privcy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                  </div>
            </div>
        </div>
    );
};

export default Footer;