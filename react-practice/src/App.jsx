import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {createBrowserHistory} from "history";
 
import "./styles.css";
import { routes } from "./routes";
import Loader from "./components/loader/Loader";


const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path}/>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;