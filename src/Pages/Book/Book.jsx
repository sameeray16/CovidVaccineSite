import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { 
    MDBInput,
    MDBBtn,
    MDBRadio
} from "mdb-react-ui-kit";

import Form from 'react-bootstrap/Form';

import { db } from "../../Firebase/Firebase";
import { collection,doc,addDoc,getDocs,updateDoc } from "firebase/firestore";


import "./Book.scss"

export const Book = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[number,setNumber] = useState("")
    const[age,setAge] = useState()
    const[dose,setDose] = useState("")
    const[selectedCentre,setSelectedCentre] = useState("")

    const[error,setError] = useState("")
    const[error2,setError2] = useState("")

    const[centreList,setCentreList] = useState([])
    

    useEffect(()=>{

        const displayCentre = async () => {
            try{
                const availableCentres = await getDocs(collection(db,"Centres"))
                const fetchCentres = availableCentres.docs.map(doc=>({id:doc.id,...doc.data()}))
                setCentreList(fetchCentres)
            } catch(err){
                setError(err.message)
            }
        }

        displayCentre()

    },[])

    const filteredCentres = centreList.filter(centre => centre.slots > 0)

    const handleCentre = (e) => {
        setSelectedCentre(e.target.value)
    }

    const[msg,setMsg] = useState("")

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const docRef = await addDoc(collection(db,"SlotBooking"),{
                name : name,
                email : email,
                number : number,
                age : age,
                dose : dose,
                centre : selectedCentre
            })
            setMsg("Vaccination slot booked successfully")
            formRef.current.reset()
        } catch(err){
            setError(err.message)
        }

        try{
            const availableCentres = await getDocs(collection(db,"Centres"))
            const fetchCentres = availableCentres.docs.map(doc=>({id:doc.id,...doc.data()}))
            const neededCentre = fetchCentres.filter(centre=> centre.centre==selectedCentre)[0]    
            const currentSlots = neededCentre.slots
            const currentID = neededCentre.id
            const docRef = doc(db,"Centres",currentID)
            updateDoc(docRef,{
                slots : currentSlots - 1
            })

        } catch(err){
            setError2(err.message)
        }

    }




    return(
        <>
            <h1 className="py-3 text-center">Book Vaccination Slot</h1>
            <div className="form text-center">
                <form onSubmit={handleSubmit} ref={formRef}>
                    
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Name' id='formControlLg' type='text' size="lg" className="text-black" onChange={(e)=>{setName(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Email' id='formControlLg' type='email' size="lg" className="text-black" onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Mobile number' id='formControlLg' type='number' size="lg" className="text-black" onChange={(e)=>{setNumber(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-black' label='Age' id='formControlLg' type='number' size="lg" className="text-black" onChange={(e)=>{setAge(e.target.valueAsNumber)}} required/>

                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='1st Dose' label='1st Dose' inline onChange={(e)=>{setDose(e.target.value)}}/>
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='2nd Dose' label='2nd Dose' inline onChange={(e)=>{setDose(e.target.value)}}/>

                    <p className="pt-2">Select a vaccination centre</p>
                    <Form.Select  value={selectedCentre} onChange={handleCentre} className="mx-5 my-3" required>
                    <option value="na">Select a vaccination centre</option>
                    { filteredCentres.map(centre=>(
                            <option key={centre.id} value={centre.centre}>{centre.centre}</option>
                        ))}

                    </Form.Select>

                    <button type="submit" className="btn btn-success my-3" data-mdb-ripple-init>Book Vaccination</button>
                  
                </form>
                <p className="p-3">
                {
                    msg && (<Alert variant="success">{msg}</Alert>)
                }
                </p>
                {error && <Alert variant="danger">{error}</Alert>}
                {error2 && <Alert variant="danger">{error2}</Alert>}
            </div>
        </>
    )
}