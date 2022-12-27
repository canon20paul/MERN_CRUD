import React, {useState} from 'react'



function AddPost() {
    const[title ,setTitle]=useState('')
    const [imageurl, setImageurl]=useState('')
    const[description ,setDescription]=useState('')

    function addPost(){
        var post={
                    title: title,
                    imageurl: imageurl,
                    description: description
        }
        console.log(post);
    }

    return (
    <div className='row justify-content-center'>
                <div className='col-md-6'>
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