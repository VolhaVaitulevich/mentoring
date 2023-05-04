import TaskCard from "../taskCard/TaskCard"
import "./styles.css"

const TasksContainer = ({ tasks, onDelete, onComplete}) => {
  if (!tasks.length) {
    return (
      <div className="tasks-list">
        <h3>There are no tasks to complete</h3>    
      </div>
    )
  } else 
  return (
    <div className="tasks-list">
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