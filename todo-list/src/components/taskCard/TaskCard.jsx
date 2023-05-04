import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"
 
const TaskCard = ({ task, onDelete, onComplete }) => {
  const completedTask = task.completed ? "completed" : "new"

  return (
    <div className={`task-card ${completedTask}`}>
      <input 
        type="checkbox" 
        disabled={task.completed}
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <span className={`task ${completedTask}`}>{task.text} {" "}</span>
      <button 
        className={`delete-button ${completedTask}`}
        onClick={() => onDelete(task.id)}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
    </div>
  )
}

export default TaskCard
