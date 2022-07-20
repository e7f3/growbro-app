import './InfoText.scss'

import React from 'react'

export default function InfoText({ textArray }) {
  return (
    <div className='info-text'>
      {textArray.map((textObj, index) => {
        const { type, text } = textObj
        switch (type) {
          case 'subtitle':
            return (
              <h3 className='title title--h3 info-text__subtitle' key={index}>
                {text}
              </h3>
            )
          default:
            return (
              <span className='paragraph paragraph--small' key={index}>
                {text}
              </span>
            )
        }
      })}
    </div>
  )
}
