import React, { useState } from "react"

import { usePostsContext } from "../hooks/usePostsContext";




function PostForm () {
    
    const {dispatch } = usePostsContext()
   


    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [error, setError] = useState(null)


       function postImage (e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };

        reader.onerror = error => {
            console.log("Error:", error);
        };
       }


    //    const postSubmit = async (e) => {
    //     e.preventDefault();
      
    //     const post = { image, name, price };
      
    //     try {
    //       const response = await axios.post('http://localhost:4000/api/post', post, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
      
    //       if (response.status === 201) {
    //         // Successfully created
    //         setImage('');
    //         setName('');
    //         setPrice('');
    //         setError(null);
    //         console.log('New Customer Added', response.data);
    //       } else {
    //         // Handle other responses, e.g., server errors
    //         const error = await response.data;
    //         setError(error.message || 'An error occurred');
    //       }
    //     } catch (error) {
    //       // Handle network or other errors
    //       setError(error.message || 'An error occurred');
    //     }
    //   };
      

  
    const postSubmit = async (e) => {


        e.preventDefault()
  
        
        
        
  
        const post = {image, name, price }
  
        const response = await fetch ("/api/post", {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                "Content-Type": 'application/json'
                
               

            }
        })
        const json = await response.json()
       
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setImage("")
            setName("")
            setPrice("")
        
            setError(null)
            console.log('new Post Added', json)
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }
  


    return (
      
        <form onSubmit={postSubmit}>
                <label>Product File:</label> <br></br>
                <input accept="image/" type="file" onChange={postImage} /><br></br>
                <label>Product Name:</label><br></br>
                <input  type="text" onChange={(e) => setName (e.target.value)} value={name} /><br></br>
                <label>Product Price:</label><br></br>
                <input type="text" onChange={(e) => setPrice (e.target.value)} value={price} /><br></br>
                <button type="submit">Post</button>
                
            </form>


    )
}

export default PostForm;