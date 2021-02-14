import React from 'react'
import Link from 'next/link'

import { AppBar, BottomNavigation } from '@material-ui/core';

const navigation = () => {
  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/information">
            <a>Information</a>
          </Link>
        </li>
        <li>
          <Link href="/locations">
            <a>Locations</a>
          </Link>
        </li>
        <li>
          <Link href="/challenges">
            <a>Challenges</a>
          </Link>
        </li>
      </ul>
    </nav>
    // Bottom Nav
  )
}

export default navigation
