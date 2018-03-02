// @ts-check
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// expense
import ExpenseDashboard from '../../features/expense/containers/expense-dashboard/expense-dashboard.jsx'; // Entry point
// work around so i can have routes in different files
import expenseRoutes from '../../features/expense/routes/expense.routes.jsx';

// site
import Header from '../../features/site/components/header/header.jsx';
import siteRoutes from '../../features/site/routes/site.routes.jsx';


const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        {expenseRoutes()}
        {siteRoutes()}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
