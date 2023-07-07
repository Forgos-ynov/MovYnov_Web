import React, {useState} from "react";
import "../css/login.css"
import AuthApi from "../services/AuthApi";
import { useNavigate  } from 'react-router-dom';
import Title from "./components/Title";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const token = await AuthApi.login(email, password);
            localStorage.setItem("token", token);
            navigate("/");
        } catch (e) {
            alert("Indentifiants invalides")
            console.log(e)
        }
    }

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