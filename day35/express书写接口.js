const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./router')
app.use('/api',apiRouter)
app.use(express.json())
app.use(cors())


app.listen(8088,() => {
    console.log('server is running')
})