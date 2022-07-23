import './MainBanner.scss'

import React from 'react'
import Container from '../../../Container/Container'
import { useDataContext } from '../../../../hooks/useDataContext'
import Logo from '../../../Logo/Logo'
import ParticipateButton from './components/ParticipateButton/ParticipateButton'

export default function MainBanner() {
  const { data } = useDataContext()
  const { text: bannerText } = data.main.banner
  const {
    participate: { text: buttonText, to },
  } = data.general.buttons

  return (
    <section className='main-banner'>
      
      <Container>
        <div className='main-banner__content'>
          <div className='main-banner__logo'>
            <Logo type='alt-large' />
          </div>
          <div className='main-banner__text paragraph paragraph--medium'>
            {bannerText}
          </div>
          <div className='main-banner__button-wrapper'>
            <ParticipateButton buttonText={buttonText} to={to} />
          </div>
        </div>
      </Container>
    </section>
  )
}
