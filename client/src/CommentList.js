import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CommentList = (props) => {
    const [comments,setComments] = useState([]);
    const {postId} = props;
    const fetchComments = async() => {
       const res =await axios.get(`http://localhost:4001/posts/${postId}/comments`);
       setComments(res.data);
    }
    useEffect(()=>{
        fetchComments()
    });
  return (
    <div>
      {
        comments?.map(e =>  <p>{e.content}</p>)
      }
    </div>
  )
}

export default CommentList;