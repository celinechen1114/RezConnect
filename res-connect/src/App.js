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
          initialLocation="Studying at Moffitt until 6"
          // text="I miss my family."
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
      </header>
    </div>
  );
}

export default App;
