import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { toast, ToastContainer } from "react-toastify"
import logo from "../Home/biglogo.png"
import "../Home/Home.css"

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

const EmailStep = () => {
  const [email, setEmail] = useState("")

  const { forgotPassword, logout, currentUser } = useAuth()

  const checkEmailToast = () =>
    toast.success("Please check your email for password change. Also check your spam or trash inbox.")

  useEffect(() => {
    setEmail(currentUser.email)
  }, [currentUser.email])

  const continueToPassReset = async () => {
    try {
      forgotPassword(email)
      checkEmailToast()
      logout()
      navigation('/')
    } catch (e) {
      toast.error(e.message)
    }
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
          <Typography component="h1" variant="h5">
            Continue to reset password.
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
              value={email}
            />
            <Button
              style={{ backgroundColor: "#FF3947", fontSize: 20 }}
              onClick={continueToPassReset}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Continue
            </Button>
          </Box>
        </Box>
        <ToastContainer
          position="bottom-center"
          
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
        />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default EmailStep
