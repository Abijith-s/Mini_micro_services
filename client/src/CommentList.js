import React from 'react';

const CommentList = ({comments}) => {
  return (
    <div>
      {
        comments?.map(e =>  <p>{e.content}</p>)
      }
    </div>
  )
}

export default CommentList;