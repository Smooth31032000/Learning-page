import { DatePicker } from "@mui/x-date-pickers";

function InputDate({ inputValue, handleInput, label, defaultValue, type, format }) {
  return (
    <DatePicker
      type={type}
      format={format}
      label={label}
      defaultValue={defaultValue}
      value={inputValue}
      onChange={handleInput}
    />
  )
}



export default InputDate;