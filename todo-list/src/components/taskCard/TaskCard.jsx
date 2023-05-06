import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import ThemeContext from "../../context/themeContext"
import "./styles.css"
 
const TaskCard = ({ task, onDelete, onComplete }) => {
  const completedTask = task.completed ? "completed" : "new"

  const { isDarkTheme } = useContext(ThemeContext)
  const dataTheme = isDarkTheme ? "dark" : "light"

  return (
    <div className={`task-card ${completedTask}`}>
      <label>
        <input 
          type="checkbox" 
          className="check-input" 
          disabled={task.completed}
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        >
        </input>
        <p className="check-box" data-theme={dataTheme}/>
      </label>
      <p className={`task ${completedTask}`}>{task.text} {" "}</p>
      <button 
        className={`delete-button ${completedTask}`}
        onClick={() => onDelete(task.id)}>
          <FontAwesomeIcon 
            className="fa-trash"
            data-theme={dataTheme}
            icon={faTrash}/>
      </button>
    </div>
  )
}

export default TaskCard
