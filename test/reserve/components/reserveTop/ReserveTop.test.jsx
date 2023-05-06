import { render, screen } from '@testing-library/react'
import { ReserveContext } from '../../../../src/reserve/context/ReserveContext'
import { ReserveTop } from '../../../../src/reserve/components/reserveTop/ReserveTop'
import { pageCurrent } from '../../../../src/helpers/pageCurrent'

describe('Pruebas en <ReserveTop />', () => {
  test('debe de hacer match con el SnapShop', () => {
    const contextValue = {
      reserveState: {
        process: 'NotMatch'
      }
    }

    const component = render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveTop />
      </ReserveContext.Provider>
    )

    expect(component).toMatchSnapshot()
  })

  test('debe contener una clase active el h3 "1. BUSCAR MESA" cuando el pageCurrent sea SEARCH', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.SEARCH
      }
    }

    render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveTop />
      </ReserveContext.Provider>
    )

    const h3Active = screen.getByTestId('BUSCAR MESA')
    const h3NotActive = screen.getByTestId('TUS DATOS')

    expect(h3Active.className).toContain('ReserveTop-active')
    expect(h3NotActive.className).not.toContain('ReserveTop-active')
  })

  test('debe contener una clase active el h3 "2. TUS DATOS" cuando el pageCurrent sea CHECKIN', () => {
    const contextValue = {
      reserveState: {
        process: pageCurrent.CHECKIN
      }
    }

    render(
      <ReserveContext.Provider value={contextValue}>
        <ReserveTop />
      </ReserveContext.Provider>
    )

    const h3Active = screen.getByTestId('TUS DATOS')
    const h3NotActive = screen.getByTestId('BUSCAR MESA')

    expect(h3Active.className).toContain('ReserveTop-active')
    expect(h3NotActive.className).not.toContain('ReserveTop-active')
  })
})
