import React, { useState } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import FullWebsiteCalc from "../../Components/Calculators/FullWebsiteCalc"
import LandingPageCalc from "../../Components/Calculators/LandingPageCalc"
import AcommodationWebsiteCalc from "../../Components/Calculators/AcommodationWebsiteCalc"
import SocialMediaPageCalc from "../../Components/Calculators/SocialMediaPageCalc"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

export default function MobileTabs() {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Box sx={{ bgcolor: "background.paper", width: '100%' }}>
      <AppBar position="static">
        <Tabs
          wrapped={'true'}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="Full Website" {...a11yProps(0)} />
          <Tab label="Landing Page" {...a11yProps(1)} />
          <Tab label="Acommodation Website" {...a11yProps(2)} />
          <Tab label="Social Media Page" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {value === 0 ? (<FullWebsiteCalc />) : null}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {value === 1 ? (<LandingPageCalc />) : null}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {value === 2 ? (<AcommodationWebsiteCalc />) : null}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        {value === 3 ? (<SocialMediaPageCalc />) : null}
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
