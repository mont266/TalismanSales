import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const facebookCost = 25.0
const twitterCost = 25.0

const SocialMediaPageCalc = () => {
  const [facebookQty, setFacebookQty] = useState(0)
  const [twitterQty, setTwitterQty] = useState(0)
  const [facebookRes, setFacebookRes] = useState(0)
  const [twitterRes, setTwitterRes] = useState(0)
  const [multi, setMulti] = useState(0)
  const [initRes, setInitRes] = useState(0)

  const [facebook, setFacebook] = useState("no")
  const [twitter, setTwitter] = useState("no")
  const [showCost, setShowCost] = useState(false)

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
      setMulti(10.0)
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
    <>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
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
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
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
        <div style={{ textAlign: "center" }}>
          <Typography>Full payment: £ {initRes}</Typography>
        </div>
      ) : null}
      <Button
        onClick={calculateCost}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}>
        Calculate
      </Button>
    </>
  )
}

export default SocialMediaPageCalc
