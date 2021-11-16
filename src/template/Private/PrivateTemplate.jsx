import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from "react-redux"

import configureStore from 'redux/saga/rootSaga';

export const store = configureStore();

function PrivateTemplate(props) {
  const { Component, ...restRoute } = props;
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated = true;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return isAuthenticated ? <>123</> : <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateTemplate;
