import './index.css'
import { FaPlus } from "react-icons/fa";


export default function ButtonNote({ ...rest }){
    return (
        <button {...rest} className='newNote'>
            <span>NOVA TAREFA</span> <FaPlus />
        </button>
    )
}