import { doc, deleteDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../../src/fireBase/config'
import { deleteReservation } from '../../src/helpers/deleteReservation'
import { collectionDB } from '../fixtures/reservationInfo'

jest.mock('firebase/firestore/lite')

describe('Pruebas en deleteReservation', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const idReservation = '1234'

  test('debe de eliminar el documente correctamente', async () => {
    const expectedResponse = { ok: true }

    deleteDoc.mockResolvedValue()

    const status = await deleteReservation(idReservation)

    expect(status).toEqual(expectedResponse)
    expect(doc).toHaveBeenCalledWith(firebaseDb, collectionDB, idReservation)
    expect(deleteDoc).toHaveBeenCalledWith(doc(firebaseDb, collectionDB, idReservation))
  })

  test('debe de regresar un error al eliminar el documento', async () => {
    const expectedError = new Error('rejected')
    const expectedResponse = { ok: false, msg: expect.any(Error) }

    deleteDoc.mockRejectedValue(expectedError)

    const status = await deleteReservation(idReservation)

    expect(status).toEqual(expectedResponse)
    expect(doc).toHaveBeenCalledWith(firebaseDb, collectionDB, idReservation)
    expect(deleteDoc).toHaveBeenCalledWith(doc(firebaseDb, collectionDB, idReservation))
  })
})
