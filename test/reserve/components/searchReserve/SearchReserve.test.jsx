import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { useForm } from '../../../../src/hooks'
import { SearchReserve } from '../../../../src/reserve/components/searchReserve/SearchReserve'
import { reservation } from '../../../fixtures/reservationInfo'
import { getReservation, pageCurrent } from '../../../../src/helpers'

const contextValue = {
  reserveState: {
    cheking: true
  },
  setUser: jest.fn(),
  setReserveData: jest.fn(),
  setProcess: jest.fn(),
  setChangeCheking: jest.fn()
}

const codeReservation = '92f389hf3928f8923f'

const formMockReturn = {
  codeReservation,
  onInputChange: () => {},
  onResetForm: jest.fn(),
  isFormValid: true
}

jest.mock('../../../../src/hooks/useForm')
useForm.mockReturnValue(formMockReturn)

jest.mock('../../../../src/helpers/getReservation')

describe('Pruebas en <SearchReserve />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('debe de renderizar el componente correctamente', () => {
    const contextValue = {
      reserveState: {
        cheking: false
      },
      setUser: jest.fn(),
      setReserveData: jest.fn(),
      setProcess: jest.fn(),
      setChangeCheking: jest.fn()
    }
    render(
      <ReserveContext.Provider value={contextValue}>
        <SearchReserve />
      </ReserveContext.Provider>
    )

    expect(screen.getByTestId('SearchReserve')).toBeTruthy()
    expect(screen.getByText('Buscar Reservación')).toBeTruthy()
  })

  test('debe de enviar el formulario, encontrar la reservación y subir la información al estado', async () => {
    getReservation.mockReturnValue({
      ok: true,
      document: {
        ...reservation,
        reservationCode: codeReservation
      }
    })

    render(
      <ReserveContext.Provider value={contextValue}>
        <SearchReserve />
      </ReserveContext.Provider>
    )

    const { reserveDate, reservePeople, reserveSchedule, email, lastName, name, phone } = reservation

    const reservationData = {
      reserveDate,
      reservePeople,
      reserveSchedule,
      reservationCode: codeReservation
    }

    const userData = {
      email,
      lastName,
      name,
      phone
    }

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByTestId('loader')).toBeTruthy()

    await expect(getReservation).toHaveBeenCalledWith(codeReservation)

    expect(contextValue.setChangeCheking).toHaveBeenCalledTimes(2)
    expect(contextValue.setProcess).toHaveBeenCalledWith(pageCurrent.RESERVATIONFOUND)

    expect(contextValue.setReserveData).toHaveBeenCalledWith(reservationData)
    expect(contextValue.setUser).toHaveBeenCalledWith(userData)
  })

  test('debe de enviar el formulario, no encontrar la reservación, mostrar un mensaje de error', async () => {
    getReservation.mockReturnValue({
      ok: true
    })

    const setIsInValidCodeMock = jest.fn()
    jest.spyOn(React, 'useState').mockImplementation((initialState) => [initialState, setIsInValidCodeMock])

    jest.useFakeTimers()
    jest.spyOn(global, 'setTimeout')

    render(
      <ReserveContext.Provider value={contextValue}>
        <SearchReserve />
      </ReserveContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByTestId('loader')).toBeTruthy()

    await expect(getReservation).toHaveBeenCalledWith(codeReservation)

    expect(contextValue.setChangeCheking).toHaveBeenCalledTimes(2)
    expect(formMockReturn.onResetForm).toHaveBeenCalled()
    expect(setIsInValidCodeMock).toHaveBeenCalledWith(true)

    jest.runAllTimers()

    expect(setIsInValidCodeMock).toHaveBeenCalledTimes(2)
    expect(setIsInValidCodeMock).toHaveBeenCalledWith(false)
  })
})
