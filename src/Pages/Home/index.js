import React, { useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Button from "@mui/material/Button"

import useWindowDimensions from "../../Hooks/ScreenDimensions"
import MobileTabs from "../../Components/MobileTabs"

import logo from "./logo.svg"
import "./Home.css"

function Home() {
  const { height, width } = useWindowDimensions()
  const [website, setWebsite] = useState("")
  const [value, setValue] = useState("one")

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
        <>
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
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Level of Expected Maintainence
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Level of Expected Maintainence"
                onChange={handleChange}>
                <MenuItem value={10}>None</MenuItem>
                <MenuItem value={20}>Low</MenuItem>
                <MenuItem value={30}>Medium</MenuItem>
                <MenuItem value={40}>High</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Content Creation?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Content Creation?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Live Chat Support?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Live Chat Support?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                E-Commerce Integration?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="E-Commerce Integration?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Blog?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Blog?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Analytics?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Analytics?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Web Hosting?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Analytics?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Domain Registration?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Domain Registration?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 220, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Talisman Webs Watermark?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={website}
                label="Talisman Webs Watermark?"
                onChange={handleChange}>
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Calculate
          </Button>
        </>
      ) : null}
    </div>
  )
}

export default Home
