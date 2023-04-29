import React from "react"

const TaskCard = ({task, onDelete, onComplete}) => {
  return (
    <div className="task-card">
      <input type="checkbox" onClick={() => onComplete(task.id)}/>
      <h3>{task.text} {' '}</h3>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TaskCard
