import "./card.css"

function Card(props) {
    return (
        <a href={"/" + props.path} className={"card"}>
            <h4 className={"titleOne"}>{props.titleOne}</h4>
            <hr className={"hr"}/>
            <h5 className={"titleTwo"}>{props.titleTwo}</h5>
            <h6 className={"description"}>{props.description}</h6>
        </a>
    );
}

export default Card;