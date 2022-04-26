const fs = require('fs')

fs.readFile(__dirname + '/files/test1.txt','utf-8',(error,data) => {
    if (error) console.log(error.message)
    console.log(data)
})