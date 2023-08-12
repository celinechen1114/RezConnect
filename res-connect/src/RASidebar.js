import React, { useState } from "react";
import "./css/RASidebar.css";
import Profile from "./profile/Profile";
import profilePic from "./emilie.svg";
import postIcon from "./chat.png";

const RASidebar = ({ onPostSelect, setSelectedContent, posts }) => {
  const [activeTag, setActiveTag] = useState("all"); // Track the currently selected tag

  const tags = [
    "all",
    "sports",
    "social",
    "academics",
    "dorms",
    "emotional support",
    "health",
    "emergency",
  ];

  const dummyProfileInfo = {
    name: "James",
    grade: "Freshman",
    profilePic: "./james.png", // You can replace this with the actual path
  };

  const dummyPost = {
    title: "Tennis at 6?",
    tags: ["all", "sports", "social"],
    body: "Does anyone want to play Tennis at Hearst Courts at 6pm?",
    isDummy: true,
    timestamp: new Date().toISOString(),
    // You can add more properties as per your post structure
  };

  const postsWithDummy = [dummyPost, ...posts];

  const handlePostClick = (post) => {
    onPostSelect(post);
    setActiveTag("all"); // reset the filter after post selection
  };

  const filteredPosts =
    activeTag === "all"
      ? postsWithDummy
      : postsWithDummy.filter(
          (post) => post.tags && post.tags.includes(activeTag)
        );

  return (
    <div className="sidebar">
      <div className="title">RezConnect</div>
      <div className="new-post-button">
        <button onClick={() => onPostSelect(null)}>New Post</button>
      </div>

      <div className="tag-filter">
        <h3>Filter by tags</h3>
        <ul className="tags-list">
          {tags.map((tag) => (
            <li
              key={tag}
              tabIndex="0"
              className={activeTag === tag ? "active-tag" : ""}
              onClick={() => setActiveTag(tag)}
              onKeyPress={(e) => e.key === "Enter" && setActiveTag(tag)} // To handle "Enter" key press
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <h2>Posts</h2>
      <ul className="posts">
        {filteredPosts.map((post, index) => (
          <li
            className="post-item"
            key={index}
            onClick={() => handlePostClick(post)}
          >
            <img src={postIcon} alt="Chat Icon" className="post-icon" />
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>

      <div
        className="profile-button"
        onClick={() => setSelectedContent("profile")}
      >
        <Profile
          name="John"
          grade="Resident Advisor"
          profilePic={profilePic}
          location=""
        />
      </div>

      {/* <div className="profile-button">
        <Profile
          name="James"
          grade="Freshman"
          profilePic={profilePic}
          location=""
          // profileInfoProps={{
          //   name: "James",
          //   major: "Business Admin",
          //   year: "Freshman",
          //   interests: ["Leage of Legends"],
          //   clubs: ["Anime Club", "Consulting Club"],
          //   pronouns: "he/him",
          //   contact: "james@berkeley.edu",
          //   intro:
          //     "Hello fellow students, gather and hark, For I am James, a spark in the dark. At the heart of the city, or beneath rural ledge, You'll find me immersed in League of Legends. \n\nI'm a gamer, a dreamer, both knight and sage, My arena's the Rift, life's my stage. A Symphony of skills, a crescendo of lights, In the thrill of the battle, I reach new heights.",
          // }}
        />
      </div> */}
    </div>
  );
};

export default RASidebar;
