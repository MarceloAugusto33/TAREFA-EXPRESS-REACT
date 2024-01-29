import { useEffect, useState } from 'react'
import './App.css'

import Logo from './components/Logo'
import Main from './components/Main'
import Modal from './components/Modal'
import Header from './components/Header'
import LinkPages from './components/LinkPages'
import ButtonNote from './components/ButtonNote'

export default function App() {
  const [modalOpenName, setModalOpenName] = useState(false)
  const [modalOpenNote, setModalOpenNote] = useState(false)

  const [username, setUsername] = useState('')
  const [newTask, setNewTask] = useState("")
  const tasks = JSON.parse(localStorage.getItem("TAREFA_EXPRESS:tasks"))

  const [inputNameNull, setInputNameNull] = useState(false)
  const [inputTaskNull, setInputTaskNull] = useState(false)


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
    if (!username) return setInputNameNull(true)

    localStorage.setItem("TAREFA_EXPRESS:username", username)
    setUsername("")
    setModalOpenName(false)
    setInputNameNull(false)
  }


  function addTask(e) {
    e.preventDefault()
    if (!newTask) return setInputTaskNull(true)

    tasks.push({ name: newTask, id: Date.now() })
    localStorage.setItem("TAREFA_EXPRESS:tasks", JSON.stringify(tasks))
    setNewTask("")
    setModalOpenNote(false)
    setInputTaskNull(false)
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
          <input type="text" id="input-username" onChange={e => setUsername(e.target.value)} autoComplete='off'/>
          {inputNameNull && <p>Nome não pode ser vazio</p>}
          <button onClick={handleUsername}>Modificar nome</button>
        </Modal>
      }
      {
        modalOpenNote &&
        <Modal closeModal={() => setModalOpenNote(false)}>
          <label htmlFor="input-task">Tarefa:</label>
          <input type="text" id="input-task" onChange={e => setNewTask(e.target.value)} autoComplete='off'/>
          {inputTaskNull && <p>Tarefa não pode ser vazia</p>}
          <button onClick={addTask}>Adicionar Tarefa</button>
        </Modal>
      }
    </div>
  )
}