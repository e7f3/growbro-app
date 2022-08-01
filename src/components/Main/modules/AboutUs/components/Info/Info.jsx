import './Info.scss'

import React from 'react'
import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function Info() {
  const { data } = useDataContext()
  const { info: infoTextsArray } = data.main.about
  return (
    <div className='info'>
      <div className='info__content'>
        {infoTextsArray.map((infoText, index) => {
          const { type, text } = infoText
          return (
            <div className='info__info-text' key={index}>
              <span
                className={
                  type === 'subtitle'
                    ? 'title title--h3'
                    : 'paragraph paragraph--small'
                }
              >
                {text}
              </span>
            </div>
          )
        })}
      </div>
      <div className='info__bottom-img-wrapper'>
        <div className='info__bottom-img' />
      </div>
    </div>
  )
}
