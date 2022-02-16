const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const meetingSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting