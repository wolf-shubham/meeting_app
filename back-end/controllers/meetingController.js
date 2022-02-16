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

const getMeetingById = async (req, res) => {
    const meeting = await Meeting.findById(req.params.id)
    if (meeting) {
        return res.status(201).json(meeting)
    }
    else {
        return res.status(404).json({ message: 'not found...' })
    }
}

const updateMeeting = async (req, res) => {
    const { title, description, category } = req.body
    const meeting = await Meeting.findById(req.params.id)
    if (meeting.user.toString() !== req.user._id.toString()) {
        return res.status(403).json('you can not update others meeting')
    }
    if (meeting) {
        meeting.title = title
        meeting.description = description
        meeting.category = category

        const updatedMeeting = await meeting.save()
        return res.status(200).json(updatedMeeting)
    }
    else {
        return res.status(404).json({ message: 'not found' })
    }
}

const deleteMeeting = async (req, res) => {
    const meeting = await Meeting.findById(req.params.id)
    if (meeting.user.toString() !== req.user._id.toString()) {
        return res.status(403).json('you can not delete others meeting')
    }
    if (meeting) {
        await meeting.remove()
        return res.status(201).json({ message: 'meeting deleted.' })
    }
    else {
        return res.status(404).json({ error: 'you cant delete it.' })
    }
}
module.exports = { getMeetings, createMeeting, getMeetingById, updateMeeting, deleteMeeting }