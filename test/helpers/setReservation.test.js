import { collection, addDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../../src/fireBase/config'
import { setReservation } from '../../src/helpers'
import { collectionDB, reservation } from '../fixtures/reservationInfo'

jest.mock('firebase/firestore/lite')

describe('Pruebas en setReservation', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('debe de devolver el id de la reservación', async () => {
    const expectValue = {
      ok: true,
      idDoc: expect.any(String)
    }

    addDoc.mockResolvedValue({ id: '121302983' })

    const data = await setReservation(reservation)

    expect(data).toEqual(expectValue)
    expect(collection).toHaveBeenCalledWith(firebaseDb, collectionDB)
    expect(addDoc).toHaveBeenCalledWith(collection(firebaseDb, collectionDB), reservation)
  })
  test('debe devolver un error con el status y informacion del error', async () => {
    const error = new Error('false')

    const expectValue = {
      ok: false,
      msg: expect.any(Error)
    }

    addDoc.mockRejectedValue(error)

    const data = await setReservation(reservation)

    expect(data).toEqual(expectValue)
    expect(collection).toHaveBeenCalledWith(firebaseDb, collectionDB)
    expect(addDoc).toHaveBeenCalledWith(collection(firebaseDb, collectionDB), reservation)
  })
})
