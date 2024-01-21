import React from 'react';
import facebook from '../../../img/facebook.png';
import google from '../../../img/google.png';
import gitbub from '../../../img/github.png';
import './Social.css';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if(user || user2 || user3){
        navigate('/')
    }
    if(error || error2 || error3){
       errorElement = <div><p>{error?.message} {error2?.message} {error3?.message}</p></div>
    }
    
    return (
        <div>
            <div onClick={() => signInWithGoogle()} className="google d-flex align-items-center justify-content-center mb-2">
                <img src={google} alt="" />
                <p>Continue with Google</p>
            </div>
            {errorElement}
            <div onClick={() => signInWithFacebook()} className="google d-flex align-items-center justify-content-center mb-2">
                <img src={facebook} alt="" />
                <p>Continue with Facebook</p>
            </div>
            <div onClick={() => signInWithGithub()} className="google d-flex align-items-center justify-content-center mb-2">
                <img src={gitbub} alt="" />
                <p>Continue with Github</p>
            </div>
        </div>
    );
};

export default Social;