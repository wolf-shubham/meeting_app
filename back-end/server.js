const express = require('express')
const dotenv = require('dotenv')

const meetings = require('./routes/meetings')

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/meeting', meetings)

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})