import "./cardComponents.css"

export function Container(props) {
    return (
        <a href={"/" + props.path} className={"card"}>
            {props.children}
        </a>
    );
}

export function TitleOne(props) {
    return (
        <h4 className={"titleOne"}>{props.titleOne}</h4>
    )
}

export function Separator() {
    return (
        <hr className={"hr"}/>
    )
}

export function TitleTwo(props) {
    return (
        <h5 className={"titleTwo"}>{props.titleTwo}</h5>
    )
}

export function Desciption(props) {
    return (
        <h6 className={"description"}>{props.description}</h6>
    )
}
