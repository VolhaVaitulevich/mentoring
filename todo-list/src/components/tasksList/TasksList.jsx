import "./styles.css"

const TasksList = ({header, tasks}) => {
    return (
        <div>
            <h2>{header}</h2>
            <ul>
                {tasks.map((task) => (<li key={task.id}>{task.text}</li>))}
            </ul>
        </div>
    )
}

export default TasksList