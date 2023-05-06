import { useState } from 'react'
import ErrorIcon from '@mui/icons-material/Error'
import { useForm, useReserveContext } from '../../../hooks'
import { dateTransform, getBookings, getEnvironments, PEOPLEOPTIONS, TIMEOPTIONS, pageCurrent } from '../../../helpers'
import { ReserveSearchDate, LoaderSpinner, Select } from '..'
import { Alerts } from '../../../components/alerts/Alerts'
import { alertError, alertFilds, formValidations, reserveFormFields } from './data/dataFiles'
import './formSearch.css'

const { VITE_MAX_RESERVATIONS } = getEnvironments()

export const FormSearch = () => {
  const { cheking, setProcess, setReserveData, setChangeCheking } = useReserveContext()

  const {
    reservePeople,
    reserveDate,
    reserveSchedule,
    onInputChange,
    onResetForm,
    isFormValid
  } = useForm(reserveFormFields, formValidations)

  const [message, setMessage] = useState(alertFilds)

  const isSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setChangeCheking(true)

    const reserveData = {
      reservePeople,
      reserveDate: dateTransform(reserveDate),
      reserveSchedule,
      dateTimeStamp: reserveDate
    }

    const status = await getBookings({ reserveDate: reserveData.reserveDate, reserveSchedule })

    if (!status.ok) return

    if (status.size > VITE_MAX_RESERVATIONS) {
      setChangeCheking(false)
      setErrorMessage()
      return
    }

    setReserveData(reserveData)
    setChangeCheking(false)
    setProcess(pageCurrent.CHECKIN)
  }

  const setErrorMessage = () => {
    setMessage(alertError)
    onResetForm()
    setTimeout(() => {
      setMessage(alertFilds)
    }, 3500)
  }

  return (
    <form onSubmit={isSubmit} className='ReserveSearch' data-testid='formSearch'>
      <div className='ReserveSearch-container'>

        <Select
          onChange={onInputChange}
          textOption='No Personas'
          options={PEOPLEOPTIONS}
          value={reservePeople}
          className='ReserveSearch-people'
          name='reservePeople'
          required='required'
          id='People'
        />

        <ReserveSearchDate valueDate={reserveDate} onInputChange={onInputChange} />

        <Select
          onChange={onInputChange}
          textOption='Horario'
          options={TIMEOPTIONS}
          className='ReserveSearch-time'
          value={reserveSchedule}
          name='reserveSchedule'
          required='required'
          id='Time'
        />
        <button
          className='ReserveSearch-btn'
          type='submit'
          disabled={!isFormValid || cheking}
        >
          Buscar una mesa
        </button>
      </div>

      {
        !isFormValid &&
          <Alerts
            message={message}
            type={message === alertFilds ? 'warning' : 'error'}
            icon={message === alertError && <ErrorIcon sx={{ color: '#ca3838' }} />}
          />
      }
      {
        cheking && <LoaderSpinner />
      }
    </form>
  )
}
