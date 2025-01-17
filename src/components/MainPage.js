import { Box, Button, Container } from "@mui/material";
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
      <Box className={classes.HeadLine}>
        <Box>
          <img src={Logo} alt="#" />
        </Box>
        <Box className={classes.buttonOutsite}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => { navigate("/profile ") }}
          >Profile</Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleLogout}
          >Log Out</Button>
        </Box>
      </Box>
      <Box className={classes.onTop}>
        <Box className={classes.content}>
          <Box variant="h2" className={classes.title}>Save your data storage here.</Box>
          <Box className={classes.description}>Data Warehouse is a data storage area that has been
            tested for security, so you can store your data here
            safely but not be afraid of being stolen by others.</Box>
          <Button
            sx={{ width: "168px", height: "59px" }}
            className={classes.button}
            variant="contained"
          >Learn More</Button>
        </Box>
        <Box className={classes.image}>
          <img src={sampleImage} alt="#"></img>
        </Box>
        <Box className={classes.features}>
          <Box>
            <Box className={classes.featureTitle}>Features</Box>
            <Box className={classes.featureText}>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</Box>
          </Box>
        </Box>
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
  HeadLine: {
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
  onTop: {
    "marginTop": "129px",
    "display": "grid",
    "gridTemplateColumns": "repeat(2, auto) ",
  },
  content: {
    "width": "340px",
    "height": "461px",
    "display": "flex",
    "flex-direction": "column",
    "gap": "50px",
  },
  title: {
    "fontFamily": "Helvetica",
    "wordWrap": "break-word",
    "width": "640px",
    "fontSize": "80px",
    "fontWeight": "700",
    "color": "#212353"
  },
  description: {
    "wordWrap": "break-word",
    "width": "377px",
    "lineHeight": "28.8px",
    "fontWeight": "500",
    "fontSize": "18px",
    "color": "#4B5D68"
  },
  image: {
    "display": "flex",
    "width": "759px",
    "height": "561px",
    "alignItems": "end",
    "zIndex": "-1",
  },
  features: {
    "marginTop": "164px",
    "display": "flex",
    "textAlign": "center",
    "position": "relative",
    "left": "350px"
  },
  featureTitle: {
    "fontWeight": "700 ",
    "fontSize": "40px ",
  },
  featureText: {
    "width": "575px",
    "fontWeight": "500 ",
    "fontSize": "18px ",
  }
}))

export default MainPage