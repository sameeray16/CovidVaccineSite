import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.scss"

import { useAuth } from "../../Context/UserContext";

export const NavbarComponent = () => {

    const { currentUser } = useAuth()

    return(
        <>  {
            currentUser ? 
            <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand> <Link to="/home" className="navlink">CovidVaccine</Link> </Navbar.Brand>
                <Nav className="me-auto">
                <Link to="/home" className="navlink">Home</Link>
                {
                    currentUser && currentUser.email!="admin1@covidvaccinehelp.com" ?
                    <Link to="/book" className="navlink">Book Vaccine</Link> :
                    <Link to="/admin" className="navlink">Admin</Link>
                }
                {
                    currentUser && currentUser.email!="admin1@covidvaccinehelp.com" ?
                    "" :
                    <Link to="/bookingdetails" className="navlink">Booking Details</Link>

                }
                <Link to="/centres" className="navlink">Centres</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Link to="/profile" className="fw-bold">{currentUser? currentUser.displayName : "log-in"}</Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            :
            ""
            }       
        </>
    )

}