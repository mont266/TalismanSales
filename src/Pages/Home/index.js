import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../Contexts/AuthContext"

import useWindowDimensions from "../../Hooks/ScreenDimensions"
import MobileTabs from "../../Components/MobileTabs"

import FullWebsiteCalc from "../../Components/Calculators/FullWebsiteCalc"
import LandingPageCalc from "../../Components/Calculators/LandingPageCalc"
import AcommodationWebsiteCalc from "../../Components/Calculators/AcommodationWebsiteCalc"
import SocialMediaPageCalc from "../../Components/Calculators/SocialMediaPageCalc"

import logo from "./biglogo.png"
import "./Home.css"

function Home() {
  const { width } = useWindowDimensions()
  const navigation = useNavigate()
  const { logout } = useAuth()
  const [value, setValue] = useState("one")
  const [authValue, setAuthValue] = useState("")
  const [mainTitle, setMainTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    if (width < 500) {
      setValue("")
    }
  }, [width])

  useEffect(() => {
    if (width < 500) {
      setMainTitle('h4')
      setSubTitle('h6')
    } else {
      setMainTitle('h3')
      setSubTitle('h5')
    }
  }, [width])

  const signOut = () => {
    logout()
    navigation('/')
  }

  const handleAuthTabChange = (event, newAuthValue) => {
    setAuthValue(newAuthValue)
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="center">
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Typography textAlign='center' fontWeight='bold' component="h1" variant={mainTitle}>
            Talisman Sales
          </Typography>
          <Typography textAlign='center' fontWeight='bold' component="h1" variant={subTitle}>
            Quote Calculator
          </Typography>
      {width < 500 ? (
        <MobileTabs />
      ) : (
        <>
        <Box sx={{ width: "100%", marginBottom: 5 }}>
          <Tabs
            centered
            value={authValue}
            onChange={handleAuthTabChange}
            aria-label="secondary tabs example">
              {/*<Tab style={{color: '#333', fontWeight: 'bolder'}} value="resetPass" label="Reset Password" onClick={() => navigation('/emailStep')} />*/}
            <Tab style={{color: '#FF3947', fontWeight: 'bolder'}} value="logout" label="Logout" onClick={signOut} />
          </Tabs>
        </Box>
        <Box sx={{ width: "100%", marginBottom: 5 }}>
          <Tabs
            centered
            value={value}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example">
            <Tab value="one" label="Full Website" />
            <Tab value="two" label="Landing Page" />
            <Tab value="three" label="Acommodation Website" />
            <Tab value="four" label="Social Media Page" />
          </Tabs>
        </Box>
        </>
      )}

      {value === "one" ? <FullWebsiteCalc /> : null}
      {value === "two" ? <LandingPageCalc /> : null}
      {value === "three" ? <AcommodationWebsiteCalc /> : null}
      {value === "four" ? <SocialMediaPageCalc /> : null}
    </div>
  )
}

export default Home
