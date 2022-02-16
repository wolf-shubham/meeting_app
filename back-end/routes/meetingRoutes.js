const express = require('express')
const { getMeetings, createMeeting, getMeetingById, updateMeeting, deleteMeeting } = require('../controllers/meetingController')
const protectedRoute = require('../middlewares/authMiddleware')
const route = express()

route.get('/', protectedRoute, getMeetings)
route.post('/addmeeting', protectedRoute, createMeeting)
route.get('/:id', getMeetingById)
route.put('/:id', protectedRoute, updateMeeting)
route.delete('/:id', protectedRoute, deleteMeeting)

module.exports = route