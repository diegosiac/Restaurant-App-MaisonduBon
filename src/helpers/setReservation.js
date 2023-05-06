import { collection, addDoc } from 'firebase/firestore/lite'
import { firebaseDb } from '../fireBase/config'

export const setReservation = async ({ email, lastName, name, phone, reserveDate, reservePeople, reserveSchedule, dateTimeStamp }, collectionDB = 'Bookings') => {
  try {
    const docRef = await addDoc(collection(firebaseDb, collectionDB), {
      email,
      lastName,
      name,
      phone,
      reserveDate,
      reservePeople,
      reserveSchedule,
      dateTimeStamp
    })
    return {
      ok: true,
      idDoc: docRef.id
    }
  } catch (error) {
    return {
      ok: false,
      msg: error
    }
  };
}
