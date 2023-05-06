import { createTheme } from '@mui/material/styles'
import { esES } from '@mui/x-date-pickers'

export const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' }
    }
  },

  esES
)

const dateMin = new Date()
const dateMax = new Date()

export const minDay = dateMin.setDate(dateMin.getDate() + 1)
export const maxDay = dateMax.setDate(dateMax.getDate() + 366)
