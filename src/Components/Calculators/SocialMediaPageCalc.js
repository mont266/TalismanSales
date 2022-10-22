import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import useWindowDimensions from "../../Hooks/ScreenDimensions"

const facebookCost = 25.0
const twitterCost = 25.0

const SocialMediaPageCalc = () => {
  const { width } = useWindowDimensions()

  const [facebookQty, setFacebookQty] = useState(0)
  const [twitterQty, setTwitterQty] = useState(0)
  const [facebookRes, setFacebookRes] = useState(0)
  const [twitterRes, setTwitterRes] = useState(0)
  const [multi, setMulti] = useState(0)
  const [initRes, setInitRes] = useState(0)

  const [facebook, setFacebook] = useState("no")
  const [twitter, setTwitter] = useState("no")
  const [showCost, setShowCost] = useState(false)
  const [formWidth, setFormWidth] = useState(0)

  useEffect(() => {
    if (width < 500) {
      setFormWidth(350)
    } else {
      setFormWidth(600)
    }
  }, [width])

  useEffect(() => {
    if (facebook === "yes") {
      setFacebookQty(1)
      setFacebookRes(facebookCost * facebookQty)
    } else {
        setFacebookQty(0)
        setFacebookRes(facebookCost * facebookQty)
    }
  }, [facebook, facebookQty])

  useEffect(() => {
    if (twitter === "yes") {
      setTwitterQty(1)
      setTwitterRes(twitterCost * twitterQty)
    } else {
        setTwitterQty(0)
        setTwitterRes(twitterCost * twitterQty)
    }
  }, [twitter, twitterQty])

  useEffect(() => {
    if (facebook === "yes" && twitter === "yes") {
      setMulti(15.0)
    } else {
      setMulti(0)
    }
  }, [facebook, twitter])

  const handleFacebook = (event) => {
    setFacebook(event.target.value)
  }

  const handleTwitter = (event) => {
    setTwitter(event.target.value)
  }

  const calculateCost = () => {
    setShowCost(true)

    setInitRes(
        facebookRes + twitterRes - multi
    )
  }

  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="facebook">Do You Need A Facebook Page?</InputLabel>
          <Select
            labelId="facebook"
            id="facebook"
            label="Do You Need A Facebook Page?"
            onChange={handleFacebook}
            value={facebook}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="twitter">Do You Need A Twitter Page?</InputLabel>
          <Select
            labelId="twitter"
            id="twitter"
            label="Do You Need A Twitter Page?"
            onChange={handleTwitter}
            value={twitter}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {showCost ? (
        <div style={{ textAlign: "center", backgroundColor: '#3A2C6E', minWidth: formWidth, padding: 4 }}>
          <Typography style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Full payment: £ {initRes}</Typography>
        </div>
      ) : null}
      <Button
        style={{ backgroundColor: '#3A2C6E', fontSize: 20 }}
        onClick={calculateCost}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, minWidth: formWidth }}>
        Calculate
      </Button>
    </Grid>
  )
}

export default SocialMediaPageCalc
