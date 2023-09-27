import { usePostsContext } from "../hooks/usePostsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


function Posted ( { post } ) {
   const { dispatch } = usePostsContext()

    const deleteClick = async () => {
        const response = await fetch ("/api/post/" + post._id, {
            method: 'DELETE'

        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }
      
    



    return (
        <div className="posted">
        <img src= {post.image} ></img>
         <h4>{post.name}</h4>
         <h4>#{post.price}</h4>
         <h4>{formatDistanceToNow(new Date(post.createdAt), {addSuffix : true })}</h4>
         <button onClick={deleteClick} >Delete</button>
        </div>
        
    )
}

export default Posted;