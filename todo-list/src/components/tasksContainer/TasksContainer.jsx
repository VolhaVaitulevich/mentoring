import TaskCard from "../taskCard/TaskCard"

const TasksContainer = ({ tasks, onDelete, onComplete}) => {
  return (
   <>
    {tasks?.map((task) => (
      <TaskCard key={task.id} task={task}
      onDelete={onDelete} onComplete={onComplete}/>
    ))}    
    </>
  )
}

export default TasksContainer