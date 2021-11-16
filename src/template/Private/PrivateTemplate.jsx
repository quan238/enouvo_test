import HeaderNavbar from 'Components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from "react-redux"

import configureStore from 'redux/saga/rootSaga';
import { LayoutStyled, ContentStyled } from 'stylesheet/Layout/Layout.styled';

export const store = configureStore();

function PrivateTemplate(props) {
  const { Component, ...restRoute } = props;
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated = useSelector((state) => state.auth);

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return isAuthenticated ? (
          <LayoutStyled className="layout">
            <HeaderNavbar />
            <ContentStyled>
              <Component {...propsRoute} />
            </ContentStyled>
          </LayoutStyled>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default PrivateTemplate;
