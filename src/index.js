import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FriendsListComponent from './component/FriendsListComponent';
import FriendOfFriendComponent from './component/FriendOfFriendComponent';
import GeoFriendsComponent from './component/GeoFriendsComponent';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/users" component={App} />
        <Route path="/friends/:userId" component={FriendsListComponent} />
        <Route path="/friends/fofList/:userId" component={FriendOfFriendComponent} />
        <Route path="/geoFriendList" component={GeoFriendsComponent} />

      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));