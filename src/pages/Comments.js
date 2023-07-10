import {useParams} from "react-router-dom";
import Title from "./components/Title/Title";
import BackForward from "./components/BackForward/BackForward";
import React, {useEffect, useState} from "react";
import {retrieveAllForumsComment} from "../services/ForumsCommentApi";
import "../css/comments.css"
import CardForumPost from "./components/Card/CardForumPost";

const Comments = () => {
    const {idPost} = useParams()
    const [comments, setComments] = useState([])

    const fetchAllForumsComments = async () => {
        const data = await retrieveAllForumsComment(idPost);
        setComments(data);
    }

    useEffect(() => {
        fetchAllForumsComments();
    }, [])

    const _forum = () => {
        const forum = comments[0]
        if (!forum) {
            return null;
        }
        console.log(comments)
        return (
            <div className={"comment-postForum"}>
                <div className={"comment-postPseudoUser"}>Utilisateur: {forum.idUser.pseudo}</div>
                <div className={"comment-postTitle"}>{forum.idPost.title}</div>
            </div>
        )
    }

    const _comments = comments.map((comment) => (
        <div className={"comment-post"}>
            <div className={"comment-postPseudoUser"}>Utilisateur: {comment.idUser.pseudo}</div>
            <div className={"comment-postTitle"}>{comment.content}</div>
        </div>
    ))

    return (
        <div className={"body"}>
            <Title title={"Gestion de la discussion"}/>
            <BackForward path={"/forums"}/>
            <_forum />
            {_comments}
        </div>
    )
}

export default Comments