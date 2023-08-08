import React from 'react';
import './css/Panel.css';

const Panel = ({ post }) => {
    if (!post) return <div className="panel-container">Select a post to view details.</div>;

    return (
        <div className="panel-container">
            <div className="post-item">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                {post.comments && post.comments.length > 0 && (
                    <ul className="comments-list">
                        {post.comments.map((comment, cIndex) => (
                            <li key={cIndex} className="comment-item">{comment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Panel;
