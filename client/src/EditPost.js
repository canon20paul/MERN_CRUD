import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';

function EditPost(){
    const params = useParams()
    const [title, setTitle] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [description, setDescription] = useState('')
    const history = useNavigate()

     function editPost(){
        
         const updatedpost = {
             title: title,
             imageurl: imageurl,
             description: description,
             postid: params.postid
         }
         axios.post('/api/post/updatedpost', updatedpost).then(res => {
             console.log(res);
             alert(res.data)
             history("/")
         }).catch(err => {
             console.log(err);
         })

        }


    useEffect(()=>{
axios.post('/api/post/getpostdata', {postid: params.postid}).then(res=>{
    console.log(res.data[0]);
    const postdata=res.data[0]
    setTitle(postdata.title)
    setImageurl(postdata.imageurl)
    setDescription(postdata.description)

 
}).catch(err=>{
    console.log(err)
})

    },[])
    return <div className='row justify-content-center'>
    <h1>Edit Post </h1>
        <div className='col-md-6'>
            <div>
                <input type="text" placeholder='title' className='form-control' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type="text" placeholder='imageurl' className='form-control' value={imageurl} onChange={(e) => { setImageurl(e.target.value) }} />
                <textarea cols="30" rows="10" placeholder='description' className='form-control' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <button onClick={editPost} className='btn btn-success float-left'>Update Post</button>
            </div>
        </div>
    </div>
}
export default EditPost