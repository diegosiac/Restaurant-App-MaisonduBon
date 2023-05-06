import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'User',
    email: 'user@hotmail.com'
  }
  const initialFormValidations = {
    name: [(value) => value.trim().length >= 3, 'Debe contener al menos 4 caracteres'],
    email: [(value) => value.includes('@'), 'Debe de incluir un @']
  }

  test('debe de regresar los valores por defecto', () => {
    const isValidName = initialForm.name.length > 3 ? expect.any(Object) : expect.any(String)
    const isValidEmail = initialForm.email.includes('@') ? expect.any(Object) : expect.any(String)

    const { result } = renderHook(() => useForm(initialForm, initialFormValidations))

    expect(result.current).toEqual(
      {
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function),
        nameValid: isValidName,
        emailValid: isValidEmail,
        isFormValid: expect.any(Boolean)
      }
    )
  })

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'newUser'

    const { result } = renderHook(() => useForm(initialForm))

    act(() => { result.current.onInputChange({ target: { name: 'name', value: newValue } }) })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('debe de realizar el reset del formulario', () => {
    const newValue = 'newUser'

    const { result } = renderHook(() => useForm(initialForm))

    act(() => {
      result.current.onInputChange({ target: { name: 'name', value: newValue } })
      result.current.onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })

  test('debe de ser valido el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm, initialFormValidations))
    const { isFormValid, nameValid, emailValid } = result.current

    expect(isFormValid).toBeTruthy()
    expect(nameValid).toBeNull()
    expect(emailValid).toBeNull()
  })

  test('debe de ser invalido el formulario', () => {
    const initialFormInValid = {
      name: 'Us',
      email: 'userhotmail.com'
    }

    const { result } = renderHook(() => useForm(initialFormInValid, initialFormValidations))
    const { isFormValid, nameValid, emailValid } = result.current

    const textInValidName = initialFormValidations.name[1]
    const textInValidEmail = initialFormValidations.email[1]

    expect(isFormValid).toBeFalsy()
    expect(nameValid).toBe(textInValidName)
    expect(emailValid).toBe(textInValidEmail)
  })
})
