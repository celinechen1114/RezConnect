import * as React from 'react';
import './css/Login.css';
import EmailLogin from './EmailLogin';

const Login = ({ onUserSelect }) => {
    const [role, setUserType] = React.useState(null);
  
    const handleUserTypeSelect = (role) => {
      setUserType(role);
    };

    console.log(role)
  
    if (role) {
      return <EmailLogin role={role} onUserSelect={onUserSelect} />
    }
  
    return (
      <div className="loginContainer">
        <div className="title">RezConnect</div>
        <div className="buttonContainer">
          <button onClick={() => handleUserTypeSelect('Student')}>
            <i className="material-icons">school</i>
            <span className="buttonText">Student</span>
          </button>
          <button onClick={() => handleUserTypeSelect('RA')}>
            <i className="material-icons">admin_panel_settings</i>
            <span className="buttonText">RA</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;
