import React, {useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';



function AddPost() {
    const[title ,setTitle]=useState('')
    const [imageurl, setImageurl]=useState('')
    const[description ,setDescription]=useState('')

    const history = useNavigate()

    function addPost(){
        var post={
                    title: title,
                    imageurl: imageurl,
                    description: description,
                    postid: uniqid()
        }
        axios.post('/api/post/addnewpost',post).then(res=>{
            Swal.fire('Conraculations','Post Added Successfully','success')
            history('/')
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
    <div className='row justify-content-center'>
            <h1>Add Post</h1>
            
                <div className='col-md-6'>
                <a href="/" className='btn btn-primary m-5'>Home</a>
                            <div>
                                <input type="text" placeholder='title' className='form-control' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                <input type="text" placeholder='imageurl' className='form-control' value={imageurl} onChange={(e) => { setImageurl(e.target.value) }} />
                                 <textarea cols="30" rows="10" placeholder='description' className='form-control' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                <button onClick={addPost} className='btn btn-success float-left'>Add Post</button>
                            </div>
                </div>
    </div>
    )
}
export default AddPost