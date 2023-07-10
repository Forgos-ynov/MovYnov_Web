import axios from "../config/axios";

export function retrieveAllForums () {
    return axios.get("/forums/posts")
        .then(response => response.data);
}

export function retrieveAllForumsBySearching (searching) {
    return axios.get("/forums/posts/search/" + searching)
        .then(response => response.data);
}

export function deleteForumPost (idForumPost) {
    return axios.delete("/forums/posts/" + idForumPost)
        .then(response => response);
}