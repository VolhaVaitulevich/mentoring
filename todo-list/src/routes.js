import React from "react"
import { paths } from "./paths"

const HomePage = React.lazy(() => import('./pages/HomePage'))
const TasksOverview = React.lazy(() => import('./pages/TasksOverview'))

export const routes = [
    {
        element: <HomePage />,
        path: paths.home(),
    },
    {
        element: <TasksOverview />,
        path: paths.tasksOverView(),
    }
]