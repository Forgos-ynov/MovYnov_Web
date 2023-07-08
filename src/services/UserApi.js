import axios from "../config/axios";

export function retrieveAllUsers () {
    return axios.get("/users")
        .then(response => response.data);
}

export function disableUser (idUser) {
    return axios.delete("/users/" + idUser)
        .then(response => response);
}