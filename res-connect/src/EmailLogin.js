import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/EmailLogin.css';

const EmailLogin = ({role}) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting ${role} login form`);
    
    navigate(`/${role.toLowerCase()}Feed`);
  };

  return (
    <div className='emailLoginContainer'>
        <div className="title">RezConnect</div>
        <div className="textContainer">
        <h1>{role} Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                {/* Email */}
                <input type="email" name="email" placeholder="Email" required />
                </label>
                <label>
                {/* Password */}
                <input type="password" name="password" placeholder="Password" required />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
    
  );
};

export default EmailLogin;
