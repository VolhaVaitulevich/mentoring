import React from "react"
import { Link } from 'react-router-dom'

import { paths } from '../../paths'
import './styles.css'

const Header = () => {
    return (
        <header className="header-menu">
          <ul>
            <li> 
                <Link to={paths.home()}>Home</Link> 
            </li>
            <li> 
                <Link to={paths.tasksOverView()}>Tasks Overview</Link>
            </li>
          </ul>
        </header>
    )
}

export default Header