import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';

function InputDate({ inputValue, handleInput, label, inputSize, type, format }) {
  return (
    <DatePicker
      type={type}
      format={format}
      label={label}
      defaultValue={dayjs('2022-04-17')}
    />
  )
}



export default InputDate;