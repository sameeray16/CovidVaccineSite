import React, {useState} from "react";

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

  import "./Login.scss"

  import { Alert,Form } from "react-bootstrap"

  import { Link, useNavigate } from "react-router-dom";

  import { 
    doSignInWithEmailAndPassword,
    doSignInWithGoogle
  } from "../../Firebase/auth";

  import { useAuth } from "../../Context/UserContext";

  export const Login = () => {

    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSigningIn,setIsSigningIn] = useState("")
    const [error,setError] = useState("")

    const { userLoggedIn } = useAuth()

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("")
      try{
        await doSignInWithEmailAndPassword(email, password)
        navigate("/home")
      } catch(err){
        setError(err.message)
      }
    }

    const handleGoogleLogin = async (e) => {
      e.preventDefault();
      try{
        await doSignInWithGoogle();
        navigate("/home")
      } catch(err){
        setError(err.message)
      }
    }

    return(
        <>
        <Form onSubmit={handleLogin}>
        <MDBContainer fluid className="loginForm">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your email and password</p>
              {error && <Alert variant="danger">{error}</Alert>}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" className="text-white" onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" className="text-white" onChange={(e)=>setPassword(e.target.value)}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>
              <br />
              <p className="mb-0">Login with Google</p>
              <div className='d-flex flex-row mt-1 mb-3'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }} onClick={handleGoogleLogin}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/signup" className="text-primary-50 fw-bold">Sign up!</Link></p>
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