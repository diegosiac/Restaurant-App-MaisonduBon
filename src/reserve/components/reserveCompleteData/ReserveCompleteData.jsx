import { useReserveContext } from '../../../hooks'
import './reserveComplete.css'

export const ReserveCompleteData = () => {
  const { user, reserveData } = useReserveContext()

  const { name, lastName, email, phone } = user
  const { reservePeople, reserveDate, reserveSchedule, reservationCode } = reserveData

  return (
    <article className='ReserveComplete' data-testid='ReserveComplete'>

      <div className='ReserveComplete-data-user'>
        <h4>TUS DATOS</h4>

        <div className='ReserveComplete-user-container'>
          <div>
            <span className='ReserveComplete-title'>NOBRE: </span>
            <span className='ReserveComplete-data'>{`${name} ${lastName}`}</span>
          </div>
          <div>
            <span className='ReserveComplete-title'>E-mail: </span>
            <span className='ReserveComplete-data'>{email}</span>
          </div>
          <div>
            <span className='ReserveComplete-title'>Télefono: </span>
            <span className='ReserveComplete-data'>{phone}</span>
          </div>
        </div>

        <h2>LA MAISON DU BON</h2>
      </div>

      <div className='ReserveComplete-data-reserve'>
        <h4>INFORMACION DE LA RESERVACION</h4>

        <div className='ReserveComplete-reserve-container'>
          <div>
            <span className='ReserveComplete-title'>FECHA:</span>
            <span className='ReserveComplete-data'>{reserveDate}</span>
          </div>
          <div>
            <span className='ReserveComplete-title'>HORA:</span>
            <span className='ReserveComplete-data'>{reserveSchedule}</span>
          </div>
          <div>
            <span className='ReserveComplete-title'>PERSONAS:</span>
            <span className='ReserveComplete-data'>{`${reservePeople} ${reservePeople === 1 ? 'PERSONA' : 'PERSONAS'}`}</span>
          </div>
          <div>
            <span className='ReserveComplete-title '>TU CODIGO DE RESERVACION:</span>
            <span className='code'>{reservationCode}</span>
          </div>
        </div>

      </div>

    </article>
  )
}
