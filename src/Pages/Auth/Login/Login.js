import React, { useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(loading){
        <p>Loading...</p>
      }
    const navigate = useNavigate();
  
     const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, {replace: true});
    }
      const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleForm = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        
    }
  
    return (
        <div className="parent mt-4 ms-auto me-auto">
            <div className='login-form'>
            <div className="log-logo text-center">
                 <h1>Login</h1>
            </div>
            <div className="input-container mt-4">
            <Form onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
      </Form.Group>
      <p style={{color: 'red'}}>{error?.message}</p>
      <p>New in Green Beans? <Link to='/signup' style={{textDecoration:'none'}}>create an account</Link></p>
      <Button className='login-button w-100' variant="primary" type="submit">
        Login
      </Button>
    </Form>
            </div>
        </div>
        <div className="or d-flex justify-content-between align-items-center mt-3">
            <div className="line">

            </div>
            <p className='text-center m-0'>Or</p>
            <div className="line">

            </div>
        </div>
        <div className="social mt-4">
        <Social></Social>
        </div>
        </div>
    );
};

export default Login;