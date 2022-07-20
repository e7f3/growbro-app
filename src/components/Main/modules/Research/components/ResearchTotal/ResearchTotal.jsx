import './ResearchTotal.scss'

import React from 'react'
import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function ResearchTotal() {
  const { data } = useDataContext()
  const { title: totalTitle, text: totalTextsArray } = data.main.research.total

  return (
    <div className='research-total'>
      <div className='research-total__title'>
        <h1 className='title title--h1'>{totalTitle}</h1>
      </div>
      <div className='research-total__text-wrapper'>
        {totalTextsArray.map((textObj, index) => {
          const { type, text } = textObj
          switch (type) {
            case 'subtitle':
              return (
                <div className='research-total__text-title' key={index}>
                  <h3 className='title title--h3'>{text}</h3>
                </div>
              )
            case 'bold':
              return (
                <span
                  className='paragraph paragraph--small paragraph--bold'
                  key={index}
                >
                  {text}
                </span>
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
    </div>
  )
}
