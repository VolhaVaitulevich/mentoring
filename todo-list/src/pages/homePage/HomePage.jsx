import { useContext } from "react"
import Header from "../../components/header/Header.jsx"
import TaskForm from "../../components/taskForm/TaskForm.jsx"
import TasksContainer from "../../components/tasksContainer/TasksContainer.jsx"
import ThemeContext from "../../context/themeContext.js"
import TasksContext from "../../context/tasksContext.js"
import "./styles.css"

const HomePage = () => {
    const {tasks, setTasks} = useContext(TasksContext)
    const { isDarkTheme } = useContext(ThemeContext)

    const addTasks = async (task) => {
        try {
            await fetch("http://localhost:8080/tasks",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
            })
            setTasks([task, ...tasks])
        } catch(err) {
            alert(err)
        }
    }

    const completeTask = async (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id)
        taskToUpdate.completed = true
        try {
            const result = await fetch(`http://localhost:8080/tasks/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(taskToUpdate),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await result.json()
            console.log(data)
            const newTasksList = tasks.map((task) => task.id===id ? {...task, completed: true}: task)
            newTasksList.sort((item1, item2) => item1.completed - item2.completed)
            setTasks(newTasksList)
        } catch(err) {
            alert(err)
        }
    }

    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:8080/tasks/${id}`,
            {method: "DELETE"})
            setTasks(() => tasks.filter((task) => task.id!==id))
        } catch(err) {
            alert(err)
        }
    }

    return (
        <>
            <Header />
            <div className="container" data-theme={isDarkTheme}>
                <TaskForm onAdd={addTasks}/>
                <TasksContainer 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onComplete={completeTask}
                />
            </div>
        </>
    )
}

export default HomePage