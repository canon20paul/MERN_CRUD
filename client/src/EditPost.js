import React from 'react'
import {useParams} from 'react-router-dom'

function EditPost(){
    const params = useParams()
    return <div>
    <h1>Edit Post Component</h1>
    <h1>The post id = {params.postid}</h1>

    </div>
}
export default EditPost