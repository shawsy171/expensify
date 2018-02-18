// @ts-check
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// dashboard
import DashBoardPage from './../modules/dashboard/containers/dashboard-page.jsx'; // Entry point
// work around so i can have routes in different files
import dashboardRoutes from './../modules/dashboard/routes/dashboard.routes.jsx';

// site
import Header from './../modules/site/components/header/header.jsx';
import siteRoutes from './../modules/site/routes/site.routes.jsx';


const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoardPage} exact={true} />
        {dashboardRoutes()}
        {siteRoutes()}
      </Switch>
    </div>
    
  </BrowserRouter>
);

export default AppRoutes;