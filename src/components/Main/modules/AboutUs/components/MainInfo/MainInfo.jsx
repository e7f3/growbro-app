import './MainInfo.scss'

import React from 'react'

import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function MainInfo() {
  const { data } = useDataContext()
  const { title: titleText, text: textsArray } = data.main.idea

  return (
    <div className='main-info'>
      <div className='main-info__title-wrapper'>
        <h1 className='main-info__title title title--h1'>{titleText}</h1>
      </div>
      <div className='layout main-info__info-text-wrapper'>
        {textsArray.map((paragraph, index) => {
          const { type, text } = paragraph
          return (
            <div className='main-info__info-text' key={index}>
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
