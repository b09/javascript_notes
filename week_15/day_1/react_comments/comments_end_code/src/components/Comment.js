import React from 'react';

const Comment = ({author, children}) => {
  return (
    <div className="comment">
      <h4 className="comment-author">
        {author}
      </h4>
        {children}
    </div>
  )

}

export default Comment;
