import { useEffect, useState } from 'react';
import './index.css'
import * as Dialog from '@radix-ui/react-dialog';

//ICONS
import { MdDeleteForever, MdClose } from "react-icons/md";
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
        <Dialog.Root>
            <div className={`card__task  ${completed && 'completed'}`}>
                <div className="complet__wrapper">
                    <button id='btn-complet' onClick={handleComplet}>
                        {completed ? <FaRegCheckCircle /> : <FaRegCircle />}
                    </button>
                    <Dialog.DialogTrigger id='note-name'>
                        {note.name}
                    </Dialog.DialogTrigger>
                </div>
                <button onClick={() => onDelete(note.id)}><MdDeleteForever /></button>
            </div>

            <Dialog.Portal>
                <Dialog.Overlay className="overlay" />
                <Dialog.Content className='overlay-content'>
                    <Dialog.Close className='overlay-btnclose'>
                        <MdClose />
                    </Dialog.Close>
                    <Dialog.Title>
                        Tarefa
                    </Dialog.Title>
                    <Dialog.Description className='overlay-description'>
                        {note.name}
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>



    )
}