import './index.css'
import svg from '../../assets/undraw_searching_re_3ra9.svg'


export default function Notification() {
    return (
        <div className="notification">
            <img src={svg} alt="IMAGEM DE NOTA DE UMA MULHER PROCURANDO UMA TAREFA" />
            <h3>Sem <span>tarefas</span></h3>
            <p>Não encontramos nenhuma tarefa em sua lista. Você pode adicionar novas tarefas clicando no botão <strong>NOVA TAREFA</strong> Abaixo. Organize suas tarefas para manter tudo sob controle!.</p>
        </div>
    )
}