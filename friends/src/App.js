import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={()=> {localStorage.removeItem('token')}}>Logout</Link>
      </nav>

      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </div>
    </div>
    </Router>
  );
}

export default App;
