import TaskCard from "../taskCard/TaskCard"
import "./styles.css"

const TasksContainer = ({ tasks, onDelete, onComplete}) => {
  if (!tasks.length) {
    return (
      <div className="tasks-cards-list">
        <h3>No tasks to complete</h3>    
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