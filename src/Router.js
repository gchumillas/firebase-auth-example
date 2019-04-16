import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

import Loading from "components/Loading";
import Header from "views/snippets/Header";
import Login from "views/Login";
import Home from "views/Home";
import Profile from "views/Profile";
import UserUpdate from "views/UserUpdate";
import UserCreate from "views/UserCreate";

class Router extends React.Component {
  render = () => {
    return (
      <FirebaseAuthConsumer>
        {({ isSignedIn, providerId, firebase }) => {
          return (
            <div>
              <Header firebase={firebase} />
              {providerId === null ? (
                <Loading />
              ) : (
                <BrowserRouter>
                  <Switch>
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute path="/profile" component={Profile} />
                    <ProtectedRoute
                      path="/user/create"
                      component={UserCreate}
                    />
                    <ProtectedRoute
                      path="/user/update/:id"
                      component={UserUpdate}
                    />
                    <Route
                      path="/login"
                      render={props => {
                        return isSignedIn ? (
                          <Redirect to={{ pathname: "/" }} />
                        ) : (
                          <Login />
                        );
                      }}
                    />
                    <Route component={PageNotFound} />
                  </Switch>
                </BrowserRouter>
              )}
            </div>
          );
        }}
      </FirebaseAuthConsumer>
    );
  };
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        return (
          <Route
            {...rest}
            render={props => {
              return isSignedIn ? (
                <Component {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              );
            }}
          />
        );
      }}
    </FirebaseAuthConsumer>
  );
};

const PageNotFound = () => <div>Page not found</div>;

export default Router;
