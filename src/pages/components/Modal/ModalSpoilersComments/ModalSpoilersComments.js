import React, { useState } from "react";
import "./modalSpoilersComments.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {changeSpoiler} from "../../../../services/ForumsCommentApi";

const ModalUsers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(props.comment)
    const navigate = useNavigate();
    let message = ""

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const disableUserClick = async e => {
        e.preventDefault();
        await changeSpoiler(comment.id, !comment.spoilers);
        navigate("/forums");
    }

    if (props.comment.spoilers) {
        message = "Enlever"
    } else {
        message = "Mettre"
    }

    return (
        <div className={"icon-content"}>
            <button onClick={openModal} className={"eye-icon"}>
                <FontAwesomeIcon icon={props.comment.spoilers ? faEye : faEyeSlash} style={{height: "20px"}} />
            </button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
            <span className="closeModalCross" onClick={closeModal}>
              &times;
            </span>
                        <h2 className={"titleModal"}>{message} le spoiler au commentaire</h2>
                        <hr className={"separatorHightModal"}/>
                        <div className={"contentModal"}>Vous avez cliqué pour {message.toLowerCase()} le spoiler au commentaire de {comment.idUser.pseudo}</div>
                        <hr className={"separatorDownModal"}/>
                        <div className={"buttonsModal"}>
                            <button onClick={closeModal} className={"closeModalButton"}>Retour</button>
                            <button onClick={disableUserClick} className={"closeDisableButton"}>{message}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalUsers;
