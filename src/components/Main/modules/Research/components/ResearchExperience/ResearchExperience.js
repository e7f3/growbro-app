import './ResearchExperience.scss'

import React from 'react'
import ResearchTotal from '../ResearchTotal/ResearchTotal'

export default function ResearchExperience({ shareTitle, shareText }) {
  return (
    <div className='research-experience' id='results'>
      <div className='research-experience__share-experience'>
        <div className='research-experience__share-experience-title'>
          <h3 className='title title--h3'>{shareTitle}</h3>
        </div>
        <div className='research-experience__share-experience-text'>
          <span className='paragraph paragraph--small'>{shareText}</span>
        </div>
      </div>
      <div className='research-experience__total'>
        <ResearchTotal />
      </div>
    </div>
  )
}
