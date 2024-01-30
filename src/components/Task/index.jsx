import { useState } from 'react';
import './index.css'

//ICONS
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export default function Task({ note, onDelete }) {

    const [completed, setCompleted] = useState(false)

    return (
        <div className={`card__task  ${completed && 'completed'}`}>
            <div className="complet__wrapper">
                <button id='btn-complet' onClick={() => setCompleted(!completed)}>{completed ? <FaRegCheckCircle /> : <FaRegCircle />}</button>
                <span>{note.name}</span>
            </div>
            <button onClick={() => onDelete(note.id)}><MdDeleteForever /></button>
        </div>
    )
}