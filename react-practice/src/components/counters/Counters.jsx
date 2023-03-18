import React, { Fragment, useEffect, useState } from "react";
import { Counter } from "../counter/Counter";

export const Counters = (props) => {
    const [total, setTotal] = useState(0)
    const countersInitialData =
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
    useEffect (() => {
        setTotal(countersInitialData.reduce((acc, item) => acc + item.count,0))
    }, [])

    const handleDecreaseTotal = (step) => {
        setTotal(total - step);
    }

    const handleIncreaseTotal = (step) => {
        setTotal(total + step);
    }

    return (
    <Fragment>
        <p>Total count {total}</p>
        {
            countersInitialData.map((counter, index) => {
                return (
                    <Counter 
                        key={`${counter.id}-${index}`} 
                        {...counter}
                        handleDecreaseTotal={handleDecreaseTotal}
                        handleIncreaseTotal={handleIncreaseTotal}
                    />
                );
            })
        }
    </Fragment> )
}