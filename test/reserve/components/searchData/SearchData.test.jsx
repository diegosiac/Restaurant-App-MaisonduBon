import { fireEvent, render, screen } from '@testing-library/react'
import { SearchData } from '../../../../src/reserve/components/searchData/SearchData'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { deleteReservation } from '../../../../src/helpers/deleteReservation'
import Swal from 'sweetalert2'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

jest.mock('../../../../src/helpers/deleteReservation')

jest.mock('../../../../src/reserve/components/reserveCompleteData/ReserveCompleteData', () => ({
  ReserveCompleteData: () => <h1>ReserveCompleteData</h1>
}))

jest.mock('sweetalert2')

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('Pruebas en <SearchData />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('debe de hacer click en el botón y que aparezca una alerta, elimine la reservación', async () => {
    const reservationCode = '12ad8fad897'
    const contextValue = {
      reserveState: {
        reserveData: {
          reservationCode
        }
      },
      resetContext: jest.fn()
    }

    Swal.fire.mockResolvedValue({ isConfirmed: true })

    render(
      <ReserveContext.Provider value={contextValue}>
        <SearchData />
      </ReserveContext.Provider>
    )

    const input = screen.getByRole('button')
    fireEvent.click(input)

    await Swal.fire()

    expect(deleteReservation).toHaveBeenCalledWith(reservationCode)

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    jest.runAllTimers()

    expect(mockedUseNavigate).toHaveBeenCalledWith('/reserve')
    expect(contextValue.resetContext).toHaveBeenCalled()
  })
})
