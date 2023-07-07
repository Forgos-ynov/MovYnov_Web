import React from "react";
import "../css/home.css"
import "./components/Card"
import Title from "./components/Title";

const Home = () => {

    return(
        <div className={"body"}>
            <Title title={"Panel administrateur"} />
        </div>
    )
}

export default Home;