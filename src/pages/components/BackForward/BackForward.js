import "./backForward.css"
import {useNavigate} from "react-router-dom";

function BackForward() {
    const navigate = useNavigate ();
    const backForward = function() {
        navigate(-1)
    };

    return (
        <button onClick={backForward} className={"backForward"}>
            Retour
        </button>
    );
}

export default BackForward;