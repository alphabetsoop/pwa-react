import React from 'react'
import { useState, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Link from 'next/link'

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LoginDialog from '../components/dialog/login.js';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteIcon from '@material-ui/icons/Favorite';

const navigation = (props) => {

  const [isDialogVisible, setDialogVisible] = useState(false)
  const dialogFullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  // change dialog visibility
  const handleClickAccount = () => {
    setDialogVisible(!isDialogVisible)
  }

  return (
    <nav>
      <AppBar id="top-nav__desktop" className="top-nav" position="sticky">
        <Toolbar>
          <i id="top-nav-logo" className="fas fa-recycle"></i>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/information">
            <a>Information</a>
          </Link>
          <Link href="/locations">
            <a>Locations</a>
          </Link>
          <Link href="/challenges">
            <a>Challenges</a>
          </Link>
          <Link href="/#">
            <a onClick={handleClickAccount}>My Account</a>
          </Link>
        </Toolbar>
      </AppBar>

      <LoginDialog 
        fullScreen={dialogFullScreen}
        open={isDialogVisible}
        onClose={handleClickAccount}
        onSubmit={handleClickAccount}
      />
      
      <AppBar id="top-nav__mobile" className="top-nav" position="sticky">
        <Toolbar>
          <i id="top-nav-logo" className="fas fa-recycle"></i>
          <Typography variant="h6">{props.value}</Typography>
        </Toolbar>
      </AppBar>

    <BottomNavigation id="bottom-nav" value={props.value} onChange={props.onChange} showLabels>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Locations" icon={<RoomIcon />} />
      <BottomNavigationAction label="Information" icon={<PublicIcon />} />
      <BottomNavigationAction label="Challenges" icon={<FavoriteIcon />} />
      {/* <BottomNavigationAction component={Link} to="/about" label="About" value="About" icon={<FolderIcon />} />
      <BottomNavigationAction component={Link} to="/community" label="Community" value="Community" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  </nav>
  )
}

export default navigation
