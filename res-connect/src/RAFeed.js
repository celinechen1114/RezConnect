import React, { useState } from "react";
import RASidebar from "./RASidebar";
import RAPanel from "./RAPanel";
import "./css/RAFeed.css";

const RAFeed = () => {
  const [selectedPost, setSelectedPost] = useState();
  const [posts, setPosts] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    setSelectedContent(null);
  };

  const onNewPostSubmit = (newPost) => {
    // Attach a timestamp to the new post
    const timestamp = new Date().toISOString(); // Capture current date-time as an ISO string
    const postWithTimestamp = { ...newPost, timestamp, comments: []};

    setPosts([postWithTimestamp, ...posts]);
    console.log(posts[0]);
    setSelectedPost(null); // Reset selected post to show the 'new post' form again (or set to the new post to show its details)
  };

  return (
    <div className="app-container">
      <RASidebar
        onPostSelect={handlePostSelect}
        setSelectedContent={setSelectedContent}
        posts={posts}
      />

      <RAPanel
        post={selectedPost}
        selectedContent={selectedContent}
        onNewPostSubmit={onNewPostSubmit}
      />
    </div>
  );
};

export default RAFeed;
