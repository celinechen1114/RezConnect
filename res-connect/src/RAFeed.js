// RAFeed.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const RAFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="RAFeed">
      <h1>RA Feed</h1>
      <Sidebar onPostSelect={setSelectedPost} />
      {selectedPost && 
        <div className="selectedPost">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      }
    </div>
  );
};

export default RAFeed;
