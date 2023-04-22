import { initialState } from './store.js'
import { POST_FORM_ACTION_TYPES } from './actionTypes.js'

export const postFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FORM_ACTION_TYPES.SET_POST_ID:
            return {...state, postId: action.payload}
        case POST_FORM_ACTION_TYPES.GET_POST_TITLE:
            return {...state, postTitle: action.payload.postTitle, postBody: action.payload.postBody}
        case POST_FORM_ACTION_TYPES.RESET_POST_ID: //add redux devtools
            return initialState
        default: 
            return state
    }
}

export const fetchPostByID = (postId) => {
    return async (dispatch) => {
        const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const post = await postData.json()
        dispatch({type: POST_FORM_ACTION_TYPES.GET_POST_TITLE, payload: {postTitle: post.title, postBody: post.body}})
    }
}