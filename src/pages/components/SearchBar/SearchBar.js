import "./searchBar.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function SearchBar(props) {
    const navigate = useNavigate()
    const [searching, setSearching] = useState("")

    const fetchSearching = async () => {
            await setSearching(props.searching)
    }

    useEffect(() => {
        fetchSearching();
    }, [])

    const addQuery = e => {
        e.preventDefault()
        navigate("?search=" + searching)
    }

    return (
        <form className={"containerSearchBar"} onSubmit={addQuery}>
            <input placeholder={"Recherche par " + props.searchNaming} className={"inputSearch"} type={"text"}
                   value={searching} onChange={e => setSearching(e.target.value)}/>
            <button className={"buttonSearchBar"} type={"submit"}>
                Rechercher
            </button>
        </form>
    );
}

export default SearchBar;