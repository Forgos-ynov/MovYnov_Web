import React, { useState } from "react";
import "./modalDeleteUserComments.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {disableUser} from "../../../../services/UserApi";

const ModalUsers = (props) => {
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
        await disableUser(comment.idUser.id);
        navigate("/forums");
    }

    return (
        <div>
            <button onClick={openModal} className={"exclamationTriangle-icon"}>
                <FontAwesomeIcon icon={faExclamationTriangle} style={{height: "20px"}} />
            </button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
            <span className="closeModalCross" onClick={closeModal}>
              &times;
            </span>
                        <h2 className={"titleModal"}>Désactiver l'utilisateur {comment.idUser.pseudo}</h2>
                        <hr className={"separatorHightModal"}/>
                        <div className={"contentModal"}>Vous avez cliqué pour désactiver l'utilisateur sous le pseudonyme {comment.idUser.pseudo}</div>
                        <hr className={"separatorDownModal"}/>
                        <div className={"buttonsModal"}>
                            <button onClick={closeModal} className={"closeModalButton"}>Retour</button>
                            <button onClick={disableUserClick} className={"closeDisableButton"}>Désactiver</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalUsers;
