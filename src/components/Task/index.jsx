import { useEffect, useState } from 'react';
import './index.css'

//ICONS
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export default function Task({ note, onDelete }) {
    const [completed, setCompleted] = useState(note.complet)

    function handleComplet() {
        setCompleted(!completed)
    }

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("TAREFA_EXPRESS:tasks"))

        const filterTasks = tasks.filter(task => task.id !== note.id)
        const taskSelected = tasks.filter(task => task.id === note.id)

        taskSelected[0].complet = completed

        localStorage.setItem("TAREFA_EXPRESS:tasks", JSON.stringify([...filterTasks, ...taskSelected]))

        if (taskSelected[0].complet === true) {
            setCompleted(true)
        }

    }, [completed])

    return (
        <div className={`card__task  ${completed && 'completed'}`}>
            <div className="complet__wrapper">
                <button id='btn-complet' onClick={handleComplet}>
                    {completed ? <FaRegCheckCircle /> : <FaRegCircle />}
                </button>
                <span>{note.name}</span>
            </div>
            <button onClick={() => onDelete(note.id)}><MdDeleteForever /></button>
        </div>
    )
}