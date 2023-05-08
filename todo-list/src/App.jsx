import React, { Suspense, useCallback, useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { createBrowserHistory } from "history"
import { routes } from "./routes"
import ThemeContext from "./context/themeContext"
import TasksContext from "./context/tasksContext"
import "./App.css"

const history = createBrowserHistory()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [tasks, setTasks] = useState([])

  
  const fetchTasksData = useCallback(
    async() => {
      try {
        const res = await fetch("http://localhost:8080/tasks")
        const data = await res.json()
        data.sort((item1, item2) => item1.completed - item2.completed)
        setTasks(data)
      } catch(err) {
        alert(err)
      }
    }, []
  )

  useEffect(() => { 
    fetchTasksData()
  }, [fetchTasksData])

  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeContext.Provider 
          value={{
            isDarkTheme, 
            toggleTheme: () => setIsDarkTheme(!isDarkTheme)
          }}
        >
          <TasksContext.Provider
            value={{
              tasks, 
              setTasks
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route {...route} key={route.path}/>
              ))}
            </Routes>
          </TasksContext.Provider>
        </ThemeContext.Provider>  
      </Suspense>
    </Router>
  )
}

export default App