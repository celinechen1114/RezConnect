// Sidebar.js
import React, { useState } from 'react';
import './css/Sidebar.css';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ onPostSelect }) => {
  let navigate = useNavigate();

  const [newPost, setNewPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { title, body };
    setPosts([post, ...posts]);
    setTitle('');
    setBody('');
  };

  const handleProfileClick = () => {
    navigate('/profile'); // replace '/other-page' with the path you want to navigate to
};

  return (
    <div className="sidebar">
      <div className="title">RezConnect</div>
      <div className="new-post-button">
        <button onClick={() => setNewPost(true)}>New Post</button>
        {newPost &&
        <form onSubmit={handleSubmit}>  
          <input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Post Title"
            required
          />
          <textarea
            value={body}
            onChange={handleChangeBody}
            placeholder="Post Content"
            required
          />
          <button type="submit">Submit</button>
        </form>
}
      </div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} onClick={() => onPostSelect(post)}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      
      <div className='profile-button'>
        <button onClick={handleProfileClick} className="navigate-button">Profile</button>
      </div>
      
    </div>

    
  );
};

export default Sidebar;
