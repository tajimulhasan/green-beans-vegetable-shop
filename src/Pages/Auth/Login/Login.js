import React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
const Login = () => {
    return (
        <div className="parent mt-4 w-25 ms-auto me-auto">
            <div className='login-form'>
            <div className="log-logo text-center">
                 <h1>Login</h1>
            </div>
            <div className="input-container mt-4">
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
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