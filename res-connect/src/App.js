import React from 'react';
import './App.css';
import Login from './Login';
import RAFeed from './RAFeed';
import StudentFeed from './StudentFeed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/raFeed" element={<RAFeed />} />
          <Route path="/studentFeed" element={<StudentFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
