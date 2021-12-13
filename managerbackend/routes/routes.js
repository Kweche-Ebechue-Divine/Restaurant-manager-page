
const express = require("express")
const router = express.Router()
const managerTemplateCopy = require("../models/managerModels")


router.post ("/manager", (request, response) => {
    const managerUser = new managerTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password


    })
    managerUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)

})

})

module.exports = router