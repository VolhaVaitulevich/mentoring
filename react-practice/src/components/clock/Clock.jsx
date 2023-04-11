import React, { useEffect, useState } from "react";

const Clock = (props) => {
    
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const handleTick = () => setTime(new Date())
        setInterval(handleTick, 1000)
        return () => {
            clearInterval(handleTick) 
        }   
    }, [])

    return (
        <h2 className = 'clock'>{ time.toLocaleTimeString() }</h2>    
    )
}

export default Clock