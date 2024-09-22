import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

// function App() {
//   return <h1>Let's start!</h1>;
// }
const App = () => {
  // return <h1>Let's start!</h1>;
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          {/* <Route path="/places/new" element={<NewPlace />} /> */}
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          {/* 위에 정의된 경로 외에 경로는 전부 '/'로 향하게 한다. */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
