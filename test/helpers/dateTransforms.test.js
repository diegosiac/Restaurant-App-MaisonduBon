import { dateTransform } from '../../src/helpers/dateTransforms'

describe('Pruebas en dateTransform', () => {
  test('debe de retornar una fecha transformada', () => {
    const initialDate = '2023-04-27T01:01:52.837Z'
    const resultDate = 'Miércoles, 26 de abril de 2023'

    const newDate = new Date(initialDate)
    const date = dateTransform(newDate)

    expect(date).toBe(resultDate)
  })
})
