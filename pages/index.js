import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about'
import Home from './home'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 500,
  },
  
  media: {
    height: 140,
  },

  bot: {
    width: '100%',
    bottom: 0,
    position: 'fixed',
  },
})

export default function App() {
  // prerender?
  const classes = useStyles()

  const [value, setValue] = useState('Home') // starting state title value as Home

  const handleChange = (ev, newValue) => {
    setValue(newValue)
    console.log("set value", newValue)
  }

  // label: displayed on nav bar. value: displayed on title toolbar. 
  // icon: from @material-ui/icons/. path: displayed on URL. 
  
  return (
    <>
      <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                {value}
              </Typography>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <BottomNavigation value={value} onChange={handleChange} className={classes.bot}>
            <BottomNavigationAction component={Link} to="/" label="Feed" value="Feed" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to="/" label="Earn" value="Earn points" icon={<FavoriteIcon />} />
            <BottomNavigationAction component={Link} to="/" label="Nearby" value="Nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction component={Link} to="/about" label="Shop" value="Shop" icon={<FolderIcon />} />
          </BottomNavigation>

      </Router>
      
    </>
  )
  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
  // https://colinhacks.com/essays/building-a-spa-with-nextjs
}
