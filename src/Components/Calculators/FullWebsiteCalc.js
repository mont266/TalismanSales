import React, { useEffect, useState } from "react"
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const websiteCost = 450.0
const pageCost = 8.0
const contentCost = 60.0
const blogCost = 60.0
const analyticsCost = 25.0
const hostCost = 6.0
const domainFee = 10.0
const liveChatCost = 10.0
const ecommerceCost = 300.0
const ecommerceMonCost = 12.0
const creditDisc = 10.0
const mainLow = 10.0
const mainMed = 15.0
const mainHigh = 25.0

const FullWebsiteCalc = () => {
  const [pageQty, setPageQty] = useState(0)
  const [contentQty, setContentQty] = useState(0)
  const [blogQty, setBlogQty] = useState(0)
  const [analyticsQty, setAnalyticsQty] = useState(0)
  const [hostQty, setHostQty] = useState(0)
  const [domainQty, setDomainQty] = useState(0)
  const [livechatQty, setLivechatQty] = useState(0)
  const [ecommerceQty, setEcommerceQty] = useState(0)
  const [ecommerceMonQty, setEcommerceMonQty] = useState(0)
  const [creditQty, setCreditQty] = useState(0)
  //const [pageRes, setPageRes] = useState(0)
  //const [contentRes, setContentRes] = useState(0)
  //const [blogRes, setBlogRes] = useState(0)
  //const [analyticsRes, setAnalyticsRes] = useState(0)
  //const [hostRes, setHostRes] = useState(0)
  //const [domainRes, setDomainRes] = useState(0)
  //const [liveChatRes, setLiveChatRes] = useState(0)
  //const [ecommerceRes, setEcommerceRes] = useState(0)
  //const [ecommerceMonRes, setEcommerceMonRes] = useState(0)
  //const [creditRes, setCreditRes] = useState(0)
  const [mainRes, setMainRes] = useState(0)
  const [initRes, setInitRes] = useState(0)
  const [resMonthly, setResMonthly] = useState(0)
  const [resYearly, setResYearly] = useState(0)
  const [deposit, setDeposit] = useState(0)
  const [savings, setSavings] = useState(0)
  const [maintenance, setMaintenance] = useState("none")
  const [contentCreation, setContentCreation] = useState("no")
  const [liveChat, setLiveChat] = useState("no")
  const [ecommerce, setEcommerce] = useState("no")
  const [blog, setBlog] = useState("no")
  const [analytics, setAnalytics] = useState("no")
  const [webHosting, setWebHosting] = useState("no")
  const [domainReg, setDomainReg] = useState("no")
  const [talismanWatermark, setTalismanWatermark] = useState("no")
  const [discount, setDiscount] = useState("0 %")
  const [showCost, setShowCost] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)

  console.log('ec: ', ecommerceQty)
  console.log('ecmon', ecommerceMonQty)
  console.log('content: ', contentQty)

  useEffect(() => {
    if (maintenance === "low") {
      setMainRes(mainLow)
    } else if (maintenance === "medium") {
      setMainRes(mainMed)
    } else if (maintenance === "high") {
      setMainRes(mainHigh)
    } else if (maintenance === "none") {
      setMainRes(0)
    }
  }, [maintenance])

  useEffect(() => {
    if (contentCreation === 'yes') {
      setContentQty(1)
    } else {
      setContentQty(0)
    }
  }, [contentCreation])

  useEffect(() => {
    if (liveChat === 'yes') {
      setLivechatQty(1)
    } else {
      setLivechatQty(0)
    }
  }, [liveChat])

  useEffect(() => {
    if (ecommerce === 'yes') {
      setEcommerceQty(1)
      setEcommerceMonQty(1)
    } else {
      setEcommerceQty(0)
      setEcommerceMonQty(0)
    }
  }, [ecommerce])

  useEffect(() => {
    if (blog === 'yes') {
      setBlogQty(1)
    } else {
      setBlogQty(0)
    }
  }, [blog])

  useEffect(() => {
    if (analytics === 'yes') {
      setAnalyticsQty(1)
    } else {
      setAnalyticsQty(0)
    }
  }, [analytics])

  useEffect(() => {
    if (webHosting === 'yes') {
      setHostQty(1)
    } else {
      setHostQty(0)
    }
  }, [webHosting])

  useEffect(() => {
    if (domainReg === 'yes') {
      setDomainQty(1)
    } else {
      setDomainQty(0)
    }
  }, [domainReg])

  useEffect(() => {
    if (talismanWatermark === 'yes') {
      setCreditQty(1)
    } else {
      setCreditQty(0)
    }
  }, [talismanWatermark])

  const handlePageQty = (event) => {
    setPageQty(event.target.value)
  }

  const handleMaintenance = (event) => {
    setMaintenance(event.target.value)
  }

  const handleContent = (event) => {
    setContentCreation(event.target.value)
  }

  const handleLiveChat = (event) => {
    setLiveChat(event.target.value)
  }

  const handleEcommerce = (event) => {
    setEcommerce(event.target.value)
  }

  const handleBLog = (event) => {
    setBlog(event.target.value)
  }

  const handleAnalytics = (event) => {
    setAnalytics(event.target.value)
  }

  const handleWebHosting = (event) => {
    setWebHosting(event.target.value)
  }

  const handleDomainReg = (event) => {
    setDomainReg(event.target.value)
  }

  const handleWatermark = (event) => {
    setTalismanWatermark(event.target.value)
  }

  const handleDiscount = (event) => {
    setDiscount(event.target.value)
  }

  const calculateCost = () => {
      setShowCost(true)
      const pageRes = (pageCost * pageQty) + (1.5 * pageQty)
      const contentRes = contentCost * contentQty
      const blogRes = blogCost * blogQty
      const analyticsRes = analyticsCost * analyticsQty
      const hostRes = hostCost * hostQty
      const domainRes = domainFee * domainQty
      const liveChatRes = liveChatCost * livechatQty
      const ecommerceRes = ecommerceCost * ecommerceQty
      const ecommerceMonRes = ecommerceMonCost * ecommerceMonQty
      const creditRes = creditDisc * creditQty

      if (discount !== "0 %") {
        setShowDiscount(true)
      } else {
        setShowDiscount(false)
      }
  
      if (discount === "0 %") {
        setInitRes(initRes)
        setSavings(0)
      } else if (discount === "5 %") {
        setInitRes(initRes * 0.95)
        setSavings(initRes * 0.05)
      } else if (discount === "10 %") {
        setInitRes(initRes * 0.9)
        setSavings(initRes * 0.1)
      } else if (discount === "15 %") {
        setInitRes(initRes * 0.85)
        setSavings(initRes * 0.15)
      } else if (discount === "20 %") {
        setInitRes(initRes * 0.8)
        setSavings(initRes * 0.2)
      }
      
      setInitRes(
        websiteCost +
          pageRes +
          contentRes +
          blogRes +
          analyticsRes +
          hostRes +
          liveChatRes +
          ecommerceRes +
          domainRes -
          creditRes
      )

      setResMonthly(hostRes + mainRes + ecommerceMonRes)
      setResYearly(resMonthly * 12 - 12)
      setDeposit(initRes / 2)
  }

  return (
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
            onChange={handlePageQty}
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="maintenance-level">
            Level of Expected Maintainence
          </InputLabel>
          <Select
            labelId="maintenance-level"
            id="maintenance-level"
            label="Level of Expected Maintainence"
            onChange={handleMaintenance}
            defaultValue={"none"}>
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="content-creation">
            Content Creation?
          </InputLabel>
          <Select
            labelId="content-creation"
            id="content-creation"
            label="Content Creation?"
            onChange={handleContent}
            value={contentCreation}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="live-chat">
            Live Chat Support?
          </InputLabel>
          <Select
            labelId="live-chat"
            id="live-chat"
            label="Live Chat Support?"
            onChange={handleLiveChat}
            value={liveChat}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="ecommerce">
            E-Commerce Integration?
          </InputLabel>
          <Select
            labelId="ecommerce"
            id="ecommerce"
            label="E-Commerce Integration?"
            onChange={handleEcommerce}
            value={ecommerce}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="blog">Blog?</InputLabel>
          <Select
            labelId="blog"
            id="blog"
            label="Blog?"
            onChange={handleBLog}
            value={blog}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="analytics">Analytics?</InputLabel>
          <Select
            labelId="analytics"
            id="analytics"
            label="Analytics?"
            onChange={handleAnalytics}
            value={analytics}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Web Hosting?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Web Hosting?"
            onChange={handleWebHosting}
            value={webHosting}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
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
            label="Domain Registration?"
            onChange={handleDomainReg}
            value={domainReg}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
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
            label="Talisman Webs Watermark?"
            onChange={handleWatermark}
            value={talismanWatermark}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Discount</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Discount"
            onChange={handleDiscount}
            value={discount}>
            <MenuItem value={"0 %"}>0 %</MenuItem>
            <MenuItem value={"5 %"}>5 %</MenuItem>
            <MenuItem value={"10 %"}>10 %</MenuItem>
            <MenuItem value={"15 %"}>15 %</MenuItem>
            <MenuItem value={"20 %"}>20 %</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {showCost ? (
        <div style={{textAlign: 'center'}}>
          <Typography >Full payment: £ {initRes}</Typography >
          <Typography >
            £ {resMonthly} Per Month £ {resYearly} Yearly
          </Typography >
          <Typography >Deposit: £ {deposit}</Typography >
        </div>
      ) : null}
      {showDiscount ? (
        <div style={{textAlign: 'center'}}>
          <Typography >Client Saves: £ {savings} with discount</Typography >
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

export default FullWebsiteCalc
