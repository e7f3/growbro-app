import './AboutUs.scss'

import React from 'react'
import Container from '../../../Container/Container'
import MainInfo from './components/MainInfo/MainInfo'
import OurBenefits from './components/OurBenefits/OurBenefits'
import SecondaryInfo from './components/SecondaryInfo/SecondaryInfo'
import Test from '../../../../assets/images/test.png'

export default function AboutUs() {
  return (
    <section className='about-us' id='idea'>
      <Container>
        <div className='about-us__content'>
          <MainInfo />
          <OurBenefits />
          <SecondaryInfo />
        </div>
      </Container>
      <div className='test'></div>
    </section>
  )
}
