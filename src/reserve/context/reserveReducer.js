import { pageCurrent } from '../../helpers/pageCurrent'
import { types } from '../types/types'

export const reserveReducer = (state = {}, action) => {
  switch (action.type) {
    case types.setProcess:
      return {
        ...state,
        process: action.payload
      }

    case types.userData:
      return {
        ...state,
        user: action.payload
      }

    case types.reserveData:
      return {
        ...state,
        reserveData: action.payload
      }

    case types.cheking:
      return {
        ...state,
        cheking: action.payload
      }

    case types.error:
      return {
        process: pageCurrent.SEARCH
      }

    case types.reset:
      return {
        process: pageCurrent.SEARCH
      }

    default:
      return state
  };
}
