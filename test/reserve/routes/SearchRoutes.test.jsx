import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ReserveContext } from '../../../src/reserve/context/ReserveContext'
import { pageCurrent } from '../../../src/helpers/pageCurrent'
import { reserveData, user } from '../../fixtures/reservationInfo'
import { SearchRoutes } from '../../../src/reserve/routes/SearchRoutes'

const resetContext = () => {}
describe('Pruebas en <SearchRoutes/>', () => {
  test('debe renderizar el componente reserve SEARCH', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.SEARCH
      },
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <ReserveContext.Provider value={contextValue}>
          <SearchRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Buscar Reservación')).toBeTruthy()
  })

  test('debe renderizar el componente CHECKIN', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.RESERVATIONFOUND,
        reserveData,
        user
      },
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/reservationFound']}>
        <ReserveContext.Provider value={contextValue}>
          <SearchRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    const button = screen.getByRole('button', {
      value: 'Cancelar Reservación'
    })

    expect(screen.getByText('TUS DATOS')).toBeTruthy()
    expect(screen.getByText('LA MAISON DU BON')).toBeTruthy()
    expect(button).toBeTruthy()
  })
})
