import axios from "../config/axios";

export function login(email, password) {
    return axios.post("/login", {"email": email, "password": password})
        .then(response => response.data.token);
}