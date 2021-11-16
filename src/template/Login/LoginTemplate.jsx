import React from 'react';
import { Route } from 'react-router';
import { IllustrationTheme, LoginTemplateStyled } from './LoginTemplate';

export default function LoginTemplate(props) {
  // es6
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <LoginTemplateStyled>
            <div style={{ width: '50%' }}>
              <Component {...propsRoute} />
            </div>
            <IllustrationTheme />
          </LoginTemplateStyled>
        );
      }}
    />
  );
}
