import './App.scss';
import { createBrowserHistory } from 'history';
import { routes } from '../routes/routes';
import PrivateTemplate from '../template/Private/PrivateTemplate';
import LoginTemplate from '../template/Login/LoginTemplate';
import { Router, Switch } from 'react-router-dom';

export const history = createBrowserHistory();

const Components = [
  {
    Component: PrivateTemplate,
    routes: routes.routesHome
  },
  {
    Component: LoginTemplate,
    routes: routes.routesAuth
  }
];

const renderRoute = (Component, routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Component
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}></Component>
      );
    });
  }
};

function App() {
  return (
    <Router history={history}>
      {/* public Route */}
      <Switch>
        {Components.map((item) => {
          return renderRoute(item.Component, item.routes);
        })}
      </Switch>
    </Router>
  );
}

export default App;
