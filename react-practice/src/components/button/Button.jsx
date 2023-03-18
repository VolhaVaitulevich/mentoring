import React, { useState } from "react";
import './Button.css';

export const Button = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <button 
        className="button"
        data-clicked={isClicked}
        onClick={handleClick}>Click</button>
    );
}
