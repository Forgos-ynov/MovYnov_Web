import React from "react";
import "../css/home.css"
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";

const Home = () => {

    return(
        <div className={"body"}>
            <Title title={"Panel administrateur"} />
            <div className={"cards"}>
                <Card titleOne={"Gestion utilisateurs"} titleTwo={"Lien gestion utilisateurs"} path={"users"}
                      description={"Lien pour accéder à la gestion des différents utilisateurs de l’application."} />
                <Card titleOne={"Gestion forum"} titleTwo={"Lien gestion forum"} path={"forums"}
                      description={"Lien pour accéder à la gestion du forum de l’application."} />
            </div>
        </div>
    )
}

export default Home;