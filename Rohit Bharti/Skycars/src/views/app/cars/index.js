import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AdCar = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './adcar')
);
const ManageCar = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-adcar" */ './managecar')
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
    
      <Route
        path={`${match.url}/adcar`}
        render={(props) => <AdCar {...props} />}
      />
      <Route
        path={`${match.url}/adcar`}
        render={(props) => <ManageCar {...props} />}
      />
   

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
