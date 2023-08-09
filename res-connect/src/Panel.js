import React from 'react';
import './css/Panel.css';
import Profile from './profile/Profile.js';
import profilePic from './james.png'

const Panel = ({ post }) => {
    if (!post) return <div className="panel-container">Select a post to view details.</div>;

    return (
        <div className="panel-container">
            <div className="post-item">
            <Profile
        name="Emilie"
        grade="Resident Advisor"
        profilePic={profilePic}
        location="Studying at Moffitt Library for the next 2 hours."
         // Below is wrong info! need to be updated 
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
