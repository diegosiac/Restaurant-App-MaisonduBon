import { useState } from 'react'
import TodayIcon from '@mui/icons-material/Today'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useReserveContext } from '../../../hooks'
import { FormData } from '../formData/FormData'
import { LoaderSpinner } from '../loaderSpinner/LoaderSpinner'
import './reserveData.css'

export const ReserveData = () => {
  const { reserveData, cheking } = useReserveContext()

  const { reserveDate, reservePeople, reserveSchedule } = reserveData
  const [isFormValid, setIsFormValid] = useState(false)

  const stringPeople = Number(reservePeople) >= 2 ? 'personas (Asientos en la barra)' : 'persona (Asiento en la barra)'

  return (
    <div className='ReserveData' data-testid='ReserveData'>
      <div className='ReserveData-Info'>
        <div className='ReserveData-data'>
          <h4>Menu barra Cortes</h4>
          <p><TodayIcon className='ReserveData-icon' />{reserveDate}</p>
          <p><AccessTimeIcon className='ReserveData-icon' />{reserveSchedule}</p>
          <p className='ReserveData-footer'><PersonOutlineIcon className='ReserveData-icon' />{`${reservePeople} ${stringPeople} `}</p>
        </div>
        <div className='ReserveData-text'>
          <h5>Qué debes saber antes de ir</h5>

          <p className='ReserveData-text-title'>Información importante para comensales</p>
          <p className='ReserveData-text-description ReserveData-text-footer'>Su mesa quedará reservada durante 2 horas.</p>

          <p className='ReserveData-text-title'>Una nota del restaurante</p>
          <p className='ReserveData-text-description'>Tolerancia: 15 minutos, pasando dicho tiempo se considerará como inasistencia.</p>
          <p className='ReserveData-text-description ReserveData-text-footer'>El menú dura 2 horas, si requiere más tiempo, el servicio continuará en la terraza.</p>

        </div>
      </div>
      <FormData setIsFormValid={setIsFormValid} />
      <div className='ReserveData-submit'>
        <button type='submit' name='Submit' form='Reserver' disabled={!isFormValid || cheking}>
          Confirmar la reservación
        </button>
        {
          cheking && <LoaderSpinner />
        }
      </div>
    </div>
  )
}
