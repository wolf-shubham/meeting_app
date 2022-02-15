const express = require('express')

const meetings = require('./routes/meetings')

const app = express()
app.use(express.json())

app.use('/meeting', meetings)

app.listen(3001, () => {
    console.log('server started...')
})