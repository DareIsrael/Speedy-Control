import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PostsContextProvider } from './context/PostsContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
   <AuthContextProvider>
    <PostsContextProvider>
    <App />
    </PostsContextProvider>
   </AuthContextProvider>
    
 



, document.getElementById("root"));