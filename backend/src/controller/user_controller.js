const { user_Service } = require("../service")

const create_user = async(req,res) =>{
    try {
        const data = req.body
        const new_user = await user_Service.create_user(data)
        res.status(200).json({
            success : true,
            data : new_user

        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message : error.message
        })
    }
}
module.exports = {
    create_user
}