import React, { useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import logo from "./logo.svg"
import "./Home.css"

function Home() {
  const [website, setWebsite] = useState("")

  const handleChange = (event) => {
    setWebsite(event.target.value)
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Website/Service Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={website}
            label="Website/Service Type"
            onChange={handleChange}>
            <MenuItem value={10}>Full Website</MenuItem>
            <MenuItem value={20}>Landing Page</MenuItem>
            <MenuItem value={30}>Accommodation Website</MenuItem>
            <MenuItem value={40}>Social Media Page</MenuItem>
          </Select>
          <TextField
            required
            margin="normal"
            fullWidth
            id="Your Name"
            label="Your Name"
            name="name"
            autoFocus
            onChange={() => {}}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={() => {}}
          />
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
