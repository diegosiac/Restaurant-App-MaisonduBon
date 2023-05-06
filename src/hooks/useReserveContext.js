import { useContext } from 'react'
import { ReserveContext } from '../reserve/context/ReserveContext'

export const useReserveContext = () => {
  const {
    reserveState,
    resetContext,
    setProcess,
    setUser,
    setReserveData,
    setChangeCheking
  } = useContext(ReserveContext)

  return {
    ...reserveState,
    resetContext,
    setProcess,
    setUser,
    setReserveData,
    setChangeCheking
  }
}
