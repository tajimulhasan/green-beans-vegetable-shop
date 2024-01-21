import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import Social from '../Social/Social';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error1
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

const navigate = useNavigate();

const handleEmail = e =>{
  setEmail(e.target.value)
}
const handlePassword = e =>{
  setPassword(e.target.value)
}
const handleConfPassword = e =>{
  setConfPassword(e.target.value)
}
if(user){
  console.log(user);
  navigate('/')
}
const nameRef = useRef('');
const handleForm = async (event) =>{
  event.preventDefault();
  if(password !== confPassword){
   setError("*Confirm password didn't match")
  }
  if(password < 6){
    setError('*Password must be at least 6 characters')
  }
  if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
    setError('Have to contain at least one special character')
    return;
  }
const name = nameRef.current.value;
  await createUserWithEmailAndPassword(email, password);
   const success = await updateProfile({displayName: name});
   if(success){
    console.log('hei');
   }
}


    return (
        <div className="parent ms-auto me-auto">
            <div className='login-form'>
            <div className="log-logo text-center">
                 <h1>Signup</h1>
            </div>
            <div className="input-container mt-3">
            <Form onSubmit={handleForm}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter your full name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onBlur={handleConfPassword} type="password" placeholder="Confirm Password" required />
      </Form.Group>
      <p style={{color: 'red', margin: '0px'}}>{error1?.message}</p>
      <p style={{color: 'red', margin: '0px'}}>{error}</p>
      <Form.Group className="mb-3 d-flex mt-2" style={{fontSize: '15px', marginLeft: '8px'}} controlId="formBasicCheckbox">
        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms'/>
          <label className={`${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Green Beans terms and condition</label>
      </Form.Group>
      <Button disabled={!agree} className='login-button w-100' variant="primary" type="submit">
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