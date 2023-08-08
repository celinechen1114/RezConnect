import React, { useState } from 'react';
import './css/Panel.css';

const Panel = ({ post, onNewPostSubmit }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [comment, setComment] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const tags = ["sports", "social", "academics", "dorms", "emotional support", "health", "emergency"];
    
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
            setSelectedTags(selectedTags.filter(tag => tag !== event.target.value));
        }
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        onNewPostSubmit({ 
            title, 
            body, 
            tags: selectedTags, // add selected tags to the new post
            comments: [] 
        }); 
        setTitle("");
        setBody("");
        setSelectedTags([]);  // reset the tags
    };

    if (post === null) {
        return (
            <div className="panel-container">
                <h2>Create New Post</h2>
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
                    <div className="tag-selection">
                        <span>Select Tags:</span>
                        {tags.map(tag => (
                            <label key={tag}>
                                <input 
                                    type="checkbox" 
                                    value={tag}
                                    onChange={handleTagChange}
                                    checked={selectedTags.includes(tag)}
                                />
                                {tag}
                            </label>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    if (!post) {
        return <div className="panel-container">Select a post to view details.</div>;
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
                            <li key={cIndex} className="comment-item">{comment}</li>
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
};

export default Panel;
