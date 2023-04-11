import React, { useState } from "react";
import { Comments } from "../comments/Comments";
import { Form } from "../form/Form";
import "./styles.css"


const CommentsWrapper = () => {
    const [commentsData, setCommentsData] = useState([]);

    const getComments = async (postId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const comments = await response.json()
            setCommentsData(comments)
        }
        catch (err) {
            throw new Error(err.message)
        }
    }

    return (
        <div className='comments_wrapper'>
            <Form handleSubmitForm={getComments}/>
            <Comments comments={commentsData}/>
        </div>    
    )
}

export default CommentsWrapper