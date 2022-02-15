const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const generateToken = require('../middlewares/generateToken')


const userRegister = async (req, res) => {
    try {
        const { name, email, password, pic } = req.body
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json('User Exists.')
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPass,
            pic
        })

        const user = await newUser.save()
        res.status(200).json(user)

    } catch (error) {
        res.status(401).json(error)
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const comparePassword = await bcrypt.compare(password, user.password)
            const token = generateToken(user._id)
            if (!comparePassword) {
                return res.status(400).json('invalid credantials')
            }
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token: generateToken(user._id),
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = { userRegister, userLogin }