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

const PostModel = mongoose.model('posts', postschema)

router.post('/addnewpost', (req, res)=>{
const newpost = new PostModel({
    title:req.body.title,
    imageurl:req.body.imageurl,
    description:req.body.description,
    postid:req.body.postid
})
newpost.save(function(err){
    if(!err){
        res.send('New Post added Successfully')
    }else{
        res.send(err)
    }
})
})

router.get('/getposts', (req, res)=>{
   PostModel.find({},function(doc,err){
    if(!err){res.send(doc.data)}
    else
    {res.send(err)}
   }) 
})








module.exports = router