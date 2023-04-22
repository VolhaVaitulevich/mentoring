import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { routes } from "./routes";
import Loader from "./components/loader/Loader";
import ThemeContext from "./context/themeContext";
import OrientationContext from "./context/orientationContext";

import "./styles.css";

const history = createBrowserHistory();

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [isHorizontal, setIsHorizontal] = useState(true)

  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <ThemeContext.Provider 
          value={{
            isDarkTheme, 
            toggleTheme: () => setIsDarkTheme(prevState => !prevState)
            }}
        >
          <OrientationContext.Provider 
            value={{
              isHorizontal, 
              toggleOrientation: () => setIsHorizontal(prevState => !prevState)
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route {...route} key={route.path}/>
              ))}
            </Routes>
          </OrientationContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;