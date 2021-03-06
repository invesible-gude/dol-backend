import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { HashRouter, Route, Switch, } from 'react-router-dom';

const Login = React.lazy(() => import('./views/Login/Login'));
const MainLayout = React.lazy(() => import('./containers/MainLayout'));
const MainLayoutEmployee = React.lazy(() => import('./containers/MainLayoutEmployee'));
const MainLayoutExecutive = React.lazy(() => import('./containers/MainLayoutExecutive'));
const MainLayoutPublicize = React.lazy(() => import('./containers/MainLayoutPublicize'));


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
function App() {
  const user_login = JSON.parse(localStorage.getItem('user_login'));
  console.log("login ", user_login )

  if (user_login == null) {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route path="/" name="Home" render={props => <Login {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
          <Switch>
            {user_login.department_name === 'admin' ? <Route path="/" name="Home" render={props => <MainLayout {...props} />} /> : '' }
            {user_login.department_name === 'พนักงานประชาสัมพันธ์' ? <Route path="/" name="Home" render={props => <MainLayoutPublicize {...props} />} /> : ''} /> }
            {user_login.department_name === 'ผู้บริหาร' ? <Route path="/" name="Home" render={props => <MainLayoutExecutive {...props} />} /> :  '' }
            {user_login.department_name !== 'ผู้บริหาร' && user_login.department_name !== 'พนักงานประชาสัมพันธ์' && user_login.department_name !== 'admin'  ? <Route path="/" name="Home" render={props => <MainLayoutEmployee {...props} />} /> : '' }
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
  window.location.reload()

}

export default App;
