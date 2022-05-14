import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
const [post,setPots] = useState({});
const fetchposts =async ()=>{
    const res = await axios.get('http://localhost:4000/posts');
    setPots(res.data)
    console.log("data",res.data);
}
useEffect(()=>{
    fetchposts();
},[]);
  return (
    <div/>
  );
}

export default Posts;