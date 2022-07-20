import './ParticipateButton.scss'

import React from 'react'

export default function ParticipateButton({ buttonText = '', to = '' }) {
  return (
    <button className='participate-button'>
      <a className='participate-button__link' href={`#${to}`}>{buttonText}</a>
    </button>
  )
}
