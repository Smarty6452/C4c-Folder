import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ManageCustomer = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './managecustomer')
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />

      <Route
        path={`${match.url}/managecustomer`}
        render={(props) => <ManageCustomer {...props} />}
      />


      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
