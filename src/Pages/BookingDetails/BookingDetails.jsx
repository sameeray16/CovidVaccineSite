import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export const BookingDetails = () => {

    const[data,setData] = useState([])
    const[error,setError] = useState("")

    useEffect(()=>{

        const displayData = async () => {
            try{
                const bookingData = await getDocs(collection(db,"SlotBooking"))
                const fetchData = bookingData.docs.map(doc=>({id:doc.id,...doc.data()}))
                setData(fetchData)
            } catch(err){
                setError(err.message)
            }
        }

        displayData()

    },[])


    return(
        <>
            <div className="container">
            <h1 className="mt-3">Booking Data</h1>
            {data.length===0 ? 
            <>
            <h3>No users have registered for vaccination.</h3>
            </> : ""}
            <div className="row">
            {data.map(data => (
            <div key={data.id} className="col-md-6 mb-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Email: {data.email}</p>
                <p className="card-text">Number: {data.number}</p>
                <p className="card-text">Age: {data.age}</p>
                <p className="card-text">Dose: {data.dose}</p>
                <p className="card-text">Centre: {data.centre}</p>
            </div>
            </div>
            </div>
            ))}

            </div>
            </div>
            <p>{error && <Alert variant="danger">{error}</Alert>}</p>

        </>
    )
}