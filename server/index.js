const express = require('express')
const connectdb = require('./db/db')
const app = express()
require('dotenv').config()

connectdb()

app.use(express.json())

