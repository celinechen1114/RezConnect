import React, { useState, useEffect } from "react";
import "./css/RAPanel.css";
import Profile from "./profile/Profile";
import profilePic from "./emilie.png";
import ProfileSetting from "./profile/ProfileSetting";

const RAPanel = ({ post, selectedContent, onNewPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comment, setComment] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [
    "academics",
    "dorms",
    "emergency",
    "emotional support",
    "health",
    "social",
    "sports",
  ];

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [starFocused, setStarFocused] = useState(false);

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
      const newComment = {
        username: "Username",
        timestamp: new Date().toISOString(),
        text: comment,
        thumbsUp: 0,
        thumbsDown: 0,
        endorsed: false, // Initialize endorsed to false
      };
      post.comments.push(newComment);
      setComment("");
    }
  };

  const [postLiked, setPostLiked] = useState(false);
  const [postDisliked, setPostDisliked] = useState(false);
  const [postStarFocused, setPostStarFocused] = useState(false);

  const handlePostThumbsUp = () => {
    post.thumbsUp = (post.thumbsUp || 0) + 1;
    setPostLiked(true);
    setPostDisliked(false);
  };

  const handlePostThumbsDown = () => {
    post.thumbsDown = (post.thumbsDown || 0) + 1;
    setPostLiked(false);
    setPostDisliked(true);
  };

  const handlePostEndorse = () => {
    post.endorsed = !post.endorsed;
    setPostStarFocused((prev) => !prev); // toggles the state of starFocused for post
  };

  const handleThumbsUp = (cIndex) => {
    const updatedComments = [...post.comments];
    updatedComments[cIndex].thumbsUp = 1;
    post.comments = updatedComments;
    setLiked(true);
    setDisliked(false);
  };

  const handleThumbsDown = (cIndex) => {
    const updatedComments = [...post.comments];
    updatedComments[cIndex].thumbsDown = 1;
    post.comments = updatedComments;
    setLiked(false);
    setDisliked(true);
  };

  const handleEndorse = (cIndex) => {
    const updatedComments = [...post.comments];
    updatedComments[cIndex].endorsed = !updatedComments[cIndex].endorsed;
    post.comments = updatedComments;
    setStarFocused((prev) => !prev); // toggles the state of starFocused
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
      tags: selectedTags,
      comments: [],
    });
    setTitle("");
    setBody("");
    setSelectedTags([]);
  };

  //added by Celine to make a realtime updating clock showing current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000)); // Increment by 1000 milliseconds (1 second)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  if (selectedContent === "profile") {
    return (
      <ProfileSetting
        profileProps={{
          name: "Emilie",
          grade: "RA",
          profilePic: profilePic,
          initialLocation: "Studying at Moffitt until 6",
        }}
        profileInfoProps={{
          name: "Emilie",
          major: "Biology",
          role: "RA",
          year: "Senior",
          interests: ["Surfing"],
          clubs: ["Sufing Club", "Soccer Club"],
          pronouns: "she/her/hers",
          contact: "emilie@berkeley.edu",
          profilePic: profilePic,
          initialLocation: "Studying at Moffitt until 6",
          intro:
            "Hello fellow students, I'm Emilie, RA for Unit 1 Floor 2. Feel free to reach out to me if you have any questions or concerns", // rest of the data
        }}
      />
    );
  } else {
    if (post === null) {
      return (
        <div className="panel-container">
          {/* <span style={{ display: 'block', width: '80%', textAlign: 'left', marginLeft: '10%', fontWeight:'bold' }}>New Post</span> */}
          <div className="new-post-title">New Post</div>
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
                    tabIndex="0"
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

    //This is the main raFeed page!
    if (!post) {
      return (
        <div className="blank-panel-container">
          <h1>{timeString}</h1>
          <p>
            {" "}
            Welcome back to <span className="title"> RezConnect </span> Emilie
            :){" "}
          </p>
        </div>
      );
    }

    return (
      <div className="panel-container">
        <div className="panel-post-item">
          <div className="identity-section">
            {/* <span>Username</span>  Replace with actual username */}
            {/* Celine's comment: the TIMESTAMP is now moved to the top of the div! */}
            <span>{new Date(post.timestamp).toLocaleString()}</span>
          </div>

          <Profile
            name="Emilie"
            grade="Resident Advisor"
            profilePic={profilePic}
          ></Profile>
          {/* Identity Section */}

          {/* Post Title */}
          <h2 className="post-title">{post.title}</h2>

          {/* Post Body */}
          <p className="panel-post-body">{post.body}</p>

          {/* Post Action Buttons */}
          <div className="post-actions">
            <button
              onClick={handlePostThumbsUp}
              className={postLiked ? "liked" : ""}
            >
              <i className="material-icons">thumb_up</i>
            </button>
            <button
              onClick={handlePostThumbsDown}
              className={postDisliked ? "disliked" : ""}
            >
              <i className="material-icons">thumb_down</i>
            </button>
            <button
              onClick={handlePostEndorse}
              className={postStarFocused ? "star-focus" : ""}
            >
              <i className="material-icons">star</i>
            </button>
          </div>
        </div>

        {/* Comments List */}

        <div className="comments-list">
          <div className="comments-title">Comments</div>
          {/* <h3 style={{ fontWeight: "bold", textAlign: "left" }}>Comments</h3> */}
          {post.comments &&
            post.comments.map((commentObj, cIndex) => (
              <div key={cIndex} className="comment-item">
                <Profile
                  name="Emilie"
                  grade="Resident Advisor"
                  profilePic={profilePic}
                ></Profile>
                {/* <div className="comment-user-info"> */}
                {/* <span>{commentObj.username}</span> */}
                {/* <span>{new Date(commentObj.timestamp).toLocaleString()}</span> */}
                {/* </div> */}
                <div className="comment-text-box">
                  <p className="comment-text">{commentObj.text}</p>
                </div>
                <div className="comment-actions">
                  <button onClick={() => handleThumbsUp(cIndex)}>
                    <i className="material-icons">thumb_up</i>
                  </button>
                  <button onClick={() => handleThumbsDown(cIndex)}>
                    <i className="material-icons">thumb_down</i>
                  </button>
                  <button onClick={() => handleEndorse(cIndex)}>
                    <i className="material-icons">star</i>
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Comment Submission */}
        <div className="comment-section">
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button className="comment-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default RAPanel;
