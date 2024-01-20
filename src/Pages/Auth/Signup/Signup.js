import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import Social from '../Social/Social';
const Signup = () => {
    return (
        <div className="parent w-25 ms-auto me-auto">
            <div className='login-form'>
            <div className="log-logo text-center">
                 <h1>Signup</h1>
            </div>
            <div className="input-container mt-3">
            <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" required />
      </Form.Group>
     
      <Form.Group className="mb-3 d-flex mt-2" style={{fontSize: '15px', marginLeft: '8px'}} controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='terms' id='terms'/>
          <label htmlFor="terms">Accept Green Beans terms and condition</label>
      </Form.Group>
      <Button className='login-button w-100' variant="primary" type="submit">
        Signup
      </Button>
      <p className='text-center mt-3'>Already have an account? <Link to='/login' style={{textDecoration:'none'}}>Login</Link></p>
    </Form>
            </div>
        </div>
        <div className="or d-flex justify-content-between align-items-center">
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

export default Signup;