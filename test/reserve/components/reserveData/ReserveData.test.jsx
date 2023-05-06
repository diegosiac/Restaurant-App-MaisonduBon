import { render, screen } from '@testing-library/react'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { reserveData } from '../../../fixtures/reservationInfo'
import { ReserveData } from '../../../../src/reserve/components/reserveData/ReserveData'

const contextValue = {
  reserveState: {
    reserveData,
    cheking: false
  }
}

describe('Pruebas en <ReserveData />', () => {
  test('debe de renderizar correctamente el componente', () => {
    render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveData />
      </ReserveContext.Provider>
    )

    expect(screen.getByTestId('ReserveData')).toBeTruthy()
    expect(screen.getByText('Menu barra Cortes')).toBeTruthy()
    expect(screen.getByText('Qué debes saber antes de ir')).toBeTruthy()
  })

  test('debe de renderizar el componente con la información del estado', () => {
    render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveData />
      </ReserveContext.Provider>
    )

    const { reserveDate, reservePeople, reserveSchedule } = reserveData

    const stringPeople = Number(reservePeople) >= 2 ? 'personas (Asientos en la barra)' : 'persona (Asiento en la barra)'

    expect(screen.getByText(reserveDate)).toBeTruthy()
    expect(screen.getByText(reserveSchedule)).toBeTruthy()
    expect(screen.getByText(`${reservePeople} ${stringPeople}`)).toBeTruthy()
  })

  test('debe de renderizarse el componente LoaderSpinner cuando "cheking" sea verdadera.', () => {
    const contextValue = {
      reserveState: {
        reserveData,
        cheking: true
      }
    }

    render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveData />
      </ReserveContext.Provider>
    )

    expect(screen.getByTestId('loader')).toBeTruthy()
  })
})
