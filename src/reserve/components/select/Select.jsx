
export const Select = ({ onInputChange, textOption, options, ...props }) => {
  return (
    <select
      onChange={onInputChange}
      {...props}
    >
      <option value='none' hidden>{textOption}</option>
      {
          Object.entries(options).map(([value, text]) => <option key={value} value={value}>{text}</option>)
        }
    </select>
  )
}
