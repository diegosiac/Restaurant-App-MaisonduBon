import { useEffect } from 'react'
import { useReserveContext } from '../../hooks'
import { Navigate, Route, Routes } from 'react-router-dom'
import { FormSearch, ReserveComplete, ReserveData } from '../components'
import { pageCurrent } from '../../helpers/pageCurrent'

export const CreateRoutes = () => {
  const { process, resetContext } = useReserveContext()
  useEffect(() => {
    resetContext()
  }, [])

  return (
    <Routes>

      {
        (process === pageCurrent.SEARCH) &&
        (
          <>
            <Route path='/' element={<FormSearch />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </>
        )
      }

      {
        (process === pageCurrent.CHECKIN) &&
        (
          <>
            <Route path='checkIn' element={<ReserveData />} />
            <Route path='/*' element={<Navigate to='checkIn' />} />
          </>
        )
      }

      {
        (process === pageCurrent.RESERVED) &&
        (
          <>
            <Route path='reserved' element={<ReserveComplete />} />
            <Route path='/*' element={<Navigate to='reserved' />} />
          </>
        )
      }

    </Routes>
  )
}
