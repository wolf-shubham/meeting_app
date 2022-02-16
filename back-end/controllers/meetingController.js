const Meeting = require("../models/meetingsModel")

const getMeeitngs = async (req, res) => {
    const meeting = await Meeting.find({ user: req.user._id })
    res.json(meeting)
}

const createMeeting = async (req, res) => {
    const { title, desc, category } = req.body
    try {
        const meeting = new Meeting({ user: req.user._id, title, desc, category })
        const createdMeeting = await meeting.save()
        return res.status(203).json(createdMeeting)
    } catch (error) {
        return res.status(400).json(error)
    }

}

module.exports = { getMeeitngs, createMeeting }