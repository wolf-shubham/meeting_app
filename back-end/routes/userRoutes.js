const express = require('express')
const route = express()
const { userRegister, userLogin } = require('../controllers/userController')

route.post('/signup', userRegister)
route.post('/login', userLogin)

module.exports = route