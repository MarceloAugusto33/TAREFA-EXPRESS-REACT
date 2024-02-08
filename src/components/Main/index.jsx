import { useEffect, useState } from 'react'
import './index.css'

import Task from '../Task/index'
import Notification from '../Notification'
import { toast } from 'sonner'

export default function Main() {
    const localTask = localStorage.getItem("TAREFA_EXPRESS:tasks")
    const [reTasks, useReTasks] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        let tasks = JSON.parse(localStorage.getItem("TAREFA_EXPRESS:tasks"))

        if (tasks) {
            useReTasks(tasks)
        }

    }, [localTask])

    function onDelete(id) {
        const tasksFilter = reTasks.filter(task => task.id != id)
        localStorage.setItem("TAREFA_EXPRESS:tasks", JSON.stringify(tasksFilter))
        useReTasks(tasksFilter)
        toast.error("Tarefa deletada", { duration: 2000 })
    }

    const searchedTags = search !== '' ? reTasks.filter(task => task.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : reTasks

    return (
        <main>
            {
                reTasks.length > 0 && (
                    <input
                        type="text"
                        placeholder='Buscar tarefa'
                        onChange={e => setSearch(e.target.value)}
                    />
                )
            }
            <h2>Tarefas</h2>
            <div className="container__tasks">
                {reTasks.length == 0 && <Notification />}
                {
                    search && searchedTags.length === 0 && <p>Tarefa não encontrada</p>
                }
                {
                    searchedTags.map((task) => (
                        <Task
                            note={task}
                            key={task.id}
                            onDelete={onDelete}
                        />
                    ))
                }
            </div>
        </main>
    )
}