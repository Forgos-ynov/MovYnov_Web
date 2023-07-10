import axios from "../config/axios";

export function retrieveAllForumsComment (idPost) {
    return axios.get("/forums/comments/" + idPost)
        .then(response => response.data);
}

export function changeSpoiler (idComment, spoilerStatus) {
    return axios.put("/forums/comments/" + idComment, {"spoilers": spoilerStatus})
        .then(response => response.data);
}

export function deleteCommentById (idComment) {
    return axios.delete("/forums/comments/" + idComment)
        .then(response => response.data);
}