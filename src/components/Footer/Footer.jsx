import './Footer.scss'

import React from 'react'
import { useDataContext } from '../../hooks/useDataContext'
import Container from '../Container/Container'
import TelegramIcon from '../icons/Telegram/TelegramIcon'
import ContactUsForm from './components/ContactUsForm/ContactUsForm'
import InfoText from './components/InfoText/InfoText'
import Logo from '../Logo/Logo'

export default function Footer() {
  const { data } = useDataContext()
  const {
    title: titleText,
    text: textArray,
    contact: { text: contactsText },
  } = data.footer
  const { telegram: telegramLinkText } = data.general.buttons
  const {
    header: { menu: navigationLinkTexts },
  } = data
  return (
    <footer className='footer'>
      <Container>
        <div className='footer__content'>
          <div className='footer__title'>
            <h1 className='title title--h1'>{titleText}</h1>
          </div>
          <div className='footer__contacts' id='contact'>
            <div className='footer__telegram-link'>
              <TelegramIcon className='footer__telegram-icon' />
              <span className='paragraph paragraph--medium paragraph--bold'>
                {telegramLinkText}
              </span>
            </div>
            <span className='paragraph paragraph--small'>{contactsText}</span>
            <ContactUsForm />
          </div>
          <InfoText textArray={textArray} />
          <div className='footer__logos'>
            <Logo type='main-white' />
            <Logo type='alt' />
          </div>
          <nav className='footer__navigation'>
            {navigationLinkTexts.map((navigationLink, index) => {
              const { to, text } = navigationLink
              return (
                <div className='footer__navigation-link-wrapper' key={index}>
                  <a href={`#${to}`} className='footer__navigation-link'>
                    {text}
                  </a>
                </div>
              )
            })}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
