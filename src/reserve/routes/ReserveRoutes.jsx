import { Navigate, Route, Routes } from 'react-router-dom'
import { Search, Reserve } from '../pages'

export const ReserveRoutes = () => {
  return (
    <Routes>
      <Route path='create/*' element={<Reserve />} />
      <Route path='search/*' element={<Search />} />

      <Route path='/*' element={<Navigate to='create' />} />
    </Routes>
  )
}
