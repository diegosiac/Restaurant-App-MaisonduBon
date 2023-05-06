import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useReserveContext } from '../../../hooks'
import { deleteReservation } from '../../../helpers/deleteReservation'
import { ReserveCompleteData } from '../reserveCompleteData/ReserveCompleteData'
import './SearchData.css'

const configurateSwalConfirm = {
  title: '¿Estás seguro de que quieres cancelar tu reservación?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#ca3838',
  cancelButtonColor: '#e47230',
  confirmButtonText: 'Cancelar Reservación',
  cancelButtonText: 'Volver atras'
}

const configurateSwalComplete = {
  title: 'Tu reservación ha sido cancelada ',
  icon: 'success',
  showConfirmButton: false,
  timer: 2000
}

export const SearchData = () => {
  const { reserveData, resetContext } = useReserveContext()
  const navigate = useNavigate()

  const isSubmit = (e) => {
    e.preventDefault()

    Swal.fire(configurateSwalConfirm)
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(configurateSwalComplete)
          deleteReservation(reserveData.reservationCode)
          setTimeout(() => {
            navigate('/reserve')
            resetContext()
          }, 2000)
        }
      })
  }

  return (
    <div className='SearchData'>
      <ReserveCompleteData />
      <form onSubmit={isSubmit} data-testid='SearchData'>
        <input type='submit' value='Cancelar Reservación' />
      </form>
    </div>
  )
}
