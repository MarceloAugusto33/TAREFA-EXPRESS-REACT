import './index.css'
import { MdDeleteForever } from "react-icons/md";

export default function Task({ note, onDelete }) {
    return (
        <div className="card__task">
            <span>{note.name}</span>
            <button onClick={() => onDelete(note.id) }><MdDeleteForever/></button>
        </div>
    )
}