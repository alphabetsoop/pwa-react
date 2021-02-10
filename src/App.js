import React from 'react';
import './assets/style/App.css';
import { Nav } from './components/Nav'
import { Home } from './screens/Home'
import { Maps } from './screens/Maps'
import { Shop } from './screens/Shop'
import { Settings } from './screens/Settings'
import { Route, Switch } from 'react-router-dom';

function App() {

  // 404 pages redirect to Home component
  // Nav is todo

  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/maps" component={Maps} />
        <Route path="/shop" component={Shop} />
        <Route path="/settings" component={Settings} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
