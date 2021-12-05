import React, { useState } from "react"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import useWindowDimensions from "../../Hooks/ScreenDimensions"
import MobileTabs from "../../Components/MobileTabs"

import FullWebsiteCalc from "../../Components/Calculators/FullWebsiteCalc"
import LandingPageCalc from '../../Components/Calculators/LandingPageCalc'
import AcommodationWebsiteCalc from '../../Components/Calculators/AcommodationWebsiteCalc'
import SocialMediaPageCalc from '../../Components/Calculators/SocialMediaPageCalc'

import logo from "./biglogo.png"
import "./Home.css"

function Home() {
  const { width } = useWindowDimensions()
  const [value, setValue] = useState("one")

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      {width < 500 ? (
        <MobileTabs />
      ) : (
        <Box sx={{ width: "100%", marginBottom: 5 }}>
          <Tabs
            centered
            value={value}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example">
            <Tab value="one" label="Full Website" />
            <Tab value="two" label="Landing Page" />
            <Tab value="three" label="Accommodation Website" />
            <Tab value="four" label="Social Media Page" />
          </Tabs>
        </Box>
      )}

      {value === "one" ? (
        <FullWebsiteCalc />
      ) : null}
      {value === "two" ? (<LandingPageCalc />) : null}
      {value === "three" ? (<AcommodationWebsiteCalc />) : null}
      {value === "four" ? (<SocialMediaPageCalc />) : null}
    </div>
  )
}

export default Home
