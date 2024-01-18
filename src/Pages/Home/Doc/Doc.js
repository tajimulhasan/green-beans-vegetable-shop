import React from 'react';
import image1 from '../../../img/first-delivery.jpg';
import image2 from '../../../img/quick-respond.jpg';
import image3 from '../../../img/home.jpg';

const Doc = () => {
    return (
        <div className='doc-container ms-5 me-5'>
            <h1 className='text-center'>Why you choose us</h1>
            <div className="step d-flex justify-content-between mt-4">
                <div className="one " style={{width: '350px'}}>
                    <img style={{width: '350px', borderRadius: '8px'}} src={image1} alt="" />
                    <h4><svg style={{marginRight: '6px', backgroundColor: '#F0F0F0', padding: '4px', borderRadius: '33px' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#32cd30" viewBox="0 0 256 256"><path d="M245.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H182V64a6,6,0,0,0-6-6H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H42.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H232a14,14,0,0,0,14-14V120A6,6,0,0,0,245.57,117.78ZM182,86h36.58a2,2,0,0,1,1.86,1.26L231.14,114H182ZM22,72a2,2,0,0,1,2-2H170v68H22ZM72,210a18,18,0,1,1,18-18A18,18,0,0,1,72,210Zm82.6-24H101.4a30,30,0,0,0-58.8,0H24a2,2,0,0,1-2-2V150H170v15.48A30.1,30.1,0,0,0,154.6,186ZM184,210a18,18,0,1,1,18-18A18,18,0,0,1,184,210Zm50-26a2,2,0,0,1-2,2H213.4A30.05,30.05,0,0,0,184,162c-.67,0-1.34,0-2,.07V126h52Z"></path></svg>Quick respond</h4>
                    <p>Locate the Styles group in the Google Docs toolbar. Click on the desired Heading # and your text</p>
                </div>
                <div className="one " style={{width: '350px'}}>
                    <img style={{width: '350px', borderRadius: '8px'}} src={image2} alt="" />
                    <h4><svg style={{marginRight: '6px', backgroundColor: '#F0F0F0', padding: '4px', borderRadius: '33px' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#32cd30" viewBox="0 0 256 256"><path d="M245.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H182V64a6,6,0,0,0-6-6H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H42.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H232a14,14,0,0,0,14-14V120A6,6,0,0,0,245.57,117.78ZM182,86h36.58a2,2,0,0,1,1.86,1.26L231.14,114H182ZM22,72a2,2,0,0,1,2-2H170v68H22ZM72,210a18,18,0,1,1,18-18A18,18,0,0,1,72,210Zm82.6-24H101.4a30,30,0,0,0-58.8,0H24a2,2,0,0,1-2-2V150H170v15.48A30.1,30.1,0,0,0,154.6,186ZM184,210a18,18,0,1,1,18-18A18,18,0,0,1,184,210Zm50-26a2,2,0,0,1-2,2H213.4A30.05,30.05,0,0,0,184,162c-.67,0-1.34,0-2,.07V126h52Z"></path></svg>Home Delivery</h4>
                    <p>Locate the Styles group in the Google Docs toolbar. Click on the desired Heading # and your text</p>
                </div>
                <div className="one " style={{width: '350px'}}>
                    <img style={{width: '350px', borderRadius: '8px'}} src={image3} alt="" />
                    <h4><svg style={{marginRight: '6px', backgroundColor: '#F0F0F0', padding: '4px', borderRadius: '33px' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#32cd30" viewBox="0 0 256 256"><path d="M245.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H182V64a6,6,0,0,0-6-6H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H42.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H232a14,14,0,0,0,14-14V120A6,6,0,0,0,245.57,117.78ZM182,86h36.58a2,2,0,0,1,1.86,1.26L231.14,114H182ZM22,72a2,2,0,0,1,2-2H170v68H22ZM72,210a18,18,0,1,1,18-18A18,18,0,0,1,72,210Zm82.6-24H101.4a30,30,0,0,0-58.8,0H24a2,2,0,0,1-2-2V150H170v15.48A30.1,30.1,0,0,0,154.6,186ZM184,210a18,18,0,1,1,18-18A18,18,0,0,1,184,210Zm50-26a2,2,0,0,1-2,2H213.4A30.05,30.05,0,0,0,184,162c-.67,0-1.34,0-2,.07V126h52Z"></path></svg>Fast Delivery</h4>
                    <p>Locate the Styles group in the Google Docs toolbar. Click on the desired Heading # and your text</p>
                </div>
            </div>
        </div>
    );
};

export default Doc;