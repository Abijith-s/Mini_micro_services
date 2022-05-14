import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const PostCreate = () => {
    const [title,setTitle] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('hppt//')
    }
  return (
    <div>
      <div className='container'>
        <h1>Create Posts</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Create Post</Form.Label>
            <div className='col-12 col-sm-4 col-md-4'>
            <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Create post" />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default PostCreate
