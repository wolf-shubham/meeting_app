const express = require('express')
const { getMeeitngs, createMeeting } = require('../controllers/meetingController')
const protectedRoute = require('../middlewares/authMiddleware')
const route = express()

route.get('/', protectedRoute, getMeeitngs)
route.post('/addmeeting', protectedRoute, createMeeting)
route.get('/:id')
route.put('/:id')
route.delete('/:id')

module.exports = route