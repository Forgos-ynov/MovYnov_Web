import {useParams} from "react-router-dom";
import Title from "./components/Title/Title";
import BackForward from "./components/BackForward/BackForward";
import React, {useEffect, useState} from "react";
import {retrieveAllForumsComment} from "../services/ForumsCommentApi";
import "../css/comments.css"
import ModalSpoilersComments from "./components/Modal/ModalSpoilersComments/ModalSpoilersComments";
import ModalDeleteUserComments from "./components/Modal/ModalDeleteUserComments/ModalDeleteUserComments";
import ModalDeleteComment from "./components/Modal/ModalDeleteComment/ModalDeleteComment";
import ModalSpoilersPost from "./components/Modal/ModalSpoilersPost/ModalSpoilersPost";
import ModalDeletePost from "./components/Modal/ModalDeletePost/ModalDeletePost";

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
            return (
                <div className={"container-notComments"}>
                    <h2 className={"message-notComments"}>Il n'y a aucun commentaires pour ce post.</h2>
                </div>
            )
        }
        return (
            <div className={"comment-postForum"}>
                <div className={"comment-postPseudoUser"}>Utilisateur: {forum.idUser.pseudo}</div>
                <div className={"comment-postTitle"}>{forum.idPost.title}</div>
                <ModalDeleteUserComments comment={forum}/>
                <ModalSpoilersPost comment={forum} />
                <ModalDeletePost comment={forum}/>
            </div>
        )
    }

    const _comments = comments.map((comment) => (
        <div className={"comment-post"}>
            <div className={"comment-postPseudoUser"}>Utilisateur: {comment.idUser.pseudo}</div>
            <div className={"comment-postTitle"}>{comment.content}</div>
            <ModalSpoilersComments comment={comment}/>
            <ModalDeleteUserComments comment={comment}/>
            <ModalDeleteComment comment={comment}/>
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