import './ResearchSteps.scss'

import React from 'react'

export default function ResearchSteps({ researchSteps = [] }) {
  return (
    <div className='research-steps'>
      <ul className='research-steps__list'>
        {researchSteps.map((step, index) => {
          const { title, text } = step
          return (
            <li className='research-steps__step' key={index}>
              <div className='research-steps__step-content'>
                <div className='reseatch-steps__step-title'>
                  <h3 className='title title--h3'>{title}</h3>
                </div>
                <div className='research-steps__step-text'>
                  {text.map((textPart, index) => {
                    const { type, text } = textPart
                    return (
                      <span
                        className={
                          type === 'bold'
                            ? 'paragraph paragraph--small paragraph--bold'
                            : 'paragraph paragraph--small'
                        }
                        key={index}
                      >
                        {text}
                      </span>
                    )
                  })}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
