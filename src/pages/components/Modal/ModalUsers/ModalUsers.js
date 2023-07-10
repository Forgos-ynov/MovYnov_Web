import React, { useState } from "react";
import "./modalUsers.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {disableUser} from "../../../../services/UserApi";

const ModalUsers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(props.user)
    const navigate = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const disableUserClick = async e => {
        e.preventDefault();
        await disableUser(user.id);
        navigate("/");
    }

    return (
        <div>
            <button onClick={openModal} className={"trash-icon"}>
                <FontAwesomeIcon icon={faTrashAlt} style={{height: "20px"}} />
            </button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
            <span className="closeModalCross" onClick={closeModal}>
              &times;
            </span>
                        <h2 className={"titleModal"}>Désactivation de l'utilisateur {user.pseudo}</h2>
                        <hr className={"separatorHightModal"}/>
                        <div className={"contentModal"}>Vous avez cliqué pour cliquer l'utilisateur sous le pseudonyme {user.pseudo}</div>
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
