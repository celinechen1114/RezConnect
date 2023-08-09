import React, { useState } from "react";
import "./css/RASidebar.css";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import profilePic from "./james.png";

const RASidebar = ({ onPostSelect, posts }) => {
    const [activeTag, setActiveTag] = useState('all'); 
    const tags = ["all", "sports", "social", "academics", "dorms", "emotional support", "health", "emergency"];
    
    const handlePostClick = (post) => {
        onPostSelect(post);
        setActiveTag('all'); 
    }

    const filteredPosts = activeTag === 'all' ? posts : posts.filter(post => post.tags && post.tags.includes(activeTag));

    return (
        <div className="sidebar">
            <div className="title">RezConnect</div>
            <div className="new-post-button">
                <button onClick={() => onPostSelect(null)}>New Post</button>
            </div>

            <div className="tag-filter">
                <h3 style={{fontWeight:'bold'}}>Filter by tags</h3>
                <ul className="tags-list">
                    {tags.map(tag => (
                        <li 
                            key={tag} 
                            className={activeTag === tag ? "active-tag" : ""} 
                            onClick={() => setActiveTag(tag)}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>

            <h3 style={{fontWeight:'bold'}}>Posts</h3>
            <ul className="posts">
                {filteredPosts.map((post, index) => (
                    <li className="post-item" key={index} onClick={() => handlePostClick(post)}>
                        <h3>{post.title}</h3>
                    </li>
                ))}
            </ul>

      <div className="profile-button">
        <Profile
          name="Emilie"
          grade="Resident Advisor"
          profilePic={profilePic}
          location=""
          profileInfoProps={{
            name: "Emilie Johnson",
            major: "Computer Science",
            year: "Junior",
            interests: ["Tennis"],
            clubs: ["Tennis Club", "Robotics Club"],
            pronouns: "she/her/hers",
            contact: "emilie@berkeley.edu",
            intro:
              "Hey everyone, I am your RA from Unit 1 Floor 2."
          }}
        />
      </div>
    </div>
  );
};

export default RASidebar;
