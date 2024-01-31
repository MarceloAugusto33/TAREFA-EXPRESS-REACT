import { MdPerson } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

import './index.css'
export default function Header({ name, openModal }) {
    return (
        <header>
            <div className="user__wrapper">
                <div className="user__icon">
                    <MdPerson />
                </div>
                <div className="user__name">
                    <span>Bem vindo!</span>
                    <span>{name ? name : "Usuario"} <button onClick={openModal}><BsPencilSquare /></button></span>
                </div>
            </div>

        </header>

    )
}