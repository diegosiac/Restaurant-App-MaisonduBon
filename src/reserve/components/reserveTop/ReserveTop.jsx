import { useReserveContext } from '../../../hooks'
import { pageCurrent } from '../../../helpers/pageCurrent'
import './ReserveTop.css'

export const ReserveTop = () => {
  const { process } = useReserveContext()

  const getProcess = (processName) => process === processName ? 'ReserveTop-active' : ''

  return (
    <header className='ReserveTop'>
      <h3 className={`ReseveTop-item ${getProcess(pageCurrent.SEARCH)}`} data-testid='BUSCAR MESA'>1. BUSCAR MESA</h3>
      <h3 className={`ReseveTop-item ${getProcess(pageCurrent.CHECKIN)}`} data-testid='TUS DATOS'>2. TUS DATOS</h3>
    </header>
  )
}
