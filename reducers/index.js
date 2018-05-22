import { combineReducers } from 'redux'
import { types } from '../types'

const initialState = {
  toggle: false
}

const toggles = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDE:
      return {
        ...state,
        toggleSide: action.toggle
      }
    default: 
      return state
  }
}

export default combineReducers({
  toggles
})