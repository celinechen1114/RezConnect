import React, { useState } from 'react';
import RASidebar from './StudentSidebar';
import RAPanel from './StudentPanel';
import './css/StudentFeed.css';

const StudentFeed = () => {
  const [selectedPost, setSelectedPost] = useState();
  const [posts, setPosts] = useState([]);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const onNewPostSubmit = (newPost) => {
    // Attach a timestamp to the new post
    const timestamp = new Date().toISOString(); // Capture current date-time as an ISO string
    const postWithTimestamp = { ...newPost, timestamp };
    
    setPosts([postWithTimestamp, ...posts]);
    setSelectedPost(null);  // Reset selected post to show the 'new post' form again (or set to the new post to show its details)
  };

  return (
    <div className="app-container">
      <RASidebar onPostSelect={setSelectedPost} posts={posts} />
      <RAPanel post={selectedPost} onNewPostSubmit={onNewPostSubmit} />
    </div>
  );
};

export default StudentFeed;
