import axios from "../config/axios";

const login = (email, password) => {
    return axios.post("/login", {"email": email, "password": password})
        .then(response => response.data.token);
}

export default {login}