import React, {useEffect, useState} from "react";
import Title from "./components/Title/Title";
import BackForward from "./components/BackForward/BackForward";
import SearchBar from "./components/SearchBar/SearchBar";
import {retrieveAllForums, retrieveAllForumsBySearching} from "../services/ForumsPostApi";
import {useSearchParams} from "react-router-dom";
import CardForumPost from "./components/Card/CardForumPost";
import "../css/forumPost.css"

const Forum = () => {
    const [searching, setSearching] = useState("")
    const [forums, setForums] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchAllForumsPost = async () => {
        if (searchParams.get("search") !== null) {
            if (searchParams.get("search") !== "") {
                const data = await retrieveAllForumsBySearching(searchParams.get("search"));
                setForums(data);
                setSearching(searchParams.get("search"))
            }
        } else {
            const data = await retrieveAllForums();
            setForums(data);
        }
    }

    useEffect(() => {
        fetchAllForumsPost();
    }, [searchParams])

    const _forums = forums.map((forum) => (
        <CardForumPost path={"forums/" + forum.id} titleOne={forum.idForumCategory.title}
                       titleTwo={"Créé par " + forum.idUser.pseudo} description={forum.title}/>
    ))

    return (
        <div className={"body"}>
            <Title title={"Gestion forum"}/>
            <BackForward path={"/"}/>
            <SearchBar searchNaming={"titre de forum"} searching={searching}/>
            <div className={"forumsPostsContainer"}>
                {_forums}
            </div>
        </div>
    )
}

export default Forum;