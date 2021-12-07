import React, { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate, useLocation } from "react-router-dom"
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

function useQuery() {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

const ResetPassword = () => {
  const navigation = useNavigate()
  const [password, setPassword] = useState("")
  
  const passwordChangedToast = () => toast.success('Password was succesfully changed.')

  const { resetPassword } = useAuth()
  const query = useQuery()

  const passChange = (event) => {
    setPassword(event.target.value)
  }

  const resetUserPass = () => {
    resetPassword(query.get("oobCode"), password)
      .then((res) => {
        passwordChangedToast()
        navigation("/")
      })
      .catch((error) => toast.error(error.message))
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
            Reset Password
          </Typography>
          <Box sx={{ mt: 1 }}>
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
              onClick={resetUserPass}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Reset Password
            </Button>
            <Button
              style={{ backgroundColor: "#FF3947", fontSize: 20 }}
              onClick={() => navigation('/home')}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Back
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

export default ResetPassword
