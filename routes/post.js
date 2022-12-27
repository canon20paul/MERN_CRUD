const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const schema = mongoose.Schema

const postschema = new schema({
    title: String,
    imageurl: String,
    description: String,
    postid: String
})

router.get('/test', (req, res)=>{
    res.end('Helloworld using router')
})

const PostModel = mongoose.model('posts', postschema)






module.exports = router