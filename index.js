const express = require('express')
const userRoutes = require('./userRoutes')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

db();

app.use('/users', userRoutes);

app.use((req, res, next) => {
    return res.status(400).json({status: false, message: "Not found"})
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).json({status:false, message: "Internal server error"})
})

app.listen(process.env.PORT, () => console.log("Server started"))