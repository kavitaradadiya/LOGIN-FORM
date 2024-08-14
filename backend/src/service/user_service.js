const { User } = require("../model")

const create_user = (data) =>{
    return User.create(data)
}
module.exports = {
    create_user
}