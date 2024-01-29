import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import './index.css'

export default function Modal({ children, closeModal }) {
    return (
        <div className="modal__wrapper">
            <div className="modal">
                <button>
                    <IoMdClose onClick={closeModal}/>
                </button>
                <form action="">
                    {children}    
                </form>
            </div>
        </div>
    )
}