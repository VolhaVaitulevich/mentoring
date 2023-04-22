import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { NAME_FORM_ACTION_TYPES } from '../../model/nameForm/actionTypes.js'
import GeneralTemplate from "../../components/generalTemplate/GeneralTemplate"

 
const HomePage = () => {
  const name = useSelector((state) => state.nameForm.name)
  const dispatch = useDispatch()
  return (
    <GeneralTemplate>
      <p>{name}</p>
      <input 
          value={name} 
          onChange={(e) => dispatch({type: NAME_FORM_ACTION_TYPES.UPDATE_NAME, payload: e.target.value})}
      />
      <button onClick={() => dispatch({type: NAME_FORM_ACTION_TYPES.RESET_NAME})}>Reset name</button>
    </GeneralTemplate>
  );
}

export default HomePage