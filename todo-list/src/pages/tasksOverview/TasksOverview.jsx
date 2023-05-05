import { useContext } from "react"
import Header from "../../components/header/Header"
import TasksList from "../../components/tasksList/TasksList"
import TasksContext from "../../context/tasksContext"
import ThemeContext from "../../context/themeContext"
import "./styles.css"

const TasksOverview = () => {
    const { isDarkTheme } = useContext(ThemeContext)
    const dataTheme = isDarkTheme ? "dark" : "light"

    const {tasks} = useContext(TasksContext)
    const newTasks = tasks.filter((task) => !task.completed)
    const completedTasks = tasks.filter((task) => task.completed)
    
    return (
        <>
            <Header />
            <div className="tasks-overview" data-theme={dataTheme}>
                <div>
                    <TasksList header={`New (${newTasks.length})`} tasks={newTasks} />
                    <TasksList header={`Completed (${completedTasks.length})`} tasks={completedTasks} />
                </div>
            </div>
        </>
    )
}

export default TasksOverview