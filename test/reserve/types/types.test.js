import { types } from '../../../src/reserve/types/types'

describe('Pruebas en types', () => {
  test('debe hacer match con los types', () => {
    const typesExpect = {
      setProcess: '[Reserve] process',
      cheking: '[Reserve] cheking',
      userData: '[Reserve] userData',
      reserveData: '[Reserve] reserveData',
      error: '[Reserve] error',
      reset: '[Reserve] reset'
    }

    expect(types).toEqual(typesExpect)
  })
})
