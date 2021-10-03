const express = require('express')

const app = express()

const mongoose = require('mongoose')

const env = require('dotenv')

env.config()

mongoose.connect(process.env.DB_CONNECT, ()=> {
    console.log('connected to DB!')
})


//importing routes
const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(3001, () => console.log('server running'))