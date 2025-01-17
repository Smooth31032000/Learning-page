import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const classes = useStyles()
  const navigate = useNavigate()
  const [username, setUser] = useState("")
  const [userPassword, setPassword] = useState("")
  // const [message, setMessage] = useState('');

  const handleInputUser = (event) => {
    const inputValueUser = event.target.value
    setUser(inputValueUser)
  }

  const handleInputPassword = (event) => {
    const inputValuePassword = event.target.value
    setPassword(inputValuePassword)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = {
      username: username,
      password: userPassword,
    }
    try {
      const response = await axios.post('http://localhost:3000/login', body);
      // console.log(response.data);
      // setMessage('Login successful!');
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setPassword("")
      setUser("")
      navigate("/mainpage")
    } catch (error) {
      console.error('There was an error!', error);
      // setMessage('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
  }

  return (
    <form className={classes.formLogin} onSubmit={handleSubmit}>
      <Typography className={classes.Title}>Sign In</Typography>
      <Box className={classes.inputForm}>
        <TextField
          className={classes.textField}
          value={username}
          label="Username"
          variant="outlined"
          onChange={handleInputUser}
        />
        <TextField
          className={classes.textField}
          value={userPassword}
          label="Password"
          variant="outlined"
          type="password"
          onChange={handleInputPassword}
        />
      </Box>
      <Box>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
        >submit</Button>
      </Box>
    </form>
  );
}
const useStyles = makeStyles(theme => ({
  formLogin: {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flex-direction": "column",
    "gap": "20px",
  },
  inputForm: {
    "display": "flex",
    "flex-direction": "column",
    "gap": "10px",
  },
  Title: {
    "width": "278px",
    "textAlign": "center",
    "fontSize": "64px !important",
    "fontFamily": "Inter !important",
  },
  textField: {
    "width": "407px",
    "border-radius": "6px !important",
  },
  button: {
    "width": "413px",
    "height": "53px",
    "border-radius": "50px !important",
    "opacity": "0px",
    "background": "#9C69E2 !important",
  }
}));

export default Login;