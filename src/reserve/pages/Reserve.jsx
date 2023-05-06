import { useReserveContext } from '../../hooks'
import { CreateRoutes } from '../routes/CreateRoutes'
import { pageCurrent } from '../../helpers/pageCurrent'
import { ReserveTop } from '../components'
import './reserve.css'

export const Reserve = () => {
  const { process } = useReserveContext()
  return (
    <section className='Reserve-Container'>
      {
        process !== pageCurrent.RESERVED && <ReserveTop />
      }

      <CreateRoutes />
    </section>
  )
}
