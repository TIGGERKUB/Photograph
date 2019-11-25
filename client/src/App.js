import React,{ Component }  from "react";
import { Switch, Route, BrowserRouter,withRouter,Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import Logout from "./components/logout/logout.component";
import FeedPage from "./pages/feedpage/feedpage.component";
import SearchPage from "./pages/search-page/search-page.component";
import ProfilePage from "./pages/profilepage/profile.component";
import {authCheckState} from "./redux/user/user.actions";
import setAuthorizationToken from './axios/axios.defaults';

import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
   componentDidMount () {
    this.props.authCheckState();
    setAuthorizationToken(localStorage.getItem('token'));

  }

  render(){
    let routes = (
      <Switch>
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/" component={SignInPage} />
        <Redirect to="/" />
      </Switch>
    );
    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route exact path="/feed" component={FeedPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/feed" />
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(authCheckState() )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
