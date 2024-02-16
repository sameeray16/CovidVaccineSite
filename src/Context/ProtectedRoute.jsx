import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./UserContext";

export const ProtectedRoute = ({children}) => {

    let {currentUser} = useAuth();
    if(!currentUser){
        return <Navigate to="/"/>
    }
    return children
}