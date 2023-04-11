import React from "react";
import { paths } from "./paths";

const HomePage = React.lazy(() => import('./pages/home/HomePage'))
const CommentsPage = React.lazy(() => import('./pages/comments/CommentsPage'))
const OtherPage = React.lazy(() => import('./pages/other/OtherPage'))

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
        element: <OtherPage />,
        path: paths.others(),
    }
]