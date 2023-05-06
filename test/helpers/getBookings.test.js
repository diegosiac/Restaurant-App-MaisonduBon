import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { firebaseDb } from '../../src/fireBase/config'
import { getBookings } from '../../src/helpers'
import { collectionDB, dataReservationMatch } from '../fixtures/reservationInfo'

jest.mock('firebase/firestore/lite')
describe('Pruebas en getBookings', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('debe de devolver de devolver el tamaño de las reservaciones que hagan match', async () => {
    const sizeReservationsMatch = { size: 8 }
    const expectedResponse = { ok: true, size: expect.any(Number) }

    getDocs.mockResolvedValue(sizeReservationsMatch)

    const status = await getBookings(dataReservationMatch, collectionDB)

    expect(status).toEqual(expectedResponse)
    expect(collection).toHaveBeenCalledWith(firebaseDb, collectionDB)
    expect(getDocs).toHaveBeenCalledWith(query(
      collection(firebaseDb, collectionDB),
      where('reserveDate', '==', dataReservationMatch.reserveDate),
      where('reserveSchedule', '==', dataReservationMatch.reserveSchedule)
    ))
  })

  test('debe devolver un error con el status y informacion del error', async () => {
    const expectedError = new Error('lost')
    const expectedResponse = { ok: false, msg: expect.any(Error) }

    getDocs.mockRejectedValue(expectedError)

    const status = await getBookings(dataReservationMatch, collectionDB)

    expect(status).toEqual(expectedResponse)
    expect(collection).toHaveBeenCalledWith(firebaseDb, collectionDB)
    expect(getDocs).toHaveBeenCalledWith(query(
      collection(firebaseDb, collectionDB),
      where('reserveDate', '==', dataReservationMatch.reserveDate),
      where('reserveSchedule', '==', dataReservationMatch.reserveSchedule)
    ))
  })
})
