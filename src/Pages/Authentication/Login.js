import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { useAuth } from "../../Contexts/AuthContext"

import "react-toastify/dist/ReactToastify.css"

const Copyright = (props) => {
  const CopyrightDate = new Date().getFullYear()
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.talismanwebs.com/">
        Talisman Webs
      </Link>{" "}
      {CopyrightDate}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

const Login = () => {
  const navigation = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()

  const emailChange = (event) => {
    setEmail(event.target.value)
  }

  const passChange = (event) => {
    setPassword(event.target.value)
  }

  const notifySuccess = () => {
    toast.success("Login succes", {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  // const notifyInvalidCredentials = () => {
  //   toast.error("Credentials are not valid", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   })
  // }

  const signIn = async () => {
    login(email, password)
    .then(res => {
      navigation("/home")
      notifySuccess()
    })
    .catch(error => {
      console.log(error.message)
      toast.error(error.message, {
        position: "bottom-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    })
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password).then(
    //     () => {
    //       navigate("/home")
    //       notifySuccess()
    //     }
    //   )
    //   console.log(user)
    // } catch (error) {
    //   toast.error(error.message, {
    //     position: "bottom-center",
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   })
    // }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={emailChange}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={passChange}
            />
            <Button
              onClick={signIn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login
