import { types } from '../types'

export const handleToggleSide = toggle => {
  return {
    type: types.TOGGLE_SIDE,
    toggle: toggle
  }
}