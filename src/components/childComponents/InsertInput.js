import { Button, TextField } from "@mui/material";
function Insertinput(props) {

  return (
    <form onSubmit={props.onSubmit} className="form" style={{ display: "flex", alignItems: "center", height: "80px", marginRight: "5px" }}>
      <TextField sx={{ m: 1, width: '500px' }}
        id="outlined-basic"
        label="Enter Your Jobs"
        variant="outlined"
        placeholder="VD: Quét Nhà"
        value={props.value}
        onChange={props.handleInput}
      />
      <Button type="submit" variant="contained">submit</Button>
    </form>
  )
}

export default Insertinput;