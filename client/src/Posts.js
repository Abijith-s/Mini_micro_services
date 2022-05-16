import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

const Posts = () => {
  const [post, setPots] = useState({});
  const fetchposts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPots(res.data);
  };
  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <div className="container mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Posts;
