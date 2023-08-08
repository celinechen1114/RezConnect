import logo from "./background.svg";
import "./App.css";
import Profile from "./profile/Profile";
import profilePic from "./james.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          name="James"
          grade="Freshman"
          profilePic={profilePic}
          profileInfoProps={{
            name: "James",
            major: "Computer Science",
            year: "Freshman",
            interests: ["Coding", "Basketball"],
            clubs: ["Coding Club", "Basketball Club"],
            pronouns: "he/him",
            contact: "james@example.com",
          }}
        />
      </header>
    </div>
  );
}

export default App;
