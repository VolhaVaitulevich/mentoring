import Header from "../../components/header/Header"
import TasksList from "../../components/tasksList/TasksList"
import { useContext } from "react"
import TasksContext from "../../context/tasksContext"
import ThemeContext from "../../context/themeContext"
import "./styles.css"

const TasksOverviewWrapper = () => {
    const { isDarkTheme } = useContext(ThemeContext)

    const {tasks} = useContext(TasksContext)
    const newTasks = tasks.filter((task) => !task.completed)
    const completedTasks = tasks.filter((task) => task.completed)
    
    return (
        <>
            <Header />
            <div className="tasks-overview" data-theme={isDarkTheme}>
                <div>
                    <TasksList listTytle={`New (${newTasks.length})`} tasks={newTasks} />
                    <TasksList listTytle={`Completed (${completedTasks.length})`} tasks={completedTasks} />
                </div>
            </div>
        </>
    )
}

export default TasksOverviewWrapper