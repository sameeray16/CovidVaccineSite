import React, { useState } from "react";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  } from 'mdb-react-ui-kit';

import "./Signup.scss"

import { Link, useNavigate } from "react-router-dom";

import { Alert,Form } from "react-bootstrap";

import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from "../../Firebase/auth";
import { getAuth,updateProfile } from "firebase/auth";

export const Signup = () => {

  const navigate = useNavigate();

  const auth = getAuth();

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await doCreateUserWithEmailAndPassword(email, password)
      //await updateProfile(auth.currentUser,{displayName: name})
      updateProfile(auth.currentUser,{
        displayName : name
      })
      navigate("/");
    } catch(err){
      setError(err.message)
    }
  }

  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await doSignInWithGoogle(email, password);
      navigate("/")
    } catch(err){
      setError(err.message)
    }
  }


    return(
        <>

        <Form onSubmit={handleSignup}>
        <MDBContainer fluid className="loginForm">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Sign up!</h2>
              <p className="text-white-50">Please enter your details</p>
              <p className="text-white-50 mb-3">Log in after signing up</p>
              {/* {error && <Alert variant="danger">{error}</Alert>} */}

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' type='text' size="lg" className="text-white" onChange={(e)=> setName(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" className="text-white" onChange={(e)=> setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" className="text-white" onChange={(e)=> setPassword(e.target.value)}/>

              
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' type="submit">
                Sign-up
              </MDBBtn>
              <br />
              <p className="mb-0">OR</p>
              <p className="mb-0">Sign-up with Google</p>
              <div className='d-flex flex-row mt-1 mb-3'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} onClick={handleGoogleSignup}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Already have an account? <Link to="/" className="text-primary-50 fw-bold">Login!</Link></p>
              </div>
            </MDBCardBody>
            </MDBCard>

        </MDBCol>
        </MDBRow>

        </MDBContainer>

        </Form>

            

        </>
    )
}