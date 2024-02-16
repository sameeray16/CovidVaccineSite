import React , {useState} from "react";

import { Button,Alert,Modal } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { doSignOut } from "../../Firebase/auth";

import { useAuth } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

import "./Profile.scss"

export const Profile = () => {

    const [error,setError] = useState("");

    const { currentUser } = useAuth()

    const navigate = useNavigate()

    const handleLogout = async () => {
        try{
            await doSignOut();
            navigate("/")
        } catch(err){
            setError("")
        }
    }

    const defaultUserImage = "defaultUserImage.svg"


    

    return(
        <>
            <div className="container mt-5 mb-5">
            <div className="card">
            <div className="card-body text-center">
            <div className="text-center">
            <img
              src={currentUser?.photoURL || defaultUserImage}
              alt="User"
              className="img-fluid rounded-circle mb-2"
              style={{ width: '150px' }}
            />
            </div>
            <h2 className="text-center mb-4">{currentUser?.displayName}</h2>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <p className="text-center">{currentUser?.email}</p>
            </li>
            </ul>
            <div className="btn-div">
            <Button onClick={handleLogout} className="btn btn-danger">log out</Button>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            </div>
            </div>
            </div>

            


        </>
    )
}