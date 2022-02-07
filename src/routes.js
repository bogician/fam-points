import React from 'react';
import Dashboard from './layouts/Dashboard';
import AboutPage from './views/AboutPage/AboutPage';
import HomePage from './views/HomePage/HomePage';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <HomePage />,
      }],
  },
  {
    path: '/about',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <AboutPage />,
      }],
  },
];
export default routes;
