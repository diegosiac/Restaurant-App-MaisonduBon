import { doc, getDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../fireBase/config'

export const getReservation = async (idReservation, collectionDB = 'Bookings') => {
  try {
    const docRef = doc(firebaseDb, collectionDB, idReservation)
    const docSnap = await getDoc(docRef)
    return {
      ok: true,
      document: docSnap.exists() && docSnap.data()
    }
  } catch (error) {
    return {
      ok: false,
      msg: error
    }
  }
}
