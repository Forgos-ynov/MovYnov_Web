import {
    Container,
    Desciption,
    ModalDeleteForumPost,
    Separator,
    TitleOne,
    TitleTwo
} from "./CardComponents/CardComponents";

function CardForumPost(props) {
    return (
        <Container path={props.path}>
            <TitleOne titleOne={props.titleOne}/>
            <Separator/>
            <TitleTwo titleTwo={props.titleTwo}/>
            <Desciption description={props.description}/>
        </Container>
    );
}

export default CardForumPost;