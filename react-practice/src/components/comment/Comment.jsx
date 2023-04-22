import React from "react";
import './styles.css';

export const Comment = ({ email, title, text }) => {
    return (
        <div>
            <p className='email'>{email}</p>
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
            <hr></hr>
        </div>
    )
}