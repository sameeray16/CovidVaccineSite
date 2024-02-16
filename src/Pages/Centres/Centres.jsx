import React, { useEffect, useState } from "react";
import { Alert,Modal,Button } from "react-bootstrap";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { MDBInput } from "mdb-react-ui-kit";
import "./Centres.scss"

export const Centres = () => {

    const[centres,setCentres] = useState([])
    const[error,setError] = useState("")

    useEffect(()=>{

        const displayCentre = async () => {
            try{
                const availableCentres = await getDocs(collection(db,"Centres"))
                const fetchCentres = availableCentres.docs.map(doc=>({id:doc.id,...doc.data()}))
                setCentres(fetchCentres)
            } catch(err){
                setError(err.message)
            }
        }

        displayCentre()

    },[])

    const filteredCentres = centres.filter(centre => centre.slots > 0)

    return(
        <>
            <div className="container">
            <h1 className="mt-5">Vaccination Centres</h1>
            {filteredCentres.length===0 ? 
            <>
            <h3>No vaccination centres are available at the moment.</h3>
            <h4>please check after sometime.</h4>
            </> : ""}
            <div className="row">
                {filteredCentres.map(centre => (
                    <div key={centre.id} className="col-md-4 mb-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{centre.centre}</h5>
                        <p className="card-text">Location: {centre.location}</p>
                        <p className="card-text">Slots: {centre.slots}</p>

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