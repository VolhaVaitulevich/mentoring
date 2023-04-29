import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import Header from "../components/header/Header.jsx"
import TaskForm from "../components/taskForm/TaskForm.jsx"
import TasksContainer from "../components/tasksContainer/TasksContainer.jsx"

const HomePage = () => { 
    const [tasks, setTasks] = useState([])

    const { pathname } = useLocation()
    const page = pathname.replaceAll('/', '')

    useEffect(() => { 
        async function fetchTasksData() {
        const res = await fetch('http://localhost:8080/tasks')
        const data = await res.json()
        setTasks(data)
        }
        fetchTasksData()
    }, [])

    const deleteTask = async (id) => {
        await fetch(`http://localhost:8080/tasks/${id}`,
        {
        method: 'DELETE',
        })
        setTasks(() => tasks.filter((task) => task.id!==id))
    }

    const completeTask = async (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id);
        taskToUpdate.complete = true

        await fetch(`http://localhost:8080/tasks/${id}`,
        {
        method: 'PUT',
        body: JSON.stringify(taskToUpdate)
        })
        //update list of tasks
        
        console.log(id);
    }

    const addTasks = async (task) => {
        const response = await fetch('http://localhost:8080/tasks',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
        })
        const data = await response.json()
        setTasks([...tasks, task]);
    }
    return (
        <div className="container">
        <Header></Header>
        <TaskForm onAdd={addTasks}/>
        <TasksContainer 
            tasks={tasks} 
            onDelete={deleteTask} 
            onComplete={completeTask}
        />
    </div>
    )
}

export default HomePage