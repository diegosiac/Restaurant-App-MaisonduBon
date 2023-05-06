import './alerts.css'

export const Alerts = ({ message, type, icon }) => {
  const isContendIcon = icon ? { marginLeft: '10px' } : {}

  return (
    <div className='alerts-content'>
      {icon}
      <p
        className={`alerts alerts-${type}`}
        style={isContendIcon}
        aria-label='alerts'
      >
        {message}
      </p>
    </div>
  )
}
