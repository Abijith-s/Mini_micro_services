import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const CommentCreate = (props) => {
  const { postId } = props.postId;
  const [comment, setComment] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4001/posts/${postId}/comments`,{comment});
    setComment('');
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            type="text"
            onChange={e=> setComment(e.target.value)}
            placeholder="Enter your comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Comment
        </Button>
      </Form>
    </div>
  )
}

export default CommentCreate;
