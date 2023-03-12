import React from "react";
import './Button.css';

class Button extends React.Component {
    constructor (props) {
        super (props);
        this.state = {isClicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({isClicked: !this.state.isClicked})
    }

    render () {
        return (
            <button 
            className="button"
            data-clicked={this.state.isClicked}
            onClick={this.handleClick}>Click</button>
        );
    }
}

export default Button;