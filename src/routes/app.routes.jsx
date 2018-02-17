import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// pages
import DashBoardPage from './../Dashboard/containers/dashboard-page.jsx';
import AddExpensePage from './../Dashboard/containers/add-expense/add-expense-page.jsx';
import EditExpensePage from './../Dashboard/containers/edit-expense/edit-expense-page.jsx';
import HelpPage from './../Site/containers/help-page.jsx';

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