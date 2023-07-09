import "./backForward.css"
import {useNavigate} from "react-router-dom";

function BackForward(props) {
    const navigate = useNavigate ();
    const backForward = function() {
        navigate(props.path)
    };

    return (
        <button onClick={backForward} className={"backForward"}>
            Retour
        </button>
    );
}

export default BackForward;