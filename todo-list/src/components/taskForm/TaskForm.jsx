import { useContext, useState } from "react"
import ThemeContext from "../../context/themeContext.js"
import "./styles.css"

const TaskForm = ({onAdd}) => {
  const [text, setText] = useState("")
  const { isDarkTheme } = useContext(ThemeContext)
  const dataTheme = isDarkTheme ? "dark" : "light"

  const onSubmit = (e) => {
    e.preventDefault()  
    if(!text) {
      alert("Please add your task")
      return
    }
    const id = String(Math.random())
    const completed = false
    onAdd({text, completed, id})
    setText("")
  }

  return (
    <form className="task-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-theme={dataTheme}>Add</button>
    </form>
  )
}
    
export default TaskForm