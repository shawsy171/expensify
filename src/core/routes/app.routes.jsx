// @ts-check
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// expense
import ExpenseDashboard from '../../features/expense/containers/expense-dashboard/expense-dashboard'; // Entry point
import expenseRoutes from '../../features/expense/routes/expense.routes'; // work around so i can have routes in different files

// site
import Header from '../../features/site/components/header/header';
import siteRoutes from '../../features/site/routes/site.routes'; // work around so i can have routes in different files


const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact />
        {expenseRoutes()}
        {siteRoutes()}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
