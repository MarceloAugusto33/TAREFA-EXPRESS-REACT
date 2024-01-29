import './index.css'
import { CiViewList } from "react-icons/ci";

export default function Tags() {
    return (
        <div className='Link'>
            <h2>Navegação</h2>

            <ul>
                <li>
                    <a href="#"><CiViewList />Home</a>
                </li>
                <li>
                    <a href="#" className='open'><CiViewList />Tarefas</a>
                </li>
            </ul>
        </div>
    )
}