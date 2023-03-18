import React, { useState } from "react";
import './styles.css';

export const Counter = (props) => {
    const [count, setCount] = useState(props.count)
    const step = props.step
    const min = props.min
    const max = props.max

    const handleDerease = () => {
        if (count - step >= min) {
            setCount(count - step);
            props.handleDecreaseTotal(step);   
        }
    }

   const handleIncrease = () => {
        if (count + step <= max) {
            setCount(count + step);
            props.handleIncreaseTotal(step);
        }
    }

    return (
        <div className="counter">
            <button onClick={handleDerease}>Decrease</button>
            <span>{count}</span>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}