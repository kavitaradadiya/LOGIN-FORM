const express = require("express")
const userRoute = require("./user_route")

const router1 = express()

router1.use("/user",userRoute)

module.exports = router1