import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { paths } from "../../paths"
import ThemeContext from "../../context/themeContext"
import "./styles.css"

const Header = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="header" data-theme={isDarkTheme}>
          <div className="header-content" data-theme={isDarkTheme}>
            <ul>
              <li> 
                  <NavLink 
                    to={paths.home()} 
                    className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}
                  >Home</NavLink> 
              </li>
              <li> 
                  <NavLink 
                    to={paths.tasksOverView()} 
                    className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}
                  >Overview</NavLink>
              </li>
            </ul>
            <div>
              <input 
                onChange={toggleTheme}
                type="checkbox" 
                className="checkbox" 
                id="checkbox"
              />
              <label 
                htmlFor="checkbox" 
                className="checkbox-label" 
                data-theme={isDarkTheme}
              >
                <FontAwesomeIcon icon={faMoon} className="fa-moon" />
                <FontAwesomeIcon icon={faSun} className="fa-sun" />
                <span 
                  className="ball"
                  data-theme={isDarkTheme}
                />
              </label>
            </div>
          </div>
        </header>
    )
}

export default Header