// @ts-check
import React from 'react';
import { Route, Router } from 'react-router-dom';

// site pages
import HelpPage from './../containers/help-page/help-page.jsx';
import NotFoundPage from './../containers/not-found-page/not-found-page.jsx';

const siteRoutes = () => (
  [
    <Route key="help" path="/help" component={HelpPage} />,
    <Route key="NotFoundPage" component={NotFoundPage} />
  ]
);

export default siteRoutes;