import './Logo.scss'

import React from 'react'
import { useLogo } from './hooks/useLogo'
import LogoLeaves from '../icons/LogoLeaves/LogoLeaves'

export default function Logo({ type }) {
  const { className, logoData, isAlt, isLarge, isCropped, isFillTransparent } =
    useLogo(type)
  return (
    <div className={className}>
      <div className='logo__text'>
        <span className='logo__main-text'>{logoData.title}</span>
        {!isAlt && (
          <span className='logo__subtitle-text'>{logoData.subtitle}</span>
        )}
      </div>
      {!isCropped && (
        <div className='logo__icon-wrapper'>
          <LogoLeaves
            borderOnly={isAlt}
            isLarge={isLarge}
            isFillTransparent={isFillTransparent}
          />
          {isAlt && (
            <span className='logo__icon-text'>{logoData.subtitle}</span>
          )}
        </div>
      )}
    </div>
  )
}
