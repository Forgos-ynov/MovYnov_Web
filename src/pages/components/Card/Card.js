import {Container, Desciption, Separator, TitleOne, TitleTwo} from "./CardComponents/CardComponents";

function Card(props) {
    return (
        <Container path={props.path}>
            <TitleOne titleOne={props.titleOne}/>
            <Separator/>
            <TitleTwo titleTwo={props.titleTwo}/>
            <Desciption description={props.description}/>
        </Container>
    );
}

export default Card;