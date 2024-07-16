import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import sampleImage from "../assets/image1 1.png"
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router-dom";
function MainPage() {
  const classes = useStyles()
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
  }
  return (
    <Container className={classes.main}>
      <Box className={classes.onTop}>
        <Box>
          <img src={Logo} alt="#" />
        </Box>
        <Box className={classes.buttonOutsite}>
          <Button
            className={classes.button}
            variant="contained"
          >Profile</Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleLogout}
          >Log Out</Button>
        </Box>
      </Box>
      <Box className={classes.text}>
        <Typography variant="h2" className={classes.title}>Save your data storage here.</Typography>
        <Typography className={classes.description}>Data Warehouse is a data storage area that has been
          tested for security, so you can store your data here
          safely but not be afraid of being stolen by others.</Typography>
        <Button
          sx={{ width: "168px", height: "59px" }}
          className={classes.button}
          variant="contained"
        >Learn More</Button>
      </Box>
      <Box className={classes.image}>
        <img src={sampleImage} alt="#"></img>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  main: {
    "display": "flex",
    "alignContent": "center",
    "position": "relative"
  },
  onTop: {
    "display": "flex",
    "position": "absolute",
    "top": "10px",
    "justifyContent": "end",
    "gap": "40em",
    "height": "59px"
  },
  buttonOutsite: {
    "display": "flex",
    "gap": "31px",
    "float": "right",
  },
  button: {
    "background": "#9C69E2 !important",
    "width": "208px",
    "height": "59px",
    "borderRadius": "50px !important",
  },
  text: {
    "width": "640px",
    "height": "461px",
    "display": "flex",
    "flex-direction": "column",
    "gap": "20px",
    "flex": "50%",
  },
  title: {
    "fontFamily": "Helvetica",
    "wordWrap": "break-word",
    "height": "182px",
    "width": "540px",
    "fontSize": "80px",
    "fontWeight": "700",
    "color": "#212353"
  },
  description: {
    "wordWrap": "break-word",
    "width": "377px",
    "height": "119px",
    "lineHeight": "28.8px",
    "fontSize": "18px",
    "color": "#4B5D68"
  },
  image: {
    "width": "759px",
    "height": "401px",
    "position": "absolute",
    "bottom": "250px",
    "right": "60px",
    "zIndex": "-1",
  }
}))

export default MainPage