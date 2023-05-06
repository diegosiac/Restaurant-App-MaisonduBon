import { maxDay, minDay } from '../../src/helpers'

describe('Pruebas en themePicker', () => {
  test('debe devolver el día máximo correctamente', () => {
    const dateMax = new Date(maxDay).toLocaleDateString('es-ES')

    const newDate = new Date()
    const maxDate = newDate.setDate(newDate.getDate() + 366)
    const expectMaxDate = new Date(maxDate).toLocaleDateString('es-ES')

    expect(dateMax).toBe(expectMaxDate)
  })
  test('debe devolver el día mínimo correctamente', () => {
    const dateMin = new Date(minDay).toLocaleDateString('es-ES')

    const newDate = new Date()
    const minDate = newDate.setDate(newDate.getDate() + 1)
    const expectMinDay = new Date(minDate).toLocaleDateString('es-ES')

    expect(dateMin).toBe(expectMinDay)
  })
})
