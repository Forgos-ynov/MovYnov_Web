import React, { useState } from "react";
import "./modalDeletePost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {deletePostById} from "../../../../services/ForumsPostApi";

const ModalDeletePost = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(props.comment)
    const navigate = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const disableUserClick = async e => {
        e.preventDefault();
        await deletePostById(comment.id);
        navigate("/forums");
    }

    return (
        <div>
            <button onClick={openModal} className={"trashComment-icon"}>
                <FontAwesomeIcon icon={faTrashAlt} style={{height: "20px"}} />
            </button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
            <span className="closeModalCross" onClick={closeModal}>
              &times;
            </span>
                        <h2 className={"titleModal"}>Supprimer le commentaire</h2>
                        <hr className={"separatorHightModal"}/>
                        <div className={"contentModal"}>Vous avez cliqué pour supprimer le commentaire du post de {comment.idUser.pseudo}</div>
                        <hr className={"separatorDownModal"}/>
                        <div className={"buttonsModal"}>
                            <button onClick={closeModal} className={"closeModalButton"}>Retour</button>
                            <button onClick={disableUserClick} className={"closeDisableButton"}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalDeletePost;
