const express = require('express')

const app = express()

const mongoose = require('mongoose')

const env = require('dotenv')

//importing routes
const authRoute = require('./routes/auth')

env.config()



mongoose.connect(process.env.DB_CONNECT, ()=> {
    console.log('connected to DB!')
})

//middleware
app.use(express.json())

app.use('/api/user', authRoute)

app.listen(3001, () => console.log('server running'))