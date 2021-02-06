import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Home} exact />
        <Route path="/maps" component={Maps} />
        <Route path="/shop" component={Shop} />
        <Route path="/settings" component={Settings} /> */}
      </Switch>
    </div>
  );
}

export default App;
