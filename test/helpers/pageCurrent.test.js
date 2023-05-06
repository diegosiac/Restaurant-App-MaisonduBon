import { pageCurrent } from '../../src/helpers/pageCurrent'

describe('Pruebas en pageCurrent', () => {
  test('debe de hacer match con estos pages', () => {
    const pageListExpect = {
      SEARCH: 'search',
      CHECKIN: 'checkIn',
      RESERVED: 'reserved',
      RESERVATIONFOUND: 'reservationFound'
    }

    expect(pageCurrent).toEqual(pageListExpect)
  })
})
