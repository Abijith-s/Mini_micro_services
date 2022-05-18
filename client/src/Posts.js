import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const Posts = () => {
  const [post, setPost] = useState({});
  const fetchposts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log("res data",res.data)
    setPost(res.data);
  };
  useEffect(() => {
    fetchposts();
  }, []);

  const renderPosts = Object.values(post);
  console.log("render post comments",post.comments)
  return (
    <div className="container mt-3">
      {renderPosts?.map((e) => {
        return (
          <Card className="d-flex flex-row justify-content-center mt-3" style={{ width: "18rem"  }}>
            <Card.Body>
              <Card.Title>Posts</Card.Title>
              <h3>{e.title}</h3>
              <CommentList comments={post.comments} />
              <CommentCreate postId={e.id}/>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
