import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Panel from "./Panel";
import "./css/RAFeed.css";

const RAFeed = () => {
  const [selectedPost, setSelectedPost] = useState();
  const [posts, setPosts] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const onNewPostSubmit = (newPost) => {
    // Attach a timestamp to the new post
    const timestamp = new Date().toISOString(); // Capture current date-time as an ISO string
    const postWithTimestamp = { ...newPost, timestamp };

    setPosts([postWithTimestamp, ...posts]);
    setSelectedPost(null); // Reset selected post to show the 'new post' form again (or set to the new post to show its details)
  };

  return (
    <div className="app-container">
      <Sidebar
        onPostSelect={setSelectedPost}
        setSelectedContent={setSelectedContent}
        posts={posts}
      />

      <Panel
        post={selectedPost}
        selectedContent={selectedContent}
        onNewPostSubmit={onNewPostSubmit}
      />
    </div>
  );
};

export default RAFeed;
