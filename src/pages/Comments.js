import {useParams} from "react-router-dom";

const Comments = () => {
    const {idPost} = useParams()

    return (
        <>
            <h1>Description de tous les commentaires pour la discussion d'id: {idPost}</h1>
        </>
    )
}

export default Comments