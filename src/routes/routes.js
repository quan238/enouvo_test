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
    path: '/vehicle/:id',
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
