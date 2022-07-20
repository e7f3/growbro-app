import './SecondaryInfo.scss'

import React from 'react'
import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function SecondaryInfo() {
  const { data } = useDataContext()
  const { info: infoTextsArray } = data.main.about
  return (
    <div className='secondary-info'>
      <div className='secondary-info__content'>
        {infoTextsArray.map((infoText, index) => {
          const { type, text } = infoText
          return (
            <div className='secondary-info__info-text' key={index}>
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
    </div>
  )
}
