import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPagee = () => (
  <div>
    This is from my dashboard compenent
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my expense compenent
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit compenent
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help compenent
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPagee} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
