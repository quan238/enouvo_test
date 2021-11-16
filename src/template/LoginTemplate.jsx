import React from 'react';
import { Route } from 'react-router';

export default function LoginTemplate(props) {
  // es6
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return <>login</>;
      }}
    />
  );
}
