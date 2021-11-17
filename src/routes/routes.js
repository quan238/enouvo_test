import DetailPage from 'pages/Detail/DetailPage';
import HomePage from 'pages/Home/HomePage';
import LoginPage from 'pages/Login/LoginPage';

const routesHome = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/store/:id',
    exact: true,
    component: DetailPage
  }
];

const routesAuth = [
  {
    path: '/login',
    exact: true,
    component: LoginPage
  }
];

export const routes = { routesHome, routesAuth };
