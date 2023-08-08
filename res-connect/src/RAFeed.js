// RAFeed.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Panel from './Panel';
import './css/RAFeed.css';

const RAFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="RAFeed">
      <Sidebar onPostSelect={setSelectedPost} />
      {/* {selectedPost && 
        <div className="selectedPost">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      } */}
      <Panel post={selectedPost} />
    </div>
  );
};

export default RAFeed;
