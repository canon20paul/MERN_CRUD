import React from 'react'
import {Link} from 'react-router-dom'

function PostItem({post}) 
{
    return (
    <div className=' col-md-8 shadow p-3 mb-5 bg-white rounded'>
        <h1 className='p-1'>{post.title}</h1>
            <img style={{height:'200px'}}className='img-fluid p-1' src={post.imageurl}/>
        <p className='p-1'>{post.description}</p>
        <Link to={`/editpost/${post.postid}`}><li className='btn btn-primary'>Edit</li></Link>
        <button className='btn btn-danger'>Delete</button>

    </div>
    )
}
export default PostItem