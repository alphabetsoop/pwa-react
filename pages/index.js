import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    position: 'fixed'
  }
});

export default function Home() {
  const classes = useStyles();

  const [value, setValue] = useState('home')

  const handleChange = (ev, newValue) => {
    console.log("Move to ", value)
    setValue(newValue)
  }

  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      <BottomNavigation value={value} onChange={handleChange} className={classes.root, classes.bot}>
        <BottomNavigationAction label="Recents" value="home" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </>
  )
}
