import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { POST_FORM_ACTION_TYPES } from '../../model/postForm/actionTypes.js'
import { fetchPostByID } from "../../model/postForm/reducer.js"
import GeneralTemplate from "../../components/generalTemplate/GeneralTemplate"

import './styles.css'
import { Button } from "antd"
 
const OthersPage = () => {
  const postId = useSelector((state) => state.postForm.postId)
  const postTitle = useSelector((state) => state.postForm.postTitle)
  const postBody = useSelector((state) => state.postForm.postBody)
  const dispatch = useDispatch()

  return (
    <GeneralTemplate>
      <div className='post-form'>
        <div className='post-form-inputs'>
          <input 
            value={postId} 
            onChange={(e) => {dispatch({type: POST_FORM_ACTION_TYPES.SET_POST_ID, payload: e.target.value})}}
          />
          <Button 
            type="primary" 
            onClick={() => dispatch(fetchPostByID(postId))}
          >
            Get post</Button>
          <Button 
            type="primary" 
            onClick={() => dispatch({type: POST_FORM_ACTION_TYPES.RESET_POST_ID})}
          >
            Reset</Button>
        </div>
        <div>
          <h1>{postTitle}</h1>
          <p>{postBody}</p>
        </div>
      </div>
    </GeneralTemplate>
  );
}

export default OthersPage;