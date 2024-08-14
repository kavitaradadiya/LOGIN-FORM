const mongoose = require("mongoose")

const user_Schema = mongoose.Schema(
    {
        user_name:{
            type :String,
            trim : true
        },
        user_password:{
            type : String,
            trim : true
        }
    },
    {
        timestamps : true
    })

    const user = mongoose.model("User",user_Schema)
    module.exports = user