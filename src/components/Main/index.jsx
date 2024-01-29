import { useEffect, useState } from 'react'
import Task from '../Task/index'
import './index.css'
import svg from '../../assets/undraw_searching_re_3ra9.svg'


export default function Main() {
    const localTask = localStorage.getItem("TAREFA_EXPRESS:tasks")
    const [reTasks, useReTasks] = useState([])

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
    }

    return (
        <main>
            <h2>Tarefas</h2>
            <div className="container__tasks">
                {reTasks.length == 0 && <img src={svg} />}
                {
                    reTasks.map((task, index) => (
                        <Task note={task} key={index} onDelete={onDelete} />
                    ))
                }
            </div>
        </main>
    )
}