const express = require("express")
const connectDB = require("./src/db/dbconnection")
const router1 = require("./src/route")
const cors = require("cors")



const app = express()


//  const Port = 8989
app.listen(4949,()=>{
   
    console.log("Your server is running on")

})
app.use(cors());
app.use(express.json())
app.use("/v1",router1)
connectDB()

