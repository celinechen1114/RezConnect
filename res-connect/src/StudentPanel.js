import React, { useState } from "react";
import "./css/StudentPanel.css";

const StudentPanel = ({ post, onNewPostSubmit }) => {
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

  if (post === null) {
    return (
      <div className="student-panel-container">
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
          <div className="student-tag-selection">
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

          <button type="submit" className="student-submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="student-blank-panel-container">
        Select a post to view details
      </div>
    );
  }

  return (
    <div className="student-panel-container">
      <div className="student-post-item">
        {/* Identity Section */}
        <div className="student-identity-section">
          <span>Username</span>{" "}
          {/* Replace this with the actual username when available */}
          <span>{new Date(post.timestamp).toLocaleString()}</span>
        </div>

        {/* Post Title */}
        <h2 className="student-post-title">{post.title}</h2>

        {/* Post Body */}
        <p className="student-post-body">{post.body}</p>

        {/* Comments Section */}
        {post.comments && post.comments.length > 0 && (
          <ul className="student-comments-list">
            {post.comments.map((comment, cIndex) => (
              <li key={cIndex} className="student-comment-item">
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Comment Submission */}
      <div className="student-comment-section">
        <form
          onSubmit={handleCommentSubmit}
          className="student-comment-section"
        >
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default StudentPanel;
