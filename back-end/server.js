const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const meetings = require('./routes/meetings')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/meeting', meetings)
app.use('/user', userRoutes)


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('mongoDB connected'))
    .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})