import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import { routes } from "./routes"

import './App.css'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path}/>
          ))}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
