// Setup
import { useState } from 'react'

// Components
import Head from 'next/head'
import Navigation from '../components/navigation'

// Styles
import '../styles/reset.css'
import '../styles/inherited.css'
import '../styles/main.css'


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
      </Head>
      <Navigation value={page} onChange={(evt, value) => { setPage(value) }}/>
      <Component {...pageProps} />
    </>
  )
}
