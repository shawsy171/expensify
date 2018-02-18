// @ts-check
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// pages
import DashBoardPage from './../modules/dashboard/containers/dashboard-page.jsx';
import AddExpensePage from './../modules/dashboard/containers/add-expense/add-expense-page.jsx';
import EditExpensePage from './../modules/dashboard/containers/edit-expense/edit-expense-page.jsx';
import HelpPage from './../modules/site/containers/help-page.jsx';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={DashBoardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

export default routes;