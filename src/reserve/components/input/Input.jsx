import ErrorIcon from '@mui/icons-material/Error'
import './input.css'

export const Input = ({ onInputChange, inputValid, ...props }) => {
  return (
    <div className='MD-input-container'>
      <input
        onChange={onInputChange}
        className='MD-input'
        {...props}
      />
      {
        inputValid && <ErrorIcon className='input-icon' sx={{ color: '#ff7b00' }} />
      }
      <span className={inputValid ? 'input-error' : ''}>{inputValid || 'Valid'}</span>
    </div>
  )
}
