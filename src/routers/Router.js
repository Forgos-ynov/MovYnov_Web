import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import LoginPage from '../pages/Login';
import React from 'react';
import Users from "../pages/Users";
import Forum from "../pages/Forum";
import Comments from "../pages/Comments";
import PrivateRoute from "./PrivateRoute";

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} index/>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/forums" element={<Forum />} />
            <Route path="/forums/:idPost" element={<Comments />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
