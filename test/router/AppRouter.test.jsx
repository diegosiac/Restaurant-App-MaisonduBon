import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'
import { pageCurrent } from '../../src/helpers/pageCurrent'
import { ReserveContext } from '../../src/reserve/context/ReserveContext'

describe('Pruebas en AppRouter', () => {
  test('debe de mostar el componente home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <AppRouter />
      </MemoryRouter>
    )
    expect(screen.getByText('La Maison du Bon')).toBeTruthy()
    expect(screen.getByText('Sobre Nosotros')).toBeTruthy()
  })

  test('debe de mostar el componente reserve', () => {
    const resetContext = () => {}

    const contextValue = {
      process: pageCurrent.SEARCH,
      resetContext
    }

    render(
      <MemoryRouter initialEntries={['/reserve']}>
        <ReserveContext.Provider value={contextValue}>
          <AppRouter />
        </ReserveContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Reservar')).toBeTruthy()
    expect(screen.getByText('Buscar Reservación')).toBeTruthy()
  })

  test('debe de mostar el componente menu', () => {
    render(
      <MemoryRouter initialEntries={['/menu']}>
        <AppRouter />
      </MemoryRouter>
    )

    expect(screen.getByText('Menú')).toBeTruthy()
  })
})
