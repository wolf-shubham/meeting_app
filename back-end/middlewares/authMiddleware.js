const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protectedRoute = async (req, res, next) => {
    let token
    if (
        req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            // console.log(decoded)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = protectedRoute