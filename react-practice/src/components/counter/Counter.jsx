import React, { useReducer } from "react";
import './styles.css';


const reducer = (state, action) => {
    switch (action.type) {
        case 'decrease': {
            return state - action.payload.step
        }
        case 'increase': {
            return state + action.payload.step
        }
        default: return state
    }
}

const Counter = ({ 
    count, 
    step, 
    min, 
    max, 
    handleDecreaseTotal, 
    handleIncreaseTotal
}) => {
    const [counterState, dispatch] = useReducer(reducer, count)
    
    const handleDerease = () => {
        if (counterState - step >= min) {
            dispatch({type: 'decrease', payload: step})
            handleDecreaseTotal(step);   
        }
    }

   const handleIncrease = () => {
        if (counterState + step <= max) {
            dispatch({type: 'increase', payload: step})
            handleIncreaseTotal(step)
        }
    }

    return (
        <div className="counter">
            <button onClick={handleDerease}>Decrease</button>
            <span>{counterState}</span>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default Counter