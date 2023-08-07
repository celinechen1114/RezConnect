import logo from "./background.svg";
import "./App.css";
import Profile from "./profile/Profile";
import profilePic from "./james.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile name="James" grade="Freshman" profilePic={profilePic} />
      </header>
    </div>
  );
}

export default App;
