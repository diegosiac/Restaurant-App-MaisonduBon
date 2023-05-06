import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { pageCurrent } from '../../../src/helpers/pageCurrent'
import { ReserveContext } from '../../../src/reserve/context/ReserveContext'
import { ReserveRoutes } from '../../../src/reserve/routes/ReserveRoutes'

const contextValue = {
  reserveState: {
    process: pageCurrent.SEARCH
  },
  resetContext: () => {}
}

describe('Pruebas en <ReserveRoutes/>', () => {
  test('debe renderizar el componente cuando la ruta este en create', () => {
    render(
      <MemoryRouter initialEntries={['/create']}>
        <ReserveContext.Provider value={contextValue}>
          <ReserveRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    const button = screen.getByRole('button', {
      name: 'Buscar una mesa'
    })

    expect(button).toBeTruthy()
  })

  test('debe renderizar el componente cuando la ruta este en search', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <ReserveContext.Provider value={contextValue}>
          <ReserveRoutes />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Buscar Reservación')).toBeTruthy()
  })
})
