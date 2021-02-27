import React from 'react'
import Link from 'next/link'

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Icons
import Logo from '../public/icons/logo.svg';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

const navigation = (props) => {
  return (
    <nav>
      <AppBar id="top-nav__desktop" className="top-nav" position="sticky">
        <Toolbar>
          <Logo id="top-nav-logo" />
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
          <Link href="/news">
            <a>News</a>
          </Link>
        </Toolbar>
      </AppBar>

      <AppBar id="top-nav__mobile" className="top-nav" position="sticky">
        <Toolbar>
          <Typography variant="h6">{props.value}</Typography>
        </Toolbar>
      </AppBar>

      <BottomNavigation id="bottom-nav" value={props.value} onChange={props.onChange} showLabels>
        <Link href="/" passHref>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link href="/information" passHref>
          <BottomNavigationAction label="Locations" icon={<RoomIcon />} />
        </Link>
        <Link href="/locations" passHref>
          <BottomNavigationAction label="Information" icon={<PublicIcon />} />
        </Link>
        <Link href="/challenges" passHref>
          <BottomNavigationAction label="Challenges" icon={<FavoriteIcon />} />
        </Link>
        <Link href="/news" passHref>
          <BottomNavigationAction label="News" icon={<LibraryBooks />} />
        </Link>
      </BottomNavigation>
    </nav>
  )
}

export default navigation
