const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')

const userRoutes = require('./routes/userRoutes')
const meetingRoutes = require('./routes/meetingRoutes')
const errorHandler = require('./middlewares/errorMiddleware')

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/user', userRoutes)
app.use('/meeting', meetingRoutes)
app.use(errorHandler)

__dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'front-end/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
    })
} else {
    app.get(('/'), (req, res) => {
        res.send('server working....')
    })
}

app.get(('/'), (req, res) => {
    res.send('server working....')
})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('mongoDB connected'))
    .catch((err) => console.log(err));


app.listen(process.env.PORT || 5000, () => {
    console.log(`server started on PORT ${PORT}`)
})