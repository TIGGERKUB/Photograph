import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Header from './components/header/header.component'
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from './pages/sign-up-page/sign-up-page.component'
import FeedPage from "./pages/feedpage/feedpage.component";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route path="/feeds" component={FeedPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
