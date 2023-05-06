import { useReducer } from 'react'
import { ReserveContext } from './ReserveContext'
import { reserveReducer } from './reserveReducer'
import { types } from '../types/types'
import { pageCurrent } from '../../helpers/pageCurrent'

const init = () => {
  return {
    process: pageCurrent.SEARCH,
    cheking: false
  }
}

export const ReserveProvider = ({ children }) => {
  const [reserveState, dispatch] = useReducer(reserveReducer, {}, init)

  const resetContext = () => {
    const action = {
      type: types.reset
    }

    dispatch(action)
  }

  const setProcess = (process) => {
    const action = {
      type: types.setProcess,
      payload: process
    }
    dispatch(action)
  }

  const setUser = ({ name, lastName, email, phone }) => {
    const userData = {
      name,
      lastName,
      email,
      phone
    }

    const action = {
      type: types.userData,
      payload: userData
    }

    dispatch(action)
  }

  const setReserveData = (reserveData) => {
    const action = {
      type: types.reserveData,
      payload: reserveData
    }

    dispatch(action)
  }

  const setChangeCheking = (change) => {
    const action = {
      type: types.cheking,
      payload: change
    }

    dispatch(action)
  }

  return (
    <ReserveContext.Provider value={{
      reserveState,
      resetContext,
      setProcess,
      setUser,
      setReserveData,
      setChangeCheking
    }}
    >
      {children}
    </ReserveContext.Provider>
  )
}
