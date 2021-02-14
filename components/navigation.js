import React from 'react'

import Link from 'next/link'

const navigation = () => {
  return (
    <nav>
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
  )
}

export default navigation
