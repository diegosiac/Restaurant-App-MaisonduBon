import { CircleCheck } from '../../../components/circleCheck/CircleCheck'
import { ReserveCompleteData } from '../reserveCompleteData/ReserveCompleteData'
import './reserveComplete.css'

export const ReserveComplete = () => {
  return (
    <div className='Complete-Container'>

      <div className='ReserveComplete-Top'>
        <CircleCheck />
        <h3>RESERVACION EXITOSA</h3>
      </div>

      <ReserveCompleteData />
    </div>
  )
}
