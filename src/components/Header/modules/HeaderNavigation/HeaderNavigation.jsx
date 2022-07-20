import './HeaderNavigation.scss'

import React from 'react'
import { useDataContext } from '../../../../hooks/useDataContext'

export default function HeaderNavigation() {
  const {
    data: {
      header: { menu: navigationLinkTexts },
    },
  } = useDataContext()

  return (
    <nav className='header-navigation'>
      {navigationLinkTexts.map((navigationLink, index) => {
        const { to, text } = navigationLink
        return (
          <div className='header-navigation__link-wrapper' key={index}>
            <a href={`#${to}`} className='header-navigation__link'>
              {text}
            </a>
          </div>
        )
      })}
    </nav>
  )
}
