import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isAuthenticated } = props;
  if (!isAuthenticated) return <Redirect to="/" />;
  // else if (!isAuthenticated) return <Redirect to="/login" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthenticated }) => ({
    isAuthenticated
});

export default connect(mapStateToProps)(AuthRoute);