const Meeting = require("../models/meetingsModel")

const getMeetings = async (req, res) => {
    const meeting = await Meeting.find({ user: req.user._id })
    res.json(meeting)
}

const createMeeting = async (req, res) => {
    const { title, description, category } = req.body

    if (!title || !description || !category) {

        return res.status(400).json("Please Fill all the feilds");
    } else {
        const meeting = new Meeting({ user: req.user._id, title, description, category });

        const createdMeeting = await meeting.save();

        return res.status(201).json(createdMeeting);
    }

}

module.exports = { getMeetings, createMeeting }