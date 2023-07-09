import "./searchBar.css"
import {useSearchParams} from "react-router-dom";
import {useState} from "react";

function SearchBar(props) {
    const [searching, setSearching] = useState(props.searching)
    const [searchParams, setSearchParams] = useSearchParams();

    const setQueryParam = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        setSearchParams(params.toString());
    };

    const handleClick = (e) => {
        e.preventDefault();
        setQueryParam('search', searching);
    };

    return (
        <form className={"containerSearchBar"} onSubmit={handleClick}>
            <input placeholder={"Recherche par " + props.searchNaming} className={"inputSearch"} type={"text"}
                   value={searching} onChange={e => setSearching(e.target.value)}/>
            <button className={"buttonSearchBar"} type={"submit"}>
                Rechercher
            </button>
        </form>
    );
}

export default SearchBar;