import React from "react";
import { Comment } from "../comment/Comment";
import './styles.css';

export const Comments = ({ comments }) => {
    return (
        <div className='comments_list'>
            {comments.map(({id, email, name, body}) => 
                <Comment 
                    key={id} 
                    email={email} 
                    title={name} 
                    text={body}
                />
            )}  
        </div>
    )
}