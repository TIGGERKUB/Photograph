import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import FeedPage from "./pages/feedpage/feedpage.component";
import SearchPage from "./pages/search-page/search-page.component";
import ProfilePage from "./pages/profilepage/profile.component";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/feed" component={FeedPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
