const express = require('express')
const app = express()

const Config = require('./config/config')

app.listen(Config.app.port)

console.log(`listening on port ${Config.app.port}`)