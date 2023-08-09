import React, { useState } from "react";
import "./css/StudentSidebar.css";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import profilePic from "./james.png";

const StudentSidebar = ({ onPostSelect, posts }) => {
    const [activeTag, setActiveTag] = useState('all'); // Track the currently selected tag
    const tags = ["all", "sports", "social", "academics", "dorms", "emotional support", "health", "emergency"];
    
    const handlePostClick = (post) => {
        onPostSelect(post);
        setActiveTag('all'); // reset the filter after post selection
    }

    const filteredPosts = activeTag === 'all' ? posts : posts.filter(post => post.tags && post.tags.includes(activeTag));

    return (
        <div className="student-sidebar">
            <div className="student-title">RezConnect</div>
            <div className="student-new-post-button">
                <button onClick={() => onPostSelect(null)}>New Post</button>
            </div>

            <div className="student-tag-filter">
                <h3>Filter by tags</h3>
                <ul className="student-tags-list">
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

            <h2>Posts</h2>
            <ul className="student-posts">
                {filteredPosts.map((post, index) => (
                    <li className="student-post-item" key={index} onClick={() => handlePostClick(post)}>
                        <h3>{post.title}</h3>
                    </li>
                ))}
            </ul>

      <div className="student-profile-button">
        <Profile
          name="James"
          grade="Freshman"
          profilePic={profilePic}
          location=""
          profileInfoProps={{
            name: "James",
            major: "Business Admin",
            year: "Freshman",
            interests: ["Leage of Legends"],
            clubs: ["Anime Club", "Consulting Club"],
            pronouns: "he/him",
            contact: "james@berkeley.edu",
            intro:
              "Hello fellow students, gather and hark, For I am James, a spark in the dark. At the heart of the city, or beneath rural ledge, You'll find me immersed in League of Legends. \n\nI'm a gamer, a dreamer, both knight and sage, My arena's the Rift, life's my stage. A Symphony of skills, a crescendo of lights, In the thrill of the battle, I reach new heights.",
          }}
        />
      </div>
    </div>
  );
};

export default StudentSidebar;
