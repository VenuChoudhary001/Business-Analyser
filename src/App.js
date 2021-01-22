import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import NewsFeed from "./Components/NewsFeed";
import ProfilePage from "./Components/ProfilePage";
import StaffList from "./Components/StaffList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/staffList">
            <StaffList />
          </Route>
          <Route exact path="/newsFeed">
            <NewsFeed />
          </Route>
          <Route exact path="/staffList/:id">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
