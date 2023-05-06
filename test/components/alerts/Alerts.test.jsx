import { render, screen } from '@testing-library/react'
import { Alerts } from '../../../src/components/alerts/Alerts'

describe('Pruebas en <Alerts/>', () => {
  const message = 'Datos erroneos'

  test('debe renderizar el componente con una alerta de tipo "warning" y con un icono ', () => {
    const type = 'warning'
    const marginLeft = '10px'
    const icon = <h1 aria-label='icon' />

    render(
      <Alerts message={message} type={type} icon={icon} />
    )

    const text = screen.getByText(message)
    const p = screen.getByLabelText('alerts')
    const componentIcon = screen.getByLabelText('icon')

    expect(text).toBeTruthy()
    expect(p.className).toContain(type)
    expect(p.style.marginLeft).toContain(marginLeft)
    expect(componentIcon).toBeTruthy()
  })

  test('debe de renderizar el componente con una alerta de tipo "error" y sin icono ', () => {
    const type = 'error'

    render(
      <Alerts message={message} type={type} />
    )

    const text = screen.getByText(message)
    const p = screen.getByLabelText('alerts')

    expect(text).toBeTruthy()
    expect(p.className).toContain(type)
    expect(p.style.marginLeft).toBe('')
  })
})
