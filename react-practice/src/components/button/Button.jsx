import React from "react";
import './styles.css';

export const Button = ({ title }) => {

    const handleClick = () => {
        console.log('Button was clicked');
    }

    return (
        <button 
        className="button"
        onClick={handleClick}>{title}</button>
    );
}
