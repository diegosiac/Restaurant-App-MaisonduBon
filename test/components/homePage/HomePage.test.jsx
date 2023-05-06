import { render } from '@testing-library/react'
import { HomePage } from '../../../src/components/homePage/HomePage'

describe('Pruebas en <HomePage />', () => {
  test('debe hacer match con el SnapShot', () => {
    const component = render(<HomePage />)

    expect(component).toMatchSnapshot()
  })
})
