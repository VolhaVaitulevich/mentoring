import { useContext } from "react"
import TaskCard from "../taskCard/TaskCard"
import ThemeContext from "../../context/themeContext"
import "./styles.css"

const TasksContainer = ({ tasks, onDelete, onComplete}) => {
  const { isDarkTheme } = useContext(ThemeContext)
  
  if (!tasks.length) {
    return (
      <div className="tasks-cards-list">
        <h3 
          className="empty-cards-list" 
          data-theme={isDarkTheme}
        >No tasks to complete</h3>    
      </div>
    )
  } else 
  return (
    <div className="tasks-cards-list">
      {tasks?.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task}
          onDelete={onDelete} 
          onComplete={onComplete}
        />
      ))}    
    </div>
  )
}

export default TasksContainer