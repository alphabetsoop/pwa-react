import React from 'react'
import Link from 'next/link'

import {
  AppBar,
  Toolbar,
  BottomNavigation
} from '@material-ui/core';

const navigation = () => {
  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </nav>
    // Bottom Nav
  )
}

export default navigation
