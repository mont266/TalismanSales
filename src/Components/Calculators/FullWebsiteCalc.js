import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const FullWebsiteCalc = () => {
  const [websiteCost] = useState(450.0)
  const [pageCost] = useState(8.0)
  const [contentCost] = useState(60.0)
  const [blogCost] = useState(60.0)
  const [analyticsCost] = useState(25.0)
  const [hostCost] = useState(6.0)
  const [domainFee] = useState(10.0)
  const [liveChatCost] = useState(10.0)
  const [ecommerceCost] = useState(300.0)
  const [ecommerceMonCost] = useState(12.0)
  const [creditDisc] = useState(10.0)
  const [mainLow] = useState(10.0)
  const [mainMed] = useState(15.0)
  const [mainHigh] = useState(25.0)
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
  const [pageRes, setPageRes] = useState(0)
  const [contentRes, setContentRes] = useState(0)
  const [blogRes, setBlogRes] = useState(0)
  const [analyticsRes, setAnalyticsRes] = useState(0)
  const [hostRes, setHostRes] = useState(0)
  const [domainRes, setDomainRes] = useState(0)
  const [liveChatRes, setLiveChatRes] = useState(0)
  const [ecommerceRes, setEcommerceRes] = useState(0)
  const [ecommerceMonRes, setEcommerceMonRes] = useState(0)
  const [creditRes, setCreditRes] = useState(0)
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

    if (
      contentCreation &&
      liveChat &&
      ecommerce &&
      blog &&
      analytics &&
      webHosting &&
      domainReg &&
      talismanWatermark === "yes"
    ) {
      setContentQty(1)
      setLivechatQty(1)
      setAnalyticsQty(1)
      setEcommerceQty(1)
      setEcommerceMonQty(1)
      setBlogQty(1)
      setHostQty(1)
      setDomainQty(1)
    } else {
      setContentQty(0)
      setLivechatQty(0)
      setAnalyticsQty(0)
      setEcommerceQty(0)
      setEcommerceMonQty(0)
      setBlogQty(0)
      setHostQty(0)
      setDomainQty(0)
    }
  }, [
    maintenance,
    mainLow,
    mainMed,
    mainHigh,
    contentCreation,
    liveChat,
    ecommerce,
    blog,
    analytics,
    webHosting,
    domainReg,
    talismanWatermark,
  ])

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

    setPageRes((pageCost * pageQty) + (1.5 * pageQty))
    setContentRes(contentCost * contentQty)
    setBlogRes(blogCost * blogQty)
    setAnalyticsRes(analyticsCost * analyticsQty)
    setHostRes(hostCost * hostQty)
    setDomainRes(domainFee * domainQty)
    setLiveChatRes(liveChatCost * livechatQty)
    setEcommerceRes(ecommerceCost * ecommerceQty)
    setEcommerceMonRes(ecommerceMonCost * ecommerceMonQty)
    setCreditRes(creditDisc * creditQty)

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
          <InputLabel id="demo-simple-select-label">
            Level of Expected Maintainence
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <InputLabel id="demo-simple-select-label">
            Content Creation?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <InputLabel id="demo-simple-select-label">
            Live Chat Support?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <InputLabel id="demo-simple-select-label">
            E-Commerce Integration?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <InputLabel id="demo-simple-select-label">Blog?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          <InputLabel id="demo-simple-select-label">Analytics?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
        <>
          <p>Full payment: £ {initRes}</p>
          <p>
            £ {resMonthly} Per Month £ {resYearly} Yearly
          </p>
          <p>Deposit: £ {deposit}</p>
        </>
      ) : null}
      {showDiscount ? (
        <>
          <p>Client Saves: £ {savings} with discount</p>
        </>
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
