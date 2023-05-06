import { render, screen } from '@testing-library/react'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { FormData } from '../../../../src/reserve/components/formData/FormData'
import { reserveData, user } from '../../../fixtures/reservationInfo'
import { useForm } from '../../../../src/hooks'
import { pageCurrent, setReservation } from '../../../../src/helpers'

const contextValue = {
  reserveState: {
    reserveData
  },
  setProcess: jest.fn(),
  setUser: jest.fn(),
  setReserveData: jest.fn(),
  setChangeCheking: jest.fn()
}

const formMockReturn = {
  ...user,
  formState: user,
  onInputChange: () => {}
}

jest.mock('../../../../src/helpers/setReservation')

jest.mock('../../../../src/hooks/useForm')
useForm.mockReturnValue(formMockReturn)

describe('Pruebas en <FormData />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const setIsFormValid = () => {}

  test('debe de renderizar el componente/formulario correctamente', () => {
    render(
      <ReserveContext.Provider value={contextValue}>
        <FormData setIsFormValid={setIsFormValid} />
      </ReserveContext.Provider>
    )

    const formElement = screen.getByTestId('form')
    expect(formElement).toBeTruthy()
  })

  test('debe de enviarse el formulario y enviar a los datos al estado', async () => {
    const { setChangeCheking, setUser, setReserveData, setProcess } = contextValue
    const idDoc = '192879asdf323'

    setReservation.mockReturnValue({ ok: true, idDoc })

    render(
      <ReserveContext.Provider value={contextValue}>
        <FormData setIsFormValid={setIsFormValid} />
      </ReserveContext.Provider>
    )

    const formElement = screen.getByTestId('form')
    formElement.submit()

    await expect(setReservation).toHaveBeenCalledWith({ ...user, ...reserveData })

    expect(setChangeCheking).toHaveBeenCalledTimes(2)
    expect(setUser).toHaveBeenCalledWith(user)
    expect(setReserveData).toHaveBeenCalledWith({ ...reserveData, reservationCode: idDoc })
    expect(setProcess).toHaveBeenCalledWith(pageCurrent.RESERVED)
  })
})
