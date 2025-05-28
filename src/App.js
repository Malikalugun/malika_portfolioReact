import React, { Component, Fragment } from 'react';
import AppRoute from './routes/AppRoute';
import { HashRouter } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <AppRoute />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
