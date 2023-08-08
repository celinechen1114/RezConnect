// Post.js
import React from 'react';

const Post = ({ post, onPostSelect }) => {
  return (
    <div onClick={() => onPostSelect(post)}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
