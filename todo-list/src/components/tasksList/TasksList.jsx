import { useContext } from "react"
import ThemeContext from "../../context/themeContext"
import "./styles.css"

const TasksList = ({listTytle, tasks}) => {
    const { isDarkTheme } = useContext(ThemeContext)

    return (
        <div className="tasks-list" data-theme={isDarkTheme}>
            <h2>{listTytle}</h2>
            <ul>
                {tasks.map((task) => (<li key={task.id}>{task.text}</li>))}
            </ul>
        </div>
    )
}

export default TasksList