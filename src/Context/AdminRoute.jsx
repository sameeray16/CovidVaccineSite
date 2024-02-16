import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./UserContext";

export const AdminRoute = ({children}) => {

    let {currentUser} = useAuth();
    if(!currentUser){
        return <Navigate to="/"/>
    } else if(currentUser.email==="admin1@covidvaccinehelp.com"){
    return children
    } else if(currentUser.email!="admin1@covidvaccinehelp.com"){	
        return(
            <>
                <Navigate to="*"/>
            </>
        )
    }
}