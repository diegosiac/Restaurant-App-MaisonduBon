import { doc, getDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../../src/fireBase/config'
import { getReservation } from '../../src/helpers'
import { reservation, collectionDB } from '../fixtures/reservationInfo'

jest.mock('firebase/firestore/lite')

describe('Pruebas en getReservation', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  const idReservation = '1234'
  test('debe de devolver la reservación', async () => {
    const expectedResponse = { ok: true, document: reservation }

    getDoc.mockResolvedValue({ exists: () => true, data: () => reservation })

    const status = await getReservation(idReservation, collectionDB)

    expect(status).toEqual(expectedResponse)
    expect(doc).toHaveBeenCalledWith(firebaseDb, collectionDB, idReservation)
    expect(getDoc).toHaveBeenCalledWith(doc(firebaseDb, collectionDB, idReservation))
  })
  test('debe de resolverse pero no devolver ninguna reservación', async () => {
    const expectedResponse = { ok: true, document: false }
    getDoc.mockResolvedValue({ exists: () => false, data: () => reservation })

    const status = await getReservation(idReservation, collectionDB)

    expect(status).toEqual(expectedResponse)
    expect(doc).toHaveBeenCalledWith(firebaseDb, collectionDB, idReservation)
    expect(getDoc).toHaveBeenCalledWith(doc(firebaseDb, collectionDB, idReservation))
  })

  test('debe de regresar un error con el status y informacion del error', async () => {
    const expectedError = new Error('lost')
    const expectedResponse = { ok: false, msg: expect.any(Error) }

    getDoc.mockRejectedValue(expectedError)

    const status = await getReservation(idReservation, collectionDB)

    expect(status).toEqual(expectedResponse)
    expect(doc).toHaveBeenCalledWith(firebaseDb, collectionDB, idReservation)
    expect(getDoc).toHaveBeenCalledWith(doc(firebaseDb, collectionDB, idReservation))
  })
})
