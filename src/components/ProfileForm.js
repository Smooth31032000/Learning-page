import { Box, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDate from "./inputComponents/InputDate";
import InputEmail from "./inputComponents/InputEmail";
import InputName from "./inputComponents/InputName";
import InputPassword from "./inputComponents/InputPassword";
import handleDateChange from "../common/handleConvertDate";



function ProfileForm() {
  const classes = useStyles()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [disabled, setDisabled] = useState(true)


  const handleSubmit = (event) => {
    event.preventDefault()
    const body = {
      name: name,
      email: email,
      password: password,
      dateOfBirth: handleDateChange(dateOfBirth.$d)
    }
    setEmail("")
    setName("")
    setPassword("")
    setDisabled(true)
    console.log(body);
  }

  const handleInputName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setDisabled(inputValue.trim().length === 0);
  }

  const handleInputEmail = (event) => {
    const inputValue = event.target.value
    setEmail(inputValue)
    setDisabled(inputValue.trim().length === 0);
  }

  const handleInputPassword = (event) => {
    const inputValue = event.target.value
    setPassword(inputValue)
    setDisabled(inputValue.trim().length === 0);
  }

  const handleInputDateOfBirth = (value) => {
    setDateOfBirth(value)
  }


  return (
    <Container>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => { navigate("/mainpage") }}
      >
        ForBack
      </Button>
      <Box className={classes.multiform}>
        <form onSubmit={handleSubmit} >
          <Box className={classes.inputForm}>
            <InputName
              name="name"
              type="text"
              label="Name"
              inputValue={name}
              handleInput={handleInputName}
            />
            <InputEmail
              name="email"
              type="email"
              label="Email"
              inputValue={email}
              handleInput={handleInputEmail}
            />
            <InputPassword
              name="password"
              type="password"
              label="Password"
              inputValue={password}
              handleInput={handleInputPassword}
            />
            <InputDate
              type="date"
              label="Date of Birth"
              format="DD/MM/YYYY"
              inputValue={dateOfBirth}
              defaultValue={dayjs()}
              handleInput={handleInputDateOfBirth}
            />
          </Box>
          <Button type="submit" variant="contained" disabled={disabled}>
            submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
const useStyles = makeStyles(() => ({
  multiform: {
    "border": "1px solid ",
    "border-radius": "5px",
    "display": "flex",
    "justifyContent": "center",
    "padding": "20px",
  },
  inputForm: {
    "display": "grid",
    "gridTemplateColumns": "repeat(2, auto) ",
    "justifyContent": "center",
    "gap": "10px",
    "marginBottom": "10px"
  },
  button: {
    "background": "#9C69E2 !important",
    "width": "100px",
    "borderRadius": "50px !important",
  }
}))


export default ProfileForm;