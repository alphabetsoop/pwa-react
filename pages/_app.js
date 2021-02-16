// Setup
import { useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

// Components
import Head from 'next/head'
import Navigation from '../components/navigation'

// Styles
import '../styles/reset.css'
import '../styles/inherited.css'
import '../styles/nav.css'
import '../styles/index.css'
import '../styles/locations.css'
import '../styles/information.css'
import '../styles/challenges.css'


export default function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState('Home')

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        
        <title>Recycling PWA</title>

        <link rel="manifest" href="/manifest.json" />
        <script src="https://kit.fontawesome.com/bae1753173.js" crossOrigin="anonymous"></script>
      </Head>
      <Navigation value={page} onChange={(evt, value) => { setPage(value) }}/>
      <Component {...pageProps} />
    </>
  )
}
