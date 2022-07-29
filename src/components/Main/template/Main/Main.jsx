import './Main.scss'

import React from 'react'
import MainBanner from '../../modules/MainBanner/MainBanner'
import AboutUs from '../../modules/AboutUs/AboutUs'
import Research from '../../modules/Research/Research'

export default function Main() {
  return (
    <main className='main'>
      <div className='main__content'>
        <MainBanner />
        <AboutUs />
        <AboutUs />

        <Research />
      </div>
    </main>
  )
}
