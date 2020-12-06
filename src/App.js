import React, { Component } from 'react';
import './App.css';
import UserListComponent from './component/UserListComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListComponent />
      </div>
    );
  }
} 