import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

function InputName({ name, inputValue, handleInput, label, inputSize, type }) {
  const classes = useStyles()
  return (
    <TextField
      name={name}
      type={type}
      size={inputSize}
      className={classes.textField}
      label={label}
      value={inputValue}
      onChange={handleInput}
    />
  )
}
const useStyles = makeStyles(() => ({
  textField: {
    "width": "400px",
  }
}))
export default InputName;