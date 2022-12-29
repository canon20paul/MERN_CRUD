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

router.post('/getpostdata',(req, res)=>{
    PostModel.find({postid:req.body.postid},(docs,err)=>{
        if(!err)
        {
            res.send(docs.data[0])
        }
        else{
          res.send(err)  
        }

    })
})

router.post('/updatedpost', (req, res)=>{
    PostModel.findOneAndUpdate({postid:req.body.postid},{
                    title:req.body.title,
                    imageurl:req.body.imageurl,
                    description:req.body.description
    },(err)=>{
if(!err)
{
        res.end('Post Updated Successfully')
}
else{
    res.send(err)
}
    })
})

router.post('/deletepost', (req, res)=>{
    PostModel.findOneAndDelete({postid:req.body.postid},  (err)=>{
        if(!err)
        {
            res.send('Post Deleted Successfully')
        }
        else{
            res.send(err)
        }
    })
})








module.exports = router