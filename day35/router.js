const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send({
        status: 0,
        message: 'GET 请求成功',
        data: req.query
    })
})

router.post('/add', (req, res) => {
    res.send({
        status: 0,
        message: 'post 请求成功',
        data: req.body
    })
})

router.post('/login',(req,res) => {
    if (req.body.username !== 'admin' && req.body.password !== '123456') {
        return res.send({
            status:500,
            message:'登陆失败'
        })
    }
    // console.log(req)
    res.send('登录成功')
})

module.exports = router