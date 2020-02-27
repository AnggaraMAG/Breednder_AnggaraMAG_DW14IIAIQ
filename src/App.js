import React from 'react';
import './App.css';
import Landing from './Landing/Landing'
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Profile from './Profile/Profile';
import Edit from './Edit/Edit';
import { connect } from "react-redux";

function App({ auth }) {

  return (
    <div>
      {/* <Landing /> */}
      <Router>
        {!auth.authenticated ? (
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
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
              <Redirect to="/home" />
            </Switch>

          )}
      </Router>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.auth,

  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       getSpecies: () => dispatch(getSpecies()),
//       getLogin: (data) => dispatch(login(data)),
//   }
// }
export default connect(mapStateToProps)(App);
