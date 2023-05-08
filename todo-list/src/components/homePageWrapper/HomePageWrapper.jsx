import { useCallback, useContext } from "react"
import Header from "../../components/header/Header.jsx"
import TaskForm from "../../components/taskForm/TaskForm.jsx"
import TasksContainer from "../../components/tasksContainer/TasksContainer.jsx"
import ThemeContext from "../../context/themeContext.js"
import './styles.css'
import TasksContext from "../../context/tasksContext.js"

const HomePageWrapper = () => {
    const { tasks, setTasks } = useContext(TasksContext)
    const { isDarkTheme } = useContext(ThemeContext)

    const handleAdd = useCallback(async (task) => {
        try {
            const result = await fetch("http://localhost:8080/tasks",
            {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            })
            const data = await result.json()
            setTasks([data, ...tasks])
        } catch(err) {
            alert(err)
        }
    }, [tasks])

    const handleComplete = useCallback(async (id) => {
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
            const newTasksList = tasks.map((task) => task.id===data.id ? {...task, completed: true}: task)
            newTasksList.sort((item1, item2) => item1.completed - item2.completed)
            setTasks(newTasksList)
        } catch(err) {
            alert(err)
        }
    }, [tasks])

    const handleDelete = useCallback(async (id) => {
        try {
            await fetch(`http://localhost:8080/tasks/${id}`,
            {
                method: "DELETE"
            })
            setTasks(() => tasks.filter((task) => task.id!==id))
        } catch(err) {
            alert(err)
        }
    }, [tasks])

    return (
        <>
            <Header />
            <div className="container" data-theme={isDarkTheme}>
                <TaskForm onAdd={handleAdd}/>
                <TasksContainer 
                    tasks={tasks} 
                    onDelete={handleDelete} 
                    onComplete={handleComplete}
                />
            </div>
        </>
    )
}

export default HomePageWrapper