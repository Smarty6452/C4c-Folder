import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

// const Dashboards = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './dashboards')
// );
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Adcar = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './cars/adcar')
);
const ManageCar = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './cars/managecar')
);
const ManageBooking = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './Booking/managebooking')
);
const ManageCustomer = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './customer/managecustomer')
);
const Transcation = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './transcation/transcation')
);
const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './dashboard')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/adcar`}
              render={(props) => <Adcar {...props} />}
            />
            <Route
              path={`${match.url}/managecar`}
              render={(props) => <ManageCar {...props} />}
            />
            <Route
              path={`${match.url}/managebooking`}
              render={(props) => <ManageBooking {...props} />}
            />
            <Route
              path={`${match.url}/managecustomer`}
              render={(props) => <ManageCustomer {...props} />}
            />
            <Route
              path={`${match.url}/transcation`}
              render={(props) => <Transcation {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
