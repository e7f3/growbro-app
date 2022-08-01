import './AboutUs.scss'

import React from 'react'
import Container from '../../../Container/Container'
import Idea from './components/Idea/Idea'
import OurBenefits from './components/OurBenefits/OurBenefits'
import Info from './components/Info/Info'

export default function AboutUs() {
  return (
    <section className='about-us'>
      <Container>
        <div className='about-us__content'>
          <Idea />
          <OurBenefits />
          <Info />
        </div>
      </Container>
    </section>
  )
}
