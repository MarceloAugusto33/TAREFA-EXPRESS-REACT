import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Logo from './components/Logo'
import Main from './components/Main'
import ButtonNote from './components/ButtonNote'
import LinkPages from './components/LinkPages'
import Modal from './components/Modal'

export default function App() {
  const [modalOpenName, setModalOpenName] = useState(false)
  const [modalOpenNote, setModalOpenNote] = useState(false)

  const [username, setUsername] = useState(localStorage.getItem('TAREFA_EXPRESS:username'))
  const [newTask, setNewTask] = useState("")
  const tasks = JSON.parse(localStorage.getItem("TAREFA_EXPRESS:tasks"))

  useEffect(() => {
    if (!localStorage.getItem("TAREFA_EXPRESS:tasks")) {
      localStorage.setItem("TAREFA_EXPRESS:tasks", JSON.stringify([]))
    }
    if (!localStorage.getItem("TAREFA_EXPRESS:username")) {
      localStorage.setItem("TAREFA_EXPRESS:username", 'Usuario')
    }

  }, [])

  function handleUsername(e) {
    e.preventDefault()
    if (!username) return

    localStorage.setItem("TAREFA_EXPRESS:username", username)
    setModalOpenName(false)
  }

  function addTask(e) {
    e.preventDefault()
    if (!newTask) return

    tasks.push({ name: newTask, id: Date.now() })
    localStorage.setItem("TAREFA_EXPRESS:tasks", JSON.stringify(tasks))

    setModalOpenNote(false)
  }

  return (
    <div className="container">
      <Logo />
      <Header name={localStorage.getItem('TAREFA_EXPRESS:username')} openModal={() => setModalOpenName(!modalOpenName)} />
      <Main />
      <ButtonNote onClick={() => setModalOpenNote(!modalOpenName)} />
      <LinkPages />
      {
        modalOpenName &&
        <Modal closeModal={() => setModalOpenName(false)}>
          <label htmlFor="input-username">Nome:</label>
          <input type="text" id="input-username" onChange={e => setUsername(e.target.value)} />
          <button onClick={handleUsername}>Modificar nome</button>
        </Modal>
      }
      {
        modalOpenNote &&
        <Modal closeModal={() => setModalOpenNote(false)}>
          <label htmlFor="input-task">Tarefa:</label>
          <input type="text" id="input-task" onChange={e => setNewTask(e.target.value)} />
          <button onClick={addTask}>Adicionar Tarefa</button>
        </Modal>
      }
    </div>
  )
}