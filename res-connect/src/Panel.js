import React, { useState } from "react";
import "./css/Panel.css";
import profilePic from "./james.png";
import ProfileSetting from "./profile/ProfileSetting";

const Panel = ({ post, selectedContent, onNewPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comment, setComment] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [
    "sports",
    "social",
    "academics",
    "dorms",
    "emotional support",
    "health",
    "emergency",
  ];

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (post && comment) {
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(comment);
      setComment("");
    }
  };

  const handleTagChange = (event) => {
    if (event.target.checked) {
      setSelectedTags([...selectedTags, event.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewPostSubmit({
      title,
      body,
      tags: selectedTags, // add selected tags to the new post
      comments: [],
    });
    setTitle("");
    setBody("");
    setSelectedTags([]); // reset the tags
  };

  // At the beginning
  if (selectedContent === "profile") {
    return (
      <ProfileSetting
        profileInfoProps={{
          name: "James",
          major: "Business Admin",
          year: "Freshman",
          interests: ["League of Legends"],
          clubs: ["Anime Club", "Consulting Club"],
          pronouns: "he/him",
          contact: "james@berkeley.edu",
          intro:
            "Hello fellow students, gather and hark, For I am James, a spark in the dark. At the heart of the city, or beneath rural ledge, You'll find me immersed in League of Legends. I'm a gamer, a dreamer, both knight and sage, My arena's the Rift, life's my stage. A Symphony of skills, a crescendo of lights, In the thrill of the battle, I reach new heights.", // rest of the data
          initialLocation: "Studying at Moffitt until 6",
        }}
      />
    );
  } else {
    if (post === null) {
      return (
        <div className="panel-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={handleChangeTitle}
              placeholder="What's your title?"
              required
            />

            <textarea
              value={body}
              onChange={handleChangeBody}
              placeholder="What's on your mind?"
              required
            />

            <span
              style={{
                display: "block",
                width: "80%",
                textAlign: "left",
                marginLeft: "10%",
                fontWeight: "bold",
              }}
            >
              Select Tags
            </span>
            <div className="tag-selection">
              {tags.map((tag) => (
                <div key={tag}>
                  <input
                    id={`tag-${tag}`}
                    type="checkbox"
                    value={tag}
                    onChange={handleTagChange}
                    checked={selectedTags.includes(tag)}
                  />
                  <label htmlFor={`tag-${tag}`}>{tag}</label>
                </div>
              ))}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      );
    }

    if (!post) {
      return (
        <div className="panel-container">Select a post to view details.</div>
      );
    }

    return (
      <div className="panel-container">
        <div className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <small>{new Date(post.timestamp).toLocaleString()}</small>
          <p className="post-body">{post.body}</p>
          {post.comments && post.comments.length > 0 && (
            <ul className="comments-list">
              {post.comments.map((comment, cIndex) => (
                <li key={cIndex} className="comment-item">
                  {comment}
                </li>
              ))}
            </ul>
          )}
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Panel;
