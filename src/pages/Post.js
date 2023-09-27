import React, { useEffect, useState } from "react"
import Posted from "./Posted"
import PostForm from "./PostForm"
import { usePostsContext } from "../hooks/usePostsContext"
import { useAuthContext } from "../hooks/useAuthContext"




function Post () {

  
        
    // const [posts, setPosts] = useState(null)
     const {posts, dispatch} = usePostsContext()
     
     const token = "dareisraelabidemibrightbabatunde"

     useEffect (() => {
        const fetchPosts = async () => {
 
            const response = await fetch ('http://localhost:4000/api/post')
            const json = await response.json()
 
            if (response.ok) {
            dispatch({type: 'SET_POSTS', payload: json})
                // setPosts(json)
                
           
            }
        }

        
            fetchPosts()
        
 
       
     }, [dispatch])
        
     
  


    

    return (
        <div className="admin_post" >
            
            <PostForm />

           
                      <h1>Posts</h1>


        {posts && posts.map((post, index) => (
        
        <Posted  key = {post._id}  post = { post } index = { index }/>
       
        ))}

          
              
        </div>

    )
}

export default Post;