// StudentFeed.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const StudentFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="StudentFeed">
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

export default StudentFeed;
