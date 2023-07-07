import { Route } from 'react-router-dom';
import LoginPage from "../pages/Login";
import React from "react";

export default function PrivateRoute({ path, element }) {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Route path="/" element={<LoginPage />} />
    );
}
