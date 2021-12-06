import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { useAuth } from "../../Contexts/AuthContext"
import useWindowDimensions from "../../Hooks/ScreenDimensions"

import logo from "../Home/biglogo.png"
import "../Home/Home.css"
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
  const [mainTitle, setMainTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width < 500) {
      setMainTitle('h4')
      setSubTitle('h6')
    } else {
      setMainTitle('h3')
      setSubTitle('h5')
    }
  }, [width])

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
      .then((res) => {
        navigation("/home")
        notifySuccess()
      })
      .catch((error) => {
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
          <Grid container direction="row" alignItems="center" justify="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Typography fontWeight='bold' component="h1" variant={mainTitle}>
            Talisman Sales
          </Typography>
          <Typography fontWeight='bold' component="h1" variant={subTitle}>
            A Talisman Webs Platform
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
              style={{ backgroundColor: "#FF3947", fontSize: 20 }}
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
