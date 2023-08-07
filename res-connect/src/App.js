import logo from "./background.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Profile() {
  return (
    <button
      className="absolute top-4 right-4 bg-white bg-opacity-50 p-2"
      onClick={() => {
        alert("Profile button clicked!");
      }}
    >
      {/* <img src={profilePic} alt="Profile Pic" /> */}
      <div>Name: John Doe</div>
      <div>Grade: Freshman</div>
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}

export default App;
