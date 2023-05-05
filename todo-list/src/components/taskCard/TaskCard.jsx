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
    <div className={`check task-card ${completedTask}`}>
      {/* <input 
        type="checkbox" 
        disabled={task.completed}
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <span className={`task ${completedTask}`}>{task.text} {" "}</span> */}
      <div>
        <input type="checkbox" className="check__input"></input>
        <p className="check__box" />
      </div>
      <span className={`task ${completedTask}`}>{task.text} {" "}</span>
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
