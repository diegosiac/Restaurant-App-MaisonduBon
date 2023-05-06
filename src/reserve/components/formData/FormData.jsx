import { useEffect } from 'react'
import { useForm, useReserveContext } from '../../../hooks'
import { regexValidation, setReservation, pageCurrent } from '../../../helpers'
import { Input } from '../input/Input'
import './formData.css'

const userFormFields = {
  name: '',
  lastName: '',
  email: '',
  phone: ''
}

const { nameAndLastname, email, phone } = regexValidation

const userFormValidations = {
  name: [(value) => nameAndLastname.test(value), 'Su nombre debe contener 2 caracteres'],
  lastName: [(value) => nameAndLastname.test(value), 'Su apellido debe contener 2 caracteres'],
  email: [(value) => email.test(value), 'El correo no es valido'],
  phone: [(value) => phone.test(value), 'El número de teléfono no es valido (no agregue el +)']
}

export const FormData = ({ setIsFormValid }) => {
  const { reserveData, setProcess, setUser, setReserveData, setChangeCheking } = useReserveContext()

  const {
    name,
    lastName,
    email,
    phone,
    formState,
    onInputChange,
    nameValid,
    lastNameValid,
    emailValid,
    phoneValid,
    isFormValid
  } = useForm(userFormFields, userFormValidations)

  useEffect(() => {
    setIsFormValid(isFormValid)
  }, [isFormValid])

  const isSubmit = async (e) => {
    e.preventDefault()
    setChangeCheking(true)
    const idReservation = await setReservation({ ...formState, ...reserveData })

    if (!idReservation.ok) return

    setUser(formState)
    setReserveData({ ...reserveData, reservationCode: idReservation.idDoc })
    setChangeCheking(false)
    setProcess(pageCurrent.RESERVED)
  }

  return (
    <form id='Reserver' className='FormData-Container' onSubmit={isSubmit} data-testid='form'>
      <Input
        type='text'
        name='name'
        placeholder='Nombre'
        value={name}
        onInputChange={onInputChange}
        inputValid={nameValid}
      />
      <Input
        type='text'
        name='lastName'
        placeholder='Apellido'
        value={lastName}
        onInputChange={onInputChange}
        inputValid={lastNameValid}
      />
      <Input
        type='email'
        name='email'
        placeholder='E-mail'
        value={email}
        onInputChange={onInputChange}
        inputValid={emailValid}
      />
      <Input
        type='tel'
        name='phone'
        placeholder='Número de teléfono'
        value={phone}
        onInputChange={onInputChange}
        inputValid={phoneValid}
      />
    </form>
  )
}
