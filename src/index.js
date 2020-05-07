const express = require('express')
const cors = require('cors')

const ClienteRoutes = require('./routes/ClienteRoutes')

const server = express()

server.use(cors())
server.use(express.json())

server.use('/cliente', ClienteRoutes)

server.listen(3333, () => {
    console.log('API ONLINE')
})