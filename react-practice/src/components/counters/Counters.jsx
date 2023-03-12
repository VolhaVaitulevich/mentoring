import React, { Fragment } from "react";
import { Counter } from "../counter/Counter";

export class Counters extends React.Component {

    constructor (props) {
        super (props);
        this.handleDecreaseTotal = this.handleDecreaseTotal.bind(this);
        this.handleIncreaseTotal = this.handleIncreaseTotal.bind(this);

        this.state = {
            total: 0,
            countersInitialData: 
            [
                {
                    id: 1,
                    count: 2, 
                    step: 20,
                    min: -25,
                    max: 170,
                },
                {
                    id: 2,
                    count: 4, 
                    step: 3,
                    min: -8,
                    max: 11,
                },
                {
                    id: 3,
                    count: 7, 
                    step: 7,
                    min: 0,
                    max: 50,
                }
            ]
        }
    }

    componentDidMount () {
        this.setState(prevState => ({total: prevState.countersInitialData.reduce((acc, item) => acc + item.count,0)}))
    }

    handleDecreaseTotal (decreaseStep) {
        this.setState(prevState => ({total: prevState.total - decreaseStep}));
    }

    handleIncreaseTotal (increaseStep) {
        this.setState(prevState => ({total: prevState.total + increaseStep}));
    }

    render () {
        return (
        <Fragment>
            <p>Total count {this.state.total}</p>
            {
                this.state.countersInitialData.map((counter, index) => {
                    return (
                        <Counter 
                            key = {`${counter.id}-${index}`} 
                            count = {counter.count} 
                            step = {counter.step}
                            min = {counter.min}
                            max = {counter.max}
                            handleDecreaseTotal = {this.handleDecreaseTotal}
                            handleIncreaseTotal = {this.handleIncreaseTotal}/>
                    );
                })
            }
        </Fragment>
        );
    }
}