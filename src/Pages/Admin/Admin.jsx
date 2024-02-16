import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { MDBInput,MDBBtn } from "mdb-react-ui-kit";

import { db } from "../../Firebase/Firebase";
import { collection,addDoc } from "firebase/firestore";

import "./Admin.scss"

export const Admin = () => {

    const[centre,setCentre] = useState("")
    const[slots,setSlots] = useState()
    const[location,setLocation] = useState("")
    const[error,setError] = useState("")
    const[msg,setMsg] = useState("")
    
    const formRef = useRef(null);

    const addCentre = async (e) => {
        e.preventDefault()
        try{
            const docRef = await addDoc(collection(db,"Centres"),{
                centre : centre,
                slots : slots,
                location : location
            })
            setMsg("Centre added successfully! (Add more centres as per required)")
            formRef.current.reset()
        } catch(err){
            setError(err.message)
        }
    }

    return(
        <>
            <h1 className="text-center pt-3 fw-bold">Admin Page</h1>
            <h2 className="px-5 py-3">Add Vaccination Centres</h2>
            <div className="form text-center">
                <form onSubmit={addCentre} ref={formRef}>
                    
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Centre' id='formControlLg' type='text' size="lg" className="text-black" onChange={(e)=>{setCentre(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Number of Slots' id='formControlLg' type='number' size="lg" className="text-black" onChange={(e)=>{setSlots(e.target.valueAsNumber)}} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Centre Location' id='formControlLg' type='text' size="lg" className="text-black" onChange={(e)=>{setLocation(e.target.value)}} required/>
                    
                    <button type="submit" className="btn btn-success " data-mdb-ripple-init>Add Vaccination Centre</button>
                  
                </form>
            </div>
            <div className="txt">
                <p className="p-3">
                {
                    msg && (<Alert variant="success">{msg}</Alert>)
                }
                </p>
                <p className="p-3">
                {error && <Alert variant="danger">{error}</Alert>}
                </p>
            </div>
        </>
    )
}