export const dateTransform = (date) => {
  const monthEsp = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  const weekdaysEsp = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const newDate = new Date(date)

  return `${weekdaysEsp[newDate.getDay()]}, ${newDate.getDate()} de ${monthEsp[newDate.getMonth()]} de ${newDate.getUTCFullYear()}`
}
