import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

function InputPassword({ name, inputValue, handleInput, label, inputSize, type }) {
  const classes = useStyles()
  return (
    <TextField
      name={name}
      autoComplete="new-password"
      type={type}
      className={classes.textField}
      size={inputSize}
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

export default InputPassword;