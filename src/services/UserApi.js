import axios from "../config/axios";

const retrieveAllUsers = () => {
    return axios.get("/users")
        .then(response => response.data);
}

export default {retrieveAllUsers}