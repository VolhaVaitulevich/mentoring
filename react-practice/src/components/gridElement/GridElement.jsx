import React from "react";
import Button from "../button/Button";
import Clock from "../clock/Clock";

class GridElement extends React.Component {
    render () {
        return (
            <div>
                <Button/>
                <Clock />
            </div>
        )
    }
}

export default GridElement;