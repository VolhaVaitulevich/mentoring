import React, { Fragment } from "react";
import { Counters } from "./components/counters/Counters";
import GridElement from "./components/gridElement/GridElement";
import "./styles.css";

function App() {
  return (
    <Fragment>
      <div className="clocks_container"> 
      {
        new Array(3).fill(null).map((_, index) => <GridElement key={`column-${index}`} />)
      }
      </div>
      <hr />
      <div className="counters_container">
        <Counters />
      </div>
    </Fragment>
  );
}

export default App;
