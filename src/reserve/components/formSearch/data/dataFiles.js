export const alertError = 'En este momento, no hay disponibilidad en el horario seleccionado'
export const alertFilds = 'Complete los campos.'

export const reserveFormFields = {
  reservePeople: 'none',
  reserveDate: null,
  reserveSchedule: 'none'
}

export const validationsError = 'El campo es requerido'

export const formValidations = {
  reservePeople: [(value) => value !== 'none', validationsError],
  reserveSchedule: [(value) => value !== 'none', validationsError],
  reserveDate: [(value) => value !== null, validationsError]
}
