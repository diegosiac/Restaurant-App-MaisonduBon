import { render, screen } from '@testing-library/react'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { useForm } from '../../../../src/hooks'
import { dateTransform, getBookings, pageCurrent } from '../../../../src/helpers'
import { FormSearch } from '../../../../src/reserve/components'
import { reservationDate } from '../../../fixtures/reservationInfo'

const contextValue = {
  reserveState: {
    cheking: false
  },
  setProcess: jest.fn(),
  setReserveData: jest.fn(),
  setChangeCheking: jest.fn()
}

jest.mock('../../../../src/hooks/useForm')
jest.mock('../../../../src/helpers/getBookings')

describe('Pruebas en <FormSearch />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('debe de renderizar el componente/formulario correctamente', () => {
    const formMockReturn = {
      ...reservationDate,
      onInputChange: () => {},
      isFormValid: false
    }
    useForm.mockReturnValue(formMockReturn)
    render(
      <ReserveContext.Provider value={contextValue}>
        <FormSearch />
      </ReserveContext.Provider>
    )

    const formElement = screen.getByTestId('formSearch')
    expect(formElement).toBeTruthy()
  })

  test('debe de mostrar un mensaje de error si el formulario es invalido', () => {
    const formMockReturn = {
      ...reservationDate,
      onInputChange: () => {},
      isFormValid: false
    }
    useForm.mockReturnValue(formMockReturn)

    render(
      <ReserveContext.Provider value={contextValue}>
        <FormSearch />
      </ReserveContext.Provider>
    )
    const alert = screen.getByLabelText('alerts')

    expect(alert).toBeTruthy()
  })

  test('debe de enviarse el formulario y enviar a los datos al estado', async () => {
    const size = 5

    const { setChangeCheking, setReserveData, setProcess } = contextValue

    const formMockReturn = {
      ...reservationDate,
      onInputChange: () => {},
      isFormValid: true
    }

    useForm.mockReturnValue(formMockReturn)
    getBookings.mockReturnValue({ ok: true, size })

    render(
      <ReserveContext.Provider value={contextValue}>
        <FormSearch />
      </ReserveContext.Provider>
    )

    const button = screen.getByRole('button', { name: 'Buscar una mesa' })
    button.click()

    const reserveExpect = {
      ...reservationDate,
      reserveDate: dateTransform(reservationDate.reserveDate)
    }

    const { reserveDate, reserveSchedule } = reserveExpect

    await expect(getBookings).toHaveBeenCalledWith({ reserveDate, reserveSchedule })

    expect(setChangeCheking).toHaveBeenCalledTimes(2)
    expect(setReserveData).toHaveBeenCalledWith(reserveExpect)
    expect(setProcess).toHaveBeenCalledWith(pageCurrent.CHECKIN)
  })
})
