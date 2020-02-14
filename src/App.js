import React from 'react';
import './App.css';
import Landing from './Landing/Landing'
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './Profile/Profile';
import Edit from './Edit/Edit';

function App() {
  return (
    <div>
      {/* <Landing /> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/editprofile">
            <Edit />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
