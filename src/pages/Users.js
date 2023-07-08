import React, {useEffect, useState} from "react";
import Title from "./components/Title/Title";
import "../css/users.css"
import BackForward from "./components/BackForward/BackForward";
import {retrieveAllUsers, retrieveAllUsersBySearching} from "../services/UserApi";
import ModalUsers from "./components/ModalUsers/ModalUsers";
import {useSearchParams} from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

const Users = () => {
    const [users, setUsers] = useState([])
    const [searching, setSearching] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchAllUsers = async () => {
        if (searchParams.get("search") !== null) {
            const data = await retrieveAllUsersBySearching(searchParams.get("search"));
            setUsers(data);
            setSearching(searchParams.get("search"))
        } else {
            const data = await retrieveAllUsers();
            setUsers(data);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])

    const _users = users.map((user) => {
        return (
            <tr key={user.id}>
                <td className={"id"}>{user.id}</td>
                <td className={"pseudo"}>{user.pseudo}</td>
                <td className={"email"}>{user.email}</td>
                <td className="spoilers">{user.spoilers ? "Oui" : "Non"}</td>
                <td className={"trash"}><ModalUsers user={user}/></td>
            </tr>
        )
    })

    const _usersTable = () => {
        return (
            <table>
                <thead>
                <tr>
                    <th className={"id"}>#</th>
                    <th className={"pseudo"}>Pseudo</th>
                    <th className={"email"}>Email</th>
                    <th className={"spoilers"}>Spoiler</th>
                    <th className={"trash"}></th>
                </tr>
                </thead>
                <tbody>
                {_users}
                </tbody>
            </table>
        )
    }

    return (
        <div className={"body"}>
            <Title title={"Gestion utilisateurs"}/>
            <BackForward/>
            <SearchBar searchNaming={"pseudo"} searching={searching}/>
            {_usersTable()}
        </div>
    )
}

export default Users;