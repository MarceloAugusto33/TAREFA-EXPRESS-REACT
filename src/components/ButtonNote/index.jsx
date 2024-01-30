import { FaPlus } from "react-icons/fa";
import './index.css'


export default function ButtonNote({ ...rest }) {
    return (
        <button {...rest} className='newNote'>
            <span>NOVA TAREFA</span> <FaPlus />
        </button>
    )
}