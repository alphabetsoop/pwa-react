import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';

export default function Home() {
  // prerender?
  return (
    <Layout title="/" highlight="FEED" bartitle="/">
      <div>I don't this this page is what you're looking for...</div>
    </Layout>
  )
}
