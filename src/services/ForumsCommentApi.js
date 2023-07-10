import axios from "../config/axios";

export function retrieveAllForumsComment (idPost) {
    return axios.get("/forums/comments/" + idPost)
        .then(response => response.data);
}