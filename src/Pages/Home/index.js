import React, { useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import useWindowDimensions from "../../Hooks/ScreenDimensions"
import MobileTabs from "../../Components/MobileTabs"

import logo from "./logo.svg"
import "./Home.css"

function Home() {
  const { height, width } = useWindowDimensions()
  const [website, setWebsite] = useState('')
  const [value, setValue] = useState('one')

  const handleChange = (event) => {
    setWebsite(event.target.value)
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      {width < 500 ? (
        <MobileTabs />
      ) : (
        <Box sx={{ width: "100%", marginBottom: 10 }}>
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

      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <TextField
            required
            margin="normal"
            fullWidth
            id="pagesQT"
            label="How Many Web Pages?"
            name="pagesQty"
            autoFocus
            onChange={() => {}}
          />
        </FormControl>
      </Box>
    </div>
  )
}

export default Home
