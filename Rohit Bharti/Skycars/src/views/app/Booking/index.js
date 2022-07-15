import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ManageBooking = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './managebooking')
);
const ManageBooking = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './')
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />

      <Route
        path={`${match.url}/managebooking`}
        render={(props) => <ManageBooking {...props} />}
      />

   
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
