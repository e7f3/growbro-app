import './Idea.scss'

import React from 'react'

import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function Idea() {
  const { data } = useDataContext()
  const { title: titleText, text: textsArray } = data.main.idea

  return (
    <div className='idea' id='idea'>
      <div className='idea__content'>
        <div className='idea__title-wrapper'>
          <h1 className='idea__title title title--h1'>{titleText}</h1>
        </div>
        <div className='layout idea__info-text-wrapper'>
          {textsArray.map((paragraph, index) => {
            const { type, text } = paragraph
            return (
              <div className='idea__info-text' key={index}>
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
    </div>
  )
}
