import './AboutUs.scss'

import React from 'react'
import Container from '../../../Container/Container'
import MainInfo from './components/MainInfo/MainInfo'
import OurBenefits from './components/OurBenefits/OurBenefits'
import SecondaryInfo from './components/SecondaryInfo/SecondaryInfo'

export default function AboutUs() {
  return (
    <section className='about-us'>
      <Container>
        <div className='about-us__content'>
          <MainInfo />
          <OurBenefits />
          <SecondaryInfo />
        </div>
      </Container>
      <div className='about-us__bottom-img' />
    </section>
  )
}
