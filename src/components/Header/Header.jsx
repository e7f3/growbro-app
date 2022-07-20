import './Header.scss'

import React from 'react'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import HeaderNavigation from './modules/HeaderNavigation/HeaderNavigation'

export default function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header__content'>
          <div className='header__logo'>
            <Logo type='main' />
          </div>
          <div className='header__navigation'>
            <HeaderNavigation />
          </div>
        </div>
      </Container>
    </header>
  )
}
