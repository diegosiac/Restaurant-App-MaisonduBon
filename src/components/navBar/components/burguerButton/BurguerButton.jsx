import './burguerButton.css'

export const BurguerButton = ({ isOpen, openOrClose }) => {
  const open = isOpen ? 'open' : ''

  return (
    <div className='Nav-hamburger'>
      <div className={`menu btn ${open}btn`} onClick={openOrClose}>
        <span className={`icon ${open}`} />
      </div>
    </div>
  )
}
