import { useEffect } from 'react'
import { useReserveContext } from '../../hooks'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SearchReserve, SearchData } from '../components'
import { pageCurrent } from '../../helpers/pageCurrent'

export const SearchRoutes = () => {
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
            <Route path='/' element={<SearchReserve />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </>
        )
      }

      {
        (process === pageCurrent.RESERVATIONFOUND) &&
        (
          <>
            <Route path='reservationFound' element={<SearchData />} />
            <Route path='/*' element={<Navigate to='reservationFound' />} />
          </>
        )
      }
    </Routes>
  )
}
