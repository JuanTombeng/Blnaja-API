const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(morgan)
app.use(cors())

app.use((err, req, res, next) => {
    const statusCode = err.status
    const message = err.message
    res.status(statusCode)
    req.json({
        status : statusCode,
        message : message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})