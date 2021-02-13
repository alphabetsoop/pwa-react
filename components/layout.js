import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from './wraplink'
import Head from 'next/head'
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

export default function Layout({ children, title = "", highlight = 'FEED', bartitle = 'Feed', }) {
  // prerender?
  const classes = useStyles()

  // navtitle: displayed on top app bar. highlight: the highlighted navigation. 
  // icon: from @material-ui/icons/. href: displayed on URL. 
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppBar position="static" className={classes.top}>
        <Toolbar>
          <Typography variant="h6">
            {bartitle}
          </Typography>
        </Toolbar>
      </AppBar>
      
      {children}

      <BottomNavigation value={highlight} className={classes.bot}>
        <BottomNavigationAction component={Link} href={'/feed'} label="Feed" value="FEED" icon={<RestoreIcon />} />
        <BottomNavigationAction component={Link} href={'/earn'} label="Earn" value="EARNPOINTS" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} href={'/feed'} label="Nearby" value="NEARBY" icon={<LocationOnIcon />} />
        <BottomNavigationAction component={Link} href={'/about'} label="Shop" value="SHOP" icon={<FolderIcon />} />
      </BottomNavigation>      
    </>
  )
  // https://github.com/vercel/next.js/tree/canary/packages/create-next-app
  // https://colinhacks.com/essays/building-a-spa-with-nextjs
  // https://github.com/vercel/next.js/blob/master/examples/layout-component/components/layout.js
}
