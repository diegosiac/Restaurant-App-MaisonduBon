import { render } from '@testing-library/react'
import { Footer } from '../../../src/components/footer/Footer'

describe('Pruebas en <Footer />', () => {
  test('debe hacer match con el SnapShot', () => {
    const component = render(<Footer />)

    expect(component).toMatchSnapshot()
  })
})
