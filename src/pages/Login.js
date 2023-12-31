import React, {useEffect, useState} from "react";
import "../css/login.css"
import {login} from "../services/AuthApi";
import {useNavigate} from 'react-router-dom';
import Title from "./components/Title/Title";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tokenAdd, setTokenAdd] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const token = await login(email, password);
            localStorage.setItem("token", token);
            setTokenAdd(true)
        } catch (e) {
            alert("Indentifiants invalides")
            console.log(e)
        }
    }

    const GoToHome = () => {
        let hasRefresh = false
        navigate("/");
        if (!hasRefresh) {
            window.location.reload()
            hasRefresh = true
        }
    }

    useEffect(() => {
        if (tokenAdd) {
            GoToHome()
        }
    }, [tokenAdd])

    return (
        <div className={"body"}>
            <Title title={"Connexion"}/>
            <form onSubmit={handleSubmit} className={"form"}>
                <div className="input-container">
                    <label className="label">Mail :</label>
                    <input type="email" className="input" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label className="label">Mot de passe :</label>
                    <input type="password" className="input" value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className={"button"}>Se connecter</button>
            </form>
        </div>
    )
}

export default Login;