import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ReserveContext } from '../../../src/reserve/context/ReserveContext'
import { CreateRoutes } from '../../../src/reserve/routes/CreateRoutes'
import { pageCurrent } from '../../../src/helpers/pageCurrent'
import { reserveData, user } from '../../fixtures/reservationInfo'

const resetContext = () => {}
describe('Pruebas en <CreateRoutes/>', () => {
  test('debe renderizar el componente reserve SEARCH', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.SEARCH
      },
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/reserve']}>
        <ReserveContext.Provider value={contextValue}>
          <CreateRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    const button = screen.getByRole('button', {
      name: 'Buscar una mesa'
    })

    expect(button).toBeTruthy()
  })

  test('debe renderizar el componente CHECKIN', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.CHECKIN,
        reserveData
      },
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/reserve']}>
        <ReserveContext.Provider value={contextValue}>
          <CreateRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Menu barra Cortes')).toBeTruthy()
    expect(screen.getByText('Qué debes saber antes de ir')).toBeTruthy()
  })

  test('debe renderizar el componente RESERVED', () => {
    const resetContext = () => {}

    const contextValue = {
      reserveState: {
        process: pageCurrent.RESERVED,
        user,
        reserveData
      },
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/reserve']}>
        <ReserveContext.Provider value={contextValue}>
          <CreateRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('RESERVACION EXITOSA')).toBeTruthy()
    expect(screen.getByText('LA MAISON DU BON')).toBeTruthy()
  })
})
