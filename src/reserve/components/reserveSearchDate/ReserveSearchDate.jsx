import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ThemeProvider } from '@mui/material/styles'
import esLocale from 'date-fns/locale/es'
import { theme, minDay, maxDay } from '../../../helpers'

export const ReserveSearchDate = ({ valueDate, onInputChange }) => {
  const isAccept = (date) => {
    const inputDate = {
      target: {
        name: 'reserveDate',
        value: date
      }
    }

    onInputChange(inputDate)
  }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
        <DatePicker
          minDate={minDay}
          maxDate={maxDay}
          label='Fecha'
          views={['day', 'month', 'year']}
          value={valueDate}
          onAccept={isAccept}
          slotProps={{ textField: { size: 'small' } }}
          sx={{ backgroundColor: '#fff', width: 100 }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}
