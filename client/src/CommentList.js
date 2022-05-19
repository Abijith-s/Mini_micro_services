import React from 'react';

const CommentList = ({comments}) => {
  return (
    <div>
      {
        comments?.map((e) =>  {
         
        let content;
        if(e.status === 'approved'){
          content = e.content;
        }
        if(e.status === 'pending'){
          content = 'The comment is awaiting moderation';
        }
        if(e.status === 'rejected'){
          content = 'The comment has been rejected';
        }
        return <p>{content}</p>
      
      })
      }
    </div>
  )
}

export default CommentList;