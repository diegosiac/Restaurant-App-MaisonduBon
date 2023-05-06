import { reserveReducer } from '../../../src/reserve/context/reserveReducer'
import { pageCurrent } from '../../../src/helpers/pageCurrent'
import { types } from '../../../src/reserve/types/types'
import { reserveData, user } from '../../fixtures/reservationInfo'

describe('Pruebas en reserveReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const initialState = {
      process: pageCurrent.SEARCH
    }

    const state = reserveReducer(initialState, {})
    expect(state).toEqual(initialState)
  })

  test('debe de cambiar el process', () => {
    const initialState = {
      process: pageCurrent.SEARCH
    }

    const action = {
      type: types.setProcess,
      payload: pageCurrent.CHECKIN
    }

    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.CHECKIN
    })
  })

  test('debe agregar la infomacion del usuario', () => {
    const initialState = {
      process: pageCurrent.CHECKIN
    }

    const action = {
      type: types.userData,
      payload: user
    }

    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.CHECKIN,
      user
    })
  })

  test('debe agregar la infomacion de la reservación', () => {
    const initialState = {
      process: pageCurrent.RESERVED
    }

    const action = {
      type: types.reserveData,
      payload: reserveData
    }

    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.RESERVED,
      reserveData
    })
  })

  test('debe de cambiar el estado de carga', () => {
    const initialState = {
      process: pageCurrent.CHECKIN,
      cheking: false
    }

    const action = {
      type: types.cheking,
      payload: true
    }

    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.CHECKIN,
      cheking: true
    })
  })

  test('debe de regresar a la pagina SEARCH si se lanza un error', () => {
    const initialState = {
      process: pageCurrent.CHECKIN
    }

    const action = {
      type: types.error
    }

    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.SEARCH
    })
  })

  test('debe hacer un reset del estado y regresar a la pagina SEARCH', () => {
    const initialState = {
      process: pageCurrent.CHECKIN,
      reserveData,
      user
    }

    const action = {
      type: types.reset
    }
    const state = reserveReducer(initialState, action)

    expect(state).toEqual({
      process: pageCurrent.SEARCH
    })
  })
})
