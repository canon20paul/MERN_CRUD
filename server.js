const express =require('express')
const app = express()
const dbConn = require('./conn')

const postroute = require('./routes/post')


app.use('/api/post', postroute)

app.get('/', (req, res)=> {
    res.send('Helloworld with Express Server')
})






app.listen(5000, ()=>console.log('NodeJS & Express Server Started Successfully'))