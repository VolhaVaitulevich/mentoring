import React from "react";
import './styles.css';

export class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.handleDerease = this.handleDerease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);

        this.state = {
            count: this.props.count,
            step: this.props.step,
            min: this.props.min,
            max: this.props.max,
        }
    }

    handleDerease () {
        if (this.state.count - this.state.step >= this.state.min) 
        {
            this.setState(prevState => ({count: prevState.count - prevState.step}));
            this.props.handleDecreaseTotal(this.state.step);   
        }
    }

    handleIncrease () {
        if (this.state.count + this.state.step <= this.state.max) 
        {
            this.setState(prevState => ({count: prevState.count + prevState.step}));
            this.props.handleIncreaseTotal(this.state.step);
        }
    }

    render () {
        return (
            <div className="counter">
                <button onClick={this.handleDerease}>Decrease</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleIncrease}>Increase</button>
            </div>
        );
    }
}