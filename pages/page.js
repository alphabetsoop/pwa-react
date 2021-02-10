import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
    position: 'fixed',
  },
});

export default function Page(props, {children}) {
  const classes = useStyles()
  const router = useRouter()

  const [value, setValue] = useState('')

  const handleChange = (ev, newValue) => {
    setValue(newValue)

    console.log("Move to ", value)
    router.push(`/${value}`)
  }

  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <BottomNavigation value={value} onChange={handleChange} className={classes.bot}>
        <BottomNavigationAction label="Home" value="home" icon={<RestoreIcon />} />
        <BottomNavigationAction label="??" value="home" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="??" value="home" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="about" icon={<FolderIcon />} />
      </BottomNavigation>
    </>
  )
}