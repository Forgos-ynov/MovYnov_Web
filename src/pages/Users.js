import React, {useEffect, useState} from "react";
import Title from "./components/Title/Title";
import "../css/users.css"
import BackForward from "./components/BackForward/BackForward";
import {retrieveAllUsers, retrieveAllUsersBySearching} from "../services/UserApi";
import ModalUsers from "./components/Modal/ModalUsers/ModalUsers";
import {useSearchParams} from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination/Pagination";

const Users = () => {
    const [users, setUsers] = useState([])
    const [usersPaginate, setUsersPaginate] = useState([])
    const [paginateDisplay, setPaginateDisplay] = useState(false)
    const [searching, setSearching] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const elementByPage = 2

    const fetchAllUsers = async () => {
        if (searchParams.get("search") !== null) {
            const data = await retrieveAllUsersBySearching(searchParams.get("search"));
            setUsers(data);
            setSearching(searchParams.get("search"))
        } else if (searchParams.get("paginate") !== null) {
            const paginateNumber = searchParams.get("paginate")
            const users = await retrieveAllUsers();
            const startIndex = (paginateNumber - 1) * elementByPage;
            const endIndex = paginateNumber * elementByPage;
            const data = users.slice(startIndex, endIndex)
            setUsersPaginate(data);
            setPaginateDisplay(true)
            setUsers(users);
        } else {
            const users = await retrieveAllUsers();
            setUsers(users);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])

    function generateUserRows(users) {
        return users.map((user) => (
            <tr key={user.id}>
                <td className="id">{user.id}</td>
                <td className="pseudo">{user.pseudo}</td>
                <td className="email">{user.email}</td>
                <td className="spoilers">{user.spoilers ? "Oui" : "Non"}</td>
                <td className="trash">
                    <ModalUsers user={user} />
                </td>
            </tr>
        ));
    }


    const _users = generateUserRows(users);
    const _usersPaginate = generateUserRows(usersPaginate);


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
                {paginateDisplay ? _usersPaginate : _users}
                </tbody>

            </table>
        )
    }

    return (
        <div className={"body"}>
            <Title title={"Gestion utilisateurs"}/>
            <BackForward path={"/"}/>
            <SearchBar searchNaming={"pseudo"} searching={searching}/>
            {_usersTable()}
            <Pagination elementNumber={users.length} elementByPage={elementByPage}/>
        </div>
    )
}

export default Users;