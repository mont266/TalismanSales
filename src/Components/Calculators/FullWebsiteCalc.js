import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import useWindowDimensions from "../../Hooks/ScreenDimensions"

const websiteCost = 450.0
const pageCost = 8.0
const mainLow = 10.0
const mainMed = 15.0
const mainHigh = 25.0
const contentCost = 60.0
const liveChatCost = 10.0
const ecommerceCost = 300.0
const ecommerceMonCost = 12.0
const blogCost = 60.0
const analyticsCost = 25.0
const hostCost = 6.0
const domainFee = 10.0
const creditDisc = 10.0
const cmsCost = 20.0

const FullWebsiteCalc = () => {
  const { width } = useWindowDimensions()

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
  const [cmsQty, setCmsQty] = useState(0)
  const [pageRes, setPageRes] = useState(0)
  const [contentRes, setContentRes] = useState(0)
  const [liveChatRes, setLiveChatRes] = useState(0)
  const [ecommerceRes, setEcommerceRes] = useState(0)
  const [ecommerceMonRes, setEcommerceMonRes] = useState(0)
  const [blogRes, setBlogRes] = useState(0)
  const [analyticsRes, setAnalyticsRes] = useState(0)
  const [hostRes, setHostRes] = useState(0)
  const [domainRes, setDomainRes] = useState(0)
  const [creditRes, setCreditRes] = useState(0)
  const [cmsRes, setCmsRes] = useState(0)
  const [initRes, setInitRes] = useState(0)
  const [mainRes, setMainRes] = useState(0)
  const [resMonthly, setResMonthly] = useState(0)
  const [resYearly, setResYearly] = useState(0)
  const [deposit, setDeposit] = useState(0)
  const [savings, setSavings] = useState(0)
  const [maintenance, setMaintenance] = useState("none")
  const [contentCreation, setContentCreation] = useState("no")
  const [liveChat, setLiveChat] = useState("no")
  const [ecommerce, setEcommerce] = useState("no")
  const [cms, setCMS] = useState("no")
  const [blog, setBlog] = useState("no")
  const [analytics, setAnalytics] = useState("no")
  const [webHosting, setWebHosting] = useState("no")
  const [domainReg, setDomainReg] = useState("no")
  const [talismanWatermark, setTalismanWatermark] = useState("no")
  const [discount, setDiscount] = useState("0 %")
  const [showCost, setShowCost] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)
  const [formWidth, setFormWidth] = useState(0)

  useEffect(() => {
    if (width < 500) {
      setFormWidth(350)
    } else {
      setFormWidth(600)
    }
  }, [width])

  useEffect(() => {
    if (pageQty > 0) {
      setPageRes(pageCost * pageQty + 1.5 * pageQty)
    } else {
      setPageRes(pageCost * 0 + 1.5 * 0)
    }
  }, [pageQty])

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
    if (contentCreation === "yes") {
      setContentQty(1)
      setContentRes(contentCost * contentQty)
    } else {
      setContentQty(0)
      setContentRes(contentCost * contentQty)
    }
  }, [contentCreation, contentQty])

  useEffect(() => {
    if (liveChat === "yes") {
      setLivechatQty(1)
      setLiveChatRes(liveChatCost * livechatQty)
    } else {
      setLivechatQty(0)
      setLiveChatRes(liveChatCost * livechatQty)
    }
  }, [liveChat, livechatQty])

  useEffect(() => {
    if (ecommerce === "yes") {
      setEcommerceQty(1)
      setEcommerceMonQty(1)
      setEcommerceRes(ecommerceCost * ecommerceQty)
      setEcommerceMonRes(ecommerceMonCost * ecommerceMonQty)
    } else {
      setEcommerceQty(0)
      setEcommerceMonQty(0)
      setEcommerceRes(ecommerceCost * ecommerceQty)
      setEcommerceMonRes(ecommerceMonCost * ecommerceMonQty)
    }
  }, [ecommerce, ecommerceQty, ecommerceMonQty])

  useEffect(() => {
    if (cms === "yes") {
      setCmsQty(1)
      setCmsRes(cmsCost * cmsQty)
    } else {
      setCmsQty(0)
      setCmsRes(cmsCost * cmsQty)
    }
  }, [cms, cmsQty])

  useEffect(() => {
    if (blog === "yes") {
      setBlogQty(1)
      setBlogRes(blogCost * blogQty)
    } else {
      setBlogQty(0)
      setBlogRes(blogCost * blogQty)
    }
  }, [blog, blogQty])

  useEffect(() => {
    if (analytics === "yes") {
      setAnalyticsQty(1)
      setAnalyticsRes(analyticsCost * analyticsQty)
    } else {
      setAnalyticsQty(0)
      setAnalyticsRes(analyticsCost * analyticsQty)
    }
  }, [analytics, analyticsQty])

  useEffect(() => {
    if (webHosting === "yes") {
      setHostQty(1)
      setHostRes(hostCost * hostQty)
    } else {
      setHostQty(0)
      setHostRes(hostCost * hostQty)
    }
  }, [webHosting, hostQty])

  useEffect(() => {
    if (domainReg === "yes") {
      setDomainQty(1)
      setDomainRes(domainFee * domainQty)
    } else {
      setDomainQty(0)
      setDomainRes(domainFee * domainQty)
    }
  }, [domainReg, domainQty])

  useEffect(() => {
    if (talismanWatermark === "yes") {
      setCreditQty(1)
      setCreditRes(creditDisc * creditQty)
    } else {
      setCreditQty(0)
      setCreditRes(creditDisc * creditQty)
    }
  }, [talismanWatermark, creditQty])

  useEffect(() => {
    if (initRes > 0) {
      setDeposit(initRes / 2)
    }
  }, [initRes])

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

  const handleCMS = (event) => {
    setCMS(event.target.value)
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

    const resMonthly = hostRes + mainRes + ecommerceMonRes

    if (discount !== "0 %") {
      setShowDiscount(true)
    } else {
      setShowDiscount(false)
    }

    if (discount === "0 %") {
      setSavings(0)
    }

    setInitRes(
      websiteCost +
        pageRes +
        contentRes +
        blogRes +
        cmsRes +
        analyticsRes +
        hostRes +
        liveChatRes +
        ecommerceRes +
        domainRes -
        creditRes
    )

    if (discount === "5 %") {
      setInitRes(initRes * 0.95)
      setSavings(initRes * 0.05)
    }

    if (discount === "10 %") {
      setInitRes(initRes * 0.9)
      setSavings(initRes * 0.1)
    }

    if (discount === "15 %") {
      setInitRes(initRes * 0.85)
      setSavings(initRes * 0.15)
    }

    if (discount === "20 %") {
      setInitRes(initRes * 0.8)
      setSavings(initRes * 0.2)
    }

    setResMonthly(hostRes + mainRes + ecommerceMonRes)
    setResYearly(resMonthly * 12 - 12)
  }

  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <TextField
            fullWidth
            required
            margin="normal"
            id="pagesQT"
            label="How Many Web Pages?"
            name="pagesQty"
            autoFocus
            onChange={handlePageQty}
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="stock-images">Stock images?</InputLabel>
          <Select
            labelId="stock-images"
            id="stock-images"
            label="Stock images?"
            onChange={handleContent}
            value={contentCreation}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="live-chat">Live Chat Support?</InputLabel>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="ecommerce">E-Commerce Integration?</InputLabel>
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
      <Typography sx={{ minWidth: formWidth, marginBottom: 3 }}>If E-Commerce is Yes, CMS is provided already</Typography>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="cms">
            CMS Required?
          </InputLabel>
          <Select
            labelId="cms"
            id="cms"
            label="CMS Required?"
            onChange={handleCMS}
            value={cms}>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
      <Box sx={{ minWidth: formWidth, marginBottom: 3 }}>
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
        <div style={{ textAlign: "center", backgroundColor: '#FF3947', minWidth: formWidth, padding: 4 }}>
          <Typography style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Full payment: £ {initRes}</Typography>
          <Typography style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            £ {resMonthly} Per Month £ Or {resYearly} Yearly
          </Typography>
          <Typography style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Deposit: £ {deposit}</Typography>
        </div>
      ) : null}
      {showDiscount ? (
        <div style={{ textAlign: "center", backgroundColor: '#FF3947', minWidth: formWidth, padding: 4 }}>
          <Typography style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Client Saves: £ {savings} with discount</Typography>
        </div>
      ) : null}
      <Button
        style={{ backgroundColor: '#FF3947', fontSize: 20 }}
        onClick={calculateCost}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, minWidth: formWidth }}>
        Calculate
      </Button>
    </Grid>
  )
}

export default FullWebsiteCalc
