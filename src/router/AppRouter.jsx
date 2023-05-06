import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/homePage/HomePage'
import { MenuPage } from '../components/menuPage/MenuPage'
import { ReservePage } from '../reserve/pages/ReservePage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/reserve/*' element={<ReservePage />} />
        <Route path='/menu/*' element={<MenuPage />} />

        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}
