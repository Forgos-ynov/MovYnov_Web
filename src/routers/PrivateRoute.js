import {Navigate, Outlet} from 'react-router-dom';
import React from "react";
import checkTokenIsAdmin from "../services/Auth";

export default function PrivateRoute() {
    const isAuthenticated = checkTokenIsAdmin()

    return (
        isAuthenticated ? <Outlet/> : <Navigate to={"/login"} />
    )
}
