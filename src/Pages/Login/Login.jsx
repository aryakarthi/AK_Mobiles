import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import Users from "../../Users/Users.json";

import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { stateContext } from "../../Components/Context/Context";

const Login = () => {
  const { state, dispatch } = useContext(stateContext);
  console.log("login state", state);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateHome = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = Users.find(
      (item) => item.username === username && item.password === password
    );
    console.log(checkUser);
    if (checkUser) {
      dispatch({ type: "LOGIN", payload: true });
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigateHome("/Home");
    }
    console.log("login state", state);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Grid>
        <Paper className="login-paper" elevation={10}>
          <Grid align={"center"}>
            <Avatar className="login-avatar">
              <LoginIcon />
            </Avatar>
            <Typography variant="h5">Login</Typography>
          </Grid>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              label="Username"
              variant="standard"
              placeholder="Enter username"
              value={username}
              fullWidth
              required
              onChange={(e) => setUsername(e.target.value)}
              error={!username}
              helperText={!username ? "Required" : ""}
            />
            <TextField
              label="Password"
              variant="standard"
              placeholder="Enter password"
              type="password"
              value={password}
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              error={!password}
              helperText={
                !password
                  ? "Required"
                  : "Don't share your password with anyone.!"
              }
            />
            {/* <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            /> */}
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Login
            </Button>
            {/* <Typography>
              <Link href="#">Forgot Password.?</Link>
            </Typography>
            <Typography>
              Do you have an account.?<Link href="#"> Sign Up</Link>
            </Typography> */}
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
