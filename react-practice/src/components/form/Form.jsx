import React, { useState } from "react";
import './styles.css';

export const Form = ({ handleSubmitForm }) => {
    const [commentId, setCommentId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (commentId.trim()) {
            handleSubmitForm(commentId)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='comments_form'>
            <input value={commentId} onChange={(e) => setCommentId(e.target.value)}></input>
            <button type='submit'>Find comments</button>
        </form>
    )
}