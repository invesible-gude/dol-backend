import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Pages
const DepartmentView = React.lazy(() => import('./view'));
const DepartmentInsert = React.lazy(() => import('./insert'));
const DepartmentUpdate = React.lazy(() => import('./update'));

class DepartmentMain extends Component {

  render() {
    return (
        <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
          <Route exact path="/department" name="Login Page" render={props => <DepartmentView {...props} />} />
            <Route exact path="/department/insert" name="Login Page" render={props => <DepartmentInsert {...props} />} />
            <Route exact path="/department/update/:department_id" name="Login Page" render={props => <DepartmentUpdate {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}


export default (DepartmentMain);
