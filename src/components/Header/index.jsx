import { MdPerson } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import Modal from "../Modal";

import { useState } from "react";

import './index.css'
export default function Header({ name = 'Usuario', openModal }) {

    return (
        <header>
            <div className="user__icon">
                <MdPerson />
            </div>
            <div className="user__name">
                <span>Bem vindo!</span>
                <span>{name} <button onClick={openModal}><BsPencilSquare /></button></span>
            </div>

        </header>

    )
}