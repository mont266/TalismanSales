import React, { useState } from "react"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../Contexts/AuthContext"
import FullWebsiteCalc from "../../Components/Calculators/FullWebsiteCalc"
import LandingPageCalc from "../../Components/Calculators/LandingPageCalc"
import AcommodationWebsiteCalc from "../../Components/Calculators/AcommodationWebsiteCalc"
import SocialMediaPageCalc from "../../Components/Calculators/SocialMediaPageCalc"

export default function MobileTabs() {
  const [value, setValue] = useState("")
  const [authValue, setAuthValue] = useState("")
  const navigation = useNavigate()
  const { logout } = useAuth()

  const handleAuthTabChange = (event, newAuthValue) => {
    setAuthValue(newAuthValue)
  }

  const signOut = () => {
    logout()
    navigation('/')
  }

  return (
    <>
      <Box sx={{ width: "100%", marginBottom: 1 }}>
          <Tabs
            centered
            value={authValue}
            onChange={handleAuthTabChange}
            aria-label="secondary tabs example">
            <Tab style={{color: '#333', fontWeight: 'bolder'}} value="resetPass" label="Reset Password" onClick={() => navigation('/resetPassword')} />
            <Tab style={{color: '#FF3947', fontWeight: 'bolder'}} value="logout" label="Logout" onClick={signOut} />
          </Tabs>
        </Box>
      <ButtonGroup
        style={{ marginTop: 1 }}
        fullWidth
        variant="contained"
        aria-label="medium outline primary button group">
        <Button
          style={{ borderRadius: 0, height: 60 }}
          onClick={() => setValue("Full Website")}>
          Full Website
        </Button>
        <Button
          style={{ borderRadius: 0, height: 60 }}
          onClick={() => setValue("Landing Page")}>
          Landing Page
        </Button>
      </ButtonGroup>
      <ButtonGroup
        style={{ marginBottom: 25 }}
        fullWidth
        variant="contained"
        aria-label="medium outline primary button group">
        <Button
          style={{ borderRadius: 0, height: 60 }}
          onClick={() => setValue("Acommodation Website")}>
          Acommodation Website
        </Button>
        <Button
          style={{ borderRadius: 0, height: 60 }}
          onClick={() => setValue("Social Media Page")}>
          Social Media Page
        </Button>
      </ButtonGroup>
      {value === "Full Website" ? <FullWebsiteCalc /> : null}
      {value === "Landing Page" ? <LandingPageCalc /> : null}
      {value === "Acommodation Website" ? <AcommodationWebsiteCalc /> : null}
      {value === "Social Media Page" ? <SocialMediaPageCalc /> : null}
    </>
  )
}
