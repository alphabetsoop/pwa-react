import React from 'react'
import PrimaryInfo from '../components/information/primary.js'
import SecondaryInfo from '../components/information/secondary.js'
import TertiaryInfo from '../components/information/tertiary.js'

const information = () => {
  return (
    <div id="information-page">
      <section id="main-info-section" class="info-section">
        <PrimaryInfo titleSize="h4" />
      </section>
      <section id="secondary-info-section" class="info-section">
        <SecondaryInfo titleSize="h4" />
      </section>
      <section id="tertiary-info-section" class="info-section">
        <TertiaryInfo titleSize="h4" />
      </section>
    </div>
  )
}

export default information
