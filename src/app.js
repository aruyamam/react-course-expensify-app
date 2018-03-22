import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPagee} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
