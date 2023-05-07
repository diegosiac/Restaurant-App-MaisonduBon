import { useState } from 'react'
import ErrorIcon from '@mui/icons-material/Error'
import { useForm, useReserveContext } from '../../../hooks'
import { getReservation, pageCurrent } from '../../../helpers'
import { Alerts } from '../../../components/alerts/Alerts'
import { LoaderSpinner } from '../loaderSpinner/LoaderSpinner'
import { Input } from '../input/Input'
import './SearchReserve.css'

const message = 'No se ha encontrado ninguna reservación con el código proporcionado.'

const codeFormField = {
  codeReservation: ''
}

const codeFormValidations = {
  codeReservation: [(value) => value.length >= 17, 'El código debe de ser de 17 a 25 dígitos.']
}

export const SearchReserve = () => {
  const { cheking, setUser, setReserveData, setProcess, setChangeCheking } = useReserveContext()

  const {
    codeReservation,
    onInputChange,
    onResetForm,
    codeReservationValid,
    isFormValid
  } = useForm(codeFormField, codeFormValidations)

  const [isInValidCode, setIsInValidCode] = useState(false)

  const isSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return
    setChangeCheking(true)

    const isExistReservation = await getReservation(codeReservation)

    if (!isExistReservation.ok) return

    if (!isExistReservation.document) return setErrorMessage()

    const { reserveDate, reservePeople, reserveSchedule, email, lastName, name, phone } = isExistReservation.document

    const reservationData = {
      reserveDate,
      reservePeople,
      reserveSchedule,
      reservationCode: codeReservation
    }

    const userData = {
      email,
      lastName,
      name,
      phone
    }

    setUser(userData)
    setReserveData(reservationData)

    setChangeCheking(false)
    setProcess(pageCurrent.RESERVATIONFOUND)
  }

  const setErrorMessage = () => {
    setChangeCheking(false)
    onResetForm()
    setIsInValidCode(true)
    setTimeout(() => {
      setIsInValidCode(false)
    }, 3500)
  }

  return (
    <div className='SearchReserve' data-testid='SearchReserve'>
      <h3 className='SearchReserve-title'>Buscar Reservación</h3>
      <form onSubmit={isSubmit}>
        <Input
          onInputChange={onInputChange}
          type='text'
          name='codeReservation'
          required='required'
          placeholder='Código de reservación'
          value={codeReservation}
          inputValid={codeReservationValid}
        />
        <button type='submit' disabled={!isFormValid}>Buscar</button>
      </form>
      {
        isInValidCode &&
          <Alerts
            message={message}
            type='error'
            icon={<ErrorIcon sx={{ color: '#ca3838' }} />}
          />
       }
      {
        cheking && <LoaderSpinner />
      }
    </div>
  )
}
