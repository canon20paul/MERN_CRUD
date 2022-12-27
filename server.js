const express =require('express')
const dbConn = require('./conn')
const app = express()

app.get('/', (req, res)=> {
    res.send('Helloworld with Express Server')
})






app.listen(5000, ()=>console.log('NodeJS & Express Server Started Successfully'))