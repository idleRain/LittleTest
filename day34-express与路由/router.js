const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => {
    res.send('我是 user 路由')
})
router.get('/home', (req, res) => {
    res.send('我是 home 路由')
})

module.exports = router