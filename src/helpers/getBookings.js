import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { firebaseDb } from '../fireBase/config'

export const getBookings = async ({ reserveDate, reserveSchedule }, collectionDB = 'Bookings') => {
  try {
    const queryConfig = query(
      collection(firebaseDb, collectionDB),
      where('reserveDate', '==', reserveDate),
      where('reserveSchedule', '==', reserveSchedule)
    )

    const querySnapshot = await getDocs(queryConfig)
    return {
      ok: true,
      size: querySnapshot.size
    }
  } catch (error) {
    return {
      ok: false,
      msg: error
    }
  }
}
