import { useState } from "react"

const TaskForm = ({onAdd}) => {
    const [text, setText] = useState('')
    
    const onSubmit = (e) => {
    e.preventDefault()
    
    if(!text) {
      //add instant validation here
        return
    }

    const id = String(Math.random())
    const complete = false
    onAdd({text, complete, id})
    setText('')
    }

      return (
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button className="btn btn-block">Save Task</button>
        </form>
      );
    }
    
    export default TaskForm