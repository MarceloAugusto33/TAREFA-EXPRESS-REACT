import { CiViewList } from "react-icons/ci";
import './index.css'

export default function LinkPages() {
    return (
        <div className='Link'>
            <h2>Navegação</h2>
            <nav>
                <ul>
                    <li>
                        <a href="#"><CiViewList />Tarefas</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}