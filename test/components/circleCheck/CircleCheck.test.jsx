import { render } from '@testing-library/react'
import { CircleCheck } from '../../../src/components/circleCheck/CircleCheck'

describe('Pruebas en <CircleCheck/>', () => {
  test('debe hacer match con el SnapShot', () => {
    const component = render(<CircleCheck />)

    expect(component).toMatchSnapshot()
  })
})
