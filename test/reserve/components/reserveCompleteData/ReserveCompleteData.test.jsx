import { render, screen } from '@testing-library/react'
import { ReserveCompleteData } from '../../../../src/reserve/components/reserveCompleteData/ReserveCompleteData'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { reserveData as reserveInfo, user } from '../../../fixtures/reservationInfo'

const reserveData = {
  ...reserveInfo,
  reservationCode: '12381739'
}

const reserveState = { user, reserveData }

describe('Pruebas en <ReserveCompleteData />', () => {
  test('debe de renderizar correctamente el componente', () => {
    render(
      <ReserveContext.Provider value={{ reserveState }}>
        <ReserveCompleteData />
      </ReserveContext.Provider>
    )

    expect(screen.getByTestId('ReserveComplete')).toBeTruthy()
    expect(screen.getByText('TUS DATOS')).toBeTruthy()
    expect(screen.getByText('LA MAISON DU BON')).toBeTruthy()
    expect(screen.getByText('INFORMACION DE LA RESERVACION')).toBeTruthy()
  })

  test('debe de renderizar el componente con la información del estado', () => {
    render(
      <ReserveContext.Provider value={{ reserveState }}>
        <ReserveCompleteData />
      </ReserveContext.Provider>
    )
    const { email, lastName, name, phone } = user
    const { reserveDate, reservePeople, reserveSchedule, reservationCode } = reserveData

    const nameAndLastName = `${name} ${lastName}`
    const people = `${reservePeople} ${reservePeople === 1 ? 'PERSONA' : 'PERSONAS'}`

    expect(screen.getByText(email)).toBeTruthy()
    expect(screen.getByText(nameAndLastName)).toBeTruthy()
    expect(screen.getByText(phone)).toBeTruthy()
    expect(screen.getByText(reserveDate)).toBeTruthy()
    expect(screen.getByText(people)).toBeTruthy()
    expect(screen.getByText(reserveSchedule)).toBeTruthy()
    expect(screen.getByText(reservationCode)).toBeTruthy()
  })
})
