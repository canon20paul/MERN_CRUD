const express =require('express')
const app = express()
const dbConn = require('./conn')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const postroute = require('./routes/post')


app.use('/api/post', postroute)

app.get('/', (req, res)=> {
    res.send('Helloworld with Express Server')
})






app.listen(5000, ()=>console.log('NodeJS & Express Server Started Successfully'))