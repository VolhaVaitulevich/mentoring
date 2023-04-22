import React from "react";
import { paths } from "./paths";

const HomePage = React.lazy(() => import('./pages/home/HomePage'))
const CommentsPage = React.lazy(() => import('./pages/comments/CommentsPage'))
const OthersPage = React.lazy(() => import('./pages/others/OthersPage'))

export const routes = [
    {
        element: <HomePage />,
        path: paths.home(),
    },
    {
        element: <CommentsPage />,
        path: paths.comments(),
    },
    {
        element: <OthersPage />,
        path: paths.others(),
    }
]