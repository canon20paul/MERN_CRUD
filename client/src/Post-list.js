import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import axios from 'axios'

function PostList(){
    const[postdata, setpostdata]=useState([])
        useEffect(()=>{

            axios.get('/api/post/getposts').then(res=>{
                console.log(res)
                setpostdata(res.data)
            }).catch(err=>{
                console.log(err);
            })

        }, [])
        const postlist =postdata.map(post=>{
            return(
                <div className='row justify-content-center'>
                <PostItem post={post}/>
                </div>
            )
        })

    return (
    <div>
    
    {postlist}

    </div>
    )
}
export default PostList