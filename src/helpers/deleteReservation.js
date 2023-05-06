import { doc, deleteDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../fireBase/config'

export const deleteReservation = async (idReservation, collection = 'Bookings') => {
  try {
    await deleteDoc(doc(firebaseDb, collection, idReservation))
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      msg: error
    }
  }
}
