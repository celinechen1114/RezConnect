import React, { useState, useEffect } from "react";
import "./css/StudentPanel.css";
import Profile from "./profile/Profile";
import profilePic from "./james.png";
import ProfileSetting from "./profile/ProfileSetting";

const StudentPanel = ({ post, selectedContent, onNewPostSubmit }) => {
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
    if (postLiked) {
      post.thumbsUp = (post.thumbsUp || 1) - 1; // decrement the like count if already liked
      setPostLiked(false);
    } else {
      post.thumbsUp = (post.thumbsUp || 0) + 1;
      setPostLiked(true);
      setPostDisliked(false);
    }
  };

  const handlePostThumbsDown = () => {
    if (postDisliked) {
      post.thumbsDown = (post.thumbsDown || 1) - 1; // decrement the dislike count if already disliked
      setPostDisliked(false);
    } else {
      post.thumbsDown = (post.thumbsDown || 0) + 1;
      setPostDisliked(true);
      setPostLiked(false);
    }
  };

  const handlePostEndorse = () => {
    post.endorsed = !post.endorsed;
    setPostStarFocused((prev) => !prev); // toggles the state of starFocused for post
  };

  const handleThumbsUp = (cIndex) => {
    const updatedComments = [...post.comments];
    if (commentStatus[cIndex] && commentStatus[cIndex].liked) {
      updatedComments[cIndex].thumbsUp--;
    } else {
      updatedComments[cIndex].thumbsUp++;
    }
    post.comments = updatedComments;

    setCommentStatus((prevStatus) => ({
      ...prevStatus,
      [cIndex]: {
        ...prevStatus[cIndex],
        liked: !prevStatus[cIndex]?.liked,
        disliked: false,
      },
    }));
  };

  const handleThumbsDown = (cIndex) => {
    const updatedComments = [...post.comments];
    if (commentStatus[cIndex] && commentStatus[cIndex].disliked) {
      updatedComments[cIndex].thumbsDown--;
    } else {
      updatedComments[cIndex].thumbsDown++;
    }
    post.comments = updatedComments;

    setCommentStatus((prevStatus) => ({
      ...prevStatus,
      [cIndex]: {
        ...prevStatus[cIndex],
        disliked: !prevStatus[cIndex]?.disliked,
        liked: false,
      },
    }));
  };

  const handleEndorse = (cIndex) => {
    const updatedComments = [...post.comments];
    updatedComments[cIndex].endorsed = !updatedComments[cIndex].endorsed;
    post.comments = updatedComments;

    setCommentStatus((prevStatus) => ({
      ...prevStatus,
      [cIndex]: {
        ...prevStatus[cIndex],
        starFocused: !prevStatus[cIndex]?.starFocused,
      },
    }));
  };

  const [commentStatus, setCommentStatus] = useState({});

  const handleCommentThumbsUp = (cIndex) => {
    const updatedComments = [...post.comments];
    if (commentStatus[cIndex] && commentStatus[cIndex].liked) {
      updatedComments[cIndex].thumbsUp--;
      setCommentStatus((prevStatus) => ({
        ...prevStatus,
        [cIndex]: {
          ...prevStatus[cIndex],
          liked: false,
        },
      }));
    } else {
      updatedComments[cIndex].thumbsUp++;
      setCommentStatus((prevStatus) => ({
        ...prevStatus,
        [cIndex]: {
          ...prevStatus[cIndex],
          liked: true,
          disliked: false,
        },
      }));
    }
    post.comments = updatedComments;
  };

  const handleCommentThumbsDown = (cIndex) => {
    const updatedComments = [...post.comments];
    if (commentStatus[cIndex] && commentStatus[cIndex].disliked) {
      updatedComments[cIndex].thumbsDown--;
      setCommentStatus((prevStatus) => ({
        ...prevStatus,
        [cIndex]: {
          ...prevStatus[cIndex],
          disliked: false,
        },
      }));
    } else {
      updatedComments[cIndex].thumbsDown++;
      setCommentStatus((prevStatus) => ({
        ...prevStatus,
        [cIndex]: {
          ...prevStatus[cIndex],
          disliked: true,
          liked: false,
        },
      }));
    }
    post.comments = updatedComments;
  };

  const handleCommentEndorse = (cIndex) => {
    const updatedComments = [...post.comments];
    updatedComments[cIndex].endorsed = !updatedComments[cIndex].endorsed;
    post.comments = updatedComments;
    setCommentStatus((prevStatus) => ({
      ...prevStatus,
      [cIndex]: {
        ...prevStatus[cIndex],
        starFocused: !prevStatus[cIndex]?.starFocused,
      },
    }));
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
          name: "James",
          grade: "Freshman",
          profilePic: profilePic,
          initialLocation: "Studying at Doe until 5",
        }}
        profileInfoProps={{
          name: "James",
          major: "Business",
          role: "Student",
          year: "Freshman",
          interests: ["Tennis"],
          clubs: ["Tennis Club"],
          pronouns: "he/him/his",
          contact: "james@berkeley.edu",
          profilePic: profilePic,
          initialLocation: "Studying at Doe until 5",
          intro:
            "Hey guys, this is James from Unit 2. Let's explore the campus together!",
        }}
      />
    );
  } else {
    if (post === null) {
      return (
        <div className="student-panel-container">
          {/* <span style={{ display: 'block', width: '80%', textAlign: 'left', marginLeft: '10%', fontWeight:'bold' }}>New Post</span> */}
          <div className="student-new-post-title">New Post</div>
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
                    tabIndex="0"
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

    //This is the main raFeed page!
    if (!post) {
      return (
        <div className="student-blank-panel-container">
          <h1>{timeString}</h1>
          <p>
            {" "}
            Welcome back to{" "}
            <span className="title" style={{ color: "white" }}>
              {" "}
              RezConnect{" "}
            </span>{" "}
            James :){" "}
          </p>
        </div>
      );
    }

    return (
      <div className="student-panel-container">
        <div className="student-scrollable-panel-content">
          <div className="student-panel-post-item">
            <div className="student-identity-section">
              {/* <span>Username</span>  Replace with actual username */}
              {/* Celine's comment: the TIMESTAMP is now moved to the top of the div! */}
              <span>{new Date(post.timestamp).toLocaleString()}</span>
            </div>

            <Profile
              name="James"
              grade="Freshman"
              profilePic={profilePic}
            ></Profile>
            {/* Identity Section */}

            {/* Post Title */}
            <h2 className="student-post-title">{post.title}</h2>

            {/* Post Body */}
            <p className="student-panel-post-body">{post.body}</p>

            {/* Post Action Buttons */}
            <div className="student-post-actions">
              <button
                onClick={handlePostThumbsUp}
                className={postLiked ? "liked" : ""}
              >
                <i className="material-icons">thumb_up</i>
                <span>{postLiked ? "Liked!" : ""}</span>
              </button>
              <button
                onClick={handlePostThumbsDown}
                className={postDisliked ? "disliked" : ""}
              >
                <i className="material-icons">thumb_down</i>
                <span>{postDisliked ? "Disliked" : ""}</span>
              </button>
            </div>
          </div>

          {/* Comments List */}

          <div className="student-comments-list">
            <div className="student-comments-title">Comments</div>
            {post.comments &&
              post.comments.map((commentObj, cIndex) => (
                <div key={cIndex} className="student-comment-item">
                  <span className="student-comment-timestamp">
                    {new Date(commentObj.timestamp).toLocaleString()}
                  </span>
                  <Profile
                    name="James"
                    grade="Freshman"
                    profilePic={profilePic}
                  ></Profile>
                  <div className="student-comment-text-box">
                    <p className="student-comment-text">{commentObj.text}</p>
                  </div>
                  <div className="student-comment-actions">
                    <button
                      onClick={() => handleCommentThumbsUp(cIndex)}
                      className={commentStatus[cIndex]?.liked ? "liked" : ""}
                    >
                      <i className="material-icons">thumb_up</i>
                      <span>
                        {commentStatus[cIndex]?.liked ? "Liked!" : ""}
                      </span>
                    </button>
                    <button
                      onClick={() => handleCommentThumbsDown(cIndex)}
                      className={
                        commentStatus[cIndex]?.disliked ? "disliked" : ""
                      }
                    >
                      <i className="material-icons">thumb_down</i>
                      <span>
                        {commentStatus[cIndex]?.disliked ? "Disliked" : ""}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Comment Submission */}
        <div className="student-comment-section">
          <form onSubmit={handleCommentSubmit} className="student-comment-form">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              required
            />
            <button className="student-comment-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default StudentPanel;
