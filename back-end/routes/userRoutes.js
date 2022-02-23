const express = require('express')
const route = express()
const { userRegister, userLogin, updateUserProfile } = require('../controllers/userController')
const protectedRoute = require('../middlewares/authMiddleware')

route.post('/signup', userRegister)
route.post('/login', userLogin)
route.post('/updateUser', protectedRoute, updateUserProfile)

module.exports = route