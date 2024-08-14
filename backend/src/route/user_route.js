const express = require("express")
const { user_Controller } = require("../controller")

const router = express.Router()

router.post(
    "/create-user",
    // call back || controller
    user_Controller.create_user

)
module.exports = router