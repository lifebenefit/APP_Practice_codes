import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';


// function App() {
//   return <h1>Let's start!</h1>;
// }

const App = () => {
  const { userId, token, login, logout} = useAuth();

  let routes;

  if (token) {
    routes = (
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
        {/* /places/new 링크에서 new가 placeId로 인식되기 때문에
        /places/new 와 /places/:placeId 둘다 렌더링 된다.
        이를 해결 하기 위해서는 <Switch>태그를 사용해 조건에 부합하는
        하나의링크만 렌더링 되게끔 해야 한다. */}
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        {/* 위에 정의된 경로 외에 경로는 전부 '/'로 향하게 한다. */}
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  // return <h1>Let's start!</h1>;
  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
