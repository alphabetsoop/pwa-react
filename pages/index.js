import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
    width: 500,
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

  const [value, setValue] = useState('')

  const handleChange = (ev, newValue) => {
    setValue(newValue)
    console.log("set value", newValue)
  }

  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
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

          <BottomNavigation value={value} onChange={handleChange} className={classes.bot}>
            <BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<RestoreIcon />} />
            <BottomNavigationAction component={Link} to="/" label="home2" value="home2" icon={<FavoriteIcon />} />
            <BottomNavigationAction component={Link} to="/" label="home3" value="home3" icon={<LocationOnIcon />} />
            <BottomNavigationAction component={Link} to="/about" label="Folder" value="about" icon={<FolderIcon />} />
          </BottomNavigation>

          <Switch>
            <Route path="/about">
              <h2>About</h2>
            </Route>
            <Route path="/">
              <h2>Home</h2>
            </Route>
          </Switch>
      </Router>
      
    </>
  )
  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
  // https://colinhacks.com/essays/building-a-spa-with-nextjs
  // return (
  //   <Router>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //       </ul>

  //       <Switch>
  //         <Route path="/about">
  //           <h2>About</h2>
  //         </Route>
  //         <Route path="/">
  //           <h2>Home</h2>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // )
}
