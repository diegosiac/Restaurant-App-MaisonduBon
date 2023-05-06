import { render } from '@testing-library/react'
import { LoaderSpinner } from '../../../../src/reserve/components/loaderSpinner/LoaderSpinner'

describe('Pruebas en <LoaderSpinner/>', () => {
  test('debe de hacer match con el SnapShop', () => {
    const component = render(<LoaderSpinner />)

    expect(component).toMatchSnapshot()
  })
})
