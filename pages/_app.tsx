import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}