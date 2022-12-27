const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/merncrude', {useNewUrlParser: true, useUnifiedTopology: true});

const dbobject = mongoose.connection

dbobject.on('connected', ()=>console.log('MongoDb connection successful'))
dbobject.on('error', ()=>console.log('MongoDb connection Failed'))
module.exports=mongoose