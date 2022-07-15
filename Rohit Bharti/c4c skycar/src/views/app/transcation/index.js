import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Transcation = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './transcation')
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />

      <Route
        path={`${match.url}/transcation`}
        render={(props) => <Transcation {...props} />}
      />


      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
