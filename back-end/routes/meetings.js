const express = require('express')
const meetings = require('../data/data')

const route = express()

route.get('/getMeetings', (req, res) => {
    res.json(meetings)
})

route.get('/:id', (req, res) => {
    const meeting = meetings.find((single) => single._id === req.params.id)
    res.send(meeting)
})

module.exports = route